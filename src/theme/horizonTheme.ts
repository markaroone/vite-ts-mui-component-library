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

export let horizonTheme = createTheme({
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

horizonTheme = createTheme(horizonTheme, {
  pallete: {
    custom: horizonTheme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'custom',
    }),
  },
});
