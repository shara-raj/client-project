import type { InputHTMLAttributes } from "react";

export default function AdminSearchInput(
  props: InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      className="w-full md:w-64 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300"
    />
  );
}
