import type { ReactNode } from "react";

interface AdminTableProps {
  headers: string[];
  children: ReactNode;
}

export default function AdminTable({ headers, children }: AdminTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="border-b bg-neutral-50">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-medium text-neutral-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">{children}</tbody>
      </table>
    </div>
  );
}
