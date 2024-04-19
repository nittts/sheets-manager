import { Image } from "antd";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

function RecentSheetCardCover() {
  const randomIdx = Math.ceil((Math.random() * slideImages.length) - 1);

  console.log(randomIdx);

  return (
    <div
      style={{
        maxHeight: "4em",
        overflow: "hidden",
        objectFit: "70%",
      }}
    >
      <Image src={slideImages[randomIdx]} preview={false} />
    </div>
  );
}

export default RecentSheetCardCover;
