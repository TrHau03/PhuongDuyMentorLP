import type { Metadata } from "next";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { JsonLd } from "@/components/JsonLd";
import { Methods } from "@/components/Methods";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stories } from "@/components/Stories";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Methods />
        <Journey />
        <ServiceAreas />
        <Stories />
        <Faq />
        <Booking />
      </main>
      <SiteFooter />
    </>
  );
}
