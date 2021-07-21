import React, { ReactElement } from 'react'

import { View, Image, Text } from 'react-native'
import LocationIcon from '@assets/location.svg'

import { styles, imageSize } from './styles'
import { Props } from './types'

const PetCard = ({ name, origin, imageURI }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageURI ? { uri: imageURI } : require('@assets/cat-avatar.png')}
          width={imageSize.width}
          height={imageSize.height}
          style={[styles.image, imageSize]}
        />
      </View>
      <View style={styles.textInfo}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.location}>
          <LocationIcon width={20} height={20} />
          <Text style={styles.locationText}>{origin}</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <Text style={styles.profileText}>Go Profile</Text>
      </View>
    </View>
  )
}

export default PetCard
