import React from 'react';
import { DefaultProps } from '../../';
import styles from './index.module.less';
import FooterTitle from '../../component/Footer'
import { Layout, Row, Col } from 'uiw';
const { Footer, Content, Header } = Layout;

export default function Team(props: DefaultProps) {
  const developInfo = [
    { userName: "jaywcjlove", name: "小弟调调™", id: 1 },
    { userName: "xingyuefeng", name: "xyf", id: 2 },
    { userName: "ChenlingasMx", name: "Chenling", id: 3 },
    { userName: "matuancc", name: "cc", id: 4 },
    { userName: "yaochuxia", name: "yaochuxia", id: 5 },
    { userName: "wj0990", name: "wangjie", id: 6 },
  ]
  const designInfo = [
    { userName: "jaywcjlove", name: "小弟调调™", id: 1 },
    { userName: "matuancc", name: "cc", id: 4 },
    { userName: "yaochuxia", name: "yaochuxia", id: 5 },
  ]
  const documentInfo = [
    { userName: "jaywcjlove", name: "小弟调调™", id: 1 },
    { userName: "ChenlingasMx", name: "Chenling", id: 3 },
  ]
  return (
    <Layout>
      <Header style={{ background: "#fff" }}>
        <div>
          <span style={{ color: "#697b8c", fontSize: 16, fontWeight: 500 }}>UIW Mobile RN 一个基于 React Native 的 UI 组件库</span>
        </div>
      </Header>
      <Content>
        <Row justify="flex-start">
          <Col className={styles.warpper}>
            <div style={{ display: "flex", justifyItems: 'center', alignItems: "flex-start", flexDirection: 'column' }}>
              <h4 style={{ fontSize: 20, fontFamily: "fantasy", fontWeight: 500 }}>开发</h4>
              <AvatarList avatarInfo={developInfo} />
            </div>
          </Col>
          <Col className={styles.warpper}>
            <div style={{ display: "flex", justifyItems: 'center', alignItems: "flex-start", flexDirection: 'column' }}>
              <h4 style={{ fontSize: 20, fontFamily: "fantasy", fontWeight: 500 }}>设计</h4>
              <AvatarList avatarInfo={designInfo} />
            </div>
          </Col>
          <Col className={styles.warpper}>
            <div style={{ display: "flex", justifyItems: 'center', alignItems: "flex-start", flexDirection: 'column' }}>
              <h4 style={{ fontSize: 20, fontFamily: "fantasy", fontWeight: 500 }}>文档</h4>
              <AvatarList avatarInfo={documentInfo} />
            </div>
          </Col>
        </Row>
      </Content>
      <Footer>
        < FooterTitle />
      </Footer>
    </Layout >
  );
}

type PropsDeafult = {
  avatarInfo: Array<{
    userName: string;
    name: string;
    id: number
  }>
}

function AvatarList(props: PropsDeafult) {
  const { avatarInfo = [] } = props
  return (
    <div className={styles.flex_item}>
      {
        avatarInfo.map(item =>
          <span className={styles.avatar} key={item.id}>
            <div className={styles.center}>
              <a href={`https://github.com/${item.userName}`} target="__blank">
                <img src={`https://avatars.githubusercontent.com/${item.userName}`} alt={item.name} />
              </a>
              <span style={{ fontSize: 18 }}>{item.name}</span>
            </div>
          </span>
        )
      }
    </div>
  )
}


