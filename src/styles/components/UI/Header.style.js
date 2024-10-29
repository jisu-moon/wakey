import styled from 'styled-components';
import { LogoText } from './Logo.style';

export const Header = styled.header`
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  ${({ theme }) => theme.flexCenter};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.background};
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  ${({ theme }) => theme.flexCenter};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.padding.sm};

  ${LogoText} {
    font-size: ${({ theme }) => theme.fontSize.mdSub};
  }
`;

export const Nav = styled.nav``;
