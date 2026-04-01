import { useState } from "react";
import { Modal } from "@/shared/components/ui/Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
  title: string;
};

export const FeedbackModal = ({ isOpen, onClose, onSubmit, title }: Props) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!feedback.trim()) return;
    onSubmit(feedback);
    setFeedback("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter feedback..."
        className="w-full border border-main rounded-md p-2 text-sm mb-4"
        rows={4}
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm bg-soft rounded-md"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm btn-prime rounded-md"
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};
