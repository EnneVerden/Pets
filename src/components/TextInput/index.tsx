import React, { ReactElement } from 'react'

import { View, TextInput as RnTextInput } from 'react-native'

import Colors from '@theme/colors'
import { styles } from './styles'
import { Props } from './types'

const TextInput = ({
  value,
  onChange,
  LeftIcon,
  RightButton,
  placeholder,
  styles: userStyles,
}: Props): ReactElement => {
  return (
    <View style={[styles.container, userStyles?.container]}>
      {LeftIcon && (
        <View style={styles.iconContainer}>
          {<LeftIcon style={[styles.icon, { fill: Colors.unfocus }]} />}
        </View>
      )}
      <RnTextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            width:
              LeftIcon && RightButton
                ? '70%'
                : LeftIcon && !RightButton
                ? '85%'
                : !LeftIcon && RightButton
                ? '80%'
                : '95%',
          },
          userStyles?.input,
        ]}
      />
      {RightButton && (
        <View style={[styles.buttonContainer, userStyles?.buttonContainer]}>{RightButton}</View>
      )}
    </View>
  )
}

export default TextInput
