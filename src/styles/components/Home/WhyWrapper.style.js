import styled from 'styled-components';
import media from '../../media';

export const Container = styled.section`
  margin-top: 23vh;
  height: 500vh;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  top: 0%;
  z-index: 5;
  overflow-x: clip;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: #fff;
    text-align: center;
    line-height: 1.3;
  }
  .sticky-wrapper {
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
  }
  .sub {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
  }
  .sub.m-t {
    margin-bottom: 0;
    margin-top: 1rem;
  }
  .sticky {
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
  }
  .side-gradient {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 15vw;
      height: 100%;
      z-index: 2;
      background: ${({ theme }) => theme.colors.gradient.primaryToTransparent};
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
      transform: rotate(180deg);
    }
  }
  .top {
    transform: translate(100%, 0);
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
    white-space: nowrap;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 10vw;
      height: 100%;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
  .position-center {
    width: 100%;
    ${({ theme }) => theme.absoluteCenter};
  }
  ${media.table`
    margin-top:35vh;
    `}
  ${media.mobile`
  
    margin-top:0;
    .top{
        font-size: calc(100vw / 12);
    }
    p{
        font-size: ${({ theme }) => theme.fontSize.mdSub};
    }
    .sub{
        font-size: ${({ theme }) => theme.fontSize.sm};
        margin-bottom:0.5rem;
    }
    .sub.m-t{
        margin-bottom:0;
        margin-top:0.5rem;
    }
  `}
`;
