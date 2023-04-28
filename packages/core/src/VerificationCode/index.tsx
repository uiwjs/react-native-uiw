import React, { FC, useState, useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Input from '../Input';
import Button from '../Button';
import Text from '../Typography/Text';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

interface VerificationCodeProps {
  /**是否展示按钮边框 */
  bordered?: boolean;
  /**自定义验证码文字 */
  label?: string;
  /**自定义重新发送文字 */
  resendLabel?: string;
  /**默认倒计时秒数 */
  count?: number;
  /**验证码值 */
  value?: string;
  /**输入改变事件 */
  onChange?: (value: string) => void;
  /**发验证码之前的回调 */
  onBefore?: () => Promise<boolean>;
  /**发验证码时的回调 */
  onSend?: () => Promise<boolean>;
  /**发验证码之后的回调 */
  onEnd?: () => void;
  /**输入框外层自定义样式 */
  outerStyle?: StyleProp<ViewStyle>;
  /**按钮自定义样式 */
  buttonStyle?: StyleProp<ViewStyle>;
  /**输入框空白时自定义展示 */
  placeholder?: string;
  /**是否展示输入框边框 */
  inputBorder?: boolean;
}

const VerificationCode: FC<VerificationCodeProps> = ({
  bordered = false,
  label = '获取验证码',
  resendLabel = '重新发送',
  count = 60,
  value = '',
  onChange = () => {},
  onBefore = async () => true,
  onSend = async () => true,
  onEnd = () => {},
  outerStyle = {},
  buttonStyle = {},
  placeholder = '请输入验证码',
  inputBorder = true,
}) => {
  const [timer, setTimer] = useState(count);
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme<Theme>();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer > 0 && disabled) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0 && disabled) {
      setDisabled(false);
      onEnd();
    }
    return () => clearInterval(interval);
  }, [timer, disabled, onEnd]);

  const handleClick = async () => {
    const canSend = await onBefore();
    if (canSend) {
      setTimer(count);
      setDisabled(true);
      await onSend();
    }
  };

  return (
    <Input
      border={inputBorder ? 'always' : null}
      containerStyle={[{ height: 40 }, outerStyle]}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.border}
      value={value}
      onChangeText={(text) => onChange(text)}
      extraEnd={
        <Button
          bordered={bordered}
          disabled={disabled}
          onPress={handleClick}
          color={theme.colors.background || 'transparent'}
          style={[buttonStyle]}
          size="small"
        >
          <Text color={disabled ? 'disabled' : 'text'}>{disabled ? `${resendLabel}(${timer}s)` : label}</Text>
        </Button>
      }
    />
  );
};

export default VerificationCode;
