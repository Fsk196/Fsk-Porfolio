import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS as projectsData } from "@/content";
import Image from "next/image";

// This would normally come from a database or API

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <div className="flex gap-4 mb-8">
            {project.githubUrl && (
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button className="bg-blue-600  hover:bg-blue-700 text-white">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Project Hero Image */}
        <Card className="bg-gray-900/50 py-0 border-gray-800 overflow-hidden mb-8">
          <div className="h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-8 right-8">
              <div className="bg-gray-900/90 rounded-lg">
                <div className="flex items-center gap-2 p-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-800 rounded text-center px-1 pb-1">
                  {/* <h2 className="text-white text-2xl font-bold">
                    {project.title}
                  </h2> */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Project Details */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* {project?.challenges && (
              <Card className="bg-gray-900/50 border-gray-800 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Challenges
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    {project?.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project?.solutions && (
              <Card className="bg-gray-900/50 border-gray-800 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Solutions
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    {project?.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )} */}
          </div>

          <div>
            <Card className="bg-gray-900/50 border-gray-800 mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {project.company && (
              <Card className="bg-gray-900/50 border-gray-800 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400 text-sm">Company</span>
                      <p className="text-white">{project.company}</p>
                    </div>
                    {project.period && (
                      <div>
                        <span className="text-gray-400 text-sm">Timeline</span>
                        <p className="text-white">{project.period}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
