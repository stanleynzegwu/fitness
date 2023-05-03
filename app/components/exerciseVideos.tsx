import Image from "next/image";
import Link from "next/link";

type Thumbnails = { url: string }[];

type YoutubeObj = {
  video: {
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
      <h2>watch {name} excercise videos</h2>
      <div>
        {exerciseVideos.slice(0, 3).map(({ video }, index) => (
          <Link
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={video.thumbnails[0].url} alt={video.title} width={200} height={200} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExerciseVideos;
