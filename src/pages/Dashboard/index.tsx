import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
