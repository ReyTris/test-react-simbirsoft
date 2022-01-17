import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import styles from './Main.module.css'

const { Header, Content, Footer, Sider } = Layout;
const Main = () => {
    return (
        <div>
            <Layout hasSider>
            <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            >
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">Главная</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link to="competitions">Лиги</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                    <Link to="teams">Команды</Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
            <Header className={styles.siteLayoutBackground} style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className={styles.siteLayoutBackground} style={{ padding: 24, textAlign: 'center' }}>
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                    Football Statistics ©2022 Created by Samson (<a href="mailto:reytris666@gmail.com">reytris666@gmail.com</a>)
            </Footer>
            </Layout>
        </Layout>
        </div>
    )
}

export default Main
