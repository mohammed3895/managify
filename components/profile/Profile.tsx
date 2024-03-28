import { AboutInfo } from "@/constants/profile";
import { SendHorizonal, UsersRound } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Profile = () => {
  return (
    <div className="w-full py-8">
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full flex flex-col items-start border rounded-lg p-4 my-8 lg:my-0">
          <div className="flex flex-col items-start justify-start gap-3 p-4">
            <h1 className="text-lg text-zinc-900 font-semibold">About</h1>
            <p className="text-sm text-zinc-500 leading-relaxed w-3/4 mb-3">
              Tart I love sugar plum I love oat cake. Sweet roll caramels I love
              jujubes. Topping cake wafer..
            </p>
            {AboutInfo.map((info, i) => (
              <div
                key={i}
                className="w-full flex items-center justify-start gap-6 py-1.5"
              >
                <span className="text-primary">{<info.icon />}</span>
                <h3 className="font-semibold text-base">{info.data}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col items-center rounded-lg">
          <div className="w-full border rounded-lg flex flex-col items-start justify-start gap-2">
            <div className="w-full flex items-center justify-center gap-8 rounded-lg">
              <div className="flex flex-col items-center justify-center px-12 py-6 w-full">
                {/* <UsersRound className="mb-3 text-muted-foreground" /> */}
                <h1 className="text-2xl font-bold text-primary">1.5K</h1>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
              <div className="h-16 w-px bg-accent" />
              <div className="flex flex-col items-center justify-center px-12 py-6 w-full">
                {/* <UsersRound className="mb-3 text-muted-foreground" /> */}
                <h1 className="text-2xl font-bold text-primary">2.6K</h1>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 border rounded-lg p-4">
            <div className="w-full h-full flex flex-col">
              <textarea
                rows={6}
                placeholder="What is in your mind ..."
                className="w-full resize-none p-4 text-sm text-zinc-800 bg-gray-50 dark:bg-zinc-700 dark:border-gray-500 rounded-lg focus:border-primary dark:focus:border-primary focus:outline-none outline-none border border-gray-100"
              />
              <div className="mt-3">
                <Button className="text-sm font-medium flex gap-3 text-white">
                  Post
                  <SendHorizonal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
