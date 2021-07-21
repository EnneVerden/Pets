import React, {ReactElement} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import Navigator from '@navigator/index'

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
