import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = () => {
  let list = [
    "We're sorry to hear that you had bad experience",
    "We apolagize for the inconvenience you experienced.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appraciate your support!",
    "Excellent! We're thrilled to hear you had such a positive experience.Thank you for choosing our platform",
  ];
  const [rating, setRating] = useState(0);
  return (
    <div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              size={32}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            />
          );
        })}
      </div>
      <div className="result">{list[rating-1]}</div>
    </div>
  );
};
