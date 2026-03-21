import React, { useState } from "react";
import toast from "react-hot-toast";
import { withToast } from "@/utils/withToast";

interface Props {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postId: string, reason: string) => Promise<void>;
}

const DeletionRequestModal: React.FC<Props> = ({
  postId,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!reason.trim()) {
      toast.error("Please enter a reason");
      return;
    }

    if (submitting) return;

    setSubmitting(true);

    try {
      await withToast(() => onSubmit(postId, reason), {
        loading: "Submitting request...",
        success: "Deletion request sent",
        error: "Request failed",
      });

      setReason("");
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="card w-[420px] p-6 space-y-4">
        <h2 className="text-lg font-semibold text-main">
          Request Post Deletion
        </h2>

        <textarea
          className="w-full border-main p-2 rounded"
          placeholder="Reason for deletion..."
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="btn-secondary px-3 py-1 rounded text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="btn-prime px-3 py-1 rounded"
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionRequestModal;
