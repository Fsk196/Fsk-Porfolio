"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProfileSectionProps {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

const ProfileSection = ({ name, bio, avatar }: ProfileSectionProps) => {
  const [currentDay, setCurrentDay] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const date = new Date();
    setCurrentDay(date.toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Faisal-shaikh-resume.pdf"; // path inside public/
    link.download = "Faisal-Shaikh-Resume.pdf"; // filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mb-16 text-left max-w-4xl mx-auto">
      <div className="flex-row md:flex-col  items-start gap-6 mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="focus:outline-none">
              <Avatar className="w-16 h-16 cursor-pointer">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </button>
          </DialogTrigger>
          <DialogContent className="flex w-96 h-96 flex-col items-center justify-center bg-gray-900">
            {avatar && (
              <div className="relative w-80 h-80">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>
            )}
            <div className="mt-2 text-white font-semibold">{name}</div>
          </DialogContent>
        </Dialog>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-1">
            Howdy, {name.split(" ")[0]} here
          </h1>
          <p className="text-gray-400 mb-4">
            {isClient ? `How's your ${currentDay}?` : "How's your day?"} 👋
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">{bio}</p>

          <Button
            onClick={downloadResume}
            variant="outline"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg border border-gray-700"
          >
            Resume <MdOutlineFileDownload className="text-white" />
          </Button>
        </div>
      </div>

      {/* Company logos placeholder */}
      <div className="flex items-center gap-8 opacity-50">
        <div className="text-white text-sm">Previous Companies:</div>
        <div className="flex gap-6 items-center">
          <Link
            href="https://hipaas.com"
            target="_blank"
            className="text-gray-300 text-lg font-mono  hover:text-blue-400 hover:underline"
          >
            HiPaaS infotech{" "}
            <span className="text-gray-500 hover:no-underline">
              (Software Developer 2024 - 2025)
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
