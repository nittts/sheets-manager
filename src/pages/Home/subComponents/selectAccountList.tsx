import SelectLanguage from "@/components/ui/SelectLanguage";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useAccent } from "@/stores/preferences";
import { presetPrimaryColors } from "@ant-design/colors";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  List,
  Skeleton,
  Typography,
} from "antd";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AccountItem = {
  actions: (JSX.Element | Element)[];
  extra?: string;
  avatarSrc: JSX.Element | string;
  title: string;
  description?: string;
};

const { Title } = Typography;

const renderAccountItem = (user: AccountItem) => {
  const accent = useAccent();

  return (
    <List.Item actions={user.actions} extra={user.extra}>
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
          avatar={
            <Avatar
              shape="square"
              style={{ background: presetPrimaryColors[accent] }}
            >
              {user.avatarSrc}
            </Avatar>
          }
          title={user.title}
          description={user.description}
        />
      </Skeleton>
    </List.Item>
  );
};

function SelectAccountList({ list = [] }: { list?: AccountItem[] }) {
  const navigate = useNavigate();
  const language = useLanguage();

  const userActions: AccountItem[] = [
    {
      actions: [
        <Button type="primary" onClick={() => navigate("/register")}>
          {language.register}
        </Button>,
      ],
      avatarSrc: <User />,
      title: language.registerNewAccountTitle,
      description: language.registerNewAccountMsg,
    },
    {
      actions: [
        <Button type="primary" onClick={() => navigate("/register")}>
          {language.login}
        </Button>,
      ],
      avatarSrc: <User />,
      title: language.createNewAccountTitle,
      description: language.createNewAccountMsg,
    },
  ];

  return (
    <Card bordered={false} style={{ width: "100%", height: "100%" }}>
      <Flex justify="end">
        <SelectLanguage />
      </Flex>

      <Flex vertical style={{ maxHeight: "80vh" }}>
        <Title level={3}>{language.selectAccount}</Title>

        <Card
          bordered={false}
          size="small"
          style={{ overflow: "auto", maxHeight: "50%" }}
        >
          <List
            dataSource={list}
            pagination={false}
            locale={{ emptyText: language.noAccounts }}
            size="large"
            renderItem={renderAccountItem}
          />
        </Card>

        <Divider />

        <Card bordered={false} size="small">
          <List
            dataSource={userActions}
            pagination={false}
            size="large"
            renderItem={renderAccountItem}
          />
        </Card>
      </Flex>
    </Card>
  );
}

export default SelectAccountList;
