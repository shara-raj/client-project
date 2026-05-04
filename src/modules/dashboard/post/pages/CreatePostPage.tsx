import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Editor from "@/editor-system/lexical/Editor";
import { usePostEditor } from "../hooks/usePostEditor";
import { useAutosaveDraft } from "../hooks/useAutosaveDraft";
import { loadDraftBackup, clearDraftBackup } from "../utils/draftRecovery";

import PostFeaturedImage from "../components/PostFeaturedImage";
import PostTagsInput from "../components/PostTagsInput";
import PostSEOFields from "../components/PostSEOFields";
import PostCategorySelect from "../components/PostCategorySelect";
import PostPreviewModal from "../components/PostPreviewModal";

import { useAuth } from "@/modules/auth";
import { useUserRole } from "@/modules/auth/hooks/useUserRole";
import { useCategories } from "@/modules/blog/hooks/useCategories";
import { getDashboardRouteByRole } from "@/modules/auth/utils/roleRedirect";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { saveDraft, updateDraft, publish, loading } = usePostEditor();

  const { categories } = useCategories();
  const auth = useAuth();
  const user = auth?.user;
  const authorId = user?.id;

  const { role, loading: roleLoading } = useUserRole();

  const [title, setTitle] = useState("");
  const [contentState, setContentState] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState("");

  const [, _setPostId] = useState<string | null>(null);
  const postIdRef = useRef<string | null>(null);

  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [tags, setTags] = useState<string[]>([]);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");

  const [previewOpen, setPreviewOpen] = useState(false);
  const [postType] = useState<"normal" | "featured">("normal");

  const isSavingRef = useRef(false);
  const isPublishingRef = useRef(false);

  const categoryName = categories.find((c) => c.id === categoryId)?.name;

  const setPostId = (id: string | null) => {
    postIdRef.current = id;
    _setPostId(id);
  };

  const generateSlug = (value: string) => {
    return `${value
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")}-${Date.now()}`;
  };

  // ---------------- SAVE ----------------
  const handleSave = async () => {
    if (!authorId) return;

    if (isSavingRef.current || isPublishingRef.current) return;

    isSavingRef.current = true;

    try {
      if (!postIdRef.current) {
        const post = await saveDraft(title, contentState, authorId, slug, {
          post_type: postType,
          featured_image: featuredImage || undefined,
          tags,
          meta_title: metaTitle,
          meta_description: metaDescription,
          category_id: categoryId,
        });

        if (post?.id) setPostId(post.id);
      } else {
        await updateDraft(postIdRef.current, {
          title,
          content: contentState,
          slug,
          post_type: postType,
          featured_image: featuredImage || undefined,
          tags,
          meta_title: metaTitle,
          meta_description: metaDescription,
          category_id: categoryId,
        });
      }

      toast.success("Draft saved");
    } catch (err) {
      toast.error("Save failed");
    } finally {
      isSavingRef.current = false;
    }
  };

  // ---------------- PUBLISH ----------------
  const handlePublish = async () => {
    if (!authorId) return;

    if (isPublishingRef.current) return;

    isPublishingRef.current = true;

    try {
      let currentPostId = postIdRef.current;

      if (!currentPostId) {
        const post = await saveDraft(title, contentState, authorId, slug, {
          post_type: postType,
          featured_image: featuredImage || undefined,
          tags,
          meta_title: metaTitle,
          meta_description: metaDescription,
          category_id: categoryId,
        });

        if (post?.id) {
          setPostId(post.id);
          currentPostId = post.id;
        }
      }

      if (!currentPostId) return;

      await publish(currentPostId);

      toast.success("Post published");

      if (!roleLoading && role) {
        const redirect = getDashboardRouteByRole(role);
        if (redirect) navigate(redirect);
      }
    } catch {
      toast.error("Publish failed");
    } finally {
      isPublishingRef.current = false;
    }
  };

  // ---------------- AUTOSAVE ----------------
  const autosave = async () => {
    if (
      !authorId ||
      (!title && !contentState) ||
      isSavingRef.current ||
      isPublishingRef.current ||
      loading
    )
      return;

    try {
      isSavingRef.current = true;

      if (!postIdRef.current) {
        const post = await saveDraft(title, contentState, authorId, slug);
        if (post?.id) setPostId(post.id);
      } else {
        await updateDraft(postIdRef.current, {
          title,
          content: contentState,
        });
      }
    } catch (err) {
      console.error("Autosave failed:", err);
    } finally {
      isSavingRef.current = false;
    }
  };

  const { triggerSave, status } = useAutosaveDraft(autosave, 8000);

  // ---------------- RESTORE DRAFT ----------------
  useEffect(() => {
    const backup = loadDraftBackup();
    if (!backup) return;

    const restore = confirm("Restore previous draft?");
    if (restore) {
      setTitle(backup.title || "");
      setContentState(backup.content || "");
      setPreviewHtml(backup.html || "");
    }

    clearDraftBackup();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1>Create Post</h1>

        <div className="flex gap-3">
          <span>{status}</span>

          <button onClick={handleSave} disabled={loading}>
            Save Draft
          </button>

          <button onClick={handlePublish} disabled={loading}>
            Publish
          </button>
        </div>
      </div>

      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (!slug) setSlug(generateSlug(e.target.value));
        }}
        placeholder="Title"
      />

      <Editor
        onChange={(_, html) => {
          setContentState(html);
          setPreviewHtml(html);
          triggerSave();
        }}
      />

      <PostFeaturedImage
        value={featuredImage || undefined}
        onChange={setFeaturedImage}
      />
      <PostCategorySelect value={categoryId} onChange={setCategoryId} />
      <PostTagsInput value={tags} onChange={setTags} />

      <PostSEOFields
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        slug={slug}
        onMetaTitleChange={setMetaTitle}
        onMetaDescriptionChange={setMetaDescription}
        onSlugChange={setSlug}
      />

      <PostPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={title}
        featuredImage={featuredImage}
        categoryName={categoryName || ""}
        tags={tags}
        content={previewHtml}
      />
    </div>
  );
};

export default CreatePostPage;
