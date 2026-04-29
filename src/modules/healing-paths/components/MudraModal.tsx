import type { Mudra } from "../types/healing.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  mudra: Mudra | null;
}

export default function MudraModal({ isOpen, onClose, mudra }: Props) {
  if (!isOpen || !mudra) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 rounded-full px-1  text-gray-500 hover:text-black hover:bg-gray-300 "
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={mudra.image}
          alt={mudra.title}
          className="w-full  object-cover rounded-lg mb-4"
        />

        {/* CONDITIONS */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold mb-1">Conditions</h2>
          <div className="text-sm text-gray-600">
            {mudra.conditions?.length > 0
              ? mudra.conditions.join(", ")
              : "General"}
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mb-3">
          <h2 className="text-lg font-semibold mb-1">Instructions</h2>
          <div className="text-base whitespace-pre-line leading-relaxed space-y-2">
            {mudra.instructions.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        {mudra.benefits && (
          <div>
            <h2 className="text-lg font-semibold mb-1">Benefits</h2>
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {mudra.benefits}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
