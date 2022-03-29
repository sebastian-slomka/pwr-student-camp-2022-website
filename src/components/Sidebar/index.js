import React from 'react';

import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter
} from './sidebar-elements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onCLick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}> O obozie </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}> Miejsce </SidebarLink>
          <SidebarLink to="services" onClick={toggle}> O nas </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}> Kontakt </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to='/signin' onClick={toggle}>Zaloguj się</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;