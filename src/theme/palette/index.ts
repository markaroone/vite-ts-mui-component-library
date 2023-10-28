import { ThemeOptions, alpha, getContrastRatio } from '@mui/material';

const salmonBase = '#FF5733';
const salmonMain = alpha(salmonBase, 0.7);

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#0099FF',
  },
  custom: {
    main: salmonMain,
    light: alpha(salmonBase, 0.5),
    dark: alpha(salmonBase, 0.9),
    contrastText: getContrastRatio(salmonMain, '#fff') > 4.5 ? '#fff' : '#111',
  },
};

export default palette;
