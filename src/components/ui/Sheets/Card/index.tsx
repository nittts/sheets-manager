import { Card } from "antd";

import SheetCardDescription from "./SheetCard.description";
import SheetCardTags from "./SheetCard.tags";
import SheetCardCover from "./SheetCard.cover";
import SheetCardActions from "../shared/Sheet.actions";

import { SheetMetadata } from "@/@types/sheets";

const { Grid } = Card;

const descriptionStyle = { width: "100%", padding: "4px" };
const cardStyle = {
  width: "100%",
  minWidth: "25em",
  maxWidth: "35em",
  maxHeight: "30em",
};
const previewStyle = {
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  width: "100%",
  minHeight: "3em",
  overflow: "auto",
};

function SheetCard(metadata: SheetMetadata) {
  const { createdAt, description, name, tags, id } = metadata;

  return (
    <Card
      key={id}
      style={cardStyle}
      actions={SheetCardActions(metadata.id)}
      cover={<SheetCardCover />}
      hoverable
    >
      <Grid hoverable={false} style={previewStyle}>
        <SheetCardTags tags={tags} />
      </Grid>
      <Grid hoverable={false} style={descriptionStyle}>
        <SheetCardDescription
          createdAt={createdAt}
          description={description}
          name={name}
        />
      </Grid>
    </Card>
  );
}

export default SheetCard;
