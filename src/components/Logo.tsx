import Image from "next/image";
import Link from "next/link";

/**
 * "full" is the horizontal logo with tagline, used in the site header.
 * "stacked" is the square logo used everywhere else; it sits on a white card so its navy lettering reads on dark backgrounds.
 */
export function Logo({ variant = "full", compact = false }: { variant?: "full" | "stacked"; compact?: boolean }) {
  if (variant === "stacked") {
    return (
      <Link href="/" aria-label="Support Plan Navigators home" className="inline-block rounded-2xl bg-white p-3 shadow-lg">
        <Image
          src="/logo-stacked.png"
          alt="Support Plan Navigators Pty Ltd"
          width={122}
          height={144}
          className={`w-auto ${compact ? "h-16" : "h-36"}`}
        />
      </Link>
    );
  }
  return (
    <Link href="/" aria-label="Support Plan Navigators home" className="shrink-0">
      <Image
        src="/logo-full.png"
        alt="Support Plan Navigators Pty Ltd – Connecting Plans to Possibilities. NDIS Support Coordination & Navigation"
        width={259}
        height={125}
        priority
        className={`w-auto transition-all duration-500 ${compact ? "h-16" : "h-16 sm:h-20 lg:h-[6.25rem]"}`}
      />
    </Link>
  );
}
