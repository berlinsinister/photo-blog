import { useLocation, useNavigate } from 'react-router-dom';
import Close from '../../components/buttons/Close';
import { routes } from '../../router/routes';
import * as S from './MobileNav.styles';

type Props = {
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav: React.FC<Props> = ({ setIsMobileNavVisible }): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.MobileNavWrapper>
      <S.MobileNav>
        <S.CloseWrapper>
          <Close handleClick={() => setIsMobileNavVisible(false)} />
        </S.CloseWrapper>

        {routes.map(({ path, label }) => (
          <S.MobileNavLink
            key={path}
            isActive={location.pathname === path}
            onClick={() => navigate(path)}
          >
            {label}
          </S.MobileNavLink>
        ))}
      </S.MobileNav>
    </S.MobileNavWrapper>
  );
};

export default MobileNav;
