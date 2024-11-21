import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 1.25rem;
    display: inline-block;
    font-weight: 500;
  }
`;

export const DropdownButton = styled.button`
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover,
  &.open {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    margin-right: 0.75rem;
    transform: translateY(-1px);
  }
`;

export const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 125%;
  left: 0;
  display: none;
  &.open {
    display: block;
  }
  & > .react-calendar {
    border-radius: 0.5rem;
  }
`;
