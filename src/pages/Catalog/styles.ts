import { StyleSheet } from 'react-native'

import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundPink,
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  textContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
  },
  titleContainer: {
    marginTop: 40,
    alignItems: 'flex-start',
  },
  title: {
    color: Colors.fontBlue,
    fontSize: 26,
    fontWeight: 'bold',
  },
})
