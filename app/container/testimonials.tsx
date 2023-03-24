const Testimonial = () => {
  return (
    <section className="relative px-8 min-h-screen h-screen flex flex-col-reverse max-md:items-center md:flex-row gap-16 bg-gradient-to-br from-[#F7FDFF] to-[#FFF2F9] pt-16">
      <div className="w-[40%] h-[100%] my-auto flex flex-col justify-end">
        <div className="hidden md:block w-[90%] h-full rounded-t-full bg-yellow-400">
          <img
            src="/assets/modelGroup.png"
            alt="fitness trainee"
            className="w-full object-cover h-full rounded-t-full"
          />
        </div>
      </div>
      <div className="w-full md:pt-8 md:w-[60%] max-md:text-center">
        <h3 className="text-2xl font-bold capitalize">
          <span className="border-solid border-b-2 border-red-500">Clients</span> Testimonials
        </h3>
        <p className="text-3xl font-bold capitalize">
          that's what our super
          <br /> clients says
        </p>
      </div>
      {/* testimonial card */}
      <div className="absolute w-[90%] sm:w-[70%] md:w-[50%] h-[50%] bottom-10 left-1/2 transform translate-x-[-50%] p-8 bg-white rounded-md flex flex-col justify-center">
        <p>
          <b>"</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores placeat
          unde repellat voluptas esse hic temporibus aperiam? Enim dolore possimus neque harum
          similique molestiae quasi non velit porro voluptates.<b>"</b>
        </p>
        <span className="block font-bold mt-12">Jessica Parker</span>
        <span className="block">Maryland, USA</span>
      </div>
    </section>
  );
};

export default Testimonial;
