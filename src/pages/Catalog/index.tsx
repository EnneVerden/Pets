import React, { ReactElement, useState, useEffect } from 'react'

import { SafeAreaView, View, Text, SectionList } from 'react-native'
import TextInput from '@/components/TextInput'
import PetCard from '@/components/PetCard'
import Button from '@/components/Button'
import Popup from '@/components/Popup'
import Checkbox from '@/components/Checkbox'

import SearchIcon from '@/assets/icons/search.svg'
import FiltersIcon from '@/assets/icons/filters.svg'

import { styles } from './styles'
import { Data, Filters } from './types'
import { Cat } from '@/types/Cat'

import { data as cats } from '../../../data'

const renderItem = ({ item }: Record<'item', Cat>): ReactElement => {
  return <PetCard cat={item} />
}

const CatalogPage = (): ReactElement => {
  const [data, setData] = useState<Data>([])
  const [searchFragment, setSearchFragment] = useState<string>('')
  const [filtersIsOpen, setFiltersIsOpen] = useState<boolean>(false)
  const [filters, setFilters] = useState<Filters>({
    breed: true,
    origin: true,
  })
  const [tempFilters, setTempFilters] = useState<Filters>(filters)

  useEffect(() => {
    const lowercaseFragment = searchFragment.toLowerCase()

    const filteredCats: any = cats.filter(cat => {
      if (filters.breed && !filters.origin) {
        return cat.name.toLowerCase().includes(lowercaseFragment)
      }
      if (filters.origin && !filters.breed) {
        return cat.origin.toLowerCase().includes(lowercaseFragment)
      }

      return (
        cat.name.toLowerCase().includes(lowercaseFragment) ||
        cat.origin.toLowerCase().includes(lowercaseFragment)
      )
    })

    setData([
      {
        title: 'Cats',
        data: filteredCats,
      },
    ])
  }, [searchFragment])

  const handleOpenFilters = (): void => {
    setFiltersIsOpen(true)
  }

  const handleCloseFilters = (): void => {
    setFiltersIsOpen(false)
    setTempFilters(filters)
  }

  const handleChangeFilter = (name: 'breed' | 'origin') => (): void => {
    setTempFilters(filters => ({ ...filters, [name]: !filters[name] }))
  }

  const handleApplyFilters = (): void => {
    setFiltersIsOpen(false)
    setFilters(tempFilters)
  }

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
          placeholder="Search a cat"
          styles={{
            container: styles.textContainer,
          }}
        />
      </View>
      <View style={[styles.wrapper]}>
        <SectionList
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.title}>{title}</Text>
          )}
          keyExtractor={item => item.id}
          getItemLayout={(data, index) => ({ length: 135, offset: 135 * index, index })}
          style={styles.list}
        />
      </View>
      <Popup visible={filtersIsOpen} onSubmit={handleApplyFilters} onCancel={handleCloseFilters}>
        <View style={styles.popupContainer}>
          <Checkbox
            value={tempFilters.breed}
            onChange={handleChangeFilter('breed')}
            title="Breed"
          />
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
