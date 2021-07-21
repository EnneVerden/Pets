import { StyleSheet } from 'react-native'

import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundPink,
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
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
    marginBottom: 15,
  },
  list: {
    width: '100%',
    height: '75%',
  },
})
