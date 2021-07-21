import React, { ReactElement, useState } from 'react'
import { View } from 'react-native'

import TextInput from '@components/TextInput'
import SearchIcon from '@assets/search.svg'

import { styles } from './styles'

const CatalogPage = (): ReactElement => {
  const [searchFragment, setSearchFragment] = useState('')

  return (
    <View style={styles.container}>
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
  )
}

export default CatalogPage
