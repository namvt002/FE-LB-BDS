import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet } from 'react-router-dom';
// material
import { Box, Container } from '@material-ui/core'; //
// components
import Logo from '../../components/Logo';
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <div>
        <MainNavbar />
        <Outlet />
        <MainFooter />
      </div>
    </>
  );
}
