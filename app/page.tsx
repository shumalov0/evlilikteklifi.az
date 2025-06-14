import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";

import { Story } from "@/components/story";
import { LatestShoots } from "@/components/latest-shoots";

import Proposal from "@/app/proposal/page";
import Packages from "@/app/packages/page";

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
    </div>
  );
}
