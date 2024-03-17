// Layout.tsx

import React, { useState } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import {
    CloudOutlined,
    ReadOutlined,
    CameraOutlined,
} from '@ant-design/icons';
import './../App.css';

const { Header, Content, Footer, Sider } = AntLayout;

const items = [
    { key: '1', icon: <CloudOutlined />, label: 'Погода', to: '/' },
    { key: '2', icon: <ReadOutlined />, label: 'Интересные факты', to: '/number-facts' },
    { key: '3', icon: <CameraOutlined />, label: 'Фотографии', to: '/photos' },
];

const Layout: React.FC = ({ children }) => {
    const [showCloud, setShowCloud] = useState(false);
    const location = useLocation();

    // Отображать облако только на главной странице
    React.useEffect(() => {
        setShowCloud(location.pathname === '/');
    }, [location]);

    return (
        <AntLayout style={{ minHeight: '100vh' }}>
            {showCloud && (
                <div className="cloud-container top-cloud" />
            )}
            <Sider collapsible={false}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {items.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <NavLink to={item.to}>{item.label}</NavLink>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <AntLayout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-content">{children}</div>
                </Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
