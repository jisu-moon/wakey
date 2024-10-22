import { Outlet } from 'react-router-dom';
import * as S from '../styles/layouts/RootLayout.style';
import Header from '../components/UI/Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}
