import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { SelectTtitleProps } from './SelectCascaderTypes'

export default class Title extends Component<SelectTtitleProps> {
  constructor(props: SelectTtitleProps) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, { height: this.props.titleHeight }]}>
        <TouchableOpacity onPress={e => this.props.onOk(e)}>
          <Text style={styles.view_text}>{this.props.okText}</Text>
        </TouchableOpacity>
        <Text style={styles.view_title}>{this.props.title}</Text>
        <TouchableOpacity onPress={e => this.props.onDismiss(e)}>
          <Text style={styles.view_text}>{this.props.dismissText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#ddd"
  },
  view_text: {
    color: "#108ee9",
    fontSize: 18
  },
  view_title: {
    fontSize: 20
  }
});