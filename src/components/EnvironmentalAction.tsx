import { photos } from "../data/photos";

export default function EnvironmentalAction() {
  const treesPlanted = 200;
  const treeGoal = 10000;
  const progress = Math.round((treesPlanted / treeGoal) * 1000) / 10; // one decimal

  return (
    <section id="environment" className="py-24">
      <div className="section-wrap">
        <div className="eyebrow">Environmental Action</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Plantation Drives
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center mt-6">
          <div>
            <p className="text-sub text-lg max-w-xl">
              PYEP has already started environmental action through Plantation Drives,
              encouraging young people to take part in environmental responsibility and
              sustainable community development.
            </p>
            <div className="flex gap-10 my-5">
              <div>
                <div className="text-4xl font-extrabold text-deep">{treesPlanted}</div>
                <div className="text-sub text-sm">Trees Planted</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-deep">{treeGoal.toLocaleString()}</div>
                <div className="text-sub text-sm">Tree Goal</div>
              </div>
            </div>
            <div className="h-3 bg-soft rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green to-fresh rounded-lg"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>
            <div className="flex gap-2.5 flex-wrap items-center font-bold text-sm text-deep mt-7">
              <span>Youth Participation</span>
              <span className="text-fresh">→</span>
              <span>Environmental Responsibility</span>
              <span className="text-fresh">→</span>
              <span>Sustainable Communities</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-[0_16px_36px_rgba(23,32,25,0.1)] aspect-[4/3]">
            <img
              src={photos.treePlanting}
              alt="Hands planting a young tree sapling during a plantation drive"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
