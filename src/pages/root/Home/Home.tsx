import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import "./home.scss";
const Home = () => {
  return (
    <AnimatedLayout>
      {/* hero */}
      <section className="h-[100vh] md:h-[calc(100vh-64px)] bg ">
        <div className="text">
          <h1 className="font-serif uppercase text-4xl md:text-5xl text-center  max-w-6xl mx-auto">
            Xoş gəlmİşsİnİz young artİsts hub
          </h1>
          <p className="text-center">İncəsənətə yeni baxış</p>
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
