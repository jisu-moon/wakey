import styled from 'styled-components';
import media from '../../media';

export const Wrapper = styled.div`
  height: 100vh;
  ${({ theme }) => theme.flexCenter};
  position: sticky;
  top: 0%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.75px;
  mix-blend-mode: plus-lighter;
  .logo {
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-family: 'Permanent Marker', cursive;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
  }
  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSize.md};
  `}
`;

export const CircleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: clip;
`;
