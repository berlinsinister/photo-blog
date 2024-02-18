import { useLocation } from 'react-router-dom';
import useRouter from './router/routes';
import { ERoute } from './types/enums';
import Nav from './layouts/Nav/Nav';
import * as S from './App.styles';

const App = () => {
  const location = useLocation();
  const routes = useRouter();

  return (
    <>
      <Nav />

      <S.Page isDarkMode={location.pathname === ERoute.MYSTERY}>
        <S.Layout>{routes}</S.Layout>
      </S.Page>
    </>
  );
};

export default App;
