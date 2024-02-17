import { useState, useEffect, useRef } from 'react';
import Close from '../../../components/buttons/Close';
import * as S from './Gallery.styles';

interface IProps {
  set: [string, string?, string?, string?, string?];
  setIsGalleryVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IWidth {
  [key: string]: number;
}

const Gallery: React.FC<IProps> = ({
  set,
  setIsGalleryVisible,
}): JSX.Element => {
  const [active, setActive] = useState<number>(0);
  const [navLine, setNavLine] = useState<IWidth>({
    lw: 20,
    rw: set.length > 1 ? 140 : 20,
  });
  const [stepValue, setStepValue] = useState<number>(0);

  const handleNavigation = (direction: string): void => {
    if (active === 0 && direction === 'left') return;
    if (active === set.length - 1 && direction === 'right') return;

    if (direction === 'left') {
      setActive((prev) => prev - 1);
      setNavLine((prev) => ({
        lw: prev.lw - stepValue,
        rw: prev.rw + stepValue,
      }));
    } else {
      setActive((prev) => prev + 1);
      setNavLine((prev) => ({
        lw: prev.lw + stepValue,
        rw: prev.rw - stepValue,
      }));
    }
  };

  useEffect(() => {
    const steps = set.length - 1;
    setStepValue(Math.floor((navLine.rw - navLine.lw) / steps));
  }, []);

  return (
    <S.ContentWrapper>
      <S.CloseWrapper>
        <Close
          width="36px"
          color="#fff"
          handleClick={() => setIsGalleryVisible(false)}
        />
      </S.CloseWrapper>

      <S.NavLineWrapper
        style={{
          opacity: active === 0 ? 0.25 : 1,
          cursor: active === 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={() => handleNavigation('left')}
      >
        <S.NavLine lw={navLine.lw} />
      </S.NavLineWrapper>

      <S.PhotoWrapper>
        {set.length > 1 && <S.Hint>use lines to broswe the gallery</S.Hint>}
        {/* TODO: retink typing 'as string' */}
        <S.Photo src={set[active] as string} />

        <S.Pagination>
          {set.length > 1 &&
            set.map((_, i) => <S.Bullet isActive={active === i} />)}
        </S.Pagination>
      </S.PhotoWrapper>

      <S.NavLineWrapper
        style={{
          opacity: active === set.length - 1 ? 0.25 : 1,
          cursor: active === set.length - 1 ? 'not-allowed' : 'pointer',
        }}
        isRight
        onClick={() => handleNavigation('right')}
      >
        <S.NavLine rw={navLine.rw} isRight />
      </S.NavLineWrapper>
    </S.ContentWrapper>
  );
};

export default Gallery;
