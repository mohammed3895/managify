import { Cable } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-bold uppercase text-primary flex items-center justify-center gap-3 mb-8"
    >
      <Cable /> Managify
    </Link>
  );
};

export default Logo;
