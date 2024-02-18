import { useRoutes } from 'react-router-dom';
import { ERoute } from '../types/enums';
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
  { path: ERoute.HOME, label: 'collections', element: <PageHome /> },
  { path: ERoute.BLOG, label: 'blog', element: <PageBlog /> },
  { path: ERoute.OFFERS, label: 'offers', element: <PageOffers /> },
  { path: ERoute.EVENTS, label: 'events', element: <PageEvents /> },
  { path: ERoute.MYSTERY, label: 'mystery', element: <PageMystery /> },
];

const useRouter = () => useRoutes([...routes]);

export default useRouter;
