import { Outlet } from 'react-router-dom';
import ProfitHeader from '../components/Profit/ProfitHeader';
import ProfitSideNav from '../components/Profit/ProfitSideNav';

import * as S from '../styles/layouts/ProfitLayout.style';

export default function ProfitLayout() {
  return (
    <S.Container>
      <ProfitSideNav />
      <S.Contents>
        <ProfitHeader />
        <Outlet />
      </S.Contents>
    </S.Container>
  );
}
