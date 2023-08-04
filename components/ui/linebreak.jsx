import Image from "next/image";

const LineBreak = ({ src }) => {
  return (
    <div className="flex items-center justify-center pt-5">
      <div className="flex-grow h-px my-8 bg-gray-200 dark:bg-gray-700"></div>
      <div className="px-10 w-40 h-40 relative">
        <Image
          src={src}
          alt="rosemary"
          fill
          style={{ objectFit: "scale-down" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex-grow h-px my-8 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
}

export default LineBreak;
