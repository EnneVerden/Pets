import React, { ReactElement, useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'
import { Text, View, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native'
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
  const width = useWindowDimensions().width
  const height = useWindowDimensions().height

  const [cat, setCat] = useState<Cat | null>(null)

  useEffect(() => {
    const cat = cats.find(cat => cat.id === route.params.catId)

    setCat(cat)
  }, [])

  return cat ? (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView>
        <FastImage
          source={
            cat.image
              ? { uri: cat.image.url, priority: 'high' }
              : require('@/assets/images/cat-avatar.png')
          }
          style={{ width, height: height * 0.45 }}
          resizeMode="cover"
        />
        <PetCard
          cat={cat}
          onlyInfo
          styles={{
            container: [styles.card, { top: height * 0.4, left: (width - width * 0.8) / 2 }],
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
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Text>Cat not found</Text>
  )
}

export default DetailsPage
