import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CatalogPage from '@pages/Catalog'
import DetailsPage from '@/pages/Details'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog">
      <Stack.Screen name="Catalog" component={CatalogPage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  )
}

export default Navigator
