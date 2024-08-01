import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";

const Home = () => {
  return (
    <AnimatedLayout>
      {/* hero */}
      <section className="h-[60vh] md:h-[calc(100vh-64px)] ">
        <h1 className="font-serif uppercase text-4xl md:text-7xl text-center pt-44 px-8 max-w-5xl mx-auto">
          Xoş gəlmİşsİnİz young artİsts hub
        </h1>
      </section>

      {/* products */}
      <section className="container">
        <Porducts />
      </section>
    </AnimatedLayout>
  );
};

export default Home;
