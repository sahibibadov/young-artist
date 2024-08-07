import { Loader2 } from "lucide-react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white/20 backdrop-blur-md flex items-center justify-center">
      <Loader2 className="animate-spin size-8" />
    </div>
  );
};

export default Loading;
