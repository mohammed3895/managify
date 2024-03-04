import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserList } from "@/constants/users";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoreVertical, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const UsersPage = () => {
  return (
    <div className="w-full p-8 bg-gray-50">
      <div className="flex-row-between py-6 my-6">
        <h1 className="text-3xl font-bold text-center md:text-left">Users</h1>
        <Button className="flex-center gap-2 text-base font-medium">
          <Plus /> Add User
        </Button>
      </div>
      <Table className="w-full p-8 bg-white rounded-lg">
        <TableCaption>A list of Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UserList.map((user, i) => (
            <TableRow key={i}>
              <TableCell className="flex items-center justify-start gap-4">
                <Input className="w-4 h-4" type="checkbox" />
                <Image
                  src={user.photoUrl}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full"
                />
                <h1 className="text-base font-semibold tracking-wide capitalize text-zinc-900">
                  {user.name}
                </h1>
              </TableCell>
              <TableCell className="text-sm font-medium capitalize text-zinc-800">
                {user.phoneNumber}
              </TableCell>
              <TableCell>
                <h3 className="text-sm font-medium capitalize text-zinc-800">
                  {user.role}
                </h3>
              </TableCell>
              <TableCell>
                <div
                  className={cn(
                    "px-2 py-1 rounded-md text-xs w-fit font-semibold capitalize",
                    {
                      "text-green-600 bg-green-400/25":
                        user.status === "active",
                    },
                    { "text-red-600 bg-red-400/25": user.status === "banned" }
                  )}
                >
                  {user.status}
                </div>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <MoreVertical className="text-zinc-700" />
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col items-center w-28 p-1">
                    <Button variant="ghost" className="w-full text-yellow-600">
                      Edit
                    </Button>
                    <Button variant="ghost" className="w-full text-red-600">
                      Delete
                    </Button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
