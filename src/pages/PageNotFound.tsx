import AnimatedLayout from "@/components/shared/AnimatedLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <AnimatedLayout>
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className=" px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-zinc-800 ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-600 md:text-4xl ">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-zinc-500 ">
              Sorry, we can't find that page. You'll find lots to explore on the home page.{" "}
            </p>
            <Button asChild>
              <Link to="/">Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedLayout>
  );
};

export default PageNotFound;
