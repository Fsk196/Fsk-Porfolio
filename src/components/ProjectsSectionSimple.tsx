"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  company?: string;
  period?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  isOnly2: boolean;
}

const ProjectsSection = ({ projects, isOnly2 }: ProjectsSectionProps) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const onlyShow2Projects = featuredProjects.slice(0, 2);

  return (
    <section className="mb-16">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          {isOnly2 && (
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Side Projects
              </h2>
              <Link
                href="/all-projects"
                // variant="outline"
                className="px-4 py-2 rounded-lg text-sm hover:underline"
              >
                View All
              </Link>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {isOnly2
              ? onlyShow2Projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 overflow-hidden py-0"
                  >
                    <div className="h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
                      {project?.image && (
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
                                  layout="responsive"
                                  width={500}
                                  height={300}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute right-2 top-2 z-20">
                        <Link
                          target="_blank"
                          href="https://github.com/fsk196"
                          className="cursor-pointer shadow-2xl inset-0 bg-black/80"
                        >
                          <GrShare />
                        </Link>
                      </div>
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/50 z-10" />
                      <div className="absolute bottom-4 left-4 text-white z-20">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm opacity-80">{project.company}</p>
                      </div>
                    </div>

                    <CardContent className="pb-6">
                      <p className="text-gray-300 mb-4">
                        {project.description.slice(0, 150)}...
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="default"
                            className="bg-gray-800 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        {project.githubUrl && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                                title="GitHub"
                              >
                                <FaGithub />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent className="">
                              <p>View on Github</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {project.liveUrl && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                                title="Live Demo"
                              >
                                <GrShare size={13} />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent className="">
                              <p>View Live Demo</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={`/projects/${project.id}`}
                              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                              title="Details"
                            >
                              <CgDetailsMore />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="">
                            <p>View Project Details</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 overflow-hidden py-0"
                  >
                    <div className="h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
                      {project?.image && (
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
                                  layout="responsive"
                                  width={500}
                                  height={300}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute right-2 top-2 z-20">
                        <Link
                          target="_blank"
                          href="https://github.com/fsk196"
                          className="cursor-pointer shadow-2xl inset-0 bg-black/80"
                        >
                          <GrShare />
                        </Link>
                      </div>
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/50 z-10" />
                      <div className="absolute bottom-4 left-4 text-white z-20">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm opacity-80">{project.company}</p>
                      </div>
                    </div>

                    <CardContent className="pb-6">
                      <p className="text-gray-300 mb-4">
                        {project.description.slice(0, 150)}...
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="default"
                            className="bg-gray-800 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        {project.githubUrl && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                                title="GitHub"
                              >
                                <FaGithub />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent className="">
                              <p>View on Github</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {project.liveUrl && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                                title="Live Demo"
                              >
                                <GrShare size={13} />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent className="">
                              <p>View Live Demo</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={`/projects/${project.id}`}
                              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                              title="Details"
                            >
                              <CgDetailsMore />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="">
                            <p>View Project Details</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
