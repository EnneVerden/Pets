import { StyleSheet } from 'react-native'
import Colors from '@theme/colors'

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    width: '50%',
    borderRadius: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: Colors.unfocus,
    elevation: 0,
  },
  buttonText: {
    color: Colors.fontBlue,
    fontSize: 20,
  },
})
