import React, { ReactElement } from 'react'

import { View, Image, Text } from 'react-native'
import LocationIcon from '@assets/location.svg'

import { styles, imageSize } from './styles'
import { Props } from './types'

const PetCard = ({ imageURI, name, origin }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View>
          <Image
            source={{
              uri: imageURI,
            }}
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
      </View>
      <View style={styles.profile}>
        <Text style={styles.profileText}>Go to profile</Text>
      </View>
    </View>
  )
}

export default PetCard
