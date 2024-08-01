import AnimatedOutlet from "@/components/shared/animated-outled/AnimatedOutled";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </>
  );
}
