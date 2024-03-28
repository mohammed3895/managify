import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Profile from "./Profile";
import BlogPage from "./BlogPage";
import { Link2, NotebookText, User, UserRound } from "lucide-react";
import ConnectionsPage from "./ConnectionsPage";

const ProfileDetails = () => {
  return (
    <div className="w-full h-max min-h-svh p-6 bg-white dark:bg-zinc-800 rounded-xl">
      <Tabs defaultValue="1">
        <TabsList
          className="w-fit flex items-center justify-start  bg-gray-50 dark:bg-zinc-700 gap-3"
          defaultValue="1"
        >
          <TabsTrigger
            value="1"
            className="px-5 py-2 flex items-center gap-2 font-medium text-sm"
          >
            <UserRound className="w-5 h-5" />
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="2"
            className="px-5 py-2 flex items-center gap-2 font-medium text-sm"
          >
            <NotebookText className="w-5 h-5" />
            Blog
          </TabsTrigger>
          <TabsTrigger
            value="3"
            className="px-5 py-2 flex items-center gap-2 font-medium text-sm"
          >
            <Link2 className="w-5 h-5" />
            Connections
          </TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <Profile />
        </TabsContent>
        <TabsContent value="2">
          <BlogPage />
        </TabsContent>
        <TabsContent value="3">
          <ConnectionsPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileDetails;
