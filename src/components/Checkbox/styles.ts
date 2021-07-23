import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkbox: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  title: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colors.fontBlue,
  },
})
