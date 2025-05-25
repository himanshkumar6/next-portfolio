"use client"

import NavbarMain from "./components/NavbarMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain"
import SubHeroSection from "./components/heroSection/SubHeroSection";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillSection/SkillsMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

export default function Home() {
  return (
    <>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </>
  );
}
