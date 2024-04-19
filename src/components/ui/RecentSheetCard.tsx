import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import DescriptiveIcon from "./DescriptiveIcon";

import RecentSheetCardDescription from "./RecentSheetCard.description";
import RecentSheetCardTags from "./RecentSheetCard.tags";
import RecentSheetCardCover from "./RecentSheetCard.cover";

const { Grid } = Card;

const descriptionStyle = { width: "100%", padding: "4px" };
const cardStyle = {
  width: '100%',
  minWidth: "25em",
  maxWidth: "35em",
  maxHeight: "30em",
};
const previewStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  width: "100%",
  minHeight: "3em",
  overflow: "auto",
};

function RecentSheetCard() {
  const actions = [
    <DescriptiveIcon type="primary" title="new character" icon={<PlusOutlined />} />,
    <DescriptiveIcon type="link" title="edit" icon={<EditOutlined />} />,
    <DescriptiveIcon type="primary" title="delete" danger icon={<DeleteOutlined />} />,
  ];

  return (
    <Card
      style={cardStyle}
      actions={actions}
      hoverable
      cover={<RecentSheetCardCover />}
    >
      <Grid hoverable={false} style={previewStyle}>
        <RecentSheetCardTags />
      </Grid>
      <Grid hoverable={false} style={descriptionStyle}>
        <RecentSheetCardDescription
          createdAt="diaaksjdsahdklahdkjahkasjhdajskd"
          description="alskdjajsdhjkashdajksdhkasdkjashkjasd"
          name="name"
        />
      </Grid>
    </Card>
  );
}

export default RecentSheetCard;
