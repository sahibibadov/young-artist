import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";

const Navbar = () => {
  return (
    <header className="sticky top-0  backdrop-blur bg-background/60 border-b z-50">
      <div className="container flex items-center justify-between h-16">
        {/* logo */}
        <Link to="/" className="font-bold text-3xl font-serif">
          Young Artist Hub
        </Link>

        {/* navitems */}
        <nav className=" hidden md:flex items-center gap-6 h-full">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "relative h-full flex items-center text-foreground hover:text-muted-foreground",
                  {
                    "font-bold hover:text-foreground": isActive,
                  }
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      className="absolute h-0.5 left-0 -bottom-0.5 w-full bg-foreground"
                      layoutId="nav-item"
                      transition={{
                        duration: 0.3,
                        type: "tween",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* login register */}
        <div className="flex gap-2 items-center">
          {/* auth button */}
          <div className="mr-2  hidden md:flex  gap-2">
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* shoping button */}
          <Link to="#">
            <Heart />
          </Link>
          <CartSheet />

          {/* mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
