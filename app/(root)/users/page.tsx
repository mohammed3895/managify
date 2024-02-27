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

const UsersPage = () => {
  return (
    <div className="w-full p-8 bg-gray-50">
      <Table className="w-full p-8 bg-white rounded-lg">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UserList.map((user, i) => (
            <TableRow key={i}>
              <TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
