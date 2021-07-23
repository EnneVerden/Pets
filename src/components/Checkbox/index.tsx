import React, { ReactElement } from 'react'

import { View, Text } from 'react-native'
import RnCheckbox from '@react-native-community/checkbox'

import Colors from '@/theme/colors'
import { styles } from './styles'
import { Props } from './types'

const Checkbox = ({ value, onChange, title }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <RnCheckbox
        value={value}
        onValueChange={onChange}
        tintColors={{ true: Colors.link, false: Colors.unfocus }}
        style={styles.checkbox}
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  )
}

export default Checkbox
