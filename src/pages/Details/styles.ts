import { StyleSheet } from 'react-native'
import Colors from '@theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundPink,
  },
  image: {
    width: '100%',
    height: '45%',
  },
  card: {
    width: '80%',
    borderRadius: 15,
    position: 'absolute',
    top: '40%',
  },
  cardInfo: {
    width: '100%',
    alignItems: 'center',
  },
  cardBreed: {
    fontSize: 22,
  },
  cardOrigin: {
    fontSize: 18,
  },
})
