import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #1d1d1f;
  display: flex;
  padding: 1rem;
  gap: 1rem;
`;

export const Contents = styled.section`
  flex: 1 1 85%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
  overflow-y: scroll;
`;
