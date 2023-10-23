import { createTheme } from '@mui/material';

import * as Themed from './components';
import palette from './palette';
import typography from './typography';

export const horizonTheme = createTheme({
  typography,
  palette,
  components: {
    MuiButtonBase: Themed.MuiButtonBase,
    MuiButton: Themed.MuiButton,
  },
});
