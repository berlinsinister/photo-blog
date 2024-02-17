import { ThemeProvider } from 'styled-components';
import { IEvent } from '../../../types/event';
import * as S from './Card.styles';

interface IProps {
  number: number;
  eventData: IEvent;
}

const Card: React.FC<IProps> = ({ number, eventData }): JSX.Element => {
  return (
    <ThemeProvider theme={{ number }}>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Date>
            <S.DayWrapper>
              <S.DayFirst className="day-first">{eventData.day}</S.DayFirst>
              <S.DaySecond className="day-second">{eventData.day}</S.DaySecond>
            </S.DayWrapper>
            <S.Month>{eventData.month}</S.Month>
          </S.Date>

          <S.Info className="info">
            <S.Title>{eventData.label}</S.Title>
            <S.Location>{eventData.location}</S.Location>
            <div>{eventData.time}</div>
          </S.Info>
        </S.ContentWrapper>
      </S.Wrapper>
    </ThemeProvider>
  );
};

export default Card;
