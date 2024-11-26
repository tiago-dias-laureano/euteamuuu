import Image from "next/image";

export default function Phone() {
  return(
    <div className="md:w-[45%] w-full">
      <Image
        src="/hero.png"
        alt="image example"
        layout="intrinsic"
        width={2500}
        height={2500}
        objectFit="contain" // Ajusta o tamanho dentro do container
      />
    </div>
  );
}
