"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/cv">CV</Link>
      <Link href="/jeu">Jeu</Link>
      <Link href="/testapi">Test API</Link>
    </main>
  );
}
