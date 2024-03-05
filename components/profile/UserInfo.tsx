import { UserProfile } from "@clerk/nextjs";
import { Check, Plus } from "lucide-react";
import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="w-full py-12 px-6 rounded-xl flex-col-center-start relative bg-[url(../public/profilebg.jpg)] bg-center bg-cover">
      <Image
        src="https://randomuser.me/api/portraits/men/14.jpg"
        alt="User Avatar"
        width={100}
        height={100}
        className="w-20 h-20 rounded-full border-[3px] border-gray-50 absolute -bottom-8 left-8"
      />
      <h2 className="text-2xl capitalize font-semibold text-white">John doe</h2>
      <p className="text-sm text-white drop-shadow-xl dark:text-gray-400 mt-1">
        john@doe.com
      </p>
      <p className="text-sm font-normal text-white drop-shadow-lg dark:text-gray-400 mt-1 mb-12">
        St. Vincent & Grenadines
      </p>
    </div>
  );
};

export default UserInfo;
