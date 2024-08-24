import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[36rem] xl:h-[36rem]">
        <Image
          src="/welcome.png"
          alt="Motion"
          fill
          className=" dark:hidden"
        />
        <Image
          src="/welcome-dark.png"
          alt="Motion"
          fill
          className=" hidden dark:block"
        />
      </div>
    </div>
  );
};
