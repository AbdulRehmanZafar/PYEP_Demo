import { photos } from "../data/photos";

const chips = ["Skills", "Leadership", "Opportunity", "Participation"];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-wrap grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="eyebrow">About the Program</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Building a more empowered generation
          </h2>
          <p className="text-sub text-lg max-w-xl mt-4">
            PYEP creates awareness, builds skills and opens platforms so young people across
            Punjab can participate actively in their communities — developing leadership,
            confidence and social responsibility along the way.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6">
            {chips.map((c) => (
              <div key={c} className="bg-pale border border-border rounded-xl p-4 font-bold text-sm">
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3.5">
          <div className="rounded-2xl overflow-hidden border border-border shadow-[0_16px_36px_rgba(23,32,25,0.1)] aspect-[3/4] self-end">
            <img
              src={photos.campusWalk}
              alt="Students walking together on campus, deep in conversation"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-[0_16px_36px_rgba(23,32,25,0.1)] aspect-[3/4] mt-10">
            <img
              src={photos.libraryStudy}
              alt="A small group of students studying together at a table"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
