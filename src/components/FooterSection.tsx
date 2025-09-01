import { RiLinkedinLine, RiGithubLine, RiInstagramLine } from "react-icons/ri";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="mb-16">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <Link
          href="https://github.com/fsk196"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <RiGithubLine className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/shaikh-faisal-709aa3218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzJHbbqgXTaaRIcupbSkq%2FA%3D%3D"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <RiLinkedinLine className="w-6 h-6" />
        </Link>

        <Link
          href="https://www.instagram.com/ig_fsk/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <RiInstagramLine className="w-6 h-6" />
        </Link>
      </div>

      {/* Signature */}
      <div className="text-center">
        <div className="mb-4">
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            className="mx-auto"
            fill="none"
          >
            <path
              d="M10 30 Q 30 10, 50 20 Q 70 30, 90 15 Q 100 25, 110 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
              fill="none"
            />
          </svg>
        </div>
        <p className="text-white font-medium mb-1">Thanks for Visiting.</p>
        <p className="text-gray-400 text-sm">Keep building.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
