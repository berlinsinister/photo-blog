import { useState, useEffect } from 'react';
import * as S from './PageMystery.styles';

const PageMystery: React.FC = (): JSX.Element => {
  const [isLineVisible, setIsLineVisible] = useState<boolean>(false);

  useEffect(() => {
    const stopTimeout = setTimeout(() => {
      setIsLineVisible(true);
    }, 6000);

    return () => {
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <S.ContentWrapper>
      <S.Mystery>Mystery</S.Mystery>
      {!isLineVisible ? <S.Dot /> : <S.Line />}
      <S.ComingSoon>Coming soon</S.ComingSoon>
    </S.ContentWrapper>
  );
};

export default PageMystery;
