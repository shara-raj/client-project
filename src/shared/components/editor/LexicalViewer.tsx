import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useEffect } from "react";
import { $getRoot } from "lexical";

type Props = {
  content: any;
};

function ReadOnlyPlugin({ content }: Props) {
  return null;
}

export const LexicalViewer = ({ content }: Props) => {
  const initialConfig = {
    namespace: "Viewer",
    editable: false,
    onError(error: any) {
      console.error(error);
    },
    editorState: JSON.stringify(content),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border border-main rounded-lg p-4 bg-card">
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none" />}
          placeholder={null}
        />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
};
