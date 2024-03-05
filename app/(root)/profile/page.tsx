import InfoCard from "@/components/profile/InfoCard";
import ProfileDetails from "@/components/profile/ProfileDetails";
import UserInfo from "@/components/profile/UserInfo";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="rounded-lg w-full h-full flex flex-col  justify-start items-start gap-16">
      <UserInfo />
      <InfoCard />
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
