import { sdgs } from "../data/sdgs";

export default function SDGSection() {
  return (
    <section id="sdgs" className="py-24">
      <div className="section-wrap">
        <div className="eyebrow">Impact</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Creating impact through the Sustainable Development Goals
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-9">
          {sdgs.map((s) => (
            <div key={s.num} className="bg-white border border-border border-l-4 border-l-green rounded-2xl p-7">
              <div className="text-2xl font-extrabold text-green mb-1.5">{s.num}</div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sub text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
