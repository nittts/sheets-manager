import { Flex } from "antd";

type IImagesPanel = {
  images: string[];
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
};

const imgStyles = { width: "100%", height: "100%", objectFit: "cover" };

function ImagesPanel(props: IImagesPanel) {
  const { images, height = "100%", width = "100%", style, ...rest } = props;

  const styles = {
    width,
    height,
    filter: "brightness(0.5)",
    ...style,
  };

  return (
    <Flex style={styles} {...rest}>
      {images.map((imgSrc) => (
        <img src={imgSrc} style={imgStyles} />
      ))}
    </Flex>
  );
}

export default ImagesPanel;
