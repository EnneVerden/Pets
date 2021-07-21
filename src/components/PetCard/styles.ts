import { StyleSheet } from 'react-native'
import Colors from '@theme/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
  },
  image: {
    borderRadius: 50,
  },
  textInfo: {
    marginLeft: 15,
    justifyContent: 'space-around',
  },
  name: {
    color: Colors.fontBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    color: Colors.fontBlue,
    fontSize: 16,
    marginLeft: 3,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: Colors.link,
    fontWeight: 'bold',
  },
})

export const imageSize = {
  width: 90,
  height: 90,
}
