import { Footer } from "antd/lib/layout/layout"
import { FC } from "react"
import './Footer.css'

export interface FooterProps {
}

export const FooterComponent: FC<FooterProps> = () => {

  return (
    <Footer style={{ textAlign: 'center' }}>Fran Cruz ©2021</Footer>
  )
}