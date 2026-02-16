import { useEffect, useLayoutEffect, useRef, useState } from "react";
import imgProfile from "../assets/a808c283d9467ddf032c5c6e5356e0fce4701034.png";
type SocialLink = { label: string; href: string; external?: boolean };
const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com/jayshharma", external: true },
  { label: "Email", href: "mailto:sharmj28@mcmaster.ca" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayshharma",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/jayshharma", external: true },
];
function SunIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      {" "}
      <circle cx="12" cy="12" r="4" /> <path d="M12 2v2" />{" "}
      <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" />{" "}
      <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" />{" "}
      <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" />{" "}
      <path d="m19.07 4.93-1.41 1.41" />{" "}
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black"
    >
      {" "}
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />{" "}
    </svg>
  );
}
export default function App() {
  const headingText = "Jay Sharma";
  const [typedHeading, setTypedHeading] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const imageSectionRef = useRef<HTMLDivElement | null>(null);
  const [iconRight, setIconRight] = useState<number | null>(null);
  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = window.setInterval(() => {
      currentIndex += 1;
      setTypedHeading(headingText.slice(0, currentIndex));
      if (currentIndex >= headingText.length) {
        window.clearInterval(typingTimer);
      }
    }, 85);
    return () => window.clearInterval(typingTimer);
  }, [headingText]);
  useEffect(() => {
    const caretTimer = window.setInterval(() => {
      setShowCaret((value) => !value);
    }, 500);
    return () => window.clearInterval(caretTimer);
  }, []);
  useLayoutEffect(() => {
    const updateIconAlignment = () => {
      if (!imageSectionRef.current) return;
      const rect = imageSectionRef.current.getBoundingClientRect();
      setIconRight(Math.max(24, window.innerWidth - rect.right));
    };
    updateIconAlignment();
    window.addEventListener("resize", updateIconAlignment);
    return () => window.removeEventListener("resize", updateIconAlignment);
  }, []);
  return (
    <div
      className={`relative min-h-[100dvh] transition-colors duration-500 ${isDark ? "bg-[#080808] text-white" : "bg-[#fbfaf8] text-[#2f2b24]"}`}
    >
      {" "}
      <button
        type="button"
        onClick={() => setIsDark((value) => !value)}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed top-5 z-30 rounded-full p-2 transition-transform duration-300 sm:top-6"
        style={{
          right: iconRight ?? 24,
          visibility: iconRight === null ? "hidden" : "visible",
        }}
      >
        {" "}
        {isDark ? <SunIcon /> : <MoonIcon />}{" "}
      </button>{" "}
      <div className="container mx-auto flex min-h-[100dvh] w-full flex-col justify-start px-6 pt-36 pb-10 sm:pt-40 sm:pb-12 lg:justify-center lg:pt-12 lg:pb-6">
        {" "}
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-start gap-16 lg:flex-row lg:gap-40">
          {" "}
          <div className="flex w-full flex-col justify-between lg:min-h-[433px] lg:max-w-xl">
            {" "}
            <div className="space-y-8">
              {" "}
              <h1
                className="text-5xl font-light lg:text-6xl"
                style={{ fontFamily: "'Test Signifier', serif" }}
              >
                {" "}
                {typedHeading}
                <span
                  aria-hidden
                  className={`ml-[0.08em] inline-block h-[0.85em] w-[0.06em] align-[-0.08em] transition-opacity duration-150 ${isDark ? "bg-white" : "bg-[#2f2b24]"} ${showCaret ? "opacity-100" : "opacity-0"}`}
                />{" "}
              </h1>{" "}
              <div
                className="max-w-xl space-y-4 text-lg font-extralight"
                style={{ fontFamily: "'Geist', 'Noto Sans', sans-serif" }}
              >
                <p>
                  Building at the crossroads of design, engineering, and AI.
                </p>

                <p className="lg:whitespace-nowrap">
                  I've shipped experiences for millions of users at{" "}
                  <a
                    href="https://www.shopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-opacity hover:opacity-80"
                  >
                    Shopify
                  </a>
                  {", "}
                  <a
                    href="https://www.hubspot.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-opacity hover:opacity-80"
                  >
                    HubSpot
                  </a>
                  {" and "}
                  <a
                    href="https://www.thescore.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-opacity hover:opacity-80"
                  >
                    theScore
                  </a>
                  .
                </p>

                <p className="lg:whitespace-nowrap">
                  Outside of work, I love travelling, working out, and
                  experimenting with LLMs.
                </p>
              </div>
              <div
                className="max-w-xl space-y-4 text-lg font-extralight"
                style={{ fontFamily: "'Geist', 'Noto Sans', sans-serif" }}
              >
                {" "}
                <p>Currently working on</p>{" "}
                <div className="relative pl-4">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-px ${isDark ? "bg-zinc-500/95" : "bg-zinc-600/85"}`}
                  />
                  <p>
                    <a
                      href="https://x.com/jayshharma/status/2018424623902187832"
                      target="_blank"
                      rel="noreferrer"
                      className="underline transition-opacity hover:opacity-80"
                    >
                      Vignette
                    </a>{" "}
                    - A quicker discovery engine for Pinterest.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="hidden flex-wrap items-center gap-4 text-lg font-extralight lg:flex"
              style={{ fontFamily: "'Geist', 'Noto Sans', sans-serif" }}
            >
              {" "}
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="transition-opacity hover:opacity-80"
                >
                  {" "}
                  {link.label}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div ref={imageSectionRef} className="w-full flex-shrink-0 lg:w-auto">
            {" "}
            <div className="relative w-full lg:w-[325px]">
              {" "}
              <img
                src={imgProfile}
                alt="Jay Sharma"
                width={1536}
                height={2048}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="h-auto w-full object-cover"
              />{" "}
            </div>{" "}
            <div
              className="mt-12 flex flex-wrap items-center gap-4 text-lg font-extralight lg:hidden"
              style={{ fontFamily: "'Geist', 'Noto Sans', sans-serif" }}
            >
              {" "}
              {socialLinks.map((link) => (
                <a
                  key={`${link.label}-mobile`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="transition-opacity hover:opacity-80"
                >
                  {" "}
                  {link.label}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
