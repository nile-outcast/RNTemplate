import React, { FC } from 'react'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface IModalMenu {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`

const Container = styled.View`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${colors.white};
`

const ChildrenBox = styled.View`
  align-items: center;
  padding-top: 5px;
  padding-bottom: 80px;
`

export const ModalMenu: FC<IModalMenu> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false)

  return (
    <StyledModal
      avoidKeyboard={true}
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
        <ChildrenBox>{children}</ChildrenBox>
      </Container>
    </StyledModal>
  )
}
