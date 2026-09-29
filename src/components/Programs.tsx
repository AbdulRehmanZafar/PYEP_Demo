import { programs } from "../data/programs";
import { photos } from "../data/photos";

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="section-wrap">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 items-end">
          <div>
            <div className="eyebrow">Our Programs</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Areas of youth development
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border aspect-[16/7]">
            <img
              src={photos.workshopDiscussion}
              alt="Young professionals in a workshop-style discussion"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-9">
          {programs.map((p) => (
            <div key={p.num} className="bg-white border border-border rounded-2xl p-7">
              <div className="w-11 h-11 rounded-[10px] bg-soft text-deep flex items-center justify-center font-extrabold mb-3.5">
                {p.num}
              </div>
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sub text-sm">{p.description}</p>
              <a href="#" className="text-green font-bold text-sm mt-3 inline-block">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
