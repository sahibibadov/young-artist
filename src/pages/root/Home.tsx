import AnimatedLayout from "@/components/shared/AnimatedLayout";
import Porducts from "@/components/shared/products/Porducts";
import AnimatedReveal from "@/components/shared/AnimationComponent";
const Home = () => {
   return (
      <AnimatedLayout>
         {/* hero */}
         <section className="container h-[calc(100vh-64px)]">
            <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-10 text-center">
               <AnimatedReveal delay={0.45} blur="6px">
                  <h1 className="mx-auto inline-flex max-w-6xl animate-shine bg-[linear-gradient(150deg,#c9c9c9,45%,#939393,55%,#9a9a9a)] bg-[length:200%_100%] bg-clip-text text-center font-serif text-4xl font-medium uppercase text-transparent md:text-8xl">
                     Xoş gəlmİşsİnİz young artİsts hub
                  </h1>
               </AnimatedReveal>
               <AnimatedReveal delay={0.65} blur="6px">
                  <p className="text-center text-2xl text-zinc-400">İncəsənətə yeni baxış</p>
               </AnimatedReveal>
            </div>
            <div className="bg-blur h-[calc(100vh-64px)]"></div>
         </section>

         {/* products */}
         <section className="container">
            <Porducts />
         </section>
      </AnimatedLayout>
   );
};

export default Home;
