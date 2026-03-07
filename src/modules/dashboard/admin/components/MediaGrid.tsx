type Props = {
  media: any[];
  loading: boolean;
  onDelete: (id: string, url: string) => void;
};

const MediaGrid = ({ media, loading, onDelete }: Props) => {
  if (loading) {
    return <div className="card p-6 animate-pulse">Loading media...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {media.map((item) => (
        <div key={item.id} className="card p-2 space-y-2">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-32 object-cover rounded"
          />

          <div className="text-sm text-sub">{item.title}</div>

          <button
            onClick={() => onDelete(item.id, item.url)}
            className="btn-secondary text-sm px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
