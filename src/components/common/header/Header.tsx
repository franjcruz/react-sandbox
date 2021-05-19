import { FC } from "react"
import {
  UserOutlined,
} from '@ant-design/icons'
import './Header.css'
import Avatar from "antd/lib/avatar/avatar"
import { Header } from "antd/lib/layout/layout"

export interface HeaderProps {
}

export const HeaderComponent: FC<HeaderProps> = () => {

  return (
    <Header className="header" style={{ padding: 0 }}>
      <Avatar className="avatar" size="large" icon={<UserOutlined />} />
    </Header>

  )
}