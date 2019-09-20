import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
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
  'adobe', 'ali-pay', 'aliwangwang', 'android-o', 'android', 'apple', 'appstore-o', 'appstore', 'area-chart', 'down', 'left', 'right', 'up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'asterisk', 'backward', 'baidu', 'bar-chart', 'barcode', 'bell',
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
            <Card title="自定义图标">
              <Icon
                paths={[
                  'M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z'
                ]}
                size={18}
                style={styles.icon}
              />
              <Icon
                fill="red"
                paths={[
                  'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z'
                ]}
                size={18}
                style={styles.icon}
              />
            </Card>
            <Card
              title="UIW Icon"
              extra={
                <TouchableOpacity onPress={() => Linking.openURL('https://uiwjs.github.io/icons/')}>
                  <Text style={{ color: '#0366d6' }}>图标 web 预览</Text>
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
