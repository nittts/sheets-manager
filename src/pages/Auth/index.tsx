import ImagesPanel from "@/components/ui/ImagesPanel";
import { Outlet } from "react-router-dom";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

function Auth() {
  return (
    <div>
      <ImagesPanel
        images={slideImages}
        width="100%"
        height="100%"
        style={{ filter: "brightness(0.1)", position: "fixed", zIndex: -1 }}
      />
      <Outlet />
    </div>
  );
}

export default Auth;
