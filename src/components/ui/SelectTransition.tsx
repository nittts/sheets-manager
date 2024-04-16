import { useLanguage } from "@/providers/provider/LanguageProvider";
import {
  useDisablePageTransition,
  useUpdateDisablePageTransition,
} from "@/stores/preferences";
import { Button } from "antd";

function SelectTransition() {
  const disablePageTransition = useDisablePageTransition();
  const updateDisableTransition = useUpdateDisablePageTransition();
  const { disableTransition } = useLanguage();

  return (
    <Button
      block
      type={disablePageTransition ? "primary" : "default"}
      onClick={() => {
        updateDisableTransition();
      }}
    >
      {disableTransition}
    </Button>
  );
}

export default SelectTransition;
