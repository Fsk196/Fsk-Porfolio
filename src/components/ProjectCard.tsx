import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    // <div className="w-full h-fit px-4 py-6 bg-gray-900/50 border-gray-800 rounded-lg shadow-md">
    <div className="grid gap-6 w-1/2">
      {/* {featuredProjects.map((project, index) => ( */}
      <Card
        // key={index}
        className="bg-gray-900/50 border-gray-800 overflow-hidden py-0"
      >
        <div className="h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
          {/* {project?.image && ( */}
          <Image
            src="/canvas.png"
            alt="Project Image"
            className="object-cover w-full h-full z-0"
            //   priority={index === 0}
          />
          {/* )} */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute bottom-4 left-4 text-white z-20">
            <h3 className="text-xl font-bold">Fit-Track</h3>
            <p className="text-sm opacity-80">Fsk</p>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            A Mobile application for tracking fitness goals and progress. with a
            focus on user-friendly interfaces and seamless integration with
            wearable devices.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* {project.technologies.map((tech, techIndex) => ( */}
            <Badge
              // key={techIndex}
              variant="secondary"
              className="bg-gray-800 text-gray-300"
            >
              React Native Expo, Tailwindcss, Nodejs, MongoDB
            </Badge>
            {/* ))} */}
          </div>
          <div className="flex gap-2 mt-2">
            {/* {project.githubUrl && ( */}
            <Link
              href="https//github.com/fsk196"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded transition-colors"
            >
              <FaGithub size={25} />
            </Link>
            {/* )} */}
            {/* {project.liveUrl && ( */}
            <Link
              href="https://github.com/fsk196"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded transition-colors"
            >
              Live Demo
            </Link>
            {/* )} */}
            <Link
              href={`/projects/fit-track`}
              className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
            >
              Details
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* ))} */}
    </div>
    // </div>
  );
};

export default ProjectCard;
