import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  gap: 1rem;
  .company-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .contents {
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.5rem;
    .company-name {
      color: #fff;
      font-weight: 500;
    }
    .company-nc {
      color: ${({ theme }) => theme.colors.gray.text};
    }
  }
`;
