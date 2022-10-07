import React, { FC } from 'react'
import Modal from 'react-native-modal'
import { ModalLine } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { ModalMenuProps } from 'src/types'

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`

const Container = styled.View`
  overflow: hidden;
  height: 95%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${colors.white};
`

const ChildrenBox = styled.View`
  align-items: center;
  padding-top: 5px;
`

export const ModalMenu: FC<ModalMenuProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false)

  return (
    <StyledModal
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['down']}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropOpacity={0.1}
      useNativeDriver
      hideModalContentWhileAnimating>
      <Container>
        <ChildrenBox>
          <ModalLine />
          {children}
        </ChildrenBox>
      </Container>
    </StyledModal>
  )
}
