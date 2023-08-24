import React from 'react';
import * as S from './styled';

export interface NavbarProps {
  menu: { text: string; href: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  return (
    <S.NavbarContainer>
      <S.NavbarBrandLink href={'/'}>WASH</S.NavbarBrandLink>
      {menu.map(({ text, href }, i) => {
        return <S.NavbarLink href={href}>{text}</S.NavbarLink>;
      })}
    </S.NavbarContainer>
  );
};
