import { Flex } from "antd";

type IImagesPanel = {
  images: string[];
  width: string | number;
  height: string | number;
  style: React.CSSProperties;
};

function ImagesPanel({ images, height, width, style, ...props }: IImagesPanel) {
  return (
    <Flex
      style={{
        width,
        height,
        filter: "brightness(0.5)",
        ...style,
      }}
      {...props}
    >
      {images.map((imgSrc) => (
        <img
          src={imgSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ))}
    </Flex>
  );
}

export default ImagesPanel;
