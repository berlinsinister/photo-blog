import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDevice } from '../../hooks/useDevice';
import { routes } from '../../router/routes';
import MobileNav from '../MobileNav/MobileNav';
import * as S from './Nav.styles';

const Nav: React.FC = (): JSX.Element => {
  const [navWidth, setNavWidth] = useState<number>(1100);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();
  const tablet = useDevice('tablet');

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    /**
     * @function setNavWidth
     * @description Function gets the actual widths of nav component and window during resize and sets them in state vars.
     */
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

  /**
   * @description Mobile nav is closed when the user clicks on one of the nav items. Nav items are routes.
   *              When the user gets redirected to a different route (page) the mobile nav should close.
   */
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
      {isMobileNavVisible && (
        <MobileNav setIsMobileNavVisible={setIsMobileNavVisible} />
      )}

      <S.Nav ref={navRef}>
        <S.Logo onClick={() => navigate('/')}>in focus</S.Logo>

        <S.NavLinksWrapper>
          {width <= tablet ? (
            <S.NavLink isActive onClick={() => setIsMobileNavVisible(true)}>
              menu
            </S.NavLink>
          ) : (
            routes.map(({ path, label }) => (
              <S.NavLink
                key={path}
                isActive={location.pathname === path}
                onClick={() => navigate(path)}
              >
                {label}
              </S.NavLink>
            ))
          )}
        </S.NavLinksWrapper>
      </S.Nav>
    </ThemeProvider>
  );
};

export default Nav;
