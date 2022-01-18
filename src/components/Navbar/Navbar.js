import React, {useState} from 'react'
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from './NavBar.module.css'

const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <nav className={styles.navbar}>
            <Button
                className={styles.menu}
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title="Topics"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
            > 
                {menu}
            </Drawer>
            {/* <a href="/"><img src={logo} className={styles.logo} alt="logo" /></a>      */}
            </nav>
        </div>
    )
}

export default NavBar
