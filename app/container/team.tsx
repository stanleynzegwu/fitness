const Team = () => {
  return (
    <section className="px-8 min-h-screen flex flex-col gap-6 bg-gradient-to-br from-[#FFF2F9] to-[#F7FDFF] justify-center">
      <div className="mx-auto text-center">
        <h3 className="text-2xl font-bold capitalize">
          <span className="border-solid border-b-2 border-red-500">our</span> team
        </h3>
        <p className="text-3xl font-bold capitalize">dedicated and professional trainers</p>
      </div>
      <div className="flex justify-between gap-4 lg:gap-10 w-full">
        {[
          {
            img: "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "vlamdMir Putin",
            role: "manager fitness studio",
          },
          {
            img: "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "vlamdMir Putin",
            role: "manager fitness studio",
          },
          {
            img: "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "vlamdMir Putin",
            role: "manager fitness studio",
          },
        ].map(({ img, name, role }, index) => (
          <div key={index} className="text-center w-1/3">
            <div className="h-[400px] xl:h-[450px] max-w-[400px] bg-blue-400 rounded-t-full w-full">
              <img src={img} alt="trainer" className="h-full rounded-t-full w-full" />
            </div>
            <span className="block font-semibold">{name}</span>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
