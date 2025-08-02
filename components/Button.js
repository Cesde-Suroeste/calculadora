import React from 'react';
import { TouchableOpacity, Text, Pressable } from 'react-native';
import styles from '../styles/styles';

const Button = ({ 
  title, 
  onPress, 
  type = 'number', 
  isActive = false,
  isZero = false 
}) => {
  const getButtonStyle = () => {
    let buttonStyle = [styles.button];
    
    if (type === 'number') {
      buttonStyle.push(styles.buttonNumber);
    } else if (type === 'operator') {
      buttonStyle.push(styles.buttonOperator);
      if (isActive) {
        buttonStyle.push(styles.operatorActive);
      }
    } else if (type === 'function') {
      buttonStyle.push(styles.buttonFunction);
    }
    
    if (isZero) {
      buttonStyle.push(styles.buttonZero);
    }
    
    return buttonStyle;
  };

  const getTextStyle = () => {
    let textStyle = [styles.buttonText];
    
    if (type === 'number') {
      textStyle.push(styles.buttonTextNumber);
    } else if (type === 'operator') {
      if (isActive) {
        textStyle.push(styles.operatorActiveText);
      } else {
        textStyle.push(styles.buttonTextOperator);
      }
    } else if (type === 'function') {
      textStyle.push(styles.buttonTextFunction);
    }
    
    return textStyle;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        ...getButtonStyle(),
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
    >
      <Text style={getTextStyle()}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;