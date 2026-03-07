type Props = {
  posts: any[];
  loading: boolean;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
};

const ReviewQueueTable = ({ posts, loading, onApprove, onReject }: Props) => {
  if (loading) {
    return (
      <div className="card p-6 animate-pulse">Loading review queue...</div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-card-header text-white">
          <tr>
            <th className="p-4">Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-main">
              <td className="p-4">{post.title}</td>

              <td>{post.users?.name}</td>

              <td>{new Date(post.created_at).toLocaleDateString()}</td>

              <td className="space-x-2">
                <button
                  onClick={() => onApprove(post.id)}
                  className="btn-prime px-3 py-1 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => onReject(post.id)}
                  className="btn-secondary px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewQueueTable;
