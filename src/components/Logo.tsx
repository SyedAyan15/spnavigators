import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Support Plan Navigators home">
      {/* On dark backgrounds the emblem sits on a white disc so its navy figures stay visible. */}
      <span className={`shrink-0 transition-all duration-500 group-hover:-rotate-6 ${light ? "rounded-full bg-white p-1" : ""}`}>
        <Image
          src="/logo-mark.png"
          alt=""
          width={600}
          height={581}
          priority
          className={`w-auto transition-all duration-500 ${compact ? "h-11" : "h-12 sm:h-14"}`}
        />
      </span>
      <span className="flex flex-col leading-[0.95]">
        <span
          className={`font-sans font-extrabold tracking-tight transition-all duration-500 ${light ? "text-white" : "text-navy"} ${compact ? "text-lg" : "text-xl sm:text-[1.45rem]"}`}
        >
          Support Plan
        </span>
        <span
          className={`font-sans font-extrabold tracking-tight transition-all duration-500 ${light ? "text-teal-light" : "text-teal"} ${compact ? "text-lg" : "text-xl sm:text-[1.45rem]"}`}
        >
          Navigators
        </span>
      </span>
    </Link>
  );
}
