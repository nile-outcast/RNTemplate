import React, { FC } from 'react'
import Modal from 'react-native-modal'
import { ModalLine } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { ModalMenuProps } from 'src/types'

export const ModalMenu: FC<ModalMenuProps> = ({
  showModal,
  closeModal,
  children,
}) => (
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

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`
const Container = styled.View`
  height: 95%;
  padding-bottom: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${colors.white};
`
const ChildrenBox = styled.View`
  align-items: center;
  padding-top: 5px;
`
