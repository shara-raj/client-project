import { useParams, useNavigate, useLocation } from "react-router-dom";
import { usePostReview } from "../hooks/usePostReview";
import { ArrowLeftCircle } from "lucide-react";
import { LexicalViewer } from "@/shared/components/editor/LexicalViewer";

export default function AdminPostViewPage() {
  const { id } = useParams();
  const { post, loading } = usePostReview(id);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.state?.from === "review-queue") {
      navigate("/admin/review");
    } else {
      navigate("/admin/posts");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <div className="dashboard-theme p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <ArrowLeftCircle size={26} />
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-main">{post.title}</h1>

      {/* Featured Image */}
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover rounded-lg"
        />
      )}

      {/* Metadata */}
      <div className="text-sm text-sub space-y-1">
        <p>Status: {post.status}</p>
        <p>Created: {new Date(post.created_at).toLocaleDateString()}</p>
      </div>

      {/* Feedback */}
      {post.feedback && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          <strong>Feedback:</strong>
          <p>{post.feedback}</p>
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none text-main">
        <LexicalViewer content={post.content} />
      </div>
    </div>
  );
}
