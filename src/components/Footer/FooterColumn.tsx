import { Link } from "react-router-dom";
import type { FooterColumn as FooterColumnType } from "./footer.types";

interface FooterColumnProps {
  column: FooterColumnType;
}

function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium text-neutral-900">
        {column.title}
      </h3>

      <ul className="space-y-2">
        {column.links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-600 transition hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-base text-neutral-600 transition hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
