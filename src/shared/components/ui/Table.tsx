type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children }: TableProps) => {
  return <thead className="bg-soft text-main">{children}</thead>;
};

export const TableHeaderCell = ({ children }: TableProps) => {
  return (
    <th className="px-4 py-3 font-semibold text-sm border-b border-main">
      {children}
    </th>
  );
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: TableProps) => {
  return (
    <tr className="border-b border-main hover-soft transition-colors">
      {children}
    </tr>
  );
};

export const TableCell = ({ children }: TableProps) => {
  return <td className="px-4 py-3 text-sub">{children}</td>;
};
