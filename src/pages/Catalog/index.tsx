import React, { ReactElement, useState, useEffect } from 'react'

import { SafeAreaView, View, Text, FlatList } from 'react-native'
import TextInput from '@components/TextInput'
import PetCard from '@components/PetCard'
import Button from '@components/Button'
import Popup from '@components/Popup'
import Checkbox from '@components/Checkbox'

import SearchIcon from '@assets/search.svg'
import FiltersIcon from '@assets/filters.svg'

import { styles } from './styles'

import { data as cats } from '../../../data'

const renderItem = ({ item }: any): ReactElement => <PetCard cat={item} />

const CatalogPage = (): ReactElement => {
  const [data, setData] = useState(cats)
  const [searchFragment, setSearchFragment] = useState('')
  const [filtersIsOpen, setFiltersIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    name: true,
    origin: true,
  })
  const [tempFilters, setTempFilters] = useState(filters)

  const handleOpenFilters = (): void => {
    setFiltersIsOpen(true)
  }

  const handleCloseFilters = (): void => {
    setFiltersIsOpen(false)
    setTempFilters(filters)
  }

  const handleChangeFilter = (name: 'name' | 'origin') => (): void => {
    setTempFilters(filters => ({ ...filters, [name]: !filters[name] }))
  }

  const handleApplyFilters = (): void => {
    setFiltersIsOpen(false)
    setFilters(tempFilters)
  }

  useEffect(() => {
    const lowercaseFragment = searchFragment.toLowerCase()

    const filteredCats = cats.filter(cat => {
      if (filters.name && !filters.origin) {
        return cat.name.toLowerCase().includes(lowercaseFragment)
      }
      if (filters.origin && !filters.name) {
        return cat.origin.toLowerCase().includes(lowercaseFragment)
      }

      return (
        cat.name.toLowerCase().includes(lowercaseFragment) ||
        cat.origin.toLowerCase().includes(lowercaseFragment)
      )
    })

    setData(filteredCats)
  }, [searchFragment])

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.wrapper}>
        <TextInput
          value={searchFragment}
          onChange={setSearchFragment}
          LeftIcon={SearchIcon}
          RightButton={
            <Button
              onPress={handleOpenFilters}
              Icon={FiltersIcon}
              styles={{
                button: styles.button,
              }}
              opacity={0.7}
            />
          }
          placeholder="Search cat"
          styles={{
            container: styles.textContainer,
          }}
        />
      </View>
      <View style={[styles.wrapper, styles.titleContainer]}>
        <Text style={styles.title}>Cats</Text>
      </View>
      <View style={[styles.wrapper]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          getItemLayout={(data, index) => ({ length: 135, offset: 135 * index, index })}
          style={styles.list}
        />
      </View>
      <Popup visible={filtersIsOpen} onSubmit={handleApplyFilters} onCancel={handleCloseFilters}>
        <View style={styles.popupContainer}>
          <Checkbox value={tempFilters.name} onChange={handleChangeFilter('name')} title="Breed" />
          <Checkbox
            value={tempFilters.origin}
            onChange={handleChangeFilter('origin')}
            title="Origin"
          />
        </View>
      </Popup>
    </SafeAreaView>
  )
}

export default CatalogPage
