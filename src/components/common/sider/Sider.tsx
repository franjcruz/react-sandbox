import { Menu } from "antd"
import { FC, useState } from "react"
import {
  BuildFilled,
  PlaySquareFilled,
  BookFilled,
} from '@ant-design/icons'
import Sider from "antd/lib/layout/Sider"
import './Sider.css'
import SubMenu from "antd/lib/menu/SubMenu"

export interface SiderProps {
}

export const SiderComponent: FC<SiderProps> = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="gameboard" icon={<BuildFilled />}>
          Gameboards
        </Menu.Item>
        <SubMenu key="videogames" icon={<PlaySquareFilled />} title="Videogames">
          <Menu.Item key="ps4">Playstation 4</Menu.Item>
          <Menu.Item key="ps5">Playstation 5</Menu.Item>
          <Menu.Item key="xboxs">Xbox Series</Menu.Item>
          <Menu.Item key="nintendoswitch">Nintendo Switch</Menu.Item>
        </SubMenu>
        <Menu.Item key="books" icon={<BookFilled />}>
          Books
        </Menu.Item>
      </Menu>
    </Sider>
  )
}