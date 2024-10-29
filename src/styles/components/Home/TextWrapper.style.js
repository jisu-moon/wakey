import styled from 'styled-components';
import media from '../../media';

export const Container = styled.section`
  margin-top: -10vh;
  color: #fff;
  background: #000;
  position: relative;
  z-index: 2;
  padding: 0 ${({ theme }) => theme.padding.xl};
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.5;
    font-weight: 700;
    word-break: keep-all;
  }
  .neon {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
      0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
      0 0 60px rgba(30, 132, 242, 1);
    ${({ theme }) => theme.absoluteCenter};
    display: block;
    width: 100%;
    opacity: 0;
  }
  ${media.mobile`
    p{
        font-size:${({ theme }) => theme.fontSize.sm};
    }
  `}
`;
