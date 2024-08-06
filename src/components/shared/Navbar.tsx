import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";
import BlurFade from "./BLurFade";

const Navbar = () => {
  return (
    <header className="sticky top-0  backdrop-blur bg-background/60 border-b z-50">
      <BlurFade yOffset={0} delay={0.3} inView>
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
                        className="absolute -inset-x-2 rounded-md inset-y-4 bg-muted-foreground/20"
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
      </BlurFade>
    </header>
  );
};

export default Navbar;
