import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native'
import Icon, { IconsName } from '../Icon'

export interface ToastProps {
  type: 'info' | 'success' | 'warning' | 'error';
  content: string;
  duration?: number;
  showIcon?: boolean;
  icon?: IconsName;
  onClose?: () => void;
  onAnimationEnd?: () => void;
  style?: StyleProp<ViewStyle>;
}


export default class ToastContainer extends Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
    type: 'info',
    
  };

  anim: Animated.CompositeAnimation | null | undefined;

  constructor(props: ToastProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
    };
  }
  componentDidMount() {
    const { onClose, onAnimationEnd, content } = this.props;
    const duration = this.props.duration as number;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(
        timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      );
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }


  renderIcon = () => {
    const { type } = this.props;
    let icon = this.props.icon;
    let color = '';
    if (!icon) {
      switch (type) {
        case 'success': icon = 'circle-check'; color = '#28a745'; break;
        case 'warning': icon = 'warning'; color = '#ffc107'; break;
        case 'info': icon = 'information'; color = '#008ef0'; break;
        case 'error': icon = 'circle-close'; color = '#dc3545'; break;
        default: break;
      }
    }
    return {icon, color};
  }

  render() {
    const { content, type, style } = this.props;

    return (
      <View
        style={[styles.container, style]}
      >
        <View style={[styles.innerContainer]}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <View
              style={[
                styles.content,
                styles[type]
              ]}
            >
              <Icon name={this.renderIcon().icon}  size={16} style={[styles.icon]}  color={this.renderIcon().color}/>
              <Text >{content}</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 100,
    right: 0,
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  icon: {
    marginRight: 5,
   
  },
  content: {
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  info: {
    backgroundColor: '#bde4ff',
    color: '#008ef0'
  },
  success: {
    backgroundColor: '#afecbd',
    color: '#28a745'
  },
  error: {
    backgroundColor: '#fae3e5'
  },
  warning: {
    backgroundColor: '#fff4d3'
  }
})