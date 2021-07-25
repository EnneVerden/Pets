import React, { ReactElement, useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView } from 'react-native'
import BackButton from '@/components/BackButton'
import PetCard from '@/components/PetCard'
import ParameterCard from '@/components/ParameterCard'

import WeightIcon from '@/assets/icons/weight.svg'
import BrainIcon from '@/assets/icons/brain.svg'

import { styles } from './styles'
import { Cat } from '@/types/cat'
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
          cat.image
            ? { uri: cat.image.url, priority: 'high' }
            : require('@/assets/images/cat-avatar.png')
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
      <View style={[styles.wrapper, styles.cardsRow]}>
        <ParameterCard Icon={WeightIcon} title={`${cat.weight?.metric} kg` || '???'} />
        <ParameterCard Icon={BrainIcon} title={`${cat.intelligence}/5` || '???'} />
      </View>
      <View style={[styles.wrapper, styles.description]}>
        <Text style={styles.descriptionText}>{cat.description}</Text>
      </View>
    </View>
  ) : (
    <Text>Cat not found</Text>
  )
}

export default DetailsPage
