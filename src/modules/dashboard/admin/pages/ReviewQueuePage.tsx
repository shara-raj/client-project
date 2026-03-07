import ReviewQueueTable from "../components/ReviewQueueTable";
import { useReviewQueue } from "../hooks/useReviewQueue";

const ReviewQueuePage = () => {
  const { posts, loading, approve, reject } = useReviewQueue();

  return (
    <div className="dashboard-theme p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Queue</h1>

      <ReviewQueueTable
        posts={posts}
        loading={loading}
        onApprove={approve}
        onReject={(id) => {
          const feedback = prompt("Enter rejection feedback");

          if (feedback) {
            reject(id, feedback);
          }
        }}
      />
    </div>
  );
};

export default ReviewQueuePage;
