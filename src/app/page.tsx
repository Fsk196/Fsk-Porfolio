import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSectionSimple";
import HighlightsSection from "@/components/HighlightsSection";
import TechStackSection from "@/components/TechStackSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS as projects } from "@/content";
import {
  FrontendWebStack,
  FrontendNativeStack,
  BackendStack,
  AIToolStack,
  OtherStack,
  ToolStack,
  PROFILEDATA as profileData,
} from "@/content";

export default function Home() {
  // Sample data - replace with your actual data

  return (
    <div className="min-h-screen bg-[url('/dark.jpg')] scroll-smooth sm:pt-20 bg-black">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ProfileSection {...profileData} />
        <ProjectsSection projects={projects} isOnly2={true} />
        <TechStackSection
          techStacks={FrontendWebStack}
          title="Frontend Web Stack"
        />
        <TechStackSection
          techStacks={FrontendNativeStack}
          title="Frontend Native Stack"
        />
        <TechStackSection techStacks={BackendStack} title="Backend Stack" />
        <TechStackSection techStacks={AIToolStack} title="AI Tool Stack" />
        <TechStackSection techStacks={OtherStack} title="Other Tech Stack" />
        <TechStackSection techStacks={ToolStack} title="Tools Stack" />
        <NewsletterSection />
        <FooterSection />
      </main>
    </div>
  );
}
