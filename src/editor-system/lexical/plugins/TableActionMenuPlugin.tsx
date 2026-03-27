import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { TableNode } from "@lexical/table";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function TableActionMenuPlugin() {
  const [editor] = useLexicalComposerContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());

  useEffect(() => {
    return editor.registerEditableListener((editable) => {
      setIsEditable(editable);
    });
  }, [editor]);

  if (!isEditable) return null;

  const updateMenu = useCallback(() => {
    const rootElement = editor.getRootElement();
    if (
      document.activeElement !== rootElement &&
      !rootElement?.contains(document.activeElement)
    ) {
      setPos(null);
      return;
    }

    editor.getEditorState().read(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const tableNode = $getNearestNodeOfType(anchorNode, TableNode);

        if (tableNode) {
          const tableElement = editor.getElementByKey(tableNode.getKey());
          if (tableElement) {
            const rect = tableElement.getBoundingClientRect();
            // Adjust coordinates based on scroll position
            setPos({
              top: rect.top + window.scrollY - 15, // Slightly above the table
              left: rect.right + window.scrollX - 15, // At the top right corner
            });
            return;
          }
        }
      }
      // If no table is selected or selection is lost, hide the menu
      setPos(null);
    });
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(() => updateMenu()),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateMenu();
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor, updateMenu]);

  const onDelete = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const tableNode = $getNearestNodeOfType(
          selection.anchor.getNode(),
          TableNode,
        );
        if (tableNode) tableNode.remove();
      }
    });
  };

  if (!pos) return null;

  return createPortal(
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        zIndex: 50,
      }}
    >
      <button
        onClick={onDelete}
        className="bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors border-2 border-white"
        title="Delete Table"
      >
        <X size={14} />
      </button>
    </div>,
    document.body,
  );
}
