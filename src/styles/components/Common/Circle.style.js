import styled, { keyframes } from 'styled-components';
import media from '../../media';
import { motion } from 'framer-motion';

const waveAnimation = keyframes`
  0% {
    transform: scale(1) translate(-50%,-50%);
  }
  50% {
    transform: scale(1.01) translate(-50%,-50%);
  }
  100% {
    transform: scale(1) translate(-50%,-50%);
  }
`;

export const Content = styled.div`
  width: ${({ size }) => `calc(100vh * ${size})`};
  height: ${({ size }) => `calc(100vh * ${size})`};
  animation: ${waveAnimation} 1.5s ${({ size }) => `${size}s`} ease-in-out
    infinite;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  transform-origin: center center;
  ${({ theme }) => theme.absoluteCenter}
  ${media.mobile`
    width: ${({ size }) => `calc(100vw * ${size})`};
    height: ${({ size }) => `calc(100vw * ${size})`};
  `}
`;

export const MotionContent = styled(Content).attrs({
  as: motion.div,
})`
  width: 50px;
  height: 50px;
  animation: none;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 1;
  transform: translate(-50%, -50%) scale(0);
`;
