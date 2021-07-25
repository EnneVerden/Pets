import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginTop: 12,
  },
  titleText: {
    color: Colors.link,
    fontSize: 22,
  },
})
