"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiNotion,
  SiFramer,
  SiGooglechrome,
  SiApple,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPython,
  SiJavascript,
  SiExpo,
  SiLangchain,
  SiGithubcopilot,
  SiGit,
  SiShadcnui,
  SiMysql,
  SiAmazonapigateway,
  SiFastapi,
  SiOpenai,
  SiHuggingface,
  SiGooglegemini,
  SiAppwrite,
  SiSupabase,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { FaStripe } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { useState } from "react";

interface TechStack {
  category: string;
  technologies: string[];
}

interface TechStackSectionProps {
  techStacks: TechStack[];
  title: string;
}

const TechStackSection = ({ techStacks, title }: TechStackSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Icon mapping for tech stacks
  const getIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      React: <SiReact className="text-blue-400" />,
      "React Native": <SiReact className="text-blue-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      TypeScript: <SiTypescript className="text-blue-500" />,
      FastAPI: <SiFastapi className="text-blue-500" />,
      MySQL: <SiMysql className="text-blue-500" />,
      API: <SiAmazonapigateway className="text-blue-500" />,
      Tailwind: <SiTailwindcss className="text-cyan-400" />,
      Authentication: <GrShieldSecurity className="text-cyan-400" />,
      NativeWind: <SiTailwindcss className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      Figma: <SiFigma className="text-purple-500" />,
      Notion: <SiNotion className="text-white" />,
      Framer: <SiFramer className="text-pink-500" />,
      "Chrome/Arc Browser": <SiGooglechrome className="text-red-400" />,
      "Mockup (iPad)": <SiApple className="text-gray-300" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      "MongoDB Atlas VectorDB": <SiMongodb className="text-green-500" />,
      PostgreSQL: <SiPostgresql className="text-blue-400" />,
      "Express JS": <SiExpress className="text-gray-400" />,
      Vercel: <SiVercel className="text-white" />,
      Netlify: <SiNetlify className="text-teal-400" />,
      GitHub: <SiGithub className="text-white" />,
      "VS Code": <VscCode className="text-blue-500" />,
      Python: <SiPython className="text-yellow-400" />,
      JavaScript: <SiJavascript className="text-yellow-500" />,
      OpenAI: <SiOpenai className="text-white" />,
      HuggingFace: <SiHuggingface className="text-yellow-500" />,
      Firebase: <IoLogoFirebase className="text-yellow-500" />,
      Supabase: <SiSupabase className="text-green-500" />,
      "Stripe Integration": <FaStripe className="text-blue-500" />,
      Appwrite: <SiAppwrite className="text-red-500" />,
      "Google Gemini": <SiGooglegemini className="text-blue-500" />,
      Pinecone: (
        <Image
          src="/pinecone.png"
          alt="Pinecone Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      LangSmith: (
        <Image
          src="/langsmith.png"
          alt="LangSmith Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      LangChain: <SiLangchain className="text-green-500" />,
      "GitHub Copilot": <SiGithubcopilot className="text-white" />,
      Expo: <SiExpo className="text-white" />,
      "Expo Router": <SiExpo className="text-white" />,
      "React Navigation": <SiReact className="text-blue-400" />,
      Git: <SiGit className="text-orange-500" />,
      "Next JS": <RiNextjsFill className="text-white" />,
      "ShadCN UI": <SiShadcnui className="text-white" />,
      Mobbin: (
        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">
          M
        </div>
      ),
    };

    return (
      iconMap[category] || (
        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded text-white text-xs flex items-center justify-center font-bold">
          {category.charAt(0)}
        </div>
      )
    );
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105">
          Contact
        </Button> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techStacks.map((stack, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/70 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-gray-700/50 transition-colors duration-300 text-xl">
                  {getIcon(stack.category)}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {stack.category}
                  </h3>
                  {hoveredIndex === index && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {stack.technologies.slice(0, 2).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-gray-600 text-gray-400 text-xs px-2 py-0.5 bg-gray-800/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {stack.technologies.length > 2 && (
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-400 text-xs px-2 py-0.5 bg-gray-800/30"
                        >
                          +{stack.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
