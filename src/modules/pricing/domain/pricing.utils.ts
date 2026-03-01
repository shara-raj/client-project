export function formatCurrency(
  amountInMinorUnit: number,
  currency: "INR" | "USD",
) {
  const amount = amountInMinorUnit / 100;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
