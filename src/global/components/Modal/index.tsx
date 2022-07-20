import React from 'react';
import { CgCloseO } from 'react-icons/cg';
import PropTypes from 'prop-types';
import * as C from './styles';

function Modal({ children, closeBtn }: { children: React.ReactElement, closeBtn: Function }) {
  return (
    <C.ModalBackground>
      <C.Container>
        <C.CloseBtn type="button" onClick={() => closeBtn()}>
          <CgCloseO />
        </C.CloseBtn>
        <C.Content>{ children }</C.Content>
      </C.Container>
    </C.ModalBackground>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
