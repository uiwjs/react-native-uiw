import React from 'react';
import {WingBlank, Slider} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';

const {Header, Body, Card, Footer} = Layout;

interface SliderViewProps extends ComProps {}
interface SliderViewState {
  sliderValue: number;
  stepValue: number;
}

export default class SliderView extends React.Component<
  SliderViewProps,
  SliderViewState
> {
  constructor(props: SliderViewProps) {
    super(props);
    this.state = {
      sliderValue: 0.3,
      stepValue: 0.6,
    };
  }
  handleSliderChange = (sliderValue: number) => {
    this.setState({sliderValue});
  };
  handleStepSliderChange = (stepValue: number) => {
    this.setState({stepValue});
  };
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card
              title={`横竖垂直方向，value=${this.state.sliderValue.toFixed(2)}`}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Slider
                  value={this.state.sliderValue as number}
                  onChange={this.handleSliderChange}
                  thumbSize={{width: 60, height: 30}}
                />
              </WingBlank>
              <WingBlank>
                <Slider
                  vertical={true}
                  style={{height: 200}}
                  value={this.state.sliderValue as number}
                  onChange={this.handleSliderChange}
                />
              </WingBlank>
            </Card>
            <Card
              title={`设置步长 step={0.2}，value=${this.state.stepValue.toFixed(
                1,
              )}`}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Slider
                  step={0.2}
                  value={this.state.stepValue as number}
                  onChange={this.handleStepSliderChange}
                />
              </WingBlank>
            </Card>
            <Card
              title={`不显示滑块 shownThumb={false}，value=${this.state.sliderValue.toFixed(
                2,
              )}`}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Slider
                  shownThumb={false}
                  value={this.state.sliderValue as number}
                  onChange={this.handleSliderChange}
                />
              </WingBlank>
            </Card>
            <Card
              title={'禁用 disabled={true}'}
              bodyStyle={{paddingLeft: 0, paddingRight: 0}}>
              <WingBlank>
                <Slider
                  disabled={true}
                  value={0.4}
                  onChange={this.handleSliderChange}
                />
              </WingBlank>
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
