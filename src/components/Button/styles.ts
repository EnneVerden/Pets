import { StyleSheet } from 'react-native'
import Colors from '@theme/colors'

export const styles = StyleSheet.create({
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.link,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Colors.link,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    elevation: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
})
