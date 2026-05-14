import { Loader2 } from "lucide-react";
import React from "react";

const Loading = ({title}:{title:string}) => {
  return (
    <div className="min-h-80 flex bg-gray-200 rounded-md animate-pulse items-center w-full justify-center mt-6">
      <div className="flex gap-1 items-center">
        <Loader2 className="animate-spin" />
        <p className="text-sm text-gray-500">{title} is Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
