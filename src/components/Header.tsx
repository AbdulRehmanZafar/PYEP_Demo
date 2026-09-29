import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision & Goal" },
  { href: "#programs", label: "Programs" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#entrepreneurship", label: "Entrepreneurship" },
  { href: "#sdgs", label: "SDGs" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_rgba(23,32,25,0.06)] border-b border-border backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="section-wrap flex items-center justify-between py-4">
        <a href="#home" aria-label="PYEP home">
          <Logo size={40} withWordmark />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold hover:text-green">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn btn-ghost hidden md:inline-flex">
            Get Involved
          </a>
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 pt-2 border-t border-border bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-semibold border-b border-border"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
