import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sm};
  a {
    color: #fff;
  }
`;
