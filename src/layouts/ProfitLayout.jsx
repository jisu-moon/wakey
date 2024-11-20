import { Outlet } from 'react-router-dom';
import Header from '../components/Profit/Header';
import SideNav from '../components/Profit/SideNav';

import * as S from '../styles/layouts/ProfitLayout.style';

export default function ProfitLayout() {
  return (
    <S.Container>
      <SideNav />
      <S.Contents>
        <Header />
        <Outlet />
      </S.Contents>
    </S.Container>
  );
}
