import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full backdrop-blur-lg bg-white/10 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
      <Loader2 strokeWidth={1} className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default Loading;
