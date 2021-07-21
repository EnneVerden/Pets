import React, { ReactElement } from 'react'
import { View, TextInput as RnTextInput } from 'react-native'

import { styles } from './styles'
import { Props } from './types'

const TextInput = ({
  value,
  onChange,
  LeftIcon,
  placeholder,
  styles: userStyles,
}: Props): ReactElement => {
  return (
    <View style={[styles.container, userStyles?.container]}>
      {LeftIcon && <View style={styles.image}>{LeftIcon}</View>}
      <RnTextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={[styles.input, userStyles?.input]}
      />
    </View>
  )
}

export default TextInput
