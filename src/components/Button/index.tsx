import React, { ReactElement } from 'react'

import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'
import { Props } from './types'

const Button = ({
  onPress,
  children,
  Icon,
  styles: userStyles,
  iconSize,
  iconColor,
  opacity,
}: Props): ReactElement => {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      style={[styles.button, userStyles?.button]}
      onPress={onPress}>
      {children && <Text style={[styles.buttonText, userStyles?.text]}>{children}</Text>}
      {Icon && (
        <Icon
          width={iconSize?.width || 20}
          height={iconSize?.height || 20}
          style={[{ fill: iconColor || '#ffffff' }, userStyles?.icon]}
        />
      )}
    </TouchableOpacity>
  )
}

export default Button
