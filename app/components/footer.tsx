"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const data = [
  {
    id: 1,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 2,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 3,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 4,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 5,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 6,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 7,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 8,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 9,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
  {
    id: 10,
    img: "https://media.gettyimages.com/id/955410340/photo/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=9wljmRD9EagjknGCMVgozldB7mKPaIO7IXCfQ3N2ZQ8=",
  },
];

const slideLeft = () => {
  let slider = document.querySelector("#slider");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft - 500;
  }
};

const slideRight = () => {
  let slider = document.querySelector("#slider");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft + 500;
  }
};
const Footer = () => {
  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideLeft}
      />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {data.map((item, index) => (
          <img
            className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.img}
            alt="/j"
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

export default Footer;
