import React from 'react';
import {
  HeaderButtonExit,
  HeaderDivContainer,
  HeaderDivExit,
  HeaderDivLogo,
  HeaderExitDivIcon,
  HeaderSection,
  HeaderSpanExit,
  HeaderSpanName,
} from './HeaderStyled';
import HeaderExitIcon from '../../images/Header/HeaderExitIcon';
import HeaderIconI from '../../images/Header/HeaderIconI';

import HeaderLogo from '../../images/Header/HeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/Auth/thunk';
import { selectUser } from 'store/Auth/selectors';
// import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <HeaderSection>
      <HeaderDivContainer>
        <HeaderDivLogo>
          <HeaderLogo />
          <span>Money Guard</span>
        </HeaderDivLogo>
        <HeaderDivExit>
          <HeaderSpanName>Hello {user.username}</HeaderSpanName>
          <HeaderIconI />
          <HeaderButtonExit onClick={handleLogout}>
            <HeaderExitDivIcon>
              <HeaderExitIcon />
            </HeaderExitDivIcon>
            <HeaderSpanExit>Exit</HeaderSpanExit>
          </HeaderButtonExit>
        </HeaderDivExit>
      </HeaderDivContainer>
    </HeaderSection>
  );
};

export default Header;
