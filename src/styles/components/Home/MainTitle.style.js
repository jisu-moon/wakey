import styled from 'styled-components';
import media from '../../media';

export const Title = styled.h1`
  height: 100vh;
  ${({ theme }) => theme.flexCenter};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.75px;
  .logo {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 0 ${({ theme }) => theme.padding.sm};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-family: 'Permanent Marker', cursive;
    color: ${({ theme }) => theme.colors.background};
  }
  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSize.md};
    .logo {
      padding: 0 ${({ theme }) => theme.padding.xs};
    }
  `}
`;
