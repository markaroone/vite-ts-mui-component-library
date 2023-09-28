import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }

  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#0099FF',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const horizonTheme = createTheme(baseTheme, {
  pallete: {
    custom: baseTheme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'custom',
    }),
  },
});
