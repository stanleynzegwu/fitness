// "use client";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// import { data } from "../constants";

// const slideLeft = () => {
//   let slider = document.querySelector("#slider");
//   if (slider) {
//     slider.scrollLeft = slider.scrollLeft - 200;
//   }
// };

// const slideRight = () => {
//   let slider = document.querySelector("#slider");
//   if (slider) {
//     slider.scrollLeft = slider.scrollLeft + 200;
//   }
// };

// const Feature = () => {
//   return (
//     <div className="w-full max-md:h-[450px] md:w-[70%] relative flex items-center">
//       <MdChevronLeft
//         className="hidden md:inline-block opacity-50 cursor-pointer hover:opacity-100"
//         size={40}
//         onClick={slideLeft}
//       />
//       <div
//         id="slider"
//         className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide overflow-y-hidden"
//       >
//         {data.map(([img, name], index) => (
//           <div
//             key={index}
//             className="w-[300px] inline-block p-0 mx-4 cursor-pointer hover:scale-105 ease-in-out duration-300 h-full relative even:top-5 odd:bottom-5"
//           >
//             <img
//               src={img}
//               alt="fitness"
//               className="absolute top-[50%] -translate-y-[50%] object-cover  h-[400px] w-[300px] rounded-t-full"
//             />
//             <span className="absolute bottom-[10%] md:bottom-[20%] left-[50%] -translate-x-[50%] text-white text-lg">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//       <MdChevronRight
//         className="hidden md:inline-block opacity-50 cursor-pointer hover:opacity-100"
//         size={40}
//         onClick={slideRight}
//       />
//     </div>
//   );
// };

// export default Feature;

"use client";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { data } from "../constants";

const slideLeft = () => {
  let slider = document.querySelector("#slider");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft - 200;
  }
};

const slideRight = () => {
  let slider = document.querySelector("#slider");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft + 200;
  }
};

const FeatureCard = () => {
  return (
    <div className="w-full max-lg:h-[450px] lg:w-[70%] relative flex items-center">
      <MdChevronLeft
        className="hidden lg:inline-block opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideLeft}
      />
      <div
        id="slider"
        className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide overflow-y-hidden"
      >
        {data.map(([img, name], index) => (
          <div
            key={index}
            className="w-[300px] inline-block p-0 mx-4 cursor-pointer hover:scale-105 ease-in-out duration-300 h-full relative even:top-5 odd:bottom-5"
          >
            <img
              src={img}
              alt="fitness"
              className="absolute top-[50%] -translate-y-[50%] object-cover  h-[400px] w-[300px] rounded-t-full"
            />
            <span className="absolute bottom-[10%] lg:bottom-[20%] left-[50%] -translate-x-[50%] text-white text-lg">
              {name}
            </span>
          </div>
        ))}
      </div>
      <MdChevronRight
        className="hidden lg:inline-block opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideRight}
      />
    </div>
  );
};

export default FeatureCard;
