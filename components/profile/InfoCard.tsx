import React from "react";
import InfoText from "./InfoText";

const InfoCard = () => {
  return (
    <div className="w-full p-6 rounded-xl bg-white dark:bg-zinc-800 flex items-start justify-between gap-6 flex-wrap">
      <InfoText title="Name" info="John Doe" />
      <InfoText title="Email" info="john@doe.com" />
      <InfoText title="phone" info="+1 123 456 789" />
      <InfoText title="Adress" info="St. Vincent & Grenadines" />
    </div>
  );
};

export default InfoCard;
