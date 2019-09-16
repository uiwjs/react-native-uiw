import React from 'react';
import { View, Text, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';
import { ComProps } from '../../typings';
import { Icon } from '../../../components';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  }
});

export interface IconProps extends ComProps {}

const iconData = [
  'adobe', 'ali-pay', 'aliwangwang', 'android-o', 'android', 'apple', 'appstore-o', 'appstore', 'area-chart', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'asterisk', 'backward', 'baidu', 'bar-chart', 'barcode', 'bell',
  'camera-o', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'check-square-o', 'check-square', 'check', 'chrome', 'circle-check-o', 'circle-check', 'circle-close-o', 'circle-close', 'close-square-o', 'close-square', 'close',
  'cloud-download-o', 'cloud-download', 'cloud-upload-o', 'cloud-upload', 'coffee', 'component', 'copy', 'copyright', 'css3', 'cut',
  'd-arrow-left', 'd-arrow-right', 'd-caret', 'dashboard', 'date', 'delete', 'dingding', 'dislike-o', 'document', 'dot-chart', 'down-circle-o', 'down-circle', 'down-square-o', 'down-square', 'download', 'edit', 'enter', 'environment-o', 'environment', 'eye-o', 'eye',
  'facebook', 'file-add', 'file-excel', 'file-jpg', 'file-pdf', 'file-text', 'file-unknown', 'filter', 'firefox', 'folder-add', 'folder-open', 'folder', 'forward', 'foursquare', 'frown-o', 'frown', 'github-o', 'github', 'global',
  'heart-off', 'heart-on', 'home', 'html5', 'ie', 'inbox', 'information-o', 'information', 'laptop', 'left-circle-o', 'left-circle', 'left-square-o', 'left-square', 'like-o', 'link', 'linkedin', 'linux', 'loading', 'lock', 'login', 'logout',
  'man', 'map', 'meh-o', 'meh', 'menu-fold', 'menu-unfold', 'menu', 'message-o', 'message', 'minus-circle-o', 'minus-circle', 'minus-square-o', 'minus-square', 'minus',
  'mobile', 'more', 'notification', 'opera', 'paper-clip', 'pause-circle-o', 'pause-circle', 'pause', 'pay-circle-o', 'pay', 'picasa', 'picture',
  'pie-chart', 'pinterest', 'play-circle-o', 'play-circle', 'plus-circle-o', 'plus-circle', 'plus-square-o', 'plus-square', 'plus', 'poweroff', 'printer', 'qq', 'qrcode', 'question-circle-o', 'question-circle',
  'reddit', 'reload', 'right-circle-o', 'right-circle', 'right-square-o', 'right-square', 'rollback', 'safari', 'safety', 'save', 'search', 'setting-o', 'setting', 'share',
  'shopping-cart', 'shrink', 'smile-o', 'smile', 'star-off', 'star-on', 'swap-left', 'swap-right', 'swap', 'table', 'tag-o', 'tag', 'tags-o', 'tags', 'taobao', 'time-o', 'time', 'twitter', 'uiw', 'unlock',
  'up-circle-o', 'up-circle', 'up-square-o', 'up-square', 'upload', 'user-add', 'user-delete', 'user', 'usergroup-add', 'usergroup-delete', 'verification',
  'verticle-left', 'verticle-right', 'video-camera', 'warning-o', 'warning', 'weibo', 'weixin', 'wifi', 'windows', 'woman', 'zoom-in', 'zoom-out']

export default class IconPage extends React.Component<IconProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card
              title="UIW Icon"
              extra={
                <TouchableOpacity onPress={() => Linking.openURL('https://uiwjs.github.io/icons/')}>
                  <Text>图标 web 预览</Text>
                </TouchableOpacity>
              }
            >
              <View style={styles.list}>
                {iconData.map((keyName, key) => {
                  return (
                    <View key={key} style={styles.item}>
                      <Icon name={keyName} size={18} style={styles.icon} />
                      <Text>{keyName}</Text>
                    </View>
                  );
                })}
              </View>
            </Card>
            <Footer />
          </Body>
        </Layout>
      </Container>
    );
  }
}
