import React from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackPageData, Routes} from './routes';

type ModalStackNavigation = StackNavigationProp<{}>;

const Link = ({
  children,
  navigation,
  params,
  to,
}: {
  to: string;
  children: string;
  params: Routes['params'];
  navigation: ModalStackNavigation;
}) => {
  return (
    <Button
      title={children}
      onPress={() => navigation.push(to as never, {...params} as never)}
    />
  );
};

const styles = StyleSheet.create({
  warpper: {
    flex: 1,
  },
});

export default ({navigation}: {navigation: ModalStackNavigation}) => {
  return (
    <ScrollView>
      <View style={styles.warpper}>
        {stackPageData.map((props, index) => {
          return (
            <View key={index}>
              <Link
                to={props.name as never}
                navigation={navigation}
                params={props.params}>
                {props.params.title || ''}
              </Link>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
