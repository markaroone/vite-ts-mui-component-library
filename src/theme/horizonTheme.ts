import { alpha, createTheme, getContrastRatio } from '@mui/material';
import '@fontsource-variable/open-sans';
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900-italic.css';

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
  interface ButtonPropsVariantOverrides {
    horizonPrimary: true;
  }
}

const salmonBase = '#FF5733';
const salmonMain = alpha(salmonBase, 0.7);

export const horizonTheme = createTheme({
  typography: {
    fontFamily: ['Open Sans Variable', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#0099FF',
    },
    custom: {
      main: salmonMain,
      light: alpha(salmonBase, 0.5),
      dark: alpha(salmonBase, 0.9),
      contrastText:
        getContrastRatio(salmonMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'horizonPrimary',
          },
          style: {
            backgroundColor: '#0099FF',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#6C8AA3',
            },
            '&.Mui-disabled': {
              background: '#EAEAEA',
              color: '#C0C0C0',
            },
          },
        },
      ],
    },
  },
});
