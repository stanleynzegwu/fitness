"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import BodyPart from "./bodyPart";

interface Props {
  data: string[];
  selectedBodyPart: string;
  setSelectedBodyPart: (setSelectedBodyPart: string) => void;
}

const slideLeft = () => {
  let slider = document.querySelector("#sliderr");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft - 200;
  }
};

const slideRight = () => {
  let slider = document.querySelector("#sliderr");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft + 200;
  }
};

const HorizontalScrollBar = ({ data, selectedBodyPart, setSelectedBodyPart }: Props) => {
  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideLeft}
      />
      <div
        id="sliderr"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {data.map((part, index) => (
          <BodyPart
            part={part}
            selectedBodyPart={selectedBodyPart}
            setSelectedBodyPart={setSelectedBodyPart}
            key={index}
          />
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideRight}
      />
    </div>
  );
};

export default HorizontalScrollBar;
