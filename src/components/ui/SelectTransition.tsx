import { useLanguage } from "@/providers/provider/LanguageProvider";
import {
  useDisablePageTransition,
  useUpdateDisablePageTransition,
} from "@/stores/preferences";
import { Button } from "antd";

function SelectTransition() {
  const disablePageTransition = useDisablePageTransition();
  const updateDisableTransition = useUpdateDisablePageTransition();
  const { disableTransition, enableTransition } = useLanguage();

  return (
    <Button
      block
      type={disablePageTransition ? "primary" : "default"}
      onClick={() => {
        updateDisableTransition();
      }}
    >
      {disablePageTransition ? enableTransition : disableTransition}
    </Button>
  );
}

export default SelectTransition;
