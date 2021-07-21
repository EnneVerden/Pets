import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CatalogPage from '@pages/Catalog'
import DetailsPage from '@/pages/Details'

import { AppNavigation } from '@/constants/navigation'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppNavigation.Catalog} component={CatalogPage} />
      <Stack.Screen name={AppNavigation.Details} component={DetailsPage} />
    </Stack.Navigator>
  )
}

export default Navigator
