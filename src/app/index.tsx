import Copyright from "@/components/template/Copyright";
import Footer from "@/components/template/Footer";
import { HStack } from "@/components/template/HStack";
import LandingAboutSection from "@/components/landing/LandingAboutSection";
import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingServicesSection from "@/components/landing/LandingServicesSection";
import LandingSocialmediaSection from "@/components/landing/LandingSocialmediaSection";
import { VStack } from "@/components/template/VStack";
import AuthLinks from "@modules/auth/AuthLinks";
import { H2, YStack } from "tamagui";

export default function Home() {
  return (<>
    <VStack >
      <LandingHeroSection />
      <LandingAboutSection />
      <LandingServicesSection />
      <LandingSocialmediaSection />
    </VStack>
    <Footer  />
    </>
  );
}
// registerRootComponent(Home);
