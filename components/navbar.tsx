import Link from "next/link";
import { Container } from "@/components/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="El Massa home">
          <span className="grid size-11 place-items-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-teal-900/15">
            EM
          </span>
          <span>
            <span className="block text-base font-extrabold tracking-tight text-primary">El Massa</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-gold">Itinerary</span>
          </span>
        </Link>
<nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
  <Link href="/#packages" className="transition hover:text-primary">
    Packages
  </Link>

  <Link href="/#about" className="transition hover:text-primary">
    About
  </Link>

  <Link href="/#contact" className="transition hover:text-primary">
    Contact
  </Link>
</nav>

<Link
  href="/#packages"
  className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
>
  View Trips
</Link>
      </Container>
    </header>
  );
}

