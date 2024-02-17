import { useRoutes } from 'react-router-dom';
import PageHome from '../pages/PageHome/PageHome';
import PageBlog from '../pages/PageBlog/PageBlog';
// import Offers from "../pages/offers/Offers";
// import Events from "../pages/events/Events";
// import Mystery from "../pages/mystery/Mystery";
// import ComingSoon from "../pages/comingSoon/ComingSoon";

interface IRoute {
  path: string;
  label: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  { path: '/', label: 'collections', element: <PageHome /> },
  { path: '/blog', label: 'blog', element: <PageBlog /> },
  { path: '/offers', label: 'offers', element: <PageHome /> },
  { path: '/events', label: 'events', element: <PageHome /> },
  { path: '/mystery', label: 'mystery', element: <PageHome /> },
];

const useRouter = () => useRoutes([...routes]);

export default useRouter;
