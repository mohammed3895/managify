import InfoCard from "@/components/profile/InfoCard";
import ProfileDetails from "@/components/profile/ProfileDetails";
import UserInfo from "@/components/profile/UserInfo";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="rounded-lg w-full flex flex-col  justify-start items-start gap-16 py-8 lg:px-28">
      <UserInfo />
      {/* <InfoCard /> */}
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
