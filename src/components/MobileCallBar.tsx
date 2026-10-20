"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
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
          className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-full bg-navy/95 p-1.5 shadow-2xl backdrop-blur md:hidden"
        >
          <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white">
            <Phone className="h-4 w-4 text-gold" aria-hidden /> Call us
          </a>
          <Link href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-bold text-navy">
            <MessageCircle className="h-4 w-4" aria-hidden /> Free chat
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
