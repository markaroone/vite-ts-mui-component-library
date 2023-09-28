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

let theme = createTheme({
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

theme = createTheme(theme, {
  pallete: {
    custom: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'custom',
    }),
  },
});

export const horizonTheme = theme;
