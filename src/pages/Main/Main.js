import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "../../components/TopicMenu/TopicMenu";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet, NavLink } from 'react-router-dom'


function Main() {
  const topics = [<NavLink to="/">Главная</NavLink>, <NavLink to="competitions">Лиги</NavLink>, <NavLink to="teams">Команды</NavLink>];
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
      onBack={() => null}
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
