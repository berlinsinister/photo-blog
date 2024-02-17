import { useState } from 'react';
import { MainDiv } from './PageHome.styles';

const PageHome = (): JSX.Element => {
  const [message, setMessage] = useState<string>('hello world');

  return (
    <></>
    // <MainDiv>
    //   {message}
    //   <button onClick={() => setMessage('greeting changed')}>change</button>
    // </MainDiv>
  );
};

export default PageHome;
