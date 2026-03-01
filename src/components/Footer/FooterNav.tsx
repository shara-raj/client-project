import FooterColumn from "./FooterColumn";
import type { FooterColumn as FooterColumnType } from "./footer.types";

interface FooterNavProps {
  columns: FooterColumnType[];
}

function FooterNav({ columns }: FooterNavProps) {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {columns.map((column) => (
        <FooterColumn key={column.id} column={column} />
      ))}
    </nav>
  );
}

export default FooterNav;
