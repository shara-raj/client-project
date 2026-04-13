type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
};

const Pagination = ({
  page,
  totalPages,
  onPageChange,
  onNext,
  onPrev,
}: Props) => {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Prev
      </button>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(p as number)}
            className={`px-3 py-1 text-xs rounded ${
              page === p ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
