import Layout, { Content } from 'antd/lib/layout/layout'
import { FC } from 'react'
import './Home.css'
import { SiderComponent } from '../../components/common/sider/Sider'
import { HeaderComponent } from '../../components/common/header/Header'
import { FooterComponent } from '../../components/common/footer/Footer'

export interface HomeProps {
}

export const Home: FC<HomeProps> = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
            </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  )
}
