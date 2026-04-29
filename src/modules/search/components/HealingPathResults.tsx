import { useNavigate } from "react-router-dom";
import type { HealingPath } from "@/services/supabase/healingPathService";

interface Props {
  healingPaths: HealingPath[];
}

const HealingPathResults = ({ healingPaths }: Props) => {
  const navigate = useNavigate();

  if (healingPaths.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Healing Paths</h2>

      <div className="space-y-3">
        {healingPaths.map((path) => (
          <div
            key={path.id}
            onClick={() => navigate(`/healing-path/${path.slug}`)}
            className="p-4 border rounded-md cursor-pointer hover:bg-gray-50"
          >
            <h3 className="font-medium">{path.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {path.description}
            </p>
            {path.matchReason && (
              <p className="text-xs text-green-600 mt-1">{path.matchReason}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealingPathResults;
