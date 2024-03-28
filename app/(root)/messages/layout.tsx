import SendersList from "@/components/messages/SendersList";
import React from "react";
import "../../globals.css";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-start justify-between gap-9">
      <SendersList />
      {children}
    </section>
  );
};

export default MessagesLayout;
