import React, { useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Theme, Flex, ActionSheet, ActionSheetItem, TransitionImage, Icon } from '@uiw/react-native';
import ImageView from 'react-native-image-viewing';
import { useTheme } from '@shopify/restyle';
import useImagePicker from './useImagePicker';
import { ImagePickerProps } from './types';

const ImagePicker = ({
  width = 100,
  height = 100,
  selectionLimit = 1,
  value = [],
  options,
  showUploadImg = true,
  disabled = false,
  readOnly = false,
  maxCount = undefined,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  onDelete,
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
  launchCameraText = '打开相机',
  ...others
}: ImagePickerProps) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    width: width,
    height: height,
  });

  const {
    currentImgSource,
    current,
    loading,
    launchLibrary,
    launchCamera,
    launchVisible,
    previewImage,
    closePreviewImage,
    deleteImage,
    handlePress,
    previewVisible,
    setLaunchVisibleFalse,
    saveImage,
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
    selectionLimit,
    onDelete,
  });
  const savePhotos = (url = '') => {
    Alert.alert('保存图片', '', [
      { text: '取消', style: 'cancel' },
      {
        text: '确认',
        onPress: () => saveImage(url),
      },
    ]);
  };
  const pictureList = useMemo(() => {
    if (showUploadImg && currentImgSource && currentImgSource.length > 0) {
      return currentImgSource.map((item, index) => (
        <Flex.Item key={index}>
          <View style={styles.box}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width, height }}>
              <TransitionImage
                source={{ uri: item }}
                style={{ width, height, borderRadius: 2 }}
                transition={true}
                disabled={loading}
                onPress={() => previewImage(index)}
              />
              {!readOnly && (
                <View style={styles.deleteBox}>
                  <TouchableOpacity disabled={loading} onPress={() => deleteImage(index)}>
                    <Icon name="close" color="#fff" size={10} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </Flex.Item>
      ));
    }
    return null;
  }, [showUploadImg, JSON.stringify(currentImgSource)]);

  const uploader = useMemo(() => {
    if (readOnly || currentImgSource.length === maxCount) {
      return null;
    }
    return (
      <Flex.Item>
        <View
          style={[
            styles.box,
            { backgroundColor: disabled ? theme.colors.disabled : theme.colors.primary500 || '#eff2f5' },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePress}
            disabled={disabled || loading}
            style={{ justifyContent: 'center', alignItems: 'center', width, height }}
          >
            <Icon name="camera-o" color="#dcdee0" size={24} />
          </TouchableOpacity>
        </View>
      </Flex.Item>
    );
  }, [readOnly, maxCount, JSON.stringify(currentImgSource), disabled, theme]);

  const previewImages = useMemo(() => {
    return currentImgSource.map((item) => ({ uri: item }));
  }, [JSON.stringify(currentImgSource), current]);

  return (
    <View>
      <Flex justify="start" wrap="wrap">
        {pictureList}
        {uploader}
      </Flex>
      <ActionSheet onCancel={setLaunchVisibleFalse} visible={launchVisible}>
        <ActionSheetItem disabled={loading} onPress={launchLibrary}>
          {launchLibraryText}
        </ActionSheetItem>
        <ActionSheetItem disabled={loading} onPress={launchCamera}>
          {launchCameraText}
        </ActionSheetItem>
      </ActionSheet>
      <ImageView
        visible={previewVisible}
        keyExtractor={(_, index) => index + ''}
        onRequestClose={closePreviewImage}
        imageIndex={current || 0}
        images={previewImages}
        onLongPress={(image: any) => savePhotos(image.uri)}
        {...others}
      />
    </View>
  );
};

function createStyles({ width = 100, height = 100 }) {
  return StyleSheet.create({
    box: {
      width: width,
      height: height,
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
    },
    deleteBox: {
      position: 'absolute',
      right: 0,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 18,
      width: 18,
      backgroundColor: 'rgba(0, 0, 0, .7)',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 12,
    },
  });
}

export default ImagePicker;
