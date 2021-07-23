import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    height: 115,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  textInfo: {
    width: '45%',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  name: {
    color: Colors.fontBlue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    color: Colors.fontBlue,
    fontSize: 14,
    marginLeft: 3,
  },
  profile: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButton: {
    backgroundColor: '#ffffff',
    paddingRight: 0,
    paddingLeft: 0,
    borderRadius: 0,
    elevation: 0,
  },
  profileText: {
    color: Colors.link,
    fontWeight: 'bold',
  },
})
