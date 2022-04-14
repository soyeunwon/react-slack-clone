import { CSSProperties } from '@emotion/serialize';
import React, { FC, useCallback } from 'react';
import { CreateMenu, CloseModalButton } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style-={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}> &times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
