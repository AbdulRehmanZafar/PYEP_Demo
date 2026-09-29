import { photos } from "../data/photos";

const actions = ["Learn", "Lead", "Create", "Collaborate", "Contribute"];

export function YouthCTA() {
  return (
    <section className="py-24">
      <div className="section-wrap">
        <div className="relative rounded-[28px] overflow-hidden">
          <img
            src={photos.campusSteps}
            alt="Students on a sunlit university staircase"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/10" />
          <div className="relative p-8 md:p-14">
            <div className="text-fresh font-bold text-sm mb-2.5">For Young People</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-xl">
              Your potential can create change
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mt-8">
              {actions.map((a) => (
                <div
                  key={a}
                  className="bg-white/12 backdrop-blur border border-white/20 rounded-2xl p-6 text-center font-bold text-white"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="section-wrap">
        <div className="bg-gradient-to-br from-green to-deep text-white rounded-[26px] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Let's take action together
          </h2>
          <p className="text-white/85 max-w-lg mx-auto mt-3.5">
            Join young people across Punjab learning, leading, collaborating and
            contributing to their communities.
          </p>
          <div className="flex gap-3.5 mt-7 justify-center flex-wrap">
            <a href="#" className="btn bg-white text-deep">Get Involved</a>
            <a
              href="#initiatives"
              className="btn border-[1.5px] border-white/50 text-white"
            >
              Explore Initiatives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
