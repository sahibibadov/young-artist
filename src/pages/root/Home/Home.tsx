import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
import AnimatedReveal from "@/components/shared/AnimationComponent";
const Home = () => {
  return (
    <AnimatedLayout>
      {/* hero */}
      <section className="h-[calc(100vh-64px)] bg mt-16 ">
        <div className="text">
          <AnimatedReveal delay={0.45} blur="6px">
            <h1 className="font-medium inline-flex animate-shine bg-[linear-gradient(110deg,#efefef,45%,#b9b9b9,55%,#b3b3b3)] bg-[length:200%_100%] text-transparent bg-clip-text font-serif uppercase text-4xl md:text-5xl text-center  max-w-6xl mx-auto">
              Xoş gəlmİşsİnİz young artİsts hub
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.65} blur="6px">
            <p className="text-center">İncəsənətə yeni baxış</p>
          </AnimatedReveal>
        </div>
        <div className="h-[calc(100vh-64px)] bg-blur"></div>
      </section>

      {/* products */}
      <section className="container">
        <Porducts />
      </section>
    </AnimatedLayout>
  );
};

export default Home;
