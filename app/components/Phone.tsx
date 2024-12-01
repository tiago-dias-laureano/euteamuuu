import Image from "next/image";

export default function Phone({ className }: { className?: string }) {
  return (
    <div
      className={`w-[350px] md:w-[500px] lg:w-[600px] drop-shadow-xl ${className}`}
    >
      <Image
        src="/hero.png"
        alt="image example"
        layout="intrinsic"
        width={2500}
        height={2500}
        objectFit="contain"
      />
    </div>
  );
}
