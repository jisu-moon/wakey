import { css } from 'styled-components';

export const lightTheme = {
  fontSize: {
    xxl: '5rem', // 78px
    xxlSub: '4.5rem', // 72px
    xl: '3rem', // 48px
    xlSub: '2.625rem', // 42px
    md: '1.75rem', // 28px
    mdSub: '1.375rem', // 22px
    sm: '1rem', // 16px
    xs: '0.875rem', // 14px
    xxs: '0.75rem', // 12px
  },
  colors: {
    background: '#fff',
    text: '#1d1d1f',
    primary: '#2563EB',
    accent: '#e8c537',
    gray: {
      background: '#f5f5f7',
      text: '#6e6e73',
    },
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
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#333',
    text: '#FFF',
    primary: '#b2a120',
    accent: '#1D4D9B',
  },
};
