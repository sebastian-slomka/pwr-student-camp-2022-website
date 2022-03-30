import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './navbar-elements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>OBÓZ PWR 2022</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">O obozie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Miejsce</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">O nas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Zaloguj się</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;