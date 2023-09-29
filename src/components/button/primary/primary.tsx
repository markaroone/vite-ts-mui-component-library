import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type PrimaryButton = Omit<ButtonProps, 'variant' | 'color'>;

export const PrimaryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color',
})({
  color: '#FFF',
  backgroundColor: '#0099FF',
  '&:hover': {
    backgroundColor: '#6C8AA3',
  },
});

PrimaryButton.defaultProps = {
  ...PrimaryButton.defaultProps,
  variant: 'contained',
};
