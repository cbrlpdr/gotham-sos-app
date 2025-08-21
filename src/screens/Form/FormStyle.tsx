import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHeader: {
    flex: 0,
    paddingBlock: 25,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  containerForm: {
    flex: 1,
    paddingBlock: 25,
    paddingInline: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: 100,
    height: 100
  },
  instructions: {
    color: 'white',
    fontFamily: 'sans-serif-thin',
    fontSize: 15,
    marginBlockEnd: 5
  },
  input: {
    marginBlock: 5,
    color: '#000',
    width: '80%',
    height: 50,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: '#fff'
  },
  label: {
    color: 'white',
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
    paddingBlock: 5
  },
  backButton: {
    width: 50,
    height: 50
  },
  sendButton: {
    width: 200,
    height: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    backgroundColor: '#eb0',
    margin: 15,
    borderRadius: 10,
    fontFamily: 'sans-serif',
  }
});