import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Support Plan Navigators home">
      <Image
        src="/logo-mark.png"
        alt=""
        width={640}
        height={327}
        priority
        className={`w-auto transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105 ${compact ? "h-10" : "h-12 sm:h-14"}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-tight transition-all duration-500 ${light ? "text-white" : "text-navy"} ${compact ? "text-lg" : "text-xl sm:text-[1.4rem]"}`}
        >
          Support Plan
        </span>
        <span
          className={`mt-1 font-sans text-[0.68rem] font-bold tracking-[0.42em] ${light ? "text-sage-light" : "text-sage"}`}
        >
          NAVIGATORS
        </span>
      </span>
    </Link>
  );
}
