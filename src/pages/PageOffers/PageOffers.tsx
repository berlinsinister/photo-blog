import { useState, useEffect, useRef } from 'react';
import Arrow from '../../components/icons/Arrow';
import * as S from './PageOffers.styles';
import { offers } from '../../db/offers';
import theme from '../../themes/theme';
import { EBreakpoints } from '../../types/enums';

const PageOffers: React.FC = (): JSX.Element => {
  const [active, setActive] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const isFirstRenderRef = useRef<boolean>(true);

  const handleNavigation = (direction: string): void => {
    if (active === 0 && direction === 'left') return;
    if (active === offers.length - 1 && direction === 'right') return;

    if (direction === 'left') setActive((prev) => prev - 1);
    else setActive((prev) => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    isFirstRenderRef.current = false;

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.ContentWrapper>
      <S.Main>
        {/* key for force rerender in order to run animation 
            for every photo change */}
        <S.Photo
          key={active}
          isFirstRender={isFirstRenderRef.current}
          image={offers[active].url}
        >
          <S.NavigationWrapper>
            <S.Navigation onClick={() => handleNavigation('left')}>
              <Arrow sizeBig="10px" sizeSmall="7px" />
            </S.Navigation>
            <S.Navigation onClick={() => handleNavigation('right')}>
              <Arrow sizeBig="10px" sizeSmall="7px" isRight />
            </S.Navigation>
          </S.NavigationWrapper>
        </S.Photo>

        <S.OffersWrapper>
          <S.OffersHeading>
            <S.Title>What we offer</S.Title>
            <S.Description>
              We offer a wide variety of professional services in following
              categories:
            </S.Description>
          </S.OffersHeading>

          {width > EBreakpoints.TABLET ? (
            <S.OffersList>
              {offers.map((offer, i) => (
                <S.OfferItemWrapper>
                  {active === i && (
                    <S.ArrowWrapper>
                      <Arrow
                        sizeBig="7px"
                        sizeSmall="5px"
                        color={theme.colors.primary.main}
                        isRight
                      />
                    </S.ArrowWrapper>
                  )}

                  <S.OfferItem
                    key={offer.id}
                    idx={i}
                    isActive={active === i}
                    onClick={() => setActive(i)}
                  >
                    {offer.label}
                  </S.OfferItem>
                </S.OfferItemWrapper>
              ))}
            </S.OffersList>
          ) : (
            <S.OfferItemWrapper>
              <S.ArrowWrapper
                style={{ opacity: active === 0 ? 0.25 : 1 }}
                onClick={() => handleNavigation('left')}
              >
                <Arrow
                  sizeBig="7px"
                  sizeSmall="5px"
                  color={theme.colors.primary.main}
                />
              </S.ArrowWrapper>
              <S.OfferItem idx={active} isActive>
                {offers[active].label}
              </S.OfferItem>
              <S.ArrowWrapper
                style={{ opacity: active === offers.length - 1 ? 0.25 : 1 }}
                onClick={() => handleNavigation('right')}
              >
                <Arrow
                  sizeBig="7px"
                  sizeSmall="5px"
                  color={theme.colors.primary.main}
                  isRight
                />
              </S.ArrowWrapper>
            </S.OfferItemWrapper>
          )}
        </S.OffersWrapper>
      </S.Main>
    </S.ContentWrapper>
  );
};

export default PageOffers;
