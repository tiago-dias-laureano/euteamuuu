import React from "react";
import Image from "next/image";

const Header: React.FC = () => (
  <header className="flex justify-center pt-4">
    <Image src="/logo.svg" alt="euteamuuu logo" width={200} height={100} />
  </header>
);

export default Header;
