"use client";

import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    testimony:
      "I've been going to this fitness office for a few months now and I have never felt better! The trainers are knowledgeable and supportive, and the workouts are challenging but always leave me feeling accomplished. Thanks to this app, I've been able to track my progress and see real results. Highly recommend!",
    name: "Mary Jane",
    country: "USA",
  },
  {
    testimony:
      "As someone who struggles with staying motivated to exercise, this app has been a game changer for me. The personalized workout plans and reminders keep me on track, and the community support from other app users is so encouraging. I've already noticed a significant improvement in my strength and endurance. So grateful for this fitness office!",
    name: "Mary Jane",
    country: "USA",
  },
  {
    testimony:
      "I've tried a lot of different fitness programs and apps, but this one is hands down the best. The variety of workouts and challenges keep things interesting, and the ability to track my progress and see how I'm improving over time is really motivating. Plus, the trainers are so supportive and really know their stuff. I would recommend this app to anyone looking to improve their fitness.Lorem ipsum dolor s",
    name: "John Dane",
    country: "USA",
  },
  {
    testimony:
      "I was a little hesitant to try this app at first, but I'm so glad I did. The workouts are tough, but they're also really fun and I always leave feeling energized. The app itself is super user-friendly and I love being able to easily customize my workouts and track my progress. Overall, I'm really impressed with this fitness office and would definitely recommend it to others",
    name: "Bary Jane",
    country: "USA",
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="absolute w-[90%] sm:w-[70%] md:w-[50%] h-[50%] bottom-10 left-1/2 transform translate-x-[-50%] p-8 bg-white rounded-md flex flex-col justify-center">
      <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <p>{slides[currentIndex].testimony}</p>
          <span className="block font-bold mt-12">{slides[currentIndex].name}</span>
          <span className="block">{slides[currentIndex].country}</span>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((_, slideIndex) => (
            <div
              className="text-2xl cursor-pointer"
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
            >
              <RxDotFilled
                className={`${currentIndex === slideIndex ? "opacity-100" : "opacity-50"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
