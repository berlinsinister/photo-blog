import { useRef, WheelEvent } from 'react';
import Card from './components/Card';
import Mouse from '../../components/icons/Mouse';
import * as S from './PageEvents.styles';
import { events } from '../../db/events';

// TODO: finish the page
const PageEvents: React.FC = (): JSX.Element => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const cardsWrapper = cardsWrapperRef.current;
    if (!cardsWrapper) return;

    event.preventDefault();
    cardsWrapper.scrollLeft += event.deltaY;
  };

  return (
    <>
      <S.ContentWrapper>
        <S.Main>
          <S.Title>Upcoming events</S.Title>
          <S.CardsWrapper onWheel={handleWheel} ref={cardsWrapperRef}>
            {events.map((event, i) => (
              <Card key={event.id} eventData={event} number={i + 1} />
            ))}
          </S.CardsWrapper>
        </S.Main>
      </S.ContentWrapper>

      <S.MouseWrapper>
        <Mouse direction="x" />
        <S.ScrollText>scroll</S.ScrollText>
      </S.MouseWrapper>
    </>
  );
};

export default PageEvents;
