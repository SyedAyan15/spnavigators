import { ButtonLink } from "@/components/ui";
import { WindingRoad } from "@/components/WindingRoad";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32">
      <WindingRoad className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-4xl opacity-20" />
      <div className="container-x relative text-center">
        <p className="font-display text-8xl font-semibold text-gold">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">This path took a wrong turn.</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on the road.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
