import { getDictionary, isValidLocale, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import GrainOverlay from "@/components/GrainOverlay";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiscoveryTracks from "@/components/DiscoveryTracks";
import CouncilSection from "@/components/CouncilSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <GrainOverlay />
      <Navbar dict={dict.nav} locale={locale} />
      <main>
        <HeroSection dict={dict.hero} locale={locale} />
        <AboutSection dict={dict.about} locale={locale} />
        <DiscoveryTracks dict={dict.tracks} locale={locale} />
        <CouncilSection dict={dict.council} locale={locale} />
        <RoadmapSection dict={dict.roadmap} locale={locale} />
        <CTASection dict={dict.cta} locale={locale} />
      </main>
      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}
