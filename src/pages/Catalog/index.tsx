import React, { ReactElement, useState } from 'react'

import { View, Text } from 'react-native'
import TextInput from '@components/TextInput'
import SearchIcon from '@assets/search.svg'
import PetCard from '@components/PetCard'

import { styles } from './styles'

const CatalogPage = (): ReactElement => {
  const [searchFragment, setSearchFragment] = useState('')

  return (
    <View style={styles.contentContainer}>
      <View style={styles.wrapper}>
        <TextInput
          value={searchFragment}
          onChange={setSearchFragment}
          LeftIcon={<SearchIcon width={25} height={25} />}
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
        <PetCard
          imageURI="https://cdna.artstation.com/p/assets/images/images/031/825/628/large/glawdys-hodiesne-sans-titre-1.jpg?1604688006"
          name="Matias"
          origin="USA"
        />
      </View>
    </View>
  )
}

export default CatalogPage
