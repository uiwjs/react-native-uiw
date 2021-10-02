import React from 'react';
import {Spacing, SegmentedControl} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Card, Footer} = Layout;

export interface SegmentedControlViewProps extends ComProps {}

export default class SegmentedControlView extends React.Component<SegmentedControlViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title={'设置间距 disabled?: boolean;'}>
              <SegmentedControl
                inline
                gutter={10}
                selectedIndex={2}
                value={['申请', '审批', '提交', '申请', '审批', '提交']}
              />
            </Card>
            <Card title="默认实例">
              <SegmentedControl
                selectedIndex={1}
                value={['申请', '审批', '提交']}
              />
            </Card>
            <Card title={'设置颜色 color?: string'}>
              <SegmentedControl
                color="#dc3545"
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
            </Card>
            <Card
              title={
                '设置自定义文本颜色 textColor?: {actived?: string, unactived?: string}'
              }>
              <SegmentedControl
                textColor={{actived: '#333', unactived: '#ccc'}}
                color="#999"
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
            </Card>
            <Card title={'设置间距 gutter?: number'}>
              <SegmentedControl
                gutter={10}
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
            </Card>
            <Card title={'设置间距 disabled?: boolean;'}>
              <SegmentedControl
                gutter={10}
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
            </Card>
            <Card title={"设置尺寸 size?: 'small' | 'default' | 'large';"}>
              <SegmentedControl
                size="large"
                gutter={10}
                selectedIndex={1}
                value={['申请', '审批', '提交']}
              />
              <Spacing />
              <SegmentedControl
                size="default"
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
              <Spacing />
              <SegmentedControl
                size="small"
                gutter={10}
                selectedIndex={2}
                value={['申请', '审批', '提交']}
              />
              <Spacing />
              <SegmentedControl
                gutter={10}
                selectedIndex={2}
                style={{height: 28}}
                textStyle={{
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                }}
                value={['申请', '审批', '提交']}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
