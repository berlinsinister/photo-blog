import { ThemeProvider } from 'styled-components';
import * as S from './Mouse.styles';

interface IProps {
  direction?: string;
}

const Mouse: React.FC<IProps> = ({ direction = 'y' }): JSX.Element => {
  return (
    <ThemeProvider theme={{ direction }}>
      <S.Body>
        <S.Wheel />
      </S.Body>
    </ThemeProvider>
  );
};

export default Mouse;
