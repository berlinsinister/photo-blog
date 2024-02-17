import { useLocation } from 'react-router-dom';
import useRouter from './router/routes';
import Nav from './layouts/Nav/Nav';
import * as S from './App.styles';

const App = () => {
  const location = useLocation();
  const routes = useRouter();

  return (
    <>
      <Nav />

      <S.Page isDarkMode={location.pathname === '/mystery'}>
        <S.Layout>{routes}</S.Layout>
      </S.Page>
    </>
  );
};

export default App;
