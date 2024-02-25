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
      <S.CardWrapper>
        <S.Date>
          <S.DayWrapper>
            <S.DayFirst className="day-first">{eventData.day}</S.DayFirst>
            <S.DaySecond className="day-second">{eventData.day}</S.DaySecond>
          </S.DayWrapper>
          <S.Month className="month">/{eventData.month}</S.Month>
        </S.Date>
        <S.Info>
          <S.Title>{eventData.label}</S.Title>
          <S.Location>{eventData.location}</S.Location>
          <div>{eventData.time}</div>
        </S.Info>
      </S.CardWrapper>
    </ThemeProvider>
  );
};

export default Card;
