import React from 'react';
import { useNavigate } from 'react-router';
import { Layout, Typography, Menu } from 'antd';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export const SiteHeader: React.FC<React.PropsWithChildren> = (props) => {
  const navigate = useNavigate();

  const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Projects' },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/projects');
        break;
      default:
        break;
    }
  };

  return (
    <Header style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Title style={{ color: 'white', margin: 0 }} level={2}>NDA Portal</Title>
      <Menu
        theme="dark" 
        mode="horizontal" 
        defaultSelectedKeys={['1']}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
        onClick={handleMenuClick}
      />
      { props.children }
    </Header>
  );
};

export const SiteFooter: React.FC<React.PropsWithChildren> = (props) => {
  const view: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#f1f1f1',
    color: '#333',
    textAlign: 'center',
    width: '100%',
  };

  return (
    <Footer style={ view }>
      { props.children }
    </Footer>
  );
};

export const DefaultLayout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <Content style={{ margin: '0 20px' }}>
        { props.children }
      </Content>
      <SiteFooter>
        <p>&copy; 2025 NDA Projects. All rights reserved.</p>
      </SiteFooter>
    </Layout>
  );
};

interface WithDefaultLayoutProps {
  [key: string]: unknown;
}

export const withDefaultLayout = (WrappedComponent: React.ComponentType<WithDefaultLayoutProps>) => {
  return (
    <DefaultLayout>
      <WrappedComponent />
    </DefaultLayout>
  )
};