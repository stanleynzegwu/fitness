// "use client";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// const FeatureCard = () => {
//   return (
//     <div className="w-[80%]">
//       <Swiper
//         loop
//         slidesPerView={1}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         grabCursor={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             //slidesPerGroup: 1,
//           },
//           700: {
//             slidesPerView: 2,
//             //slidesPerGroup: 1,
//           },
//           991: {
//             slidesPerView: 3,
//             //slidesPerGroup: 2,
//           },
//         }}
//         spaceBetween={20}
//         //   centeredSlides={true}
//         //   autoplay={{
//         //     delay: 5000,
//         //     disableOnInteraction: false,
//         //   }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className=" bg-slate-500"
//       >
//         {[
//           [
//             "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//             "Yoga",
//           ],
//           [
//             "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//             "Dance",
//           ],
//           [
//             "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
//             "Fitness",
//           ],
//           [
//             "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//             "Yoga",
//           ],
//         ].map(([img, name], index) => (
//           <SwiperSlide key={index} className="relative h-[400px]">
//             <Image
//               src={img}
//               alt="fitness"
//               width={300}
//               height={300}
//               className="object-cover lg:w-5/12 w-full h-full rounded-t-full"
//               //   style={{ position: "absolute", transform: "rotateY(180deg)", zIndex: "20" }}
//             />
//             <span className="absolute bottom-5 text-white text-lg">{name}</span>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FeatureCard;

const FeatureCard = () => {
  return (
    <div className="w-full md:w-[70%] h-screen flex items-center">
      <div className="flex items-center gap-6 h-full">
        {[
          [
            "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "Yoga",
          ],
          [
            "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "Dance",
          ],
          [
            "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=800",
            "Fitness",
          ],
          [
            "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "Yoga",
          ],
        ].map(([img, name], index) => (
          <div key={index} className="h-[400px] relative even:top-5 odd:bottom-5">
            <img
              src={img}
              alt="fitness"
              className="object-cover  h-full rounded-t-full"
              //   style={{ position: "absolute", transform: "rotateY(180deg)", zIndex: "20" }}
            />
            <span className="absolute bottom-5 text-white text-lg">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
