import { Image } from "antd";

const slideImages = Object.keys(import.meta.glob("/public/slides/*.jpeg", { eager: true }));

function SheetCardCover() {
  const randomIdx = Math.ceil(Math.random() * slideImages.length - 1);

  return (
    <div style={{ maxHeight: "4em", overflow: "hidden" }}>
      <Image src={slideImages[randomIdx]} preview={false} />
    </div>
  );
}

export default SheetCardCover;
