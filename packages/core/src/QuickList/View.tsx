import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
const emptyDataView = () => {
  return (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }}>
      <Text>暂无数据...</Text>
    </View>
  );
};

const activityIndicatorView = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 8 }}>
      <ActivityIndicator size={'large'} color={'#000'} />
    </View>
  );
};

const noMoreDataView = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 8 }}>
      <Text style={{ textAlign: 'center' }}>没有更多数据了</Text>
    </View>
  );
};

export { emptyDataView, activityIndicatorView, noMoreDataView };
