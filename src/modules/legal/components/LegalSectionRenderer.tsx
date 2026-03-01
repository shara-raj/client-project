import type { LegalSection } from "../content/legal.types";

interface Props {
  sections: LegalSection[];
}

const LegalSectionRenderer = ({ sections }: Props) => {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.id} className="space-y-4">
          {section.heading && (
            <h2 className="text-2xl font-semibold text-foreground">
              {section.heading}
            </h2>
          )}

          {section.blocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="leading-relaxed text-muted-foreground"
                >
                  {block.content}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default LegalSectionRenderer;
