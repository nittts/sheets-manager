import SelectLanguage from "@/components/ui/SelectLanguage";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useAccent } from "@/stores/preferences";
import { presetPrimaryColors } from "@ant-design/colors";
import { UserOutlined } from "@ant-design/icons";
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
        <Button type="primary" onClick={() => navigate("/auth/register")}>
          {language.register}
        </Button>,
      ],
      avatarSrc: <UserOutlined />,
      title: language.registerNewAccountTitle,
      description: language.registerNewAccountMsg,
    },
    {
      actions: [
        <Button type="primary" onClick={() => navigate("/auth/login")}>
          {language.login}
        </Button>,
      ],
      avatarSrc: <UserOutlined />,
      title: language.createNewAccountTitle,
      description: language.createNewAccountMsg,
    },
  ];

  return (
    <>
      <Flex vertical style={{ maxHeight: "80vh" }}>
        <Title level={3}>{language.selectAccount}</Title>

        <Card
          bordered={false}
          size="small"
          style={{ overflow: "auto", height: "70vh" }}
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
    </>
  );
}

export default SelectAccountList;
