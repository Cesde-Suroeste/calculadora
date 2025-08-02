import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonSize = width / 4 - 15;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  display: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '300',
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 3,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonNumber: {
    backgroundColor: '#333',
  },
  buttonOperator: {
    backgroundColor: '#ff9500',
  },
  buttonFunction: {
    backgroundColor: '#a6a6a6',
  },
  buttonZero: {
    width: buttonSize * 2 + 10,
    borderRadius: buttonSize / 2,
    paddingLeft: 35,
    alignItems: 'flex-start',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '400',
  },
  buttonTextNumber: {
    color: '#fff',
  },
  buttonTextOperator: {
    color: '#fff',
  },
  buttonTextFunction: {
    color: '#000',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  operatorActive: {
    backgroundColor: '#fff',
  },
  operatorActiveText: {
    color: '#ff9500',
  },
});

export default styles;