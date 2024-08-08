import AnimatedOutlet from "@/components/shared/animated-outled/AnimatedOutled";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <>
      <Toaster richColors />
      <Navbar />
      <div className="flex flex-col h-full">
        <main className="flex-1">
          <AnimatedOutlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
