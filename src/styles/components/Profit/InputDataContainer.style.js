import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    font-size: 0.875rem;
    display: inline-block;
    color: ${({ theme }) => theme.colors.gray.text};
  }
  label {
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    transition: 0.3s;
    border-radius: 0.25rem;
  }
  label:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
  input {
    display: none;
  }
`;
