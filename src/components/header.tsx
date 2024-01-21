import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RocketIcon } from "lucide-react";
import { Separator } from "./ui/separator";
const Header = () => {
  return (
    <header className="p-6 flex justify-center items-center space-x-4">
      <div className="flex items-center space-x-2">
        <RocketIcon className="text-blue-500 h-6 w-6" />
        <h1 className="text-xl font-bold">FocusFry</h1>
      </div>
      <nav className="px-10 flex items-center space-x-8">
        <Link className="text-lg hover:text-blue-500" href="#">
          Calendar
        </Link>
        <Link className="text-lg hover:text-blue-500" href="#">
          Projects
        </Link>
        <Link className="text-lg hover:text-blue-500" href="#">
          Reports
        </Link>
        <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
      </nav>
    </header>
  );
};
export default Header;
