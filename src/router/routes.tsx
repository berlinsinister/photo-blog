import { useRoutes } from 'react-router-dom';
import PageHome from '../pages/PageHome/PageHome';
import PageBlog from '../pages/PageBlog/PageBlog';
import PageOffers from '../pages/PageOffers/PageOffers';
import PageEvents from '../pages/PageEvents/PageEvents';
import PageMystery from '../pages/PageMystery/PageMystery';

export interface IRoute {
  path: string;
  label: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  { path: '/', label: 'collections', element: <PageHome /> },
  { path: '/blog', label: 'blog', element: <PageBlog /> },
  { path: '/offers', label: 'offers', element: <PageOffers /> },
  { path: '/events', label: 'events', element: <PageEvents /> },
  { path: '/mystery', label: 'mystery', element: <PageMystery /> },
];

const useRouter = () => useRoutes([...routes]);

export default useRouter;
