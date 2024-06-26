import { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

// Components
import { ModeToggle } from "./ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

// Constants
import navlinks from "@/constants/navlinks";

// libs
import { cn } from "@/lib/utils";

import ProfileIMG from "@/assets/logo.jpg";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-4">
        <img
          src={ProfileIMG}
          alt="logo"
          className="h-8 w-auto shrink-0 object-contain"
        />
        <div className="hidden items-center gap-6 md:flex">
          {navlinks.map((link) => (
            <Link
              key={link}
              to={link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={() => setActiveLink(link)}
              className={cn(
                "cursor-pointer text-xs font-bold uppercase underline-offset-4 hover:text-primary hover:underline xl:text-sm",
                link === activeLink ? "text-primary underline" : "",
              )}
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <MenuNavbar />
        </div>
      </nav>
    </header>
  );
};

const MenuNavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-8 flex flex-col gap-1">
          {navlinks.map((link) => (
            <Link
              key={link}
              to={link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={() => setActiveLink(link)}
              className={cn(
                "rounded-md p-3 text-xs font-semibold uppercase hover:bg-primary sm:text-sm",
                link === activeLink ? "bg-primary" : "",
              )}
            >
              {link}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
