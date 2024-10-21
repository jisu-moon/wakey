import { Outlet } from 'react-router-dom';
import * as S from '../styles/layouts/RootLayout.style';

export default function RootLayout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
}
