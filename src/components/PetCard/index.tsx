import React, { ReactElement } from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text } from 'react-native'
import Button from '@/components/Button'
import FastImage from 'react-native-fast-image'
import LocationIcon from '@/assets/icons/location.svg'

import { styles } from './styles'
import { Props } from './types'

const PetCard = ({ cat, onlyInfo, styles: userStyles, iconSize }: Props): ReactElement => {
  const navigation = useNavigation()

  const handleGoProfile = (): void => {
    navigation.navigate('Details', { catId: cat.id })
  }

  return (
    <View style={[styles.container, userStyles?.container]}>
      {!onlyInfo && (
        <View style={[styles.imageContainer, userStyles?.image?.container]}>
          <FastImage
            source={
              cat.image
                ? { uri: cat.image.url, priority: 'high' }
                : require('@assets/images/cat-avatar.png')
            }
            style={[styles.image, userStyles?.image?.image]}
            resizeMode="cover"
          />
        </View>
      )}
      <View style={[styles.textInfo, userStyles?.info?.container]}>
        <Text style={[styles.name, userStyles?.info?.breed]}>{cat.name}</Text>
        <View style={[styles.location, userStyles?.info?.location?.container]}>
          <LocationIcon width={iconSize?.width || 20} height={iconSize?.height || 20} />
          <Text style={[styles.locationText, userStyles?.info?.location?.title]}>{cat.origin}</Text>
        </View>
      </View>
      {!onlyInfo && (
        <View style={[styles.profile, userStyles?.profile?.button]}>
          <Button
            onPress={handleGoProfile}
            styles={{
              button: [styles.profileButton, userStyles?.profile?.button],
              text: [styles.profileText, userStyles?.profile?.title],
            }}
            opacity={0.3}>
            Go Profile
          </Button>
        </View>
      )}
    </View>
  )
}

export default PetCard
