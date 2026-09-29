import { objectives } from "../data/objectives";

export default function Objectives() {
  return (
    <section id="objectives" className="py-24">
      <div className="section-wrap">
        <div className="eyebrow">From Vision to Action</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Objectives that turn the vision into action
        </h2>
        <div className="border-t border-border mt-9">
          {objectives.map((o) => (
            <div
              key={o.num}
              className="grid grid-cols-[56px_1fr] md:grid-cols-[70px_1fr] gap-6 py-6 border-b border-border"
            >
              <div className="text-2xl font-extrabold text-fresh">{o.num}</div>
              <div>
                <h3 className="text-lg font-bold mb-1">{o.title}</h3>
                <p className="text-sub text-sm">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
