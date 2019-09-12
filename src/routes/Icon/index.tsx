import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ComProps } from '../../typings';
import { Icon } from '../../../components';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap' 
  },
  item: {
    // borderColor: 'red',
    // borderWidth: 1,
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

const iconData = ['stepforward', 'stepbackward', 'forward', 'banckward', 'caretright', 'caretleft', 'caretdown', 'caretup',
'rightcircle', 'leftcircle', 'upcircle', 'downcircle', 'rightcircleo', 'leftcircleo', 'upcircleo', 'downcircleo',
'verticleleft', 'verticleright', 'back', 'retweet', 'shrink', 'arrowsalt', 'doubleright', 'doubleleft', 'arrowdown',
'arrowup', 'arrowright', 'arrowleft', 'down', 'up', 'right', 'left', 'minussquareo', 'minuscircle',
'minuscircleo', 'minus', 'pluscircleo', 'pluscircle', 'plus', 'infocirlce', 'infocirlceo', 'info',
'exclamation', 'exclamationcircle', 'exclamationcircleo', 'closecircle', 'closecircleo', 'checkcircle',
'checkcircleo', 'check', 'close', 'customerservice', 'creditcard', 'codesquareo', 'book', 'barschart', 'bars',
'question', 'questioncircle', 'questioncircleo', 'pause', 'pausecircle', 'pausecircleo', 'clockcircle',
'clockcircleo', 'swap', 'swapleft', 'swapright', 'plussquareo', 'frown', 'menufold', 'mail', 'link',
'areachart', 'linechart', 'home', 'laptop', 'star', 'staro', 'filter', 'meho', 'meh', 'shoppingcart',
'save', 'user', 'videocamera', 'totop', 'team', 'sharealt', 'setting', 'picture', 'phone', 'paperclip',
'notification', 'menuunfold', 'inbox', 'lock', 'qrcode', 'tags', 'tagso', 'cloudo', 'cloud', 'cloudupload',
'clouddownload', 'clouddownloado', 'clouduploado', 'enviroment', 'enviromento', 'eye', 'eyeo', 'camera',
'camerao', 'windows', 'export2', 'export', 'circledowno', 'circledown', 'hdd', 'ie', 'delete', 'enter',
'pushpino', 'pushpin', 'heart', 'hearto', 'smileo', 'frowno', 'calculator', 'chrome', 'github', 'iconfontdesktop',
'caretcircleoup', 'upload', 'download', 'piechart', 'lock1', 'unlock', 'windowso', 'dotchart', 'barchart',
'codesquare', 'plussquare', 'minussquare', 'closesquare', 'closesquareo', 'checksquare', 'checksquareo',
'fastbackward', 'fastforward', 'upsquare', 'downsquare', 'leftsquare', 'rightsquare', 'rightsquareo',
'leftsquareo', 'down', 'up', 'play', 'playcircleo', 'tag', 'tago', 'addfile', 'folder1', 'file1', 'switcher',
'addfolder', 'folderopen', 'search1', 'ellipsis1', 'calendar', 'filetext1', 'copy1', 'jpgfile1', 'pdffile1',
'exclefile1', 'pptfile1', 'unknowfile1', 'wordfile1', 'dingding', 'dingding', 'mobile1', 'tablet1', 'bells',
'disconnect', 'database', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'USB', 'skin', 'tool',
'car', 'addusergroup', 'carryout', 'deleteuser', 'deleteusergroup', 'man', 'isv', 'gift', 'idcard',
'medicinebox', 'redenvelopes', 'rest', 'Safety', 'wallet', 'woman', 'adduser', 'bank', 'Trophy', 'loading1',
'loading2', 'like2', 'dislike2', 'like1', 'dislike1', 'bulb1', 'rocket1', 'select1', 'apple1', 'android1',
'android', 'aliwangwang', 'poweroff', 'trademark', 'find', 'copyright', 'sound', 'earth', 'wifi', 'sync',
'login', 'logout', 'reload1', 'message1', 'shake', 'API', 'appstore1', 'scan1', 'exception1', 'contacts',
'solution1', 'fork', 'edit', 'form', 'warning', 'table', 'profile', 'dashboard', 'antdesign', 'codepen',
'google', 'amazon', 'codepen', 'dropbox', 'googleplus', 'gitlab', 'QQ', 'skype', 'youtube', 'wechat',
'twitter', 'weibo', 'HTML', 'CodeSandbox', 'aliyun', 'zhihu', 'behance', 'dribbble',
'behance', 'instagram', 'yuque', 'slack']

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
            <Card title="Ant Design font">
              <View style={styles.list}>
                {iconData.map((keyName, key) => {
                  return (
                    <View key={key} style={styles.item}>
                      <Icon name={keyName} style={styles.icon}/>
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
