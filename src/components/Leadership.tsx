import maryam from "../assets/images/maryam-nawaz.jpg";
import rana from "../assets/images/rana-sikandar-hayat.jpg";
import LeadershipImage from "./LeadershipImage";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-pale">
      <div className="section-wrap">
        <div className="eyebrow">Institutional Leadership</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl">
          Championed at the highest level of Government of Punjab
        </h2>
        <p className="text-sub text-lg max-w-xl mt-4">
          PYEP is driven forward with the support of Punjab's leadership — giving young
          people across the province a direct line from vision to real opportunity.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 mt-10 max-w-2xl">
          <LeadershipImage name="Maryam Nawaz" title="Chief Minister of Punjab" src={maryam} size="lg" />
          <LeadershipImage name="Rana Sikandar Hayat" title="Punjab Education Minister" src={rana} size="lg" />
        </div>
      </div>
    </section>
  );
}
