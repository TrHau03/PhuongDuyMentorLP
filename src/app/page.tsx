import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Methods } from "@/components/Methods";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stories } from "@/components/Stories";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Methods />
        <Journey />
        <Stories />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </>
  );
}
