import styled from 'styled-components';
import media from '../../media';

export const WhyTextWrapper = styled.div`
  height: 500vh;
  background: ${({ theme }) => theme.colors.primary};
  /* height: 100vh; */
  /* position: sticky; */
  top: 0%;
  z-index: 5;
  overflow: hidden;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: #fff;
    text-align: center;
    line-height: 1.2;
  }
  .top {
    padding-top: 20vh;
  }
  .positionCenter {
    width: 100%;
    ${({ theme }) => theme.absoluteCenter};
  }
  ${media.mobile`
    p{
        font-size: ${({ theme }) => theme.fontSize.mdSub};
    }
  `}
`;
