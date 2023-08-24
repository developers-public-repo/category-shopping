import styled from '@emotion/styled';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 10rem;

  display: flex;

  background-color: #000;
`;

export const NavbarBrandLink = styled(Link)`
  margin: auto 0;
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;

  text-decoration: none;
`;

export const NavbarLink = styled(Link)`
  margin: auto 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;

  text-decoration: none;
`;
