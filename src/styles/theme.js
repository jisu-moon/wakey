import { css } from 'styled-components';

const commonTheme = {
  fontSize: {
    xxl: '5rem', // 78px
    xl: '3rem', // 48px
    md: '2rem', // 28px
    mdSub: '1.375rem', // 22px
    sm: '1rem', // 16px
    xs: '0.875rem', // 14px
    xxs: '0.75rem', // 12px
  },
  borderRadius: {
    xl: '2rem',
    md: '1rem',
    xs: '0.5rem',
  },
  padding: {
    xxl: '2rem',
    xl: '1.5rem',
    md: '1.25rem',
    sm: '1rem',
    xs: '0.75rem',
    xxs: '0.5rem',
  },
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  colors: {
    gray: {
      background: '#f5f5f7',
      text: '#6e6e73',
    },
  },
};

export const lightTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    background: '#fff',
    text: '#1d1d1f',
    primary: '#2563EB',
    accent: '#e8c537',
    gradient: {
      primaryToTransparent: 'linear-gradient(90deg, #2563EB, transparent)',
    },
  },
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    background: '#1d1d1f',
    text: '#FFF',
    primary: '#1D4D9B',
    accent: '#b2a120',
    gradient: {
      primaryToTransparent: 'linear-gradient(90deg, #1D4D9B, transparent)',
    },
  },
};
