import { photos } from "../data/photos";

const phases = [
  {
    label: "Phase 01",
    title: "Awareness",
    description: "Introduce young people to entrepreneurship, opportunities and possibilities.",
  },
  {
    label: "Phase 02",
    title: "Training",
    description: "Develop relevant knowledge, practical skills and confidence.",
  },
  {
    label: "Phase 03",
    title: "Empowerment & Support",
    description: "Move from learning toward meaningful participation and opportunity.",
  },
];

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="py-24">
      <div className="section-wrap">
        <div className="bg-ink text-white rounded-[28px] p-8 md:p-16">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="text-fresh font-bold text-sm mb-2.5">Entrepreneurship Initiative</div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                From awareness to training to empowerment
              </h2>
              <p className="text-white/70 text-lg max-w-xl mt-4">
                Three connected phases guide young people from first exposure to
                entrepreneurial thinking toward real, supported participation.
              </p>
              <a href="#contact" className="btn btn-primary mt-7 hidden md:inline-flex">
                Explore Entrepreneurship Initiative
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <img
                src={photos.teamBrainstorm}
                alt="A team of young people brainstorming around a table during a training session"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-0 mt-12">
            {phases.map((p) => (
              <div key={p.label} className="md:px-5">
                <div className="text-fresh font-extrabold text-sm mb-2.5">{p.label}</div>
                <h3 className="text-white text-xl font-bold mb-2">{p.title}</h3>
                <div className="h-[3px] bg-fresh rounded-full my-4.5" />
                <p className="text-white/65 text-[0.92rem]">{p.description}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary mt-10 md:hidden">
            Explore Entrepreneurship Initiative
          </a>
        </div>
      </div>
    </section>
  );
}
