import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import heroVideo from "@/assets/flowpath-hero-pink.mp4.asset.json";

type NavItem = {
  label: string;
  items?: string[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Product", items: ["Connections", "Workflows", "Insights"] },
  { label: "Solutions", items: ["Guides", "Use cases", "API reference"] },
  { label: "About", items: ["Our story", "Open roles", "Reach us"] },
  { label: "Plans" },
];

const VIDEO_URL = heroVideo.url;

const FONT_URL =
  "https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text";

const SCOPED_CSS = `
.flowpath-hero {
  font-family: "Helvetica Now Text", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.flowpath-hero .liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.flowpath-hero .liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.flowpath-hero .liquid-glass-pink:hover {
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.14), 0 0 24px rgba(236, 64, 122, 0.18);
}
.flowpath-hero .pink-glow:hover {
  box-shadow: 0 8px 30px rgba(233, 30, 99, 0.28);
}
@keyframes flowpath-dropdown-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.flowpath-hero .animate-dropdown {
  animation: flowpath-dropdown-in 0.2s ease-out;
}
.flowpath-hero .duration-400 {
  transition-duration: 400ms;
}
`;

function DiamondLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2 L24 14 L14 26 L4 14 Z" fill="white" opacity="0.9" />
      <path d="M14 7 L20 14 L14 21 L8 14 Z" fill="#F48FB1" opacity="0.5" />
    </svg>
  );
}

export default function FlowpathHero() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="flowpath-hero relative h-screen w-full overflow-hidden">
      <link rel="stylesheet" href={FONT_URL} />
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(236, 64, 122, 0.10), rgba(244, 143, 177, 0.04), rgba(194, 24, 91, 0.08))",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Navigation */}
        <nav className="w-full px-5 py-4 sm:px-6 sm:py-5 md:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-white">
              <DiamondLogo />
              <span className="text-lg font-medium tracking-tight sm:text-xl">flowpath</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.items ? item.label : null)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup={item.items ? "true" : undefined}
                    className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                    {item.items && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.items && openDropdown === item.label && (
                    <div className="liquid-glass animate-dropdown !absolute top-full left-0 min-w-[160px] rounded-xl px-2 py-3 shadow-xl">
                      {item.items.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-pink-400/10 hover:text-white"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <a href="#" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
                Log in
              </a>
              <a
                href="#"
                className="liquid-glass liquid-glass-pink rounded-full px-5 py-2 text-sm font-medium text-white transition-shadow"
              >
                Try it free
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="relative h-9 w-9 text-white md:hidden"
            >
              <Menu
                className={`absolute inset-0 m-auto h-6 w-6 transition-all duration-300 ${
                  mobileOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 m-auto h-6 w-6 transition-all duration-300 ${
                  mobileOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className="absolute left-5 right-5 z-20 overflow-hidden transition-all md:hidden"
            style={{
              transitionDuration: "400ms",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              maxHeight: mobileOpen ? "80vh" : "0px",
              opacity: mobileOpen ? 1 : 0,
              pointerEvents: mobileOpen ? "auto" : "none",
            }}
          >
            <div className="mt-3 rounded-2xl bg-[#4A1E33]/95 p-6 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mb-3">
                  <a
                    href="#"
                    className="block rounded-lg px-2 py-1.5 text-base font-medium text-white transition-colors hover:bg-pink-400/10"
                  >
                    {item.label}
                  </a>
                  {item.items?.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="ml-4 block rounded-lg px-2 py-1.5 text-sm text-white/70 transition-colors hover:bg-pink-400/10 hover:text-white"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              ))}
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <a href="#" className="text-sm font-medium text-white/90 hover:text-white">
                  Log in
                </a>
                <a
                  href="#"
                  className="liquid-glass liquid-glass-pink rounded-full px-5 py-2 text-sm font-medium text-white"
                >
                  Try it free
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 items-start justify-center px-5 pt-16 sm:px-6 sm:pt-20 md:pt-24">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Bridge the
              <br />
              gaps. Ditch the
              <br />
              grindwork.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base md:text-lg">
              Flowpath unifies your complete wellness tools, so your crew spends less energy
              plugging gaps and more on real progress.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <button
                type="button"
                className="pink-glow rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-white/90 sm:px-6 sm:py-3"
              >
                Begin your journey
              </button>
              <button
                type="button"
                className="liquid-glass liquid-glass-pink rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3"
              >
                See it live
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
