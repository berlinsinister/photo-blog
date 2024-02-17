import { useState } from 'react';
import { MainDiv } from './PageHome.styles';

const PageHome = (): JSX.Element => {
  const [message, setMessage] = useState<string>('Home page');

  return (
    <MainDiv>
      {message}
      <button onClick={() => setMessage('Hello world')}>change</button>
    </MainDiv>
  );
};

export default PageHome;
