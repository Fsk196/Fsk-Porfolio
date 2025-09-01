import { Button } from "./ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiDevicesDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-900/50 border-b border-gray-800 my-2 rounded-full px-6 py-2 flex items-center justify-between backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <PiDevicesDuotone className="text-blue-500" size={28} />
        <h2 className="text-white font-medium text-xl tracking-tight">
          Fsk.dev
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 flex items-center gap-2 transition-all duration-200">
          Resume
          <MdOutlineFileDownload className="text-white" />
        </Button>
        {/* <ThemeSwitcher /> */}
      </div>
    </div>
  );
};

export default Navbar;
