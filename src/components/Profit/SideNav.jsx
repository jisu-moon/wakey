import { NavLink } from 'react-router-dom';

import * as S from '../../styles/components/Profit/SideNav.style';
import Logo from '../UI/Logo';

import {
  BsClipboardCheck,
  BsCalendar2Date,
  BsBag,
  BsGear,
} from 'react-icons/bs';

import { AiOutlineDashboard } from 'react-icons/ai';

export default function SideNav() {
  return (
    <S.Container>
      <Logo />
      <S.Navigation>
        <ul>
          <li>
            <NavLink
              to=''
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <BsClipboardCheck />
              <span>총 현황표</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='daily'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <BsCalendar2Date />
              <span>일자별 매출/이익금</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='product'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <BsBag />
              <span>상품별 매출/이익금</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='benchmarking'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <AiOutlineDashboard />
              <span>벤치마킹</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='setting'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <BsGear />
              <span>계정설정</span>
            </NavLink>
          </li>
        </ul>
      </S.Navigation>
    </S.Container>
  );
}
