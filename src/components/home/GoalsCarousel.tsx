"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const goals = [
  { img: "/images/wheelchair-nature.jpg", alt: "A woman using a wheelchair enjoying a lakeside forest path", title: "Getting out in nature again", tag: "Community access" },
  { img: "/images/cafe-chat.jpg", alt: "Two women laughing over coffee at an outdoor cafe", title: "Rebuilding friendships", tag: "Social connection" },
  { img: "/images/walk-together.jpg", alt: "Two people walking together along a leafy path, one using a mobility scooter", title: "Getting around with confidence", tag: "Independence" },
  { img: "/images/group-activity.jpg", alt: "A support worker sharing a craft activity with two older women", title: "Joining a local group", tag: "Community participation" },
  { img: "/images/home-conversation.jpg", alt: "Two women talking and laughing on a sofa at home", title: "Feeling at home in my space", tag: "Daily living" },
  { img: "/images/friends-park.jpg", alt: "Two women smiling together while sitting in a park", title: "Looking after my wellbeing", tag: "Mental health recovery" },
  { img: "/images/community-carer.jpg", alt: "An older woman using a walker standing with a smiling companion", title: "Staying connected with family", tag: "Relationships" },
];

export function GoalsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const nudge = (dir: 1 | -1) => scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <div>
      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Examples of goals people work toward"
        className="flex snap-x snap-mandatory gap-6 bleed-pad overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {goals.map((g, i) => (
          <motion.figure
            key={g.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="group relative h-[26rem] w-[18rem] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:h-[30rem] sm:w-[22rem]"
          >
            <Image src={g.img} alt={g.alt} fill sizes="22rem" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur">{g.tag}</span>
              <p className="mt-3 font-display text-2xl leading-tight font-semibold text-white">{g.title}</p>
              <span className="mt-4 block h-1 w-10 rounded-full bg-gold transition-all duration-500 group-hover:w-24" />
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="container-x mt-6 flex justify-end gap-3">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => nudge(d)}
            aria-label={d === -1 ? "Previous" : "Next"}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy shadow-lg ring-1 ring-navy/10 transition hover:bg-navy hover:text-white"
          >
            {d === -1 ? <ArrowLeft className="h-5 w-5" aria-hidden /> : <ArrowRight className="h-5 w-5" aria-hidden />}
          </button>
        ))}
      </div>
    </div>
  );
}
