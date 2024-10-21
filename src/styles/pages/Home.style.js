import styled from 'styled-components';
import media from '../media';

export const Container = styled.section`
  height: 100vh;
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  transition: 0.5s;
  background: ${({ theme }) => theme.colors.gray.main};
  color: ${({ theme }) => theme.colors.gray.dark};
  ${media.mobile`
        background:#fff;
    `}
  ${media.table`
        background:#345345;
    `}
`;
