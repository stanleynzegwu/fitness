import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-200 text-black w-28 p-2 font-semibold rounded-full"
      type="button"
      onClick={() => router.back()}
    >
      Go back
    </button>
  );
};

export default BackButton;
