import useRouter from './router/routes';
import Nav from './layouts/Nav/Nav';
import * as StyledGlobal from './styles';

function App() {
  const routes = useRouter();

  return (
    <>
      <Nav />

      <StyledGlobal.Page>
        <StyledGlobal.Layout>{routes}</StyledGlobal.Layout>
      </StyledGlobal.Page>
    </>
  );
}

export default App;
