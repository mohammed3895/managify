import { UserProfile } from "@clerk/nextjs";
import { Check, Plus } from "lucide-react";
import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="w-full lg:w-[300px] h-[450px] rounded-xl flex-col-center bg-white">
      <Image
        src="https://randomuser.me/api/portraits/men/14.jpg"
        alt="User Avatar"
        width={100}
        height={100}
        className="w-20 h-20 rounded-full"
      />
      <h2 className="text-xl capitalize font-semibold text-gray-800 mt-6">
        John doe
      </h2>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
        john@doe.com
      </p>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center justify-center gap-3 border rounded-xl">
          Following
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
