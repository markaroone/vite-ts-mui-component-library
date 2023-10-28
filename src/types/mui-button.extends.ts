import { Button as _ } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
  interface ButtonPropsVariantOverrides {
    horizonPrimary: true;
  }
}
