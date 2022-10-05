import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="40px"
        height="40px"
      >
        <path
          fill={PRIMARY_MAIN}
          d="M51,17h-8V8c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2V17z"
        />
        <ellipse cx="32" cy="61" opacity=".3" rx="20.125" ry="3" />
        <path
          fill={PRIMARY_MAIN}
          d="M52.478,16.561l-16.827-9.6c-2.133-1.217-4.747-1.227-6.889-0.027l-17.204,9.635	C9.978,17.452,9,19.121,9,20.931V49c0,2.761,2.239,5,5,5h36c2.761,0,5-2.239,5-5V20.904C55,19.108,54.037,17.451,52.478,16.561z"
        />
        <path
          fill="#fd3c4f"
          d="M55.498,23c-0.409,0-0.824-0.101-1.208-0.312L32,10.357L9.71,22.688 c-1.206,0.667-2.729,0.231-3.397-0.978c-0.668-1.208-0.23-2.729,0.978-3.397l23.5-13c0.752-0.416,1.668-0.416,2.42,0l23.5,13 c1.208,0.668,1.646,2.189,0.978,3.397C57.231,22.535,56.378,23,55.498,23z"
        />
        <path
          fill="#fff"
          d="M32.453,5.057c-0.562-0.104-1.15-0.029-1.663,0.255l-23.5,13	c-0.197,0.109-0.365,0.247-0.519,0.396c0.923,1.597,2.597,2.501,4.328,2.501c0.818,0,1.648-0.201,2.415-0.626l16.754-9.268	C32.51,10.076,33.401,7.372,32.453,5.057z"
          opacity=".3"
        />
        <line
          x1="25.472"
          x2="17.517"
          y1="12.225"
          y2="16.64"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          fill="#ffffff"
          d="M48,54H34V33c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V54z"
        />
        <path
          d="M35.003,54H50c2.761,0,5-2.239,5-5V33.003c-2.761,0-5,2.236-5,4.997v9c0,1.105-0.895,2-2,2h-7.785	c-2.612,0-4.944,1.91-5.191,4.51C35.008,53.675,35.003,53.838,35.003,54z"
          opacity=".15"
        />
        <path
          fill="#ffffff"
          d="M26,41h-8c-1.105,0-2-0.895-2-2v-6c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2v6	C28,40.105,27.105,41,26,41z"
        />
      </svg>
    </Box>
  );
}
