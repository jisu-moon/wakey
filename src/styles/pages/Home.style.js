import styled from 'styled-components';
import media from '../media';

export const Container = styled.section`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  height: ${({ height }) => height || 'auto'};
  background: ${({ theme, $background }) =>
    theme.colors[$background] || 'transparent'};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  height: 200vh;
`;

export const Container2 = styled(Container)`
  /* height: 500vh; */
  /* background: ${({ theme }) => theme.colors.primary}; */
  margin-top: 23vh;
  ${media.mobile`
    margin-top:0;
  `};
`;
