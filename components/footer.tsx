import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-extrabold text-white">El Massa Itinerary</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Premium pilgrimage planning for travelers seeking a deeply organized, beautiful, and memorable Holy Land journey.
          </p>
        </div>
        <div>
          <p className="font-bold text-gold">Explore</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Featured Packages</p>
            <p>Holy Land Travel</p>
            <p>Group Coordination</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-gold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>info@elmassa.example</p>
            <p>Available for 2026 departures</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
