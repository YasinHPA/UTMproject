import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Навигация 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Навигация 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Навигация 3
                </Menu.Item>
                <Menu.Item key="4" icon={<BarChartOutlined />}>
                    Навигация 4
                </Menu.Item>
                <Menu.Item key="5" icon={<CloudOutlined />}>
                    Навигация 5
                </Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                    Навигация 6
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                    Навигация 7
                </Menu.Item>
                <Menu.Item key="8" icon={<ShopOutlined />}>
                    Навигация 8
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideMenu;
