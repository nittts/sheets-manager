import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import DescriptiveIcon from "../../DescriptiveIcon";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useDeleteSheet } from "@/services/hooks/sheets";
import { FeedbackUtils } from "@/utils/feedback";

function SheetsActions(id: string) {
  const language = useLanguage();
  const navigate = useNavigate();
  const { deleteSheet } = useDeleteSheet();

  const onDelete = () => {
    const deleteSheetPromise = deleteSheet(id)

    FeedbackUtils.promiseToast(deleteSheetPromise, language.deleteSheetMsgs)
  }

  const onClick = (key: "C" | "E" | "D") => {
    switch (key) {
      case "C":
        return navigate(`/dashboard/characters#create?sheetId=${id}`);
      case "E":
        return navigate(`/dashboard/editor?sheeId=${id}`);
      case "D":
        return onDelete();
    }
  };

  const actions = [
    <DescriptiveIcon
      type="primary"
      title={language.newChar}
      icon={<PlusOutlined />}
      onClick={() => onClick("C")}
    />,
    <DescriptiveIcon
      type="link"
      title={language.edit}
      icon={<EditOutlined />}
      onClick={() => onClick("E")}
    />,
    <DescriptiveIcon
      type="primary"
      title={language.del}
      danger
      icon={<DeleteOutlined />}
      onClick={() => onClick("D")}
    />,
  ];

  return actions;
}

export default SheetsActions;
