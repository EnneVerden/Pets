import React, { ReactElement, useState } from 'react'

import { SafeAreaView, View, Text, FlatList } from 'react-native'
import TextInput from '@components/TextInput'
import SearchIcon from '@assets/search.svg'
import PetCard from '@components/PetCard'
import Button from '@components/Button'
import FiltersIcon from '@assets/filters.svg'

import { styles } from './styles'

import { data as cats } from '../../../data'

const renderItem = ({ item }: any): ReactElement => (
  <PetCard imageURI={item.image ? item.image.url : ''} name={item.name} origin={item.origin} />
)

const CatalogPage = (): ReactElement => {
  const [data, setData] = useState(cats)
  const [searchFragment, setSearchFragment] = useState('')

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.wrapper}>
        <TextInput
          value={searchFragment}
          onChange={setSearchFragment}
          LeftIcon={SearchIcon}
          RightButton={
            <Button
              Icon={FiltersIcon}
              styles={{
                button: styles.button,
              }}
            />
          }
          placeholder="Search pet"
          styles={{
            container: styles.textContainer,
          }}
        />
      </View>
      <View style={[styles.wrapper, styles.titleContainer]}>
        <Text style={styles.title}>Pets</Text>
      </View>
      <View style={[styles.wrapper]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  )
}

export default CatalogPage
