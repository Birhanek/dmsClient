import React from "react";
import { DiagonalCutImageProps } from "../components/dataInterface";

const RectangularCut: React.FC<DiagonalCutImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden skew-y-6">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto transform skew-y-12"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 calc(100% - 50px))",
        }} // Adjust the value to change the cut
      />
    </div>
  );
};

export default RectangularCut;
