import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackPageData, Routes} from './routes';
import {Button} from '../components';

type ModalStackNavigation = StackNavigationProp<{}>;

const Link = ({
  children,
  navigation,
  params,
  to,
}: {
  to: string;
  children: JSX.Element;
  params: Routes['params'];
  navigation: ModalStackNavigation;
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderBottomColor: '#CDCDCD',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1,
      }}>
      <Button
        bordered={false}
        textStyle={styles.block}
        onPress={() => navigation.push(to as never, {...params} as never)}>
        {children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default ({navigation}: {navigation: ModalStackNavigation}) => {
  return (
    <ScrollView>
      <View style={styles.block}>
        {stackPageData.map((props, index) => {
          return (
            <View key={index}>
              <Link
                to={props.name as never}
                navigation={navigation}
                params={props.params}>
                <View style={styles.block}>
                  <Text>{props.params.title || ''}</Text>
                  <View>
                    <Text>{props.params.description}</Text>
                  </View>
                </View>
              </Link>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
