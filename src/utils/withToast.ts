import { toast } from "react-hot-toast";

type ToastMessages = {
  loading?: string;
  success?: string;
  error?: string;
};

export async function withToast<T>(
  asyncFn: () => Promise<T>,
  messages: ToastMessages,
): Promise<T> {
  let toastId: string | undefined;

  //Show loading toast (optional)
  if (messages.loading) {
    toastId = toast.loading(messages.loading);
  }

  try {
    const result = await asyncFn();

    // Replace loading → success (prevents duplicates)
    if (toastId) {
      toast.success(messages.success || "Success", { id: toastId });
    } else if (messages.success) {
      toast.success(messages.success);
    }

    return result;
  } catch (error) {
    // Replace loading → error (prevents duplicates)
    if (toastId) {
      toast.error(messages.error || "Something went wrong", {
        id: toastId,
      });
    } else if (messages.error) {
      toast.error(messages.error);
    }

    throw error;
  }
}
