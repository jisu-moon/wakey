import styled from 'styled-components';
import media from '../../media';
import { LogoText } from './Logo.style';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  /* background: ${({ theme }) => theme.colors.gray.background}; */
  background: transparent;
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
  padding: 0 ${({ theme }) => theme.padding.sm};

  ${LogoText} {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  ${media.mobile`    
    ${LogoText} {
        font-size: ${({ theme }) => theme.fontSize.mdSub};
    };
  `}
`;

export const Nav = styled.nav``;
