import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30
  },
  inputContainer: {
    flex: 1,
    marginTop: 150,
    
  },
  buttonContainer: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButton: {
    backgroundColor: '#0e7afe',
    padding: '5%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  sendButtonText: {
    color: '#fff'
  }
});