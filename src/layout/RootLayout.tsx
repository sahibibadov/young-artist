import AnimatedOutlet from "@/components/shared/animated-outled/AnimatedOutled";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <>
      <Toaster />
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </>
  );
}
