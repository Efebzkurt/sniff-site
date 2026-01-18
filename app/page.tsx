import ChatSection from "./components/ChatSection";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ChatSection />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}
