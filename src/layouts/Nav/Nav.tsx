import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { useDevice } from '../../hooks/useDevice';
import { routes } from '../../router/routes';
// import MobileNav from './MobileNav';
import * as S from './Nav.styles';

const Nav: React.FC = (): JSX.Element => {
  const [navWidth, setNavWidth] = useState<number>(1100);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();
  //   const tablet = useDevice('tablet');

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) setNavWidth(navRef.current.offsetWidth);
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileNavVisible) setIsMobileNavVisible(false);
  }, [location.pathname]);

  return (
    <ThemeProvider
      theme={{
        navWidth,
        isBlog: location.pathname === '/blog',
        isOffers: location.pathname === '/offers',
        isMystery: location.pathname === '/mystery',
      }}
    >
      {/* {isMobileNavVisible && (
        <MobileNav setIsMobileNavVisible={setIsMobileNavVisible} />
      )} */}

      <S.Nav ref={navRef}>
        <S.Logo onClick={() => navigate('/')}>in focus</S.Logo>

        <S.NavLinksWrapper>
          {/* {width <= tablet ? (
            <S.NavLink isActive onClick={() => setIsMobileNavVisible(true)}>
              menu
            </S.NavLink>
          ) : (
            routes.map(({ to, name }) => (
              <S.NavLink
                key={to}
                isActive={location.pathname === to}
                onClick={() => navigate(to)}
              >
                {name}
              </S.NavLink>
            ))
          )} */}

          {/* <S.NavLink onClick={() => console.log('temp nav link')}>
            temp nav link
          </S.NavLink> */}
          {routes.map(({ path, label }) => (
            <S.NavLink
              key={label}
              isActive={location.pathname === path}
              onClick={() => navigate(path)}
            >
              {label}
            </S.NavLink>
          ))}
        </S.NavLinksWrapper>
      </S.Nav>
    </ThemeProvider>
  );
};

export default Nav;
