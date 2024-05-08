import { CreateSheetPayload } from "@/@types/sheets";
import NewSheetForm from "@/components/ui/Form/Form.newSheet";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useCreateSheet } from "@/services/hooks/sheets";
import { FeedbackUtils } from "@/utils/feedback";
import { Button, Drawer } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function SheetsCreate() {
  const { createSheet } = useCreateSheet();
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const language = useLanguage();

  const onFinish = async (payload: CreateSheetPayload) => {
    const createSheetPromise = createSheet(payload).then(() =>
      navigate(pathname, { replace: true }),
    );

    FeedbackUtils.promiseToast(createSheetPromise, language.createSheetMsgs);
  };

  return (
    <Drawer open={!!hash} title="new character sheet">
      <NewSheetForm onFinish={onFinish} />
    </Drawer>
  );
}

export default SheetsCreate;
