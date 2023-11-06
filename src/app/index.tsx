import Copyright from "@/components/template/Copyright";
import Footer from "@/components/template/Footer";
import { HStack } from "@/components/template/HStack";
import LandingAboutSection from "@/components/template/LandingAboutSection";
import LandingHeroSection from "@/components/template/LandingHeroSection";
import LandingServicesSection from "@/components/template/LandingServicesSection";
import LandingSocialmediaSection from "@/components/template/LandingSocialmediaSection";
import { VStack } from "@/components/template/VStack";
import AuthLinks from "@modules/auth/AuthLinks";
import { H2 } from "tamagui";

export default function Home() {
  return (<>
    <VStack >
    
    <LandingHeroSection />
    <LandingAboutSection />
    <LandingServicesSection />
    <LandingSocialmediaSection />
    <HStack >
      <AuthLinks />
      </HStack><HStack >
      <AuthLinks />
      </HStack>
    </VStack>
    <Footer  />
              </>
  );
}
// registerRootComponent(Home);
