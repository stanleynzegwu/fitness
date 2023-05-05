import Image from "next/image";
import Link from "next/link";

type Thumbnails = { url: string }[];

type YoutubeObj = {
  video: {
    channelName: string;
    videoId: string;
    thumbnails: Thumbnails;
    title: string;
  };
};

type Props = {
  exerciseVideos: YoutubeObj[];
  name: string;
};

const ExerciseVideos = ({ exerciseVideos, name }: Props) => {
  return (
    <section>
      <h2 className="capitalize text-xl sm:text-2xl font-bold mb-8 mx-4">
        watch {name} excercise videos
      </h2>
      <div className="flex justify-center lg:justify-between flex-wrap gap-6">
        {exerciseVideos.slice(0, 3).map(({ video }, index) => (
          <Link
            key={index}
            className="exercise-video flex flex-col items-center gap-4 p-2 border-t-2 border-red-500 hover:scale-105 ease-in-out duration-300 bg-[#fff]"
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={video.thumbnails[0].url}
              alt={video.title}
              width={200}
              height={200}
              className="w-[300px] h-[200px] md:w-[300px] md:h-[300px]"
            />
            <div className="flex flex-col gap-2">
              <span className="bg-[#EDD9E6] w-[300px] px-4 py-2 text-[#000000] capitalize font-semibold rounded-full">
                {video.title}
              </span>
              <span className="bg-[#8DB3E5] w-[300px] px-4 py-2 text-[#000000] capitalize font-semibold rounded-full">
                {video.channelName}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExerciseVideos;
