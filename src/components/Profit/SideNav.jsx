import { NavLink } from 'react-router-dom';

export default function SideNav() {
  return (
    <aside>
      <h2>WAKEY</h2>
      <ul>
        <li>
          <NavLink
            to=''
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            총 현황표
          </NavLink>
        </li>
        <li>
          <NavLink
            to='daily'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            일자별
          </NavLink>
        </li>
        <li>
          <NavLink
            to='product'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            상품별
          </NavLink>
        </li>
        <li>
          <NavLink
            to='benchmarking'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            벤치마킹
          </NavLink>
        </li>
        <li>
          <NavLink
            to='setting'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            계정설정
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
