import { DiagonalCutImageProps } from "../components/dataInterface";

const DiagonalCutImage: React.FC<DiagonalCutImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto transform skew-y-12"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px))",
        }} // Adjust the value to change the cut
      />
    </div>
  );
};

export default DiagonalCutImage;
