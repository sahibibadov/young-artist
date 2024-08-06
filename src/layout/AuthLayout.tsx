import AnimatedOutlet from "@/components/shared/animated-outled/AnimatedOutled";
import { Toaster } from "@/components/ui/sonner";
export default function Authlayout() {
  return (
    <>
      <Toaster position="top-right" />
      <AnimatedOutlet />
    </>
  );
}
