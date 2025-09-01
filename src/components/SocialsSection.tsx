import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

interface SocialsSectionProps {
  socialLinks: SocialLink[];
}

const SocialsSection = ({ socialLinks }: SocialsSectionProps) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "email":
        return <Mail className="w-5 h-5" />;
      case "website":
        return <Globe className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Socials</h2>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm">
          Contact
        </Button>
      </div>

      <div className="grid gap-3">
        {socialLinks.map((social, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="text-gray-400">{getIcon(social.platform)}</div>
                <div className="flex-1">
                  <p className="text-white font-medium capitalize">
                    {social.platform}
                  </p>
                  {social.username && (
                    <p className="text-gray-400 text-sm">@{social.username}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
