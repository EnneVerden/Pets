import React, { ReactElement } from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from '@/components/Button'
import BackIcon from '@/assets/icons/back.svg'

import { styles } from './styles'
import Colors from '@/theme/colors'

const BackButton = (): ReactElement => {
  const navigation = useNavigation()

  const handleBack = (): void => {
    navigation.goBack()
  }

  return (
    <Button
      onPress={handleBack}
      Icon={BackIcon}
      styles={{ button: styles.button }}
      iconColor={Colors.link}
      opacity={0.7}
    />
  )
}

export default BackButton
