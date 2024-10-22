import styled from 'styled-components';

export const Container = styled.section`
  color: ${({ theme }) => theme.colors.text};
  height: ${({ height }) => height || 'auto'};
`;
