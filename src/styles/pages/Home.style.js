import styled from 'styled-components';
import media from '../media';

export const Container = styled.section`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  height: ${({ height }) => height || 'auto'};
  background: ${({ theme, $background }) =>
    theme.colors[$background] || 'transparent'};
  z-index: ${({ $zIndex }) => $zIndex};
  padding-top: ${({ $paddingTop }) => $paddingTop};
`;

export const Container2 = styled(Container)`
  height: 200vh;
  ${media.mobile`
    height:120vh;
  `}
`;

export const WhyTextWrapper = styled.div`
  padding-top: 150vh;
  position: relative;
  z-index: 5;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: #fff;
    text-align: center;
    line-height: 1.2;
  }
  ${media.mobile`
    p{
        font-size: ${({ theme }) => theme.fontSize.mdSub};
    }
  `}
`;
