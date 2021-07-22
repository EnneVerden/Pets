import React, { ReactElement } from 'react'

import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'
import { Props } from './types'

const Button = ({ onPress, children, Icon, styles: userStyles }: Props): ReactElement => {
  return (
    <TouchableOpacity style={[styles.button, userStyles?.button]} onPress={onPress}>
      {children && <Text style={[styles.buttonText, userStyles?.text]}>{children}</Text>}
      {Icon && <Icon width={20} height={20} style={[{ fill: '#ffffff' }, userStyles?.icon]} />}
    </TouchableOpacity>
  )
}

export default Button
