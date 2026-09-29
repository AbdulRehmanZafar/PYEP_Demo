import maryam from "../assets/images/maryam-nawaz.jpg";
import rana from "../assets/images/rana-sikandar-hayat.jpg";
import LeadershipImage from "./LeadershipImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 pb-10 overflow-hidden"
      style={{ background: "radial-gradient(1200px 500px at 80% -10%, #EAF7EF, transparent)" }}
    >
      <div className="section-wrap grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <div className="eyebrow">Punjab Youth Empowerment Program</div>
          <h1 className="text-[2.3rem] md:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight">
            Empowering Punjab's youth to lead, innovate and create change
          </h1>
          <p className="text-sub text-lg max-w-xl mt-4">
            Under the leadership of the Government of Punjab, PYEP builds skills,
            confidence, leadership and entrepreneurship in young people across the
            province — turning potential into meaningful participation in their
            communities.
          </p>
          <div className="flex gap-3.5 mt-7 flex-wrap">
            <a href="#programs" className="btn btn-primary">Explore Programs</a>
            <a href="#contact" className="btn btn-ghost">Get Involved</a>
          </div>
        </div>

        <div className="relative pt-4 pr-4">
          <div className="grid grid-cols-2 gap-3.5">
            <LeadershipImage name="Maryam Nawaz" title="Chief Minister of Punjab" src={maryam} size="lg" />
            <LeadershipImage name="Rana Sikandar Hayat" title="Punjab Education Minister" src={rana} size="lg" />
          </div>

          <div className="hidden sm:block absolute -top-4 -left-4 bg-white border border-border rounded-2xl px-4 py-3 shadow-[0_12px_28px_rgba(23,32,25,0.1)] font-bold text-sm">
            200+
            <small className="block font-medium text-sub text-xs">Trees Planted</small>
          </div>
          <div className="hidden sm:block absolute -bottom-4 -right-2 bg-white border border-border rounded-2xl px-4 py-3 shadow-[0_12px_28px_rgba(23,32,25,0.1)] font-bold text-sm">
            10,000
            <small className="block font-medium text-sub text-xs">Tree Goal</small>
          </div>
        </div>
      </div>
    </section>
  );
}
