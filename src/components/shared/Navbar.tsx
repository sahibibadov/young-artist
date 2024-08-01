import { Link, NavLink } from "react-router-dom";
import { navlinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart.store";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const cart = useCart((state) => state.cart);
  const cartCount = cart.length;
  return (
    <header className="sticky top-0  backdrop-blur bg-background/10 border-b ">
      <div className="container flex items-center justify-between h-16">
        {/* logo */}
        <Link to="/" className="font-bold text-3xl font-serif">
          Logo
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
                      className="absolute h-0.5 left-0 bottom-0 w-full bg-foreground"
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
            <Button asChild variant="outline">
              <Link to="/register">Register</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/login">Login</Link>
            </Button>
          </div>

          {/* shoping button */}
          <Link to="#">
            <Heart />
          </Link>
          <Link to="#" className="relative">
            <ShoppingCart />
            <span className="absolute -top-1 -right-1 border border-foreground bg-background rounded-full h-4 px-1 text-sm flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {/* mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
