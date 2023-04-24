import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';
import VerificationCode from '../VerificationCode';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import { logSvg, cEyes, oEyes } from './svg';

interface LoginPageProps {
  showPassword?: boolean;
  usernamePlaceholder?: string;
  inputContainerStyle?: object;
  buttonStyle?: object;
  containerStyle?: object;
  buttonText?: string;
  onLogin?: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  showPassword = true,
  usernamePlaceholder = '请输入用户名',
  inputContainerStyle = {},
  containerStyle = {},
  buttonStyle = {},
  buttonText = 'Login',
  onLogin,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
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
        <View style={[styles.inputContainer, inputContainerStyle]}>
          <TextInput
            placeholder={usernamePlaceholder}
            placeholderTextColor={theme.colors.icon}
            style={styles.input}
            onChangeText={onChangeUsername}
          />
        </View>
        {showPassword ? (
          <View style={[styles.inputContainers, inputContainerStyle]}>
            <TextInput
              placeholder="请输入密码"
              placeholderTextColor={theme.colors.icon}
              secureTextEntry={!isShowPassword}
              style={[styles.input, { width: '92%' }]}
              onChangeText={onChangePassword}
            />
            <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
              <Icon xml={isShowPassword ? cEyes : oEyes} size={20} />
            </TouchableOpacity>
          </View>
        ) : (
          <VerificationCode
            value={password}
            count={60}
            onChange={onChangePassword}
            outerStyle={[styles.inputContainer, inputContainerStyle]}
          />
        )}
        <View style={styles.textSty1}>
          <TouchableOpacity>
            <Text style={styles.textSty}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textSty}>验证码登录</Text>
          </TouchableOpacity>
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
      marginLeft: 20,
      color: putCol,
    },
    inputContainer: {
      height: 40,
      marginBottom: 20,
      borderColor: border,
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainers: {
      height: 40,
      marginBottom: 5,
      borderColor: border,
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      color: putCol,
    },
    button: {
      backgroundColor: '#1890ff',
      height: 40,
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
      marginBottom: 30,
    },
  });
}

export default LoginPage;
