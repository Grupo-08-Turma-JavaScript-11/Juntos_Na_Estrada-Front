import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import { Hero } from "../hero/Hero";


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}