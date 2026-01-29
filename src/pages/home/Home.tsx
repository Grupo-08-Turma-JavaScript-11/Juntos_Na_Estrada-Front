import { Hero } from "../hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}