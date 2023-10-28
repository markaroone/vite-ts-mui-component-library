import { createTheme } from '@mui/material';

import * as Themed from './components';
import palette from './palette';
import typography from './typography';
import '../types/mui-button.extends';
import '../types/mui-styles.extend';

// declare module '@mui/material/styles' {
//   interface Palette {
//     custom: Palette['primary'];
//   }

//   interface PaletteOptions {
//     custom?: PaletteOptions['primary'];
//   }
// }

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     custom: true;
//   }
//   interface ButtonPropsVariantOverrides {
//     horizonPrimary: true;
//   }
// }

export const horizonTheme = createTheme({
  typography,
  palette,
  components: {
    MuiButtonBase: Themed.MuiButtonBase,
    MuiButton: Themed.MuiButton,
  },
});
