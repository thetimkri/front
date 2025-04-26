import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { navMenuItems } from './Header.const';
import {
  LinkLogo,
  StyledButtonContainer,
  StyledHeader,
  StyledHeaderHead,
  StyledListHeader,
  StyledListItemHeader,
  StyledNavLink,
  ButtonWrap,
  HeaderNav,
  LogoImage,
} from './Header.styled';
import Logo from '@/assets/images/mainPage/Logo.webp';
import BurgerMenu from '@/shared/UiKit/BurgerMenu/BurgerMenu';
import { page } from '@/shared/constants/navigation/page.ts';
import Contacts from '@/shared/UiKit/Contacts/Contacts.tsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <StyledHeader>
      <StyledHeaderHead>
        <LinkLogo to={page.mainPage}>
          <LogoImage src={Logo} alt="Логотип" />
        </LinkLogo>
        <StyledButtonContainer>
          <PrimaryButton label="Поддержать проект" $btnType="transparent" link={page.support} />
        </StyledButtonContainer>
        <BurgerMenu onClick={handleBurgerClick} isOpen={isOpen} />
      </StyledHeaderHead>

      <HeaderNav $isOpen={isOpen}>
        <StyledListHeader $isOpen={isOpen}>
          {navMenuItems
            .filter((item) => (isOpen ? item.name !== 'Контакты' : true))
            .map((item) => (
              <StyledListItemHeader key={item.name}>
                <StyledNavLink
                  to={item.url}
                  onClick={handleNavLinkClick}
                  style={isOpen ? { padding: '0px 0px 0px 6px' } : undefined}
                >
                  {item.name}
                </StyledNavLink>
              </StyledListItemHeader>
            ))}
        </StyledListHeader>

        {isOpen && (
          <>
            <ButtonWrap>
              <PrimaryButton label="Поддержать проект" $btnType="transparent" link={page.support} />
            </ButtonWrap>
            <div>
              <Contacts />
            </div>
          </>
        )}
      </HeaderNav>
    </StyledHeader>
  );
};
