import { FeatureCard, ContainerWrapper } from "../components";

const Feature = () => {
  return (
    <ContainerWrapper>
      <section
        className="px-8 min-h-screen bg-gradient-to-br from-[#F7FDFF] to-[#FFF2F9] flex flex-col lg:flex-row"
        id="features"
      >
        <div className="flex flex-col w-full items-center lg:items-start lg:w-[30%] my-auto gap-5">
          <h3 className="text-2xl font-bold capitalize">
            <span className="border-solid border-b-2 border-red-500">our</span> features
          </h3>
          <p className="text-3xl font-bold capitalize">
            find quality facilities in each of our studios
          </p>
          <button className="bg-purple-700 text-white w-32 p-2 rounded-full">Read more</button>
        </div>

        {/* div */}
        <FeatureCard />
      </section>
    </ContainerWrapper>
  );
};

export default Feature;
