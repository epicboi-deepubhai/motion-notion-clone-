import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56">
          <Image
            src="/documents.png"
            alt="Documents"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            alt="Documents"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative w-56 h-56 hidden md:block">
          <Image
            src="/reading.png"
            alt="Reading"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            alt="Reading"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};