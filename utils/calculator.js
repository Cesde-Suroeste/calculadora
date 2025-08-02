// Función para realizar operaciones matemáticas
export const calculate = (firstOperand, secondOperand, operator) => {
  const first = parseFloat(firstOperand);
  const second = parseFloat(secondOperand);

  if (isNaN(first) || isNaN(second)) {
    return 0;
  }

  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '×':
      return first * second;
    case '÷':
      if (second === 0) {
        return 'Error'; // División por cero
      }
      return first / second;
    default:
      return second;
  }
};

// Función para formatear números
export const formatNumber = (num) => {
  if (num === 'Error') return num;
  
  const number = parseFloat(num);
  
  if (isNaN(number)) return '0';
  
  // Si es un número entero y no es muy grande, mostrarlo sin decimales
  if (Number.isInteger(number) && Math.abs(number) < 1e10) {
    return number.toString();
  }
  
  // Si es muy grande, usar notación científica
  if (Math.abs(number) >= 1e10) {
    return number.toExponential(3);
  }
  
  // Si es muy pequeño, usar notación científica
  if (Math.abs(number) < 1e-6 && number !== 0) {
    return number.toExponential(3);
  }
  
  // Para decimales, limitar a 8 dígitos significativos
  return parseFloat(number.toPrecision(8)).toString();
};

// Función para validar entrada numérica
export const isValidInput = (currentValue, input) => {
  // No permitir múltiples puntos decimales
  if (input === '.' && currentValue.includes('.')) {
    return false;
  }
  
  // No permitir más de 9 dígitos
  if (currentValue.replace('.', '').length >= 9 && input !== '.') {
    return false;
  }
  
  return true;
};

// Función para limpiar la calculadora
export const clearCalculator = () => {
  return {
    display: '0',
    previousValue: null,
    operation: null,
    waitingOperand: false
  };
};

// Función para manejar entrada de números
export const handleNumberInput = (currentState, input) => {
  const { display, waitingOperand } = currentState;
  
  if (waitingOperand) {
    return {
      ...currentState,
      display: input,
      waitingOperand: false
    };
  }
  
  if (display === '0') {
    return {
      ...currentState,
      display: input
    };
  }
  
  if (isValidInput(display, input)) {
    return {
      ...currentState,
      display: display + input
    };
  }
  
  return currentState;
};

// Función para manejar operaciones
export const handleOperation = (currentState, nextOperation) => {
  const { display, previousValue, operation } = currentState;
  const inputValue = parseFloat(display);
  
  if (previousValue === null) {
    return {
      ...currentState,
      previousValue: inputValue,
      operation: nextOperation,
      waitingOperand: true
    };
  }
  
  if (operation) {
    const currentValue = previousValue || 0;
    const newValue = calculate(currentValue, inputValue, operation);
    
    return {
      ...currentState,
      display: formatNumber(newValue),
      previousValue: parseFloat(formatNumber(newValue)),
      operation: nextOperation,
      waitingOperand: true
    };
  }
  
  return currentState;
};

// Función para calcular resultado final
export const handleEquals = (currentState) => {
  const { display, previousValue, operation } = currentState;
  const inputValue = parseFloat(display);
  
  if (previousValue !== null && operation) {
    const newValue = calculate(previousValue, inputValue, operation);
    
    return {
      ...currentState,
      display: formatNumber(newValue),
      previousValue: null,
      operation: null,
      waitingOperand: true
    };
  }
  
  return currentState;
};