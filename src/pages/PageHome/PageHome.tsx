import { useState, useEffect, useRef } from 'react';
import { useDevice } from '../../hooks/useDevice';
import Photo from './components/Photo';
import Mouse from '../../components/icons/Mouse';
// import Motto from "./components/Motto";
import * as S from './PageHome.styles';
import { photos } from '../../db/photos';
import { IPhoto } from '../../types/photo';

const PageHome: React.FC = (): JSX.Element => {
  // const [distanceForDevice, setDistanceForDevice] = useState<number>(200);

  // const tablet = useDevice("tablet");

  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const photoComponents = document.querySelectorAll(
        '.content-wrapper'
      ) as NodeListOf<HTMLDivElement>;

      photoComponents.forEach((photo) => {
        const distanceFromTop = photo.getBoundingClientRect().top;
        // TODO. set distanceForDevice on resize
        photo.style.opacity =
          distanceFromTop < (window.innerWidth <= 768 ? 50 : 200)
            ? '0.07'
            : '1';
      });
    };

    const el = scrollContentRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContentRef]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= tablet) setDistanceForDevice(50);
  //     // else setDistanceForDevice(200);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // console.log("inner", distanceForDevice);

  // {/* <Motto /> */}
  return (
    <S.ScrollContent ref={scrollContentRef}>
      <S.MouseWrapper>
        <Mouse />
        <S.ScrollText>scroll</S.ScrollText>
      </S.MouseWrapper>
      <S.Main>
        {photos.map((photo: IPhoto, i: number) => (
          <Photo
            key={photo.id}
            number={i + 1}
            photoData={photo}
            isFirst={i === 0}
          />
        ))}
      </S.Main>
    </S.ScrollContent>
  );
};

export default PageHome;
