export default function BillingDetailsBlock() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-medium">Billing Details</h4>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-neutral-600">Payment method</p>
          <p className="mt-1 text-base font-medium">—</p>
        </div>

        <div>
          <p className="text-sm text-neutral-600">Billing email</p>
          <p className="mt-1 text-base font-medium">—</p>
        </div>
      </div>
    </section>
  );
}
