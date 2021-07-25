import { StyleSheet } from 'react-native'
import Colors from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPink,
  },
  card: {
    width: '80%',
    position: 'absolute',
    borderRadius: 15,
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
  wrapper: {
    width: '100%',
    paddingHorizontal: '10%',
  },
  cardsRow: {
    marginTop: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 20,
  },
  descriptionText: {
    color: Colors.fontBlue,
    fontSize: 18,
  },
})
