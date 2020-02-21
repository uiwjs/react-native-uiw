import { View, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import Item from "./Item";
import Title from "./Title";
import createArray from "./createArray";
import { IPanel } from './SelectCascaderTypes'

const { height, width } = Dimensions.get("window");

export default class Panel extends Component<IPanel> {
  constructor(props: IPanel) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.view_modal,
            { height: this.props.modalHeight, top: this.props.modalHeight }
          ]}
        >
          <Title
            titleHeight={this.props.titleHeight}
            okText={this.props.okText}
            dismissText={this.props.dismissText}
            title={this.props.title}
            onOk={e => this.props.onOk(e)}
            onDismiss={e => this.props.onDismiss(e)}
          />
          <View style={styles.view_item}>
            <View
              style={[
                styles.view_select_border,
                {
                  top: this.props.itemHeight * 3,
                  height: this.props.itemHeight
                }
              ]}
            />
            {createArray(this.props.cols).map((item, index) => {
              let data = this.props.data;
              if (index == 1) {
                data =
                  this.props.data[this.props.value[0]] &&
                  this.props.data[this.props.value[0]].sub;
              } else if (index == 2) {
                data =
                  this.props.data[this.props.value[0]] &&
                  this.props.data[this.props.value[0]].sub &&
                  this.props.data[this.props.value[0]].sub[
                    this.props.value[1]
                  ] &&
                  this.props.data[this.props.value[0]].sub[this.props.value[1]]
                    .sub;
              }
              return (
                <Item
                  ref={"item-" + index}
                  key={index}
                  height={this.props.itemHeight}
                  data={data}
                  column={this.props.value && this.props.value[index]}
                  row={index}
                  changeValue={(row, column) =>
                    this.props.changeValue(row, column)}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.4)",
    height: height,
    width: width
  },
  view_modal: {
    backgroundColor: "#fff"
  },
  view_select_border: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#ddd",
    left: 0,
    right: 0,
    zIndex: 1
  },
  view_item: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});