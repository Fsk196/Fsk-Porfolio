"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS as projectsData } from "@/content";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

// This would normally come from a database or API

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  // Get images array from project
  const getProjectImages = () => {
    if (project.image) {
      if (Array.isArray(project.image)) {
        return project.image.filter((img) => img && img.trim() !== "");
      } else {
        return [project.image];
      }
    }
    return [];
  };

  const images = getProjectImages();

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

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
          {project.isMobile ? (
            // Mobile app image without phone frame with swipe functionality
            <div className="min-h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative flex items-center justify-center group py-8">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative w-full h-full flex items-center justify-center px-8">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  width={300}
                  height={600}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300"
                />

                {/* Navigation arrows for mobile - only show if multiple images */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-200 z-10"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-200 z-10"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image indicators for mobile */}
                {images.length > 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Web browser frame with swipe functionality
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
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      width={500}
                      height={300}
                      className="rounded transition-opacity duration-300"
                    />

                    {/* Navigation arrows for web - only show if multiple images */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <FaChevronLeft size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <FaChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {/* Image indicators for web */}
                    {images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              index === currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Project Details */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Project Overview
                </h3>
                <div className="text-gray-300 leading-relaxed prose prose-invert prose-gray max-w-none">
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
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-white font-semibold">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="text-blue-300 italic">{children}</em>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-gray-300">{children}</li>
                      ),
                      code: ({ children }) => (
                        <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-gray-800 text-blue-300 p-4 rounded-lg overflow-x-auto mb-4">
                          {children}
                        </pre>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">
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
                    {project.description}
                  </ReactMarkdown>
                </div>
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
