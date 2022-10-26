// material
import { styled } from '@material-ui/core/styles';
import { Card, Typography, Box } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import CheckInIllustration from 'src/assets/illustration_checkin';
//
// import { CheckInIllustration } from '../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3)
}));

// ----------------------------------------------------------------------


export default function BookingCheckIn() {
  const TOTAL = 311000;
  return (
    <RootStyle>
      <div>
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Đã bán
        </Typography>
      </div>
      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: '50%',
          bgcolor: 'background.neutral'
        }}
      >
        <CheckInIllustration />
      </Box>
    </RootStyle>
  );
}
