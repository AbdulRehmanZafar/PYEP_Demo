const nodes = [
  { label: "Government", className: "top-0 left-1/2 -translate-x-1/2" },
  { label: "Universities", className: "top-[22%] right-0" },
  { label: "Schools", className: "bottom-[22%] right-[2%]" },
  { label: "Organizations", className: "bottom-0 left-1/2 -translate-x-1/2" },
  { label: "Youth", className: "top-[22%] left-0" },
];

export default function Partnerships() {
  return (
    <section id="partners" className="py-24">
      <div className="section-wrap">
        <div className="eyebrow">Partnership Ecosystem</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Building partnerships for greater impact
        </h2>
        <div className="flex justify-center mt-10">
          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
            <div className="w-[130px] h-[130px] rounded-full bg-green text-white flex items-center justify-center font-extrabold text-center z-10 shadow-[0_16px_40px_rgba(8,127,63,0.3)]">
              PYEP
            </div>
            {nodes.map((n) => (
              <div
                key={n.label}
                className={`absolute bg-white border border-border rounded-xl px-4 py-2.5 font-bold text-sm shadow-[0_6px_18px_rgba(23,32,25,0.07)] ${n.className}`}
              >
                {n.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
