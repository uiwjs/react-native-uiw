import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps } from 'react-native';
import Icon from '../Icon';
import { ButtonProps } from '../Button';
import RightButton from './RightButton'

export interface SearchInputBarProps extends TextInputProps {
  /** 点击清除按钮时触发事件 */
  onClear?: Function,
  /** 右侧按钮 */
  button?: ButtonProps
  /** 右侧按钮文案 */
  actionName?: string,
  /** 右侧按钮宽度默认70 */
  buttonWidth?: number,
  /** 是否一直显示右侧按钮 */
  showActionButton?: boolean
}

interface SearchInputBarState {
  // isShow close icon
  showIcon: boolean,
  // close style
  showIconLeft: number,
}

export default class SearchInputBar extends React.Component<SearchInputBarProps, SearchInputBarState> {
  private inputRef = React.createRef<TextInput>();
  private moveLeft: Animated.Value = new Animated.Value(0);
  private placeholderIcon = React.createRef<View>();
  private placeholderAnimated: Animated.Value = new Animated.Value(1);
  private buttonAnimated: Animated.Value = new Animated.Value(this.props.buttonWidth ?? 70);
  private buttonAnimatedWidth: Animated.Value = new Animated.Value(0);
  constructor(props: SearchInputBarProps) {
    super(props)
    this.state = {
      showIcon: false,
      showIconLeft: 0,
    }
  }


  changeIconBoxStyle = (flag: boolean) => {
    if('_value' in this.buttonAnimatedWidth){
      const _value  = (this.buttonAnimatedWidth as any)._value
      if(_value&&!flag ){
        return 
      }
    }
    const { buttonWidth = 70, showActionButton } = this.props
    Animated.timing(this.placeholderAnimated, {
      toValue: flag ? 1 : 0,
      duration: 50,
      useNativeDriver: true,
    }).start()

    Animated.timing(this.buttonAnimated, {
      toValue: flag ? buttonWidth : 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
    })
    this.buttonAnimatedWidth.setValue(flag ? 0 : buttonWidth)

    this.placeholderIcon.current && this.placeholderIcon.current.measure((_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
      const num = showActionButton?0:buttonWidth
      Animated.timing(this.moveLeft, {
        toValue: flag ? 0 : -pageOffsetX + 20 + num / 2+10,
        duration: 300,
        useNativeDriver: true,
      }).start(({ finished }) => {
        flag || this.inputRef.current && this.inputRef.current.focus()
      });
    })
  }
  onChangeText = (value: string) => {
    const { onChangeText = Function } = this.props
    onChangeText(value)
    if (!value && this.state.showIcon) {
      this.setState({ showIcon: false })
      return
    }
    if (value && !this.state.showIcon) {
      this.inputRef.current && this.inputRef.current.measure((_frameOffsetX, _frameOffsetY, _width) => {
        this.setState({ showIconLeft: _width - 40, showIcon: true })
      })
    }
  }
  componentDidMount() {
    const { value, buttonWidth = 70, showActionButton } = this.props
    if (value) {
      Animated.timing(
        this.placeholderAnimated,
        {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }
      ).start(() => {
        this.changeIconBoxStyle(false)
        this.inputRef.current && this.inputRef.current.measure((_frameOffsetX, _frameOffsetY, _width) => {
          let num = showActionButton ? 0 : buttonWidth
          this.setState({ showIconLeft: _width - 40 - num!, showIcon: true })
        })
      })
    }
  }

  onClose = () => {
    const { onClear } = this.props
    onClear?.()
    this.setState({ showIcon: false })
    this.inputRef.current && this.inputRef.current.focus()
  }
  render() {
    const { showIcon, showIconLeft } = this.state
    const { value, onBlur, placeholder = '请输入', buttonWidth = 70, showActionButton = false, button, actionName, ...other } = this.props
    return (
      <View style={styles.searchContainer}>
        <View style={[styles.centerBox, { justifyContent: 'space-between', overflow: 'hidden' }]}>
          <TextInput
            {...other}
            ref={this.inputRef}
            style={[styles.searchInput, { flex: 1 }]}
            onChangeText={this.onChangeText}
            value={value}
            onBlur={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
              if (!value) {
                this.changeIconBoxStyle(true)
              }
              onBlur?.(event)
            }}
          />
          <Animated.View style={showActionButton ? {} : { transform: [{ translateX: this.buttonAnimated }] }}>
            <Animated.View style={showActionButton ? {} : { width: this.buttonAnimatedWidth }}>
              <RightButton width={buttonWidth} isShow actionName={actionName} {...button} />
            </Animated.View>
          </Animated.View>
        </View>

        <View style={[styles.iconBox, { justifyContent: 'space-between', overflow: 'hidden', }]}>
          <TouchableOpacity activeOpacity={1} style={[styles.centerBox, { flex: 1 }]} onPress={() => {
            this.changeIconBoxStyle(false)
          }}>
            <Animated.View style={[{ transform: [{ translateX: this.moveLeft, }] }]}>
              <View style={[styles.centerBox]} ref={this.placeholderIcon}>
                <Icon name='search' size={18} color='#999' />
              </View>
            </Animated.View>
            <Animated.View style={[{ transform: [{ translateX: this.moveLeft, }] }]}>
              <Animated.View style={[styles.centerBox, { opacity: this.placeholderAnimated }]}>
                <Text style={styles.placeholderStyle}>{placeholder}</Text>
              </Animated.View>
            </Animated.View>
          </TouchableOpacity>

          <Animated.View style={showActionButton ? {} : { transform: [{ translateX: this.buttonAnimated }] }}>
            <Animated.View style={showActionButton ? {} : { width: this.buttonAnimatedWidth }}>
              <RightButton width={buttonWidth} isShow actionName={actionName} {...button} />
            </Animated.View>
          </Animated.View>
        </View >

        {showIcon &&
          <TouchableOpacity activeOpacity={1} style={[styles.closeStyle, styles.centerBox, { left: showIconLeft }]} onPress={this.onClose}>
            <Icon name='close' size={18} color='#999' />
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 40,
    overflow: 'hidden',
  },
  iconBox: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    top: -40,
    zIndex: 1
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderStyle: {
    paddingLeft: 10,
    fontSize: 18,
    color: '#999'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f7f7f7",
    fontSize: 18,
    paddingHorizontal: 40,
  },
  closeStyle: {
    position: 'relative',
    height: 40,
    width: 40,
    top: -80,
    zIndex: 2,
  }
});
