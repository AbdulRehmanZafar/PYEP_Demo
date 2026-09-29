import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-16 pb-8">
      <div className="section-wrap">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10">
          <div>
            <div className="mb-3.5">
              <Logo size={42} withWordmark dark />
            </div>
            <p className="max-w-sm text-sm">
              Helping young people across Punjab turn potential into meaningful action
              through skills, leadership and opportunity.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3.5">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about">About</a></li>
              <li><a href="#vision">Vision & Goal</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#initiatives">Initiatives</a></li>
              <li><a href="#sdgs">SDGs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3.5">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>[Official contact placeholder]</li>
              <li>[Official address placeholder]</li>
              <li>[Social media placeholder]</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-11 pt-5 text-sm flex justify-between flex-wrap gap-2.5">
          <span>© 2026 Punjab Youth Empowerment Program</span>
          <span>Punjab, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
