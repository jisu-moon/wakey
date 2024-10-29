import styled from 'styled-components';
import media from '../media';

export const Container = styled.section`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme, $background }) =>
    theme.colors[$background] || 'transparent'};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  height: 200vh;
`;

export const Container2 = styled(Container)`
  height: auto;
  margin-top: 23vh;
  ${media.table`
    margin-top:35vh;
    `}
  ${media.mobile`
    margin-top:0;
  `};
`;
