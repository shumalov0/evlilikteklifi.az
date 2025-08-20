import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";

import { Story } from "@/components/story";
import { LatestShoots } from "@/components/latest-shoots";

import Proposal from "@/app/proposal/page";
import Packages from "@/app/packages/page";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Quote />
      {/* <Services /> */}
      <Story />
      <Packages />
      <LatestShoots />
      {/* <ContactForm /> */}
      <Proposal />
      
      {/* WhatsApp Button - Fixed at bottom right */}
      <a
        href="https://wa.me/994998131322"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors shadow-lg z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
