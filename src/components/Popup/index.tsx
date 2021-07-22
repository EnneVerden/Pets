import React, { ReactElement } from 'react'

import { Modal, View } from 'react-native'
import Button from '@components/Button'

import { styles } from './styles'
import { Props } from './types'

const Popup = ({
  visible,
  children,
  onSubmit,
  onCancel,
  animationType,
  styles: userStyles,
}: Props): ReactElement => {
  return (
    <Modal visible={visible} animationType={animationType || 'fade'} transparent>
      <View style={[styles.background, userStyles?.background]}>
        <View style={[styles.container, userStyles?.container]}>
          <View>{children}</View>
          <View style={styles.buttons}>
            <Button
              onPress={onCancel}
              styles={{
                button: styles.button,
                text: styles.buttonText,
              }}>
              Cancel
            </Button>
            <Button
              onPress={onSubmit}
              styles={{
                button: styles.button,
                text: styles.buttonText,
              }}>
              OK
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Popup
