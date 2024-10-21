import styled from 'styled-components';
import media from '../media';
import { LogoText } from './UI/Logo.style';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  z-index: 99;
  ${({ theme }) => theme.flexCenter}
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  ${({ theme }) => theme.flexCenter};
  justify-content: space-between;

  ${LogoText} {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  // media
  ${media.table`
    max-width:768px;
  `}

  ${media.mobile`
    padding: 0 ${({ theme }) => theme.padding.sm};
    ${LogoText} {
        font-size: ${({ theme }) => theme.fontSize.mdSub};
    };
  `}
`;

export const Nav = styled.nav``;
