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
  border: 2px solid ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
  transform-origin: center center;
  ${({ theme }) => theme.absoluteCenter}
  ${media.mobile`
    width: ${({ size }) => `calc(60vh * ${size})`};
    height: ${({ size }) => `calc(60vh * ${size})`};
  `};
  box-shadow: inset 0 0px 80px rgba(255, 255, 255, 0.3);
`;

export const MotionContent = styled(Content).attrs({
  as: motion.div,
})`
  width: 1vw;
  height: 1vw;
  animation: none;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 1;
  transform: translate(-50%, -50%) scale(0);
  ${media.mobile`
    width:1vh;
    height:1vh;
  `}
  box-shadow:none;
`;
