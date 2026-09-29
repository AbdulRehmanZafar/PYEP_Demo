const goalPillars = ["Opportunities", "Skills", "Awareness", "Platforms"];

export default function Goal() {
  return (
    <section className="py-24">
      <div className="section-wrap">
        <div className="eyebrow">Our Goal</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          From opportunity to active participation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-6">
          <p className="text-sub text-lg max-w-xl">
            To empower students and young people by providing them with meaningful
            opportunities, skills, awareness, and platforms to become active participants
            and contributors to the betterment of society.
          </p>
          <div className="grid grid-cols-2 gap-3.5">
            {goalPillars.map((g) => (
              <div key={g} className="bg-white border border-border rounded-2xl p-7 font-bold">
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
