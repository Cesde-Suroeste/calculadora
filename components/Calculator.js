import React, { useState } from 'react';
import { View } from 'react-native';
import Display from './Display';
import Button from './Button';
import styles from '../styles/styles';
import {
  clearCalculator,
  handleNumberInput,
  handleOperation,
  handleEquals
} from '../utils/calculator';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    display: '0',
    previousValue: null,
    operation: null,
    waitingOperand: false
  });

  const handleNumberPress = (number) => {
    const newState = handleNumberInput(calculatorState, number);
    setCalculatorState(newState);
  };

  const handleOperationPress = (operator) => {
    const newState = handleOperation(calculatorState, operator);
    setCalculatorState(newState);
  };

  const handleEqualsPress = () => {
    const newState = handleEquals(calculatorState);
    setCalculatorState(newState);
  };

  const handleClearPress = () => {
    const newState = clearCalculator();
    setCalculatorState(newState);
  };

  const handleDecimalPress = () => {
    const newState = handleNumberInput(calculatorState, '.');
    setCalculatorState(newState);
  };

  return (
    <View style={styles.container}>
      <Display value={calculatorState.display} />
      
      <View style={styles.buttonsContainer}>
        {/* Primera fila: C, ±, %, ÷ */}
        <View style={styles.buttonRow}>
          <Button
            title="C"
            type="function"
            onPress={handleClearPress}
          />
          <Button
            title="±"
            type="function"
            onPress={() => {
              if (calculatorState.display !== '0') {
                const newValue = calculatorState.display.startsWith('-') 
                  ? calculatorState.display.slice(1)
                  : '-' + calculatorState.display;
                setCalculatorState({
                  ...calculatorState,
                  display: newValue
                });
              }
            }}
          />
          <Button
            title="%"
            type="function"
            onPress={() => {
              const value = parseFloat(calculatorState.display) / 100;
              setCalculatorState({
                ...calculatorState,
                display: value.toString()
              });
            }}
          />
          <Button
            title="÷"
            type="operator"
            isActive={calculatorState.operation === '÷'}
            onPress={() => handleOperationPress('÷')}
          />
        </View>

        {/* Segunda fila: 7, 8, 9, × */}
        <View style={styles.buttonRow}>
          <Button
            title="7"
            type="number"
            onPress={() => handleNumberPress('7')}
          />
          <Button
            title="8"
            type="number"
            onPress={() => handleNumberPress('8')}
          />
          <Button
            title="9"
            type="number"
            onPress={() => handleNumberPress('9')}
          />
          <Button
            title="×"
            type="operator"
            isActive={calculatorState.operation === '×'}
            onPress={() => handleOperationPress('×')}
          />
        </View>

        {/* Tercera fila: 4, 5, 6, - */}
        <View style={styles.buttonRow}>
          <Button
            title="4"
            type="number"
            onPress={() => handleNumberPress('4')}
          />
          <Button
            title="5"
            type="number"
            onPress={() => handleNumberPress('5')}
          />
          <Button
            title="6"
            type="number"
            onPress={() => handleNumberPress('6')}
          />
          <Button
            title="-"
            type="operator"
            isActive={calculatorState.operation === '-'}
            onPress={() => handleOperationPress('-')}
          />
        </View>

        {/* Cuarta fila: 1, 2, 3, + */}
        <View style={styles.buttonRow}>
          <Button
            title="1"
            type="number"
            onPress={() => handleNumberPress('1')}
          />
          <Button
            title="2"
            type="number"
            onPress={() => handleNumberPress('2')}
          />
          <Button
            title="3"
            type="number"
            onPress={() => handleNumberPress('3')}
          />
          <Button
            title="+"
            type="operator"
            isActive={calculatorState.operation === '+'}
            onPress={() => handleOperationPress('+')}
          />
        </View>

        {/* Quinta fila: 0, ., = */}
        <View style={styles.buttonRow}>
          <Button
            title="0"
            type="number"
            isZero={true}
            onPress={() => handleNumberPress('0')}
          />
          <Button
            title="."
            type="number"
            onPress={handleDecimalPress}
          />
          <Button
            title="="
            type="operator"
            onPress={handleEqualsPress}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;