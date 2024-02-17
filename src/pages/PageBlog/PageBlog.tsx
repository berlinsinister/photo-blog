import { useState, useEffect, useRef } from 'react';
import * as S from './PageBlog.styles';
import { lorem } from '../../db/lorem';

const PageBlog: React.FC = (): JSX.Element => {
  const [snippet, setSnippet] = useState<string>('');
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSnippet(`${lorem.slice(0, 500)} ...`);
  }, []);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    if (text.scrollHeight > text.clientHeight) {
      setIsScrollable(true);
    }
  }, [snippet]);

  return (
    <S.ContentWrapper>
      <S.Main>
        <S.Photo />

        <S.PostWrapper>
          <S.PostHeading>
            <S.Date>Nov 21, 2023</S.Date>
            <S.Title>Focal length</S.Title>
            <S.Intro>
              Longitudo focalis est mensura distantiæ inter pupillam objectivi.
            </S.Intro>
          </S.PostHeading>

          <S.Text
            ref={textRef}
            // isScrollable={isScrollable}
            onClick={() => setSnippet(lorem)}
          >
            {/* {snippet} */}
            {lorem}
          </S.Text>
        </S.PostWrapper>
      </S.Main>
    </S.ContentWrapper>
  );
};

export default PageBlog;
