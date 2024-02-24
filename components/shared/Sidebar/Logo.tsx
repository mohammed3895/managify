import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-bold uppercase text-primary font-sans mb-8"
    >
      Managify
    </Link>
  );
};

export default Logo;
