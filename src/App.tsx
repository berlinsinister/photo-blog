import useRouter from './router/routes';
import Nav from './layouts/Nav/Nav';
import './App.css';

function App() {
  const routes = useRouter();

  return (
    <>
      <Nav />
      {routes}
    </>
  );
}

export default App;
