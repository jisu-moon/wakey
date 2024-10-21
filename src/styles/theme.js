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
    primary: '#e8c537',
    accent: '#2563EB',
    gray: {
      background: '#f5f5f7',
      text: '#6e6e73',
    },
  },
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
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
