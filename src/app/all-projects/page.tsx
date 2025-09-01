import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectsSectionSimple from "@/components/ProjectsSectionSimple";
import { PROJECTS as projects } from "@/content";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-3xl font-semibold text-white mb-4">
            All Projects
          </h1>
        </div>

        <ProjectsSectionSimple projects={projects} isOnly2={false} />
      </div>
    </div>
  );
};

export default page;
