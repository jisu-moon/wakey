import styled from 'styled-components';
import { LogoText } from '../UI/Logo.style';

export const Container = styled.aside`
  flex: 0 0 15%;
  padding: 2rem 0rem 1rem 0;
  ${LogoText} {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: #fff;
    margin-left: 1rem;
  }
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Navigation = styled.nav`
  --active: #424754;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li a {
    color: ${({ theme }) => theme.colors.gray.text};
    transition: 0.3s;
    padding: 1rem;
    border-radius: 0.5rem;
    ${({ theme }) => theme.flexCenter};
    justify-content: flex-start;
    gap: 0.75rem;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
      background: var(--active);
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: 500;
      transform: translateY(10%);
    }
    svg {
      font-size: 1.25rem;
    }
    &.active svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
