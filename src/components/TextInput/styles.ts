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
  input: {
    fontSize: 18,
    color: Colors.fontBlue,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
})
