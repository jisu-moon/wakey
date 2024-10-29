import styled from 'styled-components';
import media from '../../media';

export const StickyContainer = styled.section`
  height: 300vh;
  position: relative;
  background: #000;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  .text-backdrop {
    height: 100vh;
    width: 100%;
    ${({ theme }) => theme.absoluteCenter};
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
  }
  strong {
    color: #fff;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.5;
    ${({ theme }) => theme.absoluteCenter};
    z-index: 3;
    display: block;
    text-align: center;
    width: 100%;
  }
  ${media.mobile`
    strong{
        font-size:${({ theme }) => theme.fontSize.mdSub}
    }
  `}
`;

export const TextWrapper = styled.div`
  margin-top: -10vh;
  color: #fff;
  height: 100vh;
  background: #000;
  position: relative;
  z-index: 2;
`;
