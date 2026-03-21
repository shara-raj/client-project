import toast from "react-hot-toast";
import ReviewQueueTable from "../components/ReviewQueueTable";
import { useReviewQueue } from "../hooks/useReviewQueue";

const ReviewQueuePage = () => {
  const { posts, loading, approve, reject } = useReviewQueue();

  //Approve post
  const handleApprove = async (id: string) => {
    try {
      await approve(id);
      toast.success("Post approved");
    } catch (error: any) {
      toast.error(error.message || "Failed to approve post");
    }
  };

  //Reject post with feedback
  const handleReject = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this post?",
    );

    if (!confirmed) return;

    const feedback = prompt("Optional: Add feedback for the editor") || "";

    try {
      await reject(id, feedback);
      toast.success("Post rejected");
    } catch (error: any) {
      toast.error(error.message || "Failed to reject post");
    }
  };

  return (
    <div className="dashboard-theme p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Queue</h1>

      <ReviewQueueTable
        posts={posts}
        loading={loading}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default ReviewQueuePage;
