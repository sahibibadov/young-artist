import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
import BlurFade from "@/components/shared/BLurFade";
const Home = () => {
  return (
    <AnimatedLayout>
      {/* hero */}
      <section className="h-[100vh] md:h-[calc(100vh-64px)] bg ">
        <div className="text">
          <BlurFade delay={0.45} inView>
            <h1 className="font-serif uppercase text-4xl md:text-5xl text-center  max-w-6xl mx-auto">
              Xoş gəlmİşsİnİz young artİsts hub
            </h1>
          </BlurFade>
          <BlurFade delay={0.65} inView>
            <p className="text-center">İncəsənətə yeni baxış</p>
          </BlurFade>
        </div>
        <div className="h-[100vh] md:h-[calc(100vh-64px)] bg-blur"></div>
      </section>

      {/* products */}
      <section className="container">
        <Porducts />
      </section>
    </AnimatedLayout>
  );
};

export default Home;
