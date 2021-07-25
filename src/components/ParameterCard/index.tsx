import React, { ReactElement } from 'react'

import { View, Text, Pressable } from 'react-native'

import { styles } from './styles'
import { Props } from './types'

const ParameterCard = ({ Icon, title, onIconClick }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={onIconClick}>
          <Icon width={55} height={55} />
        </Pressable>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  )
}

export default ParameterCard
