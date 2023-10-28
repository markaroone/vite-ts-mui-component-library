import { Components } from '@mui/material';

export const MuiButton: Components['MuiButton'] = {
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
};
