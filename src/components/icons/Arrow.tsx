import * as S from './Arrow.styles';

interface IProps {
  sizeBig: string;
  sizeSmall: string;
  color?: string;
  isRight?: boolean;
}

const Arrow: React.FC<IProps> = ({
  sizeBig,
  sizeSmall,
  color = '#fff',
  isRight,
}): JSX.Element => {
  return (
    <S.Arrow
      sizeBig={sizeBig}
      sizeSmall={sizeSmall}
      color={color}
      isRight={isRight}
    />
  );
};

export default Arrow;
