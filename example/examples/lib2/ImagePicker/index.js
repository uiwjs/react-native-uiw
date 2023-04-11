import React from 'react';
import {View, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions, Image} from 'react-native';
import {Flex, ActionSheet, ActionSheetItem, MaskLayer, TransitionImage, Icon} from '@uiw/react-native';
import {useTheme} from '@shopify/restyle';
import useImagePicker from './useImagePicker';
const ImagePicker = ({
  width = 100,
  height = 100,
  value = [],
  options,
  showUploadImg = true,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  cameraRationale = {
    title: '获取摄像头权限',
    message: '若不允许，您将无法使用摄像头功能',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  },
  libraryRationale = {
    title: '获取读取文件权限',
    message: '若不允许，您将无法访问图库',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  },
  launchLibraryText = '打开相册',
  launchCameraText = '打开摄像头',
}) => {
  const theme = useTheme();
  const styles = createStyles({
    width: width,
    height: height,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.mask,
  });
  const {
    currentImgSource,
    previewSrc,
    loading,
    launchLibrary,
    launchCamera,
    launchVisible,
    previewImage,
    deleteImage,
    handlePress,
    previewVisible,
    setLaunchVisibleFalse,
    setPreviewVisibleFalse,
    setPreviewSrc,
  } = useImagePicker({
    value,
    options,
    beforeUpload,
    upload,
    uploadFinish,
    onCancel,
    onFail,
    onGrantFail,
    cameraRationale,
    libraryRationale,
  });
  return (
    <View>
      <Flex justify="start" wrap="wrap">
        <Flex.Item>
          <View style={styles.box}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handlePress}
              disabled={loading}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width,
                height,
              }}>
              <Icon name="plus-square-o" color="#A9A9A9" size={20} />
            </TouchableOpacity>
          </View>
        </Flex.Item>
        {showUploadImg &&
          currentImgSource &&
          currentImgSource.length > 0 &&
          currentImgSource.map((item, key) => (
            <Flex.Item key={key}>
              <View style={styles.box}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  disabled={true}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width,
                    height,
                  }}>
                  <TransitionImage
                    source={{
                      uri: item,
                    }}
                    style={{
                      width,
                      height,
                      borderRadius: 2,
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                    transition={true}
                  />
                  <View
                    style={[
                      styles.btns,
                      {
                        height: height,
                        width: width,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => previewImage(key)}
                      style={[
                        styles.delete,
                        {
                          width: width * 0.375,
                          height: height * 0.375,
                        },
                      ]}>
                      <Icon name="eye" color={theme.colors.primary_background || '#3578e5'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteImage(key)}
                      style={[
                        styles.delete,
                        {
                          width: width * 0.375,
                          height: height * 0.375,
                        },
                      ]}>
                      <Icon name="delete" color={theme.colors.primary_background || '#3578e5'} size={16} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </Flex.Item>
          ))}
      </Flex>
      <ActionSheet
        onCancel={setLaunchVisibleFalse}
        visible={launchVisible}
        style={{
          zIndex: 99,
        }}>
        <ActionSheetItem onPress={launchLibrary}>{launchLibraryText}</ActionSheetItem>
        <ActionSheetItem onPress={launchCamera}>{launchCameraText}</ActionSheetItem>
      </ActionSheet>
      <MaskLayer
        visible={previewVisible}
        style={{
          zIndex: 999,
        }}
        onDismiss={() => {
          setPreviewVisibleFalse();
          setPreviewSrc('');
        }}
        opacity={0.9}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: previewSrc,
            }}
          />
        </View>
      </MaskLayer>
    </View>
  );
};
function createStyles({width = 100, height = 100, borderColor = '#CCCCCC', backgroundColor = '#fff'}) {
  return StyleSheet.create({
    box: {
      width: width,
      height: height,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: borderColor,
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      margin: 4,
    },
    content: {
      marginTop: Dimensions.get('window').width / 3 - 20,
      height: Dimensions.get('window').height / 3 - 20,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    btns: {
      position: 'absolute',
      left: 0,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    delete: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
export default ImagePicker;
