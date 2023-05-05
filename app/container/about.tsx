import Image from "next/image";
import Link from "next/link";
import { MdSportsGymnastics } from "react-icons/md";

const About = () => {
  return (
    <section className="px-8 min-h-screen flex flex-col-reverse lg:flex-row gap-6">
      <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-[50%] items-center justify-center">
        <div className="relative rounded-t-full rounded-b-full flex-1 h-[400px] lg:odd:bottom-20 max-w-[350px]">
          <img
            src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="fitnessntrainer"
            className="object-cover rounded-t-full rounded-b-full h-full min-h-[400px]"
          />
          <div className="flex absolute top-4 -right-[30px] bg-white rounded-md p-2 justify-center items-center">
            <MdSportsGymnastics className="mr-[5px]" />
            <span className="font-semibold">professional trainers</span>
          </div>
        </div>
        <div className="relative rounded-t-full rounded-b-full flex-1 h-[400px] lg:even:top-20 max-w-[350px]">
          <img
            src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="equipment"
            className="object-fill rounded-t-full rounded-b-full h-full min-h-[400px]"
          />
          <div className="flex absolute bottom-4 -left-[30px] bg-white rounded-md p-2 justify-center items-center">
            <MdSportsGymnastics className="mr-[5px]" />{" "}
            <span className="font-semibold">
              wide range
              <br /> of equipment
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center lg:items-start my-auto gap-5 lg:w-[50%]">
        <h3 className="text-2xl font-bold capitalize">
          <span className="border-solid border-b-2 border-red-500">About</span> us
        </h3>
        <p className="text-3xl font-bold">find quality facilities in each of our studios</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, exercitationem distinctio
          aliquid expedita dolores impedit quasi nesciunt ad assumenda maiores libero quisquam
          aliquam accusamus, perferendis quam amet tenetur harum vel.
        </p>
        <div className="flex gap-6">
          {[
            {
              num: "10+",
              text: "years of experience",
            },
            {
              num: "90%",
              text: "client satisfaction",
            },
          ].map(({ num, text }, index) => (
            <div key={index}>
              <span className="block text-pink-500 text-2xl font-bold w-full text-center">
                {num}
              </span>
              <p className="font-semibold w-full text-center">{text}</p>
            </div>
          ))}
        </div>
        <Link className="bg-pink-500 text-white text-center w-32 p-2 rounded-full" href="/about">
          About us
        </Link>
      </div>
    </section>
  );
};

export default About;
