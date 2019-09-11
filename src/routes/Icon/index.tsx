import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ComProps } from '../../typings';
import { Icon } from '../../../components';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

const styles = StyleSheet.create({
  list: {
    display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' 
  },
  item: {
    borderColor: 'red',
    borderWidth: 1,
    // width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export interface IconProps extends ComProps {}

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
            <Card showTitle={false} style={styles.list}><View style={styles.item}><Icon name="stepforward" /><Text>stepforward</Text></View>
              <View style={styles.item}><Icon name="stepbackward" /><Text>stepbackward</Text></View>
              <View style={styles.item}><Icon name="forward" /><Text>forward</Text></View>
              <View style={styles.item}><Icon name="banckward" /><Text>banckward</Text></View>
              <View style={styles.item}><Icon name="caretright" /><Text>caretright</Text></View>
              <View style={styles.item}><Icon name="caretleft" /><Text>caretleft</Text></View>
              <View style={styles.item}><Icon name="caretdown" /><Text>caretdown</Text></View>
              <View style={styles.item}><Icon name="caretup" /><Text>caretup</Text></View>
              <View style={styles.item}><Icon name="rightcircle" /><Text>rightcircle</Text></View>
              <View style={styles.item}><Icon name="leftcircle" /><Text>leftcircle</Text></View>
              <View style={styles.item}><Icon name="upcircle" /><Text>upcircle</Text></View>
              <View style={styles.item}><Icon name="downcircle" /><Text>downcircle</Text></View>
              <View style={styles.item}><Icon name="rightcircleo" /><Text>rightcircleo</Text></View>
              <View style={styles.item}><Icon name="leftcircleo" /><Text>leftcircleo</Text></View>
              <View style={styles.item}><Icon name="upcircleo" /><Text>upcircleo</Text></View>
              <View style={styles.item}><Icon name="downcircleo" /><Text>downcircleo</Text></View>
              <View style={styles.item}><Icon name="verticleleft" /><Text>verticleleft</Text></View>
              <View style={styles.item}><Icon name="verticleright" /><Text>verticleright</Text></View>
              <View style={styles.item}><Icon name="back" /><Text>back</Text></View>
              <View style={styles.item}><Icon name="retweet" /><Text>retweet</Text></View>
              <View style={styles.item}><Icon name="shrink" /><Text>shrink</Text></View>
              <View style={styles.item}><Icon name="arrowsalt" /><Text>arrowsalt</Text></View>
              <View style={styles.item}><Icon name="doubleright" /><Text>doubleright</Text></View>
              <View style={styles.item}><Icon name="doubleleft" /><Text>doubleleft</Text></View>
              <View style={styles.item}><Icon name="arrowdown" /><Text>arrowdown</Text></View>
              <View style={styles.item}><Icon name="arrowup" /><Text>arrowup</Text></View>
              <View style={styles.item}><Icon name="arrowright" /><Text>arrowright</Text></View>
              <View style={styles.item}><Icon name="arrowleft" /><Text>arrowleft</Text></View>
              <View style={styles.item}><Icon name="down" /><Text>down</Text></View>
              <View style={styles.item}><Icon name="up" /><Text>up</Text></View>
              <View style={styles.item}><Icon name="right" /><Text>right</Text></View>
              <View style={styles.item}><Icon name="left" /><Text>left</Text></View>
              <View style={styles.item}><Icon name="minussquareo" /><Text>minussquareo</Text></View>
              <View style={styles.item}><Icon name="minuscircle" /><Text>minuscircle</Text></View>
              <View style={styles.item}><Icon name="minuscircleo" /><Text>minuscircleo</Text></View>
              <View style={styles.item}><Icon name="minus" /><Text>minus</Text></View>
              <View style={styles.item}><Icon name="pluscircleo" /><Text>pluscircleo</Text></View>
              <View style={styles.item}><Icon name="pluscircle" /><Text>pluscircle</Text></View>
              <View style={styles.item}><Icon name="plus" /><Text>plus</Text></View>
              <View style={styles.item}><Icon name="infocirlce" /><Text>infocirlce</Text></View>
              <View style={styles.item}><Icon name="infocirlceo" /><Text>infocirlceo</Text></View>
              <View style={styles.item}><Icon name="info" /><Text>info</Text></View>
              <View style={styles.item}><Icon name="exclamation" /><Text>exclamation</Text></View>
              <View style={styles.item}><Icon name="exclamationcircle" /><Text>exclamationcircle</Text></View>
              <View style={styles.item}><Icon name="exclamationcircleo" /><Text>exclamationcircleo</Text></View>
              <View style={styles.item}><Icon name="closecircle" /><Text>closecircle</Text></View>
              <View style={styles.item}><Icon name="closecircleo" /><Text>closecircleo</Text></View>
              <View style={styles.item}><Icon name="checkcircle" /><Text>checkcircle</Text></View>
              <View style={styles.item}><Icon name="checkcircleo" /><Text>checkcircleo</Text></View>
              <View style={styles.item}><Icon name="check" /><Text>check</Text></View>
              <View style={styles.item}><Icon name="close" /><Text>close</Text></View>
              <View style={styles.item}><Icon name="customerservice" /><Text>customerservice</Text></View>
              <View style={styles.item}><Icon name="creditcard" /><Text>creditcard</Text></View>
              <View style={styles.item}><Icon name="codesquareo" /><Text>codesquareo</Text></View>
              <View style={styles.item}><Icon name="book" /><Text>book</Text></View>
              <View style={styles.item}><Icon name="barschart" /><Text>barschart</Text></View>
              <View style={styles.item}><Icon name="bars" /><Text>bars</Text></View>
              <View style={styles.item}><Icon name="question" /><Text>question</Text></View>
              <View style={styles.item}><Icon name="questioncircle" /><Text>questioncircle</Text></View>
              <View style={styles.item}><Icon name="questioncircleo" /><Text>questioncircleo</Text></View>
              <View style={styles.item}><Icon name="pause" /><Text>pause</Text></View>
              <View style={styles.item}><Icon name="pausecircle" /><Text>pausecircle</Text></View>
              <View style={styles.item}><Icon name="pausecircleo" /><Text>pausecircleo</Text></View>
              <View style={styles.item}><Icon name="clockcircle" /><Text>clockcircle</Text></View>
              <View style={styles.item}><Icon name="clockcircleo" /><Text>clockcircleo</Text></View>
              <View style={styles.item}><Icon name="swap" /><Text>swap</Text></View>
              <View style={styles.item}><Icon name="swapleft" /><Text>swapleft</Text></View>
              <View style={styles.item}><Icon name="swapright" /><Text>swapright</Text></View>
              <View style={styles.item}><Icon name="plussquareo" /><Text>plussquareo</Text></View>
              <View style={styles.item}><Icon name="frown" /><Text>frown</Text></View>
              <View style={styles.item}><Icon name="menufold" /><Text>menufold</Text></View>
              <View style={styles.item}><Icon name="mail" /><Text>mail</Text></View>
              <View style={styles.item}><Icon name="link" /><Text>link</Text></View>
              <View style={styles.item}><Icon name="areachart" /><Text>areachart</Text></View>
              <View style={styles.item}><Icon name="linechart" /><Text>linechart</Text></View>
              <View style={styles.item}><Icon name="home" /><Text>home</Text></View>
              <View style={styles.item}><Icon name="laptop" /><Text>laptop</Text></View>
              <View style={styles.item}><Icon name="star" /><Text>star</Text></View>
              <View style={styles.item}><Icon name="staro" /><Text>staro</Text></View>
              <View style={styles.item}><Icon name="filter" /><Text>filter</Text></View>
              <View style={styles.item}><Icon name="meho" /><Text>meho</Text></View>
              <View style={styles.item}><Icon name="meh" /><Text>meh</Text></View>
              <View style={styles.item}><Icon name="shoppingcart" /><Text>shoppingcart</Text></View>
              <View style={styles.item}><Icon name="save" /><Text>save</Text></View>
              <View style={styles.item}><Icon name="user" /><Text>user</Text></View>
              <View style={styles.item}><Icon name="videocamera" /><Text>videocamera</Text></View>
              <View style={styles.item}><Icon name="totop" /><Text>totop</Text></View>
              <View style={styles.item}><Icon name="team" /><Text>team</Text></View>
              <View style={styles.item}><Icon name="sharealt" /><Text>sharealt</Text></View>
              <View style={styles.item}><Icon name="setting" /><Text>setting</Text></View>
              <View style={styles.item}><Icon name="picture" /><Text>picture</Text></View>
              <View style={styles.item}><Icon name="phone" /><Text>phone</Text></View>
              <View style={styles.item}><Icon name="paperclip" /><Text>paperclip</Text></View>
              <View style={styles.item}><Icon name="notification" /><Text>notification</Text></View>
              <View style={styles.item}><Icon name="menuunfold" /><Text>menuunfold</Text></View>
              <View style={styles.item}><Icon name="inbox" /><Text>inbox</Text></View>
              <View style={styles.item}><Icon name="lock" /><Text>lock</Text></View>
              <View style={styles.item}><Icon name="qrcode" /><Text>qrcode</Text></View>
              <View style={styles.item}><Icon name="tags" /><Text>tags</Text></View>
              <View style={styles.item}><Icon name="tagso" /><Text>tagso</Text></View>
              <View style={styles.item}><Icon name="cloudo" /><Text>cloudo</Text></View>
              <View style={styles.item}><Icon name="cloud" /><Text>cloud</Text></View>
              <View style={styles.item}><Icon name="cloudupload" /><Text>cloudupload</Text></View>
              <View style={styles.item}><Icon name="clouddownload" /><Text>clouddownload</Text></View>
              <View style={styles.item}><Icon name="clouddownloado" /><Text>clouddownloado</Text></View>
              <View style={styles.item}><Icon name="clouduploado" /><Text>clouduploado</Text></View>
              <View style={styles.item}><Icon name="enviroment" /><Text>enviroment</Text></View>
              <View style={styles.item}><Icon name="enviromento" /><Text>enviromento</Text></View>
              <View style={styles.item}><Icon name="eye" /><Text>eye</Text></View>
              <View style={styles.item}><Icon name="eyeo" /><Text>eyeo</Text></View>
              <View style={styles.item}><Icon name="camera" /><Text>camera</Text></View>
              <View style={styles.item}><Icon name="camerao" /><Text>camerao</Text></View>
              <View style={styles.item}><Icon name="windows" /><Text>windows</Text></View>
              <View style={styles.item}><Icon name="export2" /><Text>export2</Text></View>
              <View style={styles.item}><Icon name="export" /><Text>export</Text></View>
              <View style={styles.item}><Icon name="circledowno" /><Text>circledowno</Text></View>
              <View style={styles.item}><Icon name="circledown" /><Text>circledown</Text></View>
              <View style={styles.item}><Icon name="hdd" /><Text>hdd</Text></View>
              <View style={styles.item}><Icon name="ie" /><Text>ie</Text></View>
              <View style={styles.item}><Icon name="delete" /><Text>delete</Text></View>
              <View style={styles.item}><Icon name="enter" /><Text>enter</Text></View>
              <View style={styles.item}><Icon name="pushpino" /><Text>pushpino</Text></View>
              <View style={styles.item}><Icon name="pushpin" /><Text>pushpin</Text></View>
              <View style={styles.item}><Icon name="heart" /><Text>heart</Text></View>
              <View style={styles.item}><Icon name="hearto" /><Text>hearto</Text></View>
              <View style={styles.item}><Icon name="smileo" /><Text>smileo</Text></View>
              <View style={styles.item}><Icon name="frowno" /><Text>frowno</Text></View>
              <View style={styles.item}><Icon name="calculator" /><Text>calculator</Text></View>
              <View style={styles.item}><Icon name="chrome" /><Text>chrome</Text></View>
              <View style={styles.item}><Icon name="github" /><Text>github</Text></View>
              <View style={styles.item}><Icon name="iconfontdesktop" /><Text>iconfontdesktop</Text></View>
              <View style={styles.item}><Icon name="caretcircleoup" /><Text>caretcircleoup</Text></View>
              <View style={styles.item}><Icon name="upload" /><Text>upload</Text></View>
              <View style={styles.item}><Icon name="download" /><Text>download</Text></View>
              <View style={styles.item}><Icon name="piechart" /><Text>piechart</Text></View>
              <View style={styles.item}><Icon name="lock1" /><Text>lock1</Text></View>
              <View style={styles.item}><Icon name="unlock" /><Text>unlock</Text></View>
              <View style={styles.item}><Icon name="windowso" /><Text>windowso</Text></View>
              <View style={styles.item}><Icon name="dotchart" /><Text>dotchart</Text></View>
              <View style={styles.item}><Icon name="barchart" /><Text>barchart</Text></View>
              <View style={styles.item}><Icon name="codesquare" /><Text>codesquare</Text></View>
              <View style={styles.item}><Icon name="plussquare" /><Text>plussquare</Text></View>
              <View style={styles.item}><Icon name="minussquare" /><Text>minussquare</Text></View>
              <View style={styles.item}><Icon name="closesquare" /><Text>closesquare</Text></View>
              <View style={styles.item}><Icon name="closesquareo" /><Text>closesquareo</Text></View>
              <View style={styles.item}><Icon name="checksquare" /><Text>checksquare</Text></View>
              <View style={styles.item}><Icon name="checksquareo" /><Text>checksquareo</Text></View>
              <View style={styles.item}><Icon name="fastbackward" /><Text>fastbackward</Text></View>
              <View style={styles.item}><Icon name="fastforward" /><Text>fastforward</Text></View>
              <View style={styles.item}><Icon name="upsquare" /><Text>upsquare</Text></View>
              <View style={styles.item}><Icon name="downsquare" /><Text>downsquare</Text></View>
              <View style={styles.item}><Icon name="leftsquare" /><Text>leftsquare</Text></View>
              <View style={styles.item}><Icon name="rightsquare" /><Text>rightsquare</Text></View>
              <View style={styles.item}><Icon name="rightsquareo" /><Text>rightsquareo</Text></View>
              <View style={styles.item}><Icon name="leftsquareo" /><Text>leftsquareo</Text></View>
              <View style={styles.item}><Icon name="down" /><Text>down</Text></View>
              <View style={styles.item}><Icon name="up" /><Text>up</Text></View>
              <View style={styles.item}><Icon name="play" /><Text>play</Text></View>
              <View style={styles.item}><Icon name="playcircleo" /><Text>playcircleo</Text></View>
              <View style={styles.item}><Icon name="tag" /><Text>tag</Text></View>
              <View style={styles.item}><Icon name="tago" /><Text>tago</Text></View>
              <View style={styles.item}><Icon name="addfile" /><Text>addfile</Text></View>
              <View style={styles.item}><Icon name="folder1" /><Text>folder1</Text></View>
              <View style={styles.item}><Icon name="file1" /><Text>file1</Text></View>
              <View style={styles.item}><Icon name="switcher" /><Text>switcher</Text></View>
              <View style={styles.item}><Icon name="addfolder" /><Text>addfolder</Text></View>
              <View style={styles.item}><Icon name="folderopen" /><Text>folderopen</Text></View>
              <View style={styles.item}><Icon name="search1" /><Text>search1</Text></View>
              <View style={styles.item}><Icon name="ellipsis1" /><Text>ellipsis1</Text></View>
              <View style={styles.item}><Icon name="calendar" /><Text>calendar</Text></View>
              <View style={styles.item}><Icon name="filetext1" /><Text>filetext1</Text></View>
              <View style={styles.item}><Icon name="copy1" /><Text>copy1</Text></View>
              <View style={styles.item}><Icon name="jpgfile1" /><Text>jpgfile1</Text></View>
              <View style={styles.item}><Icon name="pdffile1" /><Text>pdffile1</Text></View>
              <View style={styles.item}><Icon name="exclefile1" /><Text>exclefile1</Text></View>
              <View style={styles.item}><Icon name="pptfile1" /><Text>pptfile1</Text></View>
              <View style={styles.item}><Icon name="unknowfile1" /><Text>unknowfile1</Text></View>
              <View style={styles.item}><Icon name="wordfile1" /><Text>wordfile1</Text></View>
              <View style={styles.item}><Icon name="dingding" /><Text>dingding</Text></View>
              <View style={styles.item}><Icon name="dingding" /><Text>dingding</Text></View>
              <View style={styles.item}><Icon name="mobile1" /><Text>mobile1</Text></View>
              <View style={styles.item}><Icon name="tablet1" /><Text>tablet1</Text></View>
              <View style={styles.item}><Icon name="bells" /><Text>bells</Text></View>
              <View style={styles.item}><Icon name="disconnect" /><Text>disconnect</Text></View>
              <View style={styles.item}><Icon name="database" /><Text>database</Text></View>
              <View style={styles.item}><Icon name="barcode" /><Text>barcode</Text></View>
              <View style={styles.item}><Icon name="hourglass" /><Text>hourglass</Text></View>
              <View style={styles.item}><Icon name="key" /><Text>key</Text></View>
              <View style={styles.item}><Icon name="flag" /><Text>flag</Text></View>
              <View style={styles.item}><Icon name="layout" /><Text>layout</Text></View>
              <View style={styles.item}><Icon name="printer" /><Text>printer</Text></View>
              <View style={styles.item}><Icon name="USB" /><Text>USB</Text></View>
              <View style={styles.item}><Icon name="skin" /><Text>skin</Text></View>
              <View style={styles.item}><Icon name="tool" /><Text>tool</Text></View>
              <View style={styles.item}><Icon name="car" /><Text>car</Text></View>
              <View style={styles.item}><Icon name="addusergroup" /><Text>addusergroup</Text></View>
              <View style={styles.item}><Icon name="carryout" /><Text>carryout</Text></View>
              <View style={styles.item}><Icon name="deleteuser" /><Text>deleteuser</Text></View>
              <View style={styles.item}><Icon name="deleteusergroup" /><Text>deleteusergroup</Text></View>
              <View style={styles.item}><Icon name="man" /><Text>man</Text></View>
              <View style={styles.item}><Icon name="isv" /><Text>isv</Text></View>
              <View style={styles.item}><Icon name="gift" /><Text>gift</Text></View>
              <View style={styles.item}><Icon name="idcard" /><Text>idcard</Text></View>
              <View style={styles.item}><Icon name="medicinebox" /><Text>medicinebox</Text></View>
              <View style={styles.item}><Icon name="redenvelopes" /><Text>redenvelopes</Text></View>
              <View style={styles.item}><Icon name="rest" /><Text>rest</Text></View>
              <View style={styles.item}><Icon name="Safety" /><Text>Safety</Text></View>
              <View style={styles.item}><Icon name="wallet" /><Text>wallet</Text></View>
              <View style={styles.item}><Icon name="woman" /><Text>woman</Text></View>
              <View style={styles.item}><Icon name="adduser" /><Text>adduser</Text></View>
              <View style={styles.item}><Icon name="bank" /><Text>bank</Text></View>
              <View style={styles.item}><Icon name="Trophy" /><Text>Trophy</Text></View>
              <View style={styles.item}><Icon name="loading1" /><Text>loading1</Text></View>
              <View style={styles.item}><Icon name="loading2" /><Text>loading2</Text></View>
              <View style={styles.item}><Icon name="like2" /><Text>like2</Text></View>
              <View style={styles.item}><Icon name="dislike2" /><Text>dislike2</Text></View>
              <View style={styles.item}><Icon name="like1" /><Text>like1</Text></View>
              <View style={styles.item}><Icon name="dislike1" /><Text>dislike1</Text></View>
              <View style={styles.item}><Icon name="bulb1" /><Text>bulb1</Text></View>
              <View style={styles.item}><Icon name="rocket1" /><Text>rocket1</Text></View>
              <View style={styles.item}><Icon name="select1" /><Text>select1</Text></View>
              <View style={styles.item}><Icon name="apple1" /><Text>apple1</Text></View>
              <View style={styles.item}><Icon name="android1" /><Text>android1</Text></View>
              <View style={styles.item}><Icon name="android" /><Text>android</Text></View>
              <View style={styles.item}><Icon name="aliwangwang" /><Text>aliwangwang</Text></View>
              <View style={styles.item}><Icon name="poweroff" /><Text>poweroff</Text></View>
              <View style={styles.item}><Icon name="trademark" /><Text>trademark</Text></View>
              <View style={styles.item}><Icon name="find" /><Text>find</Text></View>
              <View style={styles.item}><Icon name="copyright" /><Text>copyright</Text></View>
              <View style={styles.item}><Icon name="sound" /><Text>sound</Text></View>
              <View style={styles.item}><Icon name="earth" /><Text>earth</Text></View>
              <View style={styles.item}><Icon name="wifi" /><Text>wifi</Text></View>
              <View style={styles.item}><Icon name="sync" /><Text>sync</Text></View>
              <View style={styles.item}><Icon name="login" /><Text>login</Text></View>
              <View style={styles.item}><Icon name="logout" /><Text>logout</Text></View>
              <View style={styles.item}><Icon name="reload1" /><Text>reload1</Text></View>
              <View style={styles.item}><Icon name="message1" /><Text>message1</Text></View>
              <View style={styles.item}><Icon name="shake" /><Text>shake</Text></View>
              <View style={styles.item}><Icon name="API" /><Text>API</Text></View>
              <View style={styles.item}><Icon name="appstore1" /><Text>appstore1</Text></View>
              <View style={styles.item}><Icon name="scan1" /><Text>scan1</Text></View>
              <View style={styles.item}><Icon name="exception1" /><Text>exception1</Text></View>
              <View style={styles.item}><Icon name="contacts" /><Text>contacts</Text></View>
              <View style={styles.item}><Icon name="solution1" /><Text>solution1</Text></View>
              <View style={styles.item}><Icon name="fork" /><Text>fork</Text></View>
              <View style={styles.item}><Icon name="edit" /><Text>edit</Text></View>
              <View style={styles.item}><Icon name="form" /><Text>form</Text></View>
              <View style={styles.item}><Icon name="warning" /><Text>warning</Text></View>
              <View style={styles.item}><Icon name="table" /><Text>table</Text></View>
              <View style={styles.item}><Icon name="profile" /><Text>profile</Text></View>
              <View style={styles.item}><Icon name="dashboard" /><Text>dashboard</Text></View>
              <View style={styles.item}><Icon name="antdesign" /><Text>antdesign</Text></View>
              <View style={styles.item}><Icon name="codepen" /><Text>codepen</Text></View>
              <View style={styles.item}><Icon name="google" /><Text>google</Text></View>
              <View style={styles.item}><Icon name="amazon" /><Text>amazon</Text></View>
              <View style={styles.item}><Icon name="codepen" /><Text>codepen</Text></View>
              <View style={styles.item}><Icon name="dropbox" /><Text>dropbox</Text></View>
              <View style={styles.item}><Icon name="googleplus" /><Text>googleplus</Text></View>
              <View style={styles.item}><Icon name="gitlab" /><Text>gitlab</Text></View>
              <View style={styles.item}><Icon name="QQ" /><Text>QQ</Text></View>
              <View style={styles.item}><Icon name="skype" /><Text>skype</Text></View>
              <View style={styles.item}><Icon name="youtube" /><Text>youtube</Text></View>
              <View style={styles.item}><Icon name="wechat" /><Text>wechat</Text></View>
              <View style={styles.item}><Icon name="twitter" /><Text>twitter</Text></View>
              <View style={styles.item}><Icon name="weibo" /><Text>weibo</Text></View>
              <View style={styles.item}><Icon name="HTML" /><Text>HTML</Text></View>
              <View style={styles.item}><Icon name="weibo" /><Text>weibo</Text></View>
              <View style={styles.item}><Icon name="weibo" /><Text>weibo</Text></View>
              <View style={styles.item}><Icon name="CodeSandbox" /><Text>CodeSandbox</Text></View>
              <View style={styles.item}><Icon name="aliyun" /><Text>aliyun</Text></View>
              <View style={styles.item}><Icon name="zhihu" /><Text>zhihu</Text></View>
              <View style={styles.item}><Icon name="behance" /><Text>behance</Text></View>
              <View style={styles.item}><Icon name="dribbble" /><Text>dribbble</Text></View>
              <View style={styles.item}><Icon name="behance" /><Text>behance</Text></View>
              <View style={styles.item}><Icon name="instagram" /><Text>instagram</Text></View>
              <View style={styles.item}><Icon name="yuque" /><Text>yuque</Text></View>
              <View style={styles.item}><Icon name="slack" /><Text>slack</Text></View>
            </Card>
            <Footer />
          </Body>
        </Layout>
      </Container>
    );
  }
}
