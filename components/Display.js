import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Display = ({ value }) => {
  const formatDisplay = (value) => {
    if (value === null || value === undefined) {
      return '0';
    }
    
    // Convertir a string para procesamiento
    let displayValue = value.toString();
    
    // Limitar la longitud para evitar overflow
    if (displayValue.length > 9) {
      // Si es un número muy grande, usar notación científica
      const numValue = parseFloat(displayValue);
      if (Math.abs(numValue) >= 1e9) {
        return numValue.toExponential(3);
      }
      // Si es decimal muy largo, limitar decimales
      return parseFloat(displayValue).toPrecision(9);
    }
    
    return displayValue;
  };

  return (
    <View style={styles.displayContainer}>
      <Text style={styles.display} adjustsFontSizeToFit numberOfLines={1}>
        {formatDisplay(value)}
      </Text>
    </View>
  );
};

export default Display;