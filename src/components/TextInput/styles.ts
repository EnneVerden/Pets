import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
  icon: {
    width: 17,
    height: 17,
  },
  input: {
    fontSize: 18,
    color: Colors.fontBlue,
  },
  buttonContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
