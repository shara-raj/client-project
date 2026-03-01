import type { SubscribeInput } from "./newsletter.types";

export async function subscribeToNewsletter(
  input: SubscribeInput,
): Promise<{ success: boolean }> {
  // TEMPORARY MOCK
  console.log("Subscribing:", input);

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 800);
  });
}
