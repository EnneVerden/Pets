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
  button: {
    width: 40,
    height: 40,
  },
  textContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    elevation: 15,
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
  popupContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
})
