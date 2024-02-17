import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Gallery from './Gallery';
import { IPhoto } from '../../../types/photo';
import * as S from './Photo.styles';

interface IProps {
  number: number;
  photoData: IPhoto;
  isFirst?: boolean;
}

const Photo: React.FC<IProps> = ({
  number,
  photoData,
  isFirst,
}): JSX.Element => {
  const [isGalleryVisible, setIsGalleryVisible] = useState<boolean>(false);

  return (
    <>
      {isGalleryVisible && (
        <Gallery
          set={photoData.set}
          setIsGalleryVisible={setIsGalleryVisible}
        />
      )}

      <ThemeProvider theme={{ number, isLocatedOnRight: number % 2 === 0 }}>
        <S.Wrapper isFirst={isFirst}>
          <S.ContentWrapper className="content-wrapper">
            {/* ***** photo */}
            <S.PhotoWrapper>
              <S.Photo className="image" image={photoData.url} />
              {photoData.author && (
                <S.Copyright className="copyright">
                  {photoData.author}
                </S.Copyright>
              )}
              {photoData.year && (
                <S.Year className="year">{photoData.year}</S.Year>
              )}
            </S.PhotoWrapper>

            {/* ***** info */}
            <S.InfoWrapper>
              <S.Number>'{number}</S.Number>

              <S.Title>{photoData.label}</S.Title>
              <S.Link onClick={() => setIsGalleryVisible(true)}>
                See more
                <S.Line id="see-more" />
              </S.Link>

              {photoData.set.length > 1 && (
                <S.Pagination>[ {photoData.set.length} photos ]</S.Pagination>
              )}
            </S.InfoWrapper>
          </S.ContentWrapper>
        </S.Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Photo;
