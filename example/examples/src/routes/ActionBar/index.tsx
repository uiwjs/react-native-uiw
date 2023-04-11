import React from 'react';
import {ActionBar} from '@uiw/react-native';
import {View, Alert} from 'react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';
const {Header} = Layout;

export interface ActionBarProps extends ComProps {}

export default class ActionBarDemo extends React.Component<ActionBarProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <React.Fragment>
        <Header title={title} description={description} />
        <View style={{flex: 1}}>
          <ActionBar
            scroll={false}
            // backgroundColor="#5847FF"
            actions={[
              {
                label: 'Delete',
                onPress: () => Alert.alert('delete'),
                fontStyle: {fontWeight: 'bold', color: '#fff'},
              },
              {
                label: 'Replace',
                onPress: () => Alert.alert('replace photo'),
                fontStyle: {fontWeight: 'bold', color: '#fff'},
              },
              {
                label: 'Edit',
                onPress: () => Alert.alert('edit'),
                fontStyle: {fontWeight: 'bold', color: '#fff'},
              },
            ]}
          />
        </View>
      </React.Fragment>
    );
  }
}
