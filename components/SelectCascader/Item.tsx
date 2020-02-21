import {Text, View, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import React, {Component} from 'react';
import { SelectItemProps } from './SelectCascaderTypes'


export default class Item extends Component<SelectItemProps> {
  timeID: number | undefined;
  constructor(props: SelectItemProps) {
    super(props);
  }
  refScrollView!: ScrollView | null;

  componentDidMount() {
    this.timeID = setTimeout(() => {
      this.refScrollView && this.refScrollView.scrollTo({
        x: 0,
        y: this.props.column * this.props.height,
      });
    }, 5);
  }

  componentWillUnmount() {
    this.timeID && clearTimeout(this.timeID);
  }

  onScrollEndDrag(e: NativeSyntheticEvent<NativeScrollEvent>) {
    let column = Math.floor(e.nativeEvent.contentOffset.y / this.props.height);
    if (column < 0) {column = 0;}
    this.props.changeValue(this.props.row, column);
  }

  getOpacity(selectIndex: any, index: number) {
    if (selectIndex == index) {
      return 1;
    } else {
      if (selectIndex == index - 1 || selectIndex == index + 1) {
        return 0.7;
      } else if (selectIndex == index - 2 || selectIndex == index + 2) {
        return 0.4;
      } else if (selectIndex == index - 3 || selectIndex == index + 3) {
        return 0.1;
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          onScrollEndDrag={e => this.onScrollEndDrag(e)}
          pagingEnabled={true}
          // ref="scrollview"
          ref={(e) => this.refScrollView = e}
          scrollEventThrottle={2000}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.container,
            {
              paddingTop: this.props.height * 3,
              paddingBottom: this.props.height * 5,
            },
          ]}>
          {this.props.data &&
            this.props.data.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    opacity: this.getOpacity(this.props.column, index),
                    height: this.props.height,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: '200'}}>{item.name}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
