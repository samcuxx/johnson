import { AboutContent } from "@/components/About/AboutContent";
import BgGlow from "@/components/ui/BgGlow";
import { SocialLinks } from "@/components/global/SocialLinks";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full font-inter relative pt-24">
      <BgGlow />
      <AboutContent />
      <SocialLinks />
    </div>
  );
}
