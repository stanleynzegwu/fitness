const Pricing = () => {
  return (
    <section className="px-8 min-h-screen flex flex-col gap-6 justify-center">
      <div className="mx-auto text-center">
        <h3 className="text-2xl font-bold capitalize">
          <span className="border-solid border-b-2 border-red-500">pricing</span> plan
        </h3>
        <p className="text-3xl font-bold capitalize">
          join our membership <br /> let's start
        </p>
      </div>
      {/* cards */}
      <div className="flex justify-between gap-4 lg:gap-10 w-full">
        {[
          { plan: "weekly", price: "$299", duration: "1 week memebership card" },
          { plan: "monthly", price: "$499", duration: "3 months memebership card" },
          { plan: "yearly", price: "$999", duration: "1 year memebership card" },
        ].map(({ plan, price, duration }, index) => (
          <div
            key={index}
            className="h-[400px] xl:h-[450px] max-w-[400px] rounded-t-full rounded-b-full odd:bg-[#FFF2F9] even:bg-purple-700 even:text-white p-6 flex flex-col justify-center items-center gap-6 w-1/3"
          >
            <span className="capitalize font-semibold">{plan} plan</span>
            <p>
              <span className="text-2xl font-bold">{price}/</span>
              {plan.split("ly")[0]}
            </p>
            <ul>
              <li>{duration}</li>
              <li>Spaces and group classes</li>
              <li>No time limit</li>
              <li>Whenever you like</li>
            </ul>
            <button className="bg-pink-500 text-white w-28 p-2 rounded-full">Join now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
