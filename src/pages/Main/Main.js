import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "../../components/TopicMenu/TopicMenu";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet, Link } from 'react-router-dom'


function Main() {
  const topics = [<Link to="/">Главная</Link>, <Link to="competitions">Лиги</Link>, <Link to="teams">Команды</Link>];
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
          <Outlet/>
        </Layout.Content>
      </Layout>
    </div>
  );
}
export default Main;
