import SendersList from "@/components/messages/SendersList";
import React from "react";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-between gap-9">
      <SendersList />
      {children}
    </div>
  );
};

export default MessagesLayout;
