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
  label?: string;
  resendLabel?: string;
  count?: number;
  value?: string;
  onChange?: (value: string) => void;
  onBefore?: () => Promise<boolean>;
  onSend?: () => Promise<boolean>;
  onEnd?: () => void;
  outerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
}

const VerificationCode: FC<VerificationCodeProps> = ({
  bordered = true,
  label = '获取验证码',
  resendLabel = '重新发送',
  count = 60,
  value = '',
  onChange = () => { },
  onBefore = async () => true,
  onSend = async () => true,
  onEnd = () => { },
  outerStyle = {},
  buttonStyle = {},
  placeholder = '请输入验证码',
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
      border={null}
      containerStyle={[{ height: 50 }, outerStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => onChange(text)}
      extraEnd={
        <Button bordered={bordered} disabled={disabled} onPress={handleClick} color={theme.colors.background || '#fff'} style={buttonStyle}>
          <Text color={disabled ? "disabled" : "text"}>{disabled ? `${resendLabel}(${timer}s)` : label}</Text>
        </Button>
      }
    />
  );
};

export default VerificationCode;

