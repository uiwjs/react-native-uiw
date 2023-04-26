import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';
import VerificationCode from '../VerificationCode';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import { logSvg, cEyes, oEyes } from './svg';

interface LoginPageProps {
  /** 自定义账号输入框为空时显示的文字 */
  usernamePlaceholder?: string;
  /** 自定义账号，密码，验证码输入框样式 */
  inputContainerStyle?: object;
  /** 登录按钮自定义样式 */
  buttonStyle?: object;
  /** 登录页自定义最外层样式 */
  containerStyle?: object;
  /** 登录按钮自定义文字 */
  buttonText?: string;
  /** 自定义忘记密码，切换登录方式 */
  customContent?: React.ReactNode;
  /** 登录按钮事件 */
  onLogin?: (username: string, password: string) => void;
  /** 忘记密码按钮事件 */
  onForgetPassword?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  usernamePlaceholder,
  inputContainerStyle = {},
  containerStyle = {},
  buttonStyle = {},
  buttonText = 'Login',
  customContent,
  onLogin,
  onForgetPassword,
}) => {
  const [showPsd, setShowPsd] = useState(false);
  const [showCode, setShowCode] = useState(false); // added state
  console.log('showCode', showCode);

  const theme = useTheme<Theme>();
  const styles = createStyles({
    border: theme.colors.border || '#CCC',
    putCol: theme.colors.primary_text || '#CCC',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (val: string) => {
    console.log('onChange--> 输入改变事件	 ', val);
    setUsername(val);
  };

  const onChangePassword = (val: string) => {
    console.log('onChange--> 输入改变事件	 ', val);
    setPassword(val);
  };

  const handleLogin = () => {
    if (onLogin) {
      onLogin(username, password);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }, containerStyle]}>
      <View style={styles.content}>
        <View style={styles.center}>
          <Icon xml={logSvg(theme)} size={30} />
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={[styles.inputContainer, { paddingHorizontal: 15 }, inputContainerStyle]}>
          <TextInput
            placeholder={usernamePlaceholder ? usernamePlaceholder : `请输入${showCode ? '手机号码' : '用户名'}`}
            placeholderTextColor={theme.colors.border}
            style={styles.input}
            keyboardType={showCode ? 'numeric' : 'default'}
            onChangeText={onChangeUsername}
          />
        </View>
        {!showCode ? (
          <View style={[styles.inputContainer, styles.inputC, { paddingHorizontal: 15 }, inputContainerStyle]}>
            <TextInput
              placeholder="请输入密码"
              placeholderTextColor={theme.colors.border}
              secureTextEntry={!showPsd}
              style={[styles.input, { width: '92%' }]}
              onChangeText={onChangePassword}
            />
            <TouchableOpacity onPress={() => setShowPsd(!showPsd)}>
              <Icon xml={showPsd ? cEyes : oEyes} size={20} />
            </TouchableOpacity>
          </View>
        ) : (
          <VerificationCode
            value={password}
            count={60}
            onChange={onChangePassword}
            outerStyle={[styles.inputContainer, styles.inputC, inputContainerStyle]}
          />
        )}

        <View>
          {customContent || (
            <View style={styles.textSty1}>
              <TouchableOpacity onPress={onForgetPassword}>
                <Text style={styles.textSty}>忘记密码</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowCode(!showCode)}>
                <Text style={styles.textSty}>{`${showCode ? '用户名' : '验证码'}登录`}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={handleLogin}>
          <Text style={[styles.buttonText, styles.buttonTextStyle]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type CreStyle = {
  border: string;
  putCol: string;
};

function createStyles({ border, putCol }: CreStyle) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: '80%',
    },
    center: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 15,
      color: putCol,
    },
    inputContainer: {
      height: 40,
      borderColor: border,
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputC: {
      paddingHorizontal: 10,
      marginTop: 20,
      marginBottom: 5,
    },
    input: {
      flex: 1,
      color: putCol,
    },
    button: {
      backgroundColor: '#1890ff',
      height: 40,
      marginTop: 5,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
    },
    buttonTextStyle: {
      color: '#fff',
    },
    textSty: {
      color: '#3578e5',
      fontWeight: 'bold',
    },
    textSty1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
}

export default LoginPage;
