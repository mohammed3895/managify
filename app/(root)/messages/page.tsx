import SendersList from "@/components/messages/SendersList";
import React from "react";
import ChatScreenPage from "./[messageId]/page";

const MessagesPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex items-start justify-between gap-8">
      {children}
    </div>
  );
};

export default MessagesPage;
