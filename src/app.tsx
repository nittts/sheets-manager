import Providers from "./providers";

import { Router } from "./router";
import { Routes } from "./router/routes";

import { Layout, App as AntdApp } from "antd";

const { Content } = Layout;

export function App() {
  return (
    <Providers>
      <AntdApp>
        <Layout style={{ width: "100vw", minHeight: "100vh" }}>
          <Content>
            <Router routes={Routes} />
          </Content>
        </Layout>
      </AntdApp>
    </Providers>
  );
}
