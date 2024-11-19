import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from '../components/Profit/Header';
import SideNav from '../components/Profit/SideNav';

export default function ProfitLayout() {
  //   const params = useParams();
  //   const a = useLocation();
  return (
    <>
      <Header />
      <SideNav />
      <Outlet />
    </>
  );
}
