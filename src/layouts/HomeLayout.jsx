import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
