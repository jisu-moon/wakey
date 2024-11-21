import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const Item = styled.div`
  flex: 0 0 calc(25% - 0.5rem);
  padding: 1rem 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray.text};
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.75rem;
    font-weight: 600;
  }

  .prev-price-wrapper {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-top: 0.25rem;
    span {
      padding-left: 0.6rem;
      color: ${({ $rateOfChange }) => ($rateOfChange ? 'red' : 'blue')};
      font-weight: 700;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      position: relative;
      svg {
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-25%, -55%)
          rotate(${({ $rateOfChange }) => ($rateOfChange ? '0' : '180deg')});
      }
    }
    strong {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.3);
      &::before {
        content: ${({ $rateOfChange }) => ($rateOfChange ? "'+'" : "''")};
      }
    }
  }
`;
