"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 22 }}
          className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full bg-navy/95 p-1.5 shadow-2xl backdrop-blur md:hidden"
        >
          {/* Email is the main action; calling stays available as a secondary button. */}
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-navy"
          >
            <Mail className="h-4 w-4" aria-hidden /> Email us
          </a>
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-gold"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
