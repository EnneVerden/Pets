import React, { ReactElement } from 'react'

import { View, Text } from 'react-native'

import { styles } from './styles'
import { Props } from './types'

const ParameterCard = ({ Icon, title }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <View>
        <Icon width={55} height={55} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  )
}

export default ParameterCard
