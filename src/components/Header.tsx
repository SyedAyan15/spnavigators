"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transient menus should never survive a navigation (including back/forward).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMenuOpen(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => {
    setOpen(false);
    setMenuOpen(null);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-md bg-gold px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/85 shadow-[0_10px_40px_-20px_rgba(13,49,87,0.35)] backdrop-blur-xl" : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[4.75rem]" : "h-[5.5rem] lg:h-[7.25rem]"}`}>
          <Logo compact={scrolled} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.children ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMenuOpen(item.label)}
                    onMouseLeave={() => setMenuOpen(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={menuOpen === item.label}
                      onClick={() => setMenuOpen((v) => (v === item.label ? null : item.label))}
                      className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.92rem] whitespace-nowrap xl:px-4 xl:text-[0.95rem] font-semibold text-navy transition hover:bg-navy/5"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen === item.label ? "rotate-180" : ""}`} aria-hidden />
                    </button>
                    <AnimatePresence>
                      {menuOpen === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3"
                        >
                          <div className="grid gap-2 rounded-3xl bg-white p-3 shadow-2xl ring-1 ring-navy/5">
                            {item.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onNavigate={close}
                                className="group flex items-start gap-4 rounded-2xl p-4 transition hover:bg-cream"
                              >
                                <span
                                  className={`mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold text-white ${c.color ?? "bg-teal"}`}
                                >
                                  {c.badge}
                                </span>
                                <span>
                                  <span className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                                    {c.label}
                                    <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                                  </span>
                                  <span className="mt-1 block text-sm text-muted">{c.description}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative rounded-full px-3 py-2 text-[0.92rem] whitespace-nowrap xl:px-4 xl:text-[0.95rem] font-semibold transition hover:bg-navy/5 ${
                        isActive(item.href) ? "text-teal" : "text-navy"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold" />
                      )}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/make-a-referral"
              className="group relative hidden overflow-hidden rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-lg shadow-navy/20 transition hover:shadow-xl sm:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal to-ochre transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                Make a Referral <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
        <motion.div className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-teal via-ochre to-gold" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] overflow-y-auto bg-navy text-white lg:hidden"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container-x flex h-[5.5rem] items-center justify-between">
              <Logo variant="stacked" compact />
              <button
                type="button"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x pt-6 pb-12">
              <ul className="space-y-1">
                {[{ label: "Home", href: "/" }, ...nav.flatMap((n) => (n.children ? n.children : [n]))].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onNavigate={close}
                      className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl"
                    >
                      {item.label}
                      <ArrowRight className="h-5 w-5 text-gold" aria-hidden />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 grid gap-3">
                <Link href="/make-a-referral" onNavigate={close} className="rounded-full bg-gold px-6 py-4 text-center font-bold text-navy">
                  Make a Referral
                </Link>
                <a href={`mailto:${site.email}`} className="rounded-full bg-white/10 px-6 py-4 text-center font-semibold">
                  Email us
                </a>
                <a href={site.phoneHref} className="py-2 text-center text-sm text-white/75 hover:text-white">
                  or call {site.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
