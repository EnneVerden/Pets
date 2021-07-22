import React, { ReactElement } from 'react'

import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import LocationIcon from '@assets/location.svg'

import { styles } from './styles'
import { Props } from './types'

const PetCard = ({ name, origin, imageURI }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={
            imageURI ? { uri: imageURI, priority: 'high' } : require('@assets/cat-avatar.png')
          }
          style={styles.image}
          resizeMode="cover"
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
