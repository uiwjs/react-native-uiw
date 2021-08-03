import { Layout, Row, Col } from 'uiw';
import { DefaultProps } from '../../';
import styles from './index.module.less';
import FooterTitle from '../../component/Footer'
import { useFetch } from '../../hook/useFetch'
const { Footer, Content } = Layout;

export default function Team(props: DefaultProps) {

  const developInfo = [
    { userName: "jaywcjlove", id: 1 },
    { userName: "xingyuefeng", id: 2 },
    { userName: "ChenlingasMx", id: 3 },
    { userName: "matuancc", id: 4 },
    { userName: "yaochuxia", id: 5 },
    { userName: "wj0990", id: 6 },
  ]
  const designInfo = [
    { userName: "jaywcjlove", id: 1 },
    { userName: "matuancc", id: 2 },
    { userName: "yaochuxia", id: 3 },
  ]
  const documentInfo = [
    { userName: "jaywcjlove", id: 1 },
    { userName: "ChenlingasMx", id: 2 },
  ]
  return (
    <Layout>
      <header className={styles.header}>
        <div style={{ fontSize: 36, fontWeight: 500 }}>UIW Mobile</div>
        <div style={{ color: "#697b8c", fontSize: 18, fontWeight: 500 }}>RN 一个基于 React Native 的 UI 组件库</div>
      </header>
      <Content>
          <Row justify="flex-start">
            <Col className={styles.warpper}>
              <div className={styles.flex_column_avatar}>
                <h4 className={styles.font}>开发</h4>
                {
                  developInfo.map(itm => <div key={itm.id}><AvatarList userName={itm.userName} /></div>)
                }
              </div>
            </Col>
            <Col className={styles.warpper}>
              <div className={styles.flex_column_avatar}>
                <h4 className={styles.font}>设计</h4>
                {
                  designInfo.map(itm => <div key={itm.id}><AvatarList userName={itm.userName} /></div>)
                }
              </div>
            </Col>
            <Col className={styles.warpper}>
              <div className={styles.flex_column_avatar}>
                <h4 className={styles.font}>文档</h4>
                {
                  documentInfo.map(itm => <div key={itm.id}><AvatarList userName={itm.userName} /></div>)
                }
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
  userName: string
}

function AvatarList(props: PropsDeafult) {
  const { userName } = props
  const res: any = useFetch(`https://api.github.com/users/${userName}`)
  if (!res) {
    return <span />
  }
  return (
    <div>
      <span className={styles.avatar}>
        <div className={styles.flex_column}>
          <a href={`https://github.com/${userName}`} target="__blank">
            <img src={`https://avatars.githubusercontent.com/${userName}`} alt={res?.response?.name} />
          </a>
          <a  href={`https://github.com/${userName}`} style={{ fontSize: 18, color: "#697b8c" }}>{res?.response?.name}</a>
        </div>
      </span>
    </div>
  )
}


