// import FeatureCard from "../components/featureCard";

// const Feature = () => {
//   return (
//     <section className="px-8 min-h-screen bg-gradient-to-br from-[#F7FDFF] to-[#FFF2F9] flex flex-col md:flex-row">
//       <div className="flex flex-col w-full items-center md:items-start md:w-[30%] my-auto gap-5">
//         <h3 className="text-2xl font-bold capitalize">
//           <span className="border-solid border-b-2 border-red-500">our</span> features
//         </h3>
//         <p className="text-3xl font-bold">find quality facilities in each of our studios</p>
//         <button className="bg-purple-700 text-white w-32 p-2 rounded-full">Read more</button>
//       </div>
//       {/* div */}

//       <FeatureCard />
//     </section>
//   );
// };

// export default Feature;

import FeatureCard from "../components/featureCard";

const Feature = () => {
  return (
    <section className="px-8 min-h-screen bg-gradient-to-br from-[#F7FDFF] to-[#FFF2F9] flex flex-col md:flex-row">
      <div className="flex flex-col w-full items-center md:items-start md:w-[30%] my-auto gap-5">
        <h3 className="text-2xl font-bold capitalize">
          <span className="border-solid border-b-2 border-red-500">our</span> features
        </h3>
        <p className="text-3xl font-bold">find quality facilities in each of our studios</p>
        <button className="bg-purple-700 text-white w-32 p-2 rounded-full">Read more</button>
      </div>

      {/* div */}
      <FeatureCard />
    </section>
  );
};

export default Feature;
