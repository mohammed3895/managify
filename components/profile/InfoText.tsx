import React from "react";

interface InfoTextProps {
  title: string;
  info: string;
}

const InfoText = ({ title, info }: InfoTextProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <h1 className="text-xs capitalize font-bold text-zinc-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm capitalize font-normal text-zinc-700 dark:text-gray-50">
        {info}
      </p>
    </div>
  );
};

export default InfoText;
