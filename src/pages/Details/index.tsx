import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { useRoute } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Linking,
  Alert,
  Pressable,
} from 'react-native'
import BackButton from '@/components/BackButton'
import PetCard from '@/components/PetCard'
import ParameterCard from '@/components/ParameterCard'

import WeightIcon from '@/assets/icons/weight.svg'
import BrainIcon from '@/assets/icons/brain.svg'

import { styles } from './styles'
import { Cat } from '@/types/cat'
import { Route } from './types'

import { data as cats } from '../../../data'

const getIntelligenceName = (value: number): string => {
  if (value >= 4) {
    return 'High'
  }
  if (value >= 2) {
    return 'Normal'
  }

  return 'Low'
}

const DetailsPage = (): ReactElement => {
  const route = useRoute<Route>()
  const width = useWindowDimensions().width
  const height = useWindowDimensions().height

  const [cat, setCat] = useState<Cat | null>(null)

  useEffect(() => {
    const cat = cats.find(cat => cat.id === route.params.catId)

    setCat(cat)
  }, [])

  const handleOpenLink = useCallback(async () => {
    if (cat?.wikipedia_url) {
      const supported = await Linking.canOpenURL(cat.wikipedia_url)

      if (supported) {
        await Linking.openURL(cat.wikipedia_url)
      } else {
        Alert.alert('', 'Can not open the link')
      }
    }
  }, [cat])

  const handleOpenTip = (title: string, text: string) => (): void => {
    Alert.alert(title, text)
  }

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
          <ParameterCard
            Icon={WeightIcon}
            title={`${cat.weight?.metric} kg` || '???'}
            onIconClick={handleOpenTip('Weight', `Weight is ${cat.weight?.metric || '???'}`)}
          />
          <ParameterCard
            Icon={BrainIcon}
            title={getIntelligenceName(cat.intelligence)}
            onIconClick={handleOpenTip(
              'Intelligence',
              `Intelligence is ${getIntelligenceName(cat.intelligence)}`,
            )}
          />
        </View>
        <View style={[styles.wrapper, styles.description]}>
          <Text style={styles.descriptionText}>{cat.description}</Text>
        </View>
        {cat.wikipedia_url && (
          <View style={styles.wikipedia}>
            <Pressable onPress={handleOpenLink}>
              <Text style={styles.wikipediaTitle}>Open in Wikipedia</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Text>Cat not found</Text>
  )
}

export default DetailsPage
