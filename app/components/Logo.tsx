import Image from "next/image";

export default function Logo({ size = "d" }) {
  return (
    <div className="logo flex justify-center md:justify-start">
      <Image
        src="/logo.svg"
        alt="euteamuuu logo"
        width={size == "d" ? 200 : 150}
        height={100}
      />
    </div>
  );
}
