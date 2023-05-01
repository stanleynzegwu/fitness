"use client";

import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    url: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    url: "https://e0.365dm.com/21/05/2048x1152/skysports-thomas-tuchel-chelsea_5400225.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Frank_Lampard_2019.jpg",
  },
  {
    url: "https://www.shutterstock.com/image-photo/barcelona-sep-14-ansu-fati-260nw-1512923084.jpg",
  },
];

const about = () => {
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
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

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
  );
};

export default about;
