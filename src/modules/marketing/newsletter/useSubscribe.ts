import { useState } from "react";
import { subscribeToNewsletter } from "../../../services/newsletter/newsletter.service";
import type { NewsletterSource } from "../../../services/newsletter/newsletter.types";

export function useSubscribe(source: NewsletterSource) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubscribe(email: string) {
    try {
      setLoading(true);
      setError(null);

      const result = await subscribeToNewsletter({
        email,
        source,
      });

      if (result.success) {
        setSuccess(true);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    success,
    error,
    handleSubscribe,
  };
}
