"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

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
  image?: string | string[]; // Support both single string and array
  images?: string[]; // Add support for multiple images
  privateGit?: boolean; // Add support for privateGit property
  isMobile?: boolean; // Add support for mobile app indicator
}

interface ProjectsSectionProps {
  projects: Project[];
  isOnly2: boolean;
}

const ProjectsSection = ({ projects, isOnly2 }: ProjectsSectionProps) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const onlyShow2Projects = featuredProjects.slice(0, 2);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  // Initialize image index for each project
  const initializeImageIndex = (projectId: string) => {
    if (!(projectId in currentImageIndex)) {
      setCurrentImageIndex((prev) => ({ ...prev, [projectId]: 0 }));
    }
  };

  const nextImage = (projectId: string, project: Project) => {
    const images = project.images || (project.image ? [project.image] : []);
    if (images.length > 1) {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [projectId]: (prev[projectId] + 1) % images.length,
      }));
    }
  };

  const prevImage = (projectId: string, project: Project) => {
    const images = project.images || (project.image ? [project.image] : []);
    if (images.length > 1) {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [projectId]:
          prev[projectId] === 0 ? images.length - 1 : prev[projectId] - 1,
      }));
    }
  };

  const renderProjectImage = (
    project: Project,
    isSimpleView: boolean = false
  ) => {
    // Handle different image formats from the content file
    let images: string[] = [];

    if (project.images) {
      // Use images array if available
      images = project.images;
    } else if (project.image) {
      // Handle both string and string[] for image property
      if (Array.isArray(project.image)) {
        images = project.image.filter((img) => img && img.trim() !== ""); // Filter out empty strings
      } else {
        images = [project.image];
      }
    }

    if (images.length === 0) return null;

    // For simple view (onlyShow2projects), show only the first image
    if (isSimpleView) {
      if (project.isMobile) {
        // Mobile app image without phone frame
        return (
          <div className="h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative max-w-full max-h-full p-8">
              <Image
                src={images[0]}
                alt={project.title}
                width={300}
                height={400}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        );
      } else {
        // Web browser frame (existing code)
        return (
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
                  <Image
                    src={images[0]}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    // For full view (all featured projects), show swipeable gallery
    initializeImageIndex(project.id);
    const currentIndex = currentImageIndex[project.id] || 0;

    if (project.isMobile) {
      // Mobile app image without phone frame with swipe functionality
      return (
        <div className="h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative group flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-full max-h-full p-8">
            <Image
              src={images[currentIndex]}
              alt={`${project.title} - Image ${currentIndex + 1}`}
              width={300}
              height={400}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300"
            />

            {/* Navigation arrows for mobile - only show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevImage(project.id, project);
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage(project.id, project);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <FaChevronRight size={16} />
                </button>
              </>
            )}

            {/* Image indicators for mobile */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => ({
                        ...prev,
                        [project.id]: index,
                      }));
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Web browser frame with swipe functionality
    return (
      <div className="h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative group">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-8 right-8">
          <div className="bg-gray-900/90 rounded-lg">
            <div className="flex items-center gap-2 p-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-gray-800 rounded text-center px-1 pb-1 relative">
              <Image
                src={images[currentIndex]}
                alt={`${project.title} - Image ${currentIndex + 1}`}
                width={500}
                height={300}
                className="rounded transition-opacity duration-300"
              />

              {/* Navigation arrows - only show if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prevImage(project.id, project);
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      nextImage(project.id, project);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Image indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => ({
                          ...prev,
                          [project.id]: index,
                        }));
                      }}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                      {project?.image && renderProjectImage(project, true)}

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
                      <div className="text-gray-300 mb-4">
                        <ReactMarkdown
                          components={{
                            // Custom styling for markdown elements
                            h1: ({ children }) => (
                              <h1 className="text-2xl font-bold text-white mb-4">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-xl font-semibold text-white mb-3">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-lg font-medium text-white mb-2">
                                {children}
                              </h3>
                            ),
                            p: ({ children }) => (
                              <p className="text-gray-300 mb-2 leading-relaxed">
                                {children}
                              </p>
                            ),
                            strong: ({ children }) => (
                              <strong className="text-white font-semibold">
                                {children}
                              </strong>
                            ),
                            em: ({ children }) => (
                              <em className="text-blue-300 italic">
                                {children}
                              </em>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-inside text-gray-300 mb-2 space-y-1">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="text-gray-300">{children}</li>
                            ),
                            code: ({ children }) => (
                              <code className="bg-gray-800 text-blue-300 px-1 py-0.5 rounded text-sm font-mono">
                                {children}
                              </code>
                            ),
                            pre: ({ children }) => (
                              <pre className="bg-gray-800 text-blue-300 p-2 rounded-lg overflow-x-auto mb-2">
                                {children}
                              </pre>
                            ),
                            blockquote: ({ children }) => (
                              <blockquote className="border-l-4 border-blue-500 pl-2 italic text-gray-400 mb-2">
                                {children}
                              </blockquote>
                            ),
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                className="text-blue-400 hover:text-blue-300 underline transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {project.description.substring(0, 150) + "..."}
                        </ReactMarkdown>
                      </div>
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
                      {(project?.image || project?.images) &&
                        renderProjectImage(project, false)}

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
                      <div className="text-gray-300 mb-4">
                        <ReactMarkdown
                          components={{
                            // Custom styling for markdown elements
                            h1: ({ children }) => (
                              <h1 className="text-2xl font-bold text-white mb-4">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-xl font-semibold text-white mb-3">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-lg font-medium text-white mb-2">
                                {children}
                              </h3>
                            ),
                            p: ({ children }) => (
                              <p className="text-gray-300 mb-2 leading-relaxed">
                                {children}
                              </p>
                            ),
                            strong: ({ children }) => (
                              <strong className="text-white font-semibold">
                                {children}
                              </strong>
                            ),
                            em: ({ children }) => (
                              <em className="text-blue-300 italic">
                                {children}
                              </em>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-inside text-gray-300 mb-2 space-y-1">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="text-gray-300">{children}</li>
                            ),
                            code: ({ children }) => (
                              <code className="bg-gray-800 text-blue-300 px-1 py-0.5 rounded text-sm font-mono">
                                {children}
                              </code>
                            ),
                            pre: ({ children }) => (
                              <pre className="bg-gray-800 text-blue-300 p-2 rounded-lg overflow-x-auto mb-2">
                                {children}
                              </pre>
                            ),
                            blockquote: ({ children }) => (
                              <blockquote className="border-l-4 border-blue-500 pl-2 italic text-gray-400 mb-2">
                                {children}
                              </blockquote>
                            ),
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                className="text-blue-400 hover:text-blue-300 underline transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {project.description.substring(0, 150) + "..."}
                        </ReactMarkdown>
                      </div>
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
