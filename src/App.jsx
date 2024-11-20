import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeLayout from './layouts/HomeLayout';
import ProfitLayout from './layouts/ProfitLayout';
import ProfitHome from './pages/Profit/ProfitHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: '/profit/:id',
    element: <ProfitLayout />,
    children: [
      {
        path: '',
        element: <ProfitHome />,
        index: true,
      },
      {
        path: 'daily',
      },
      {
        path: 'product',
      },
      {
        path: 'benchmarking',
      },
      {
        path: 'setting',
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
