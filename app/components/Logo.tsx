import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo flex justify-center md:justify-start">
      <Image
        src="/logo.svg"
        alt="euteamuuu logo"
        width={200}
        height={100}
      />
    </div>
  )
}
