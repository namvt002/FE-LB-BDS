// material
import { styled } from '@material-ui/core/styles';
import { Card, Typography, Box } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import CheckOutIllustration from 'src/assets/illustration_checkout';
//
// import { CheckOutIllustration } from '../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3)
}));

// ----------------------------------------------------------------------


export default function BookingLienHeChuaMua() {
  const TOTAL = 124000;
  return (
    <RootStyle>
      <div>
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Liên hệ nhưng chưa mua
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
        <CheckOutIllustration />
      </Box>
    </RootStyle>
  );
}
