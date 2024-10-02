import React from "react";
import { DiagonalCutImageProps } from "../components/dataInterface";

const RectangularCut: React.FC<DiagonalCutImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden skew-x-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-3/4 transform skew-y-0"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%))",
        }} // Adjust the value to change the cut
      />
    </div>
  );
};

export default RectangularCut;
