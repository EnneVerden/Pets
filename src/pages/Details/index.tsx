import React, { ReactElement, useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

import { Text, View } from 'react-native'
import PetCard from '@components/PetCard'
import BackButton from '@components/BackButton'

import { styles } from './styles'
import { Cat } from '@types/cat'
import { Route } from './types'

import { data as cats } from '../../../data'

const DetailsPage = (): ReactElement => {
  const route = useRoute<Route>()

  const [cat, setCat] = useState<Cat | null>(null)

  useEffect(() => {
    const cat = cats.find(cat => cat.id === route.params.catId)

    setCat(cat)
  }, [])

  return cat ? (
    <View style={styles.container}>
      <BackButton />
      <FastImage
        source={
          cat.image ? { uri: cat.image.url, priority: 'high' } : require('@assets/cat-avatar.png')
        }
        style={styles.image}
        resizeMode="cover"
      />
      <PetCard
        cat={cat}
        onlyInfo
        styles={{
          container: styles.card,
          info: {
            container: styles.cardInfo,
            breed: styles.cardBreed,
            location: { title: styles.cardOrigin },
          },
        }}
        iconSize={{
          width: 25,
          height: 25,
        }}
      />
    </View>
  ) : (
    <Text>Cat not found</Text>
  )
}

export default DetailsPage
