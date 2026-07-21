import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-center">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#D4AF37]">Not found</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">This itinerary is unavailable.</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0F766E] px-6 py-3 text-sm font-bold text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
