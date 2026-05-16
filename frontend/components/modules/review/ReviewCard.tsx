import React from "react";
import Raiting from "../Raiting";

interface ReviewCardProps{
    name?:string,
    description?:string,
    rate?: number
}

const ReviewCard:React.FC<ReviewCardProps> = ({name,description,rate}) => {
  const vote = (rate || 1) * 20;
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-sm gap-2">
        <div className="relative">
          <div className="flex text-gray-300 text-lg">★★★★★</div>
          <div
            className="text-lg absolute top-0 left-0 overflow-hidden text-shop_light_green"
            style={{ width: `${vote}%` }}
          >
            ★★★★★
          </div>
        </div>
        <span>
          {name} - <span>{new Date().toLocaleDateString()}</span>{" "}
        </span>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default ReviewCard;
