import * as S from './Close.styles';

type Props = {
  width?: string;
  color?: string;
  handleClick: () => void;
};

const Close: React.FC<Props> = ({
  width = '24px',
  color = '#000',
  handleClick,
}): JSX.Element => {
  return <S.Close width={width} color={color} onClick={handleClick} />;
};

export default Close;
