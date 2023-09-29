import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type PrimaryButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

export const PrimaryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color',
})<PrimaryButtonProps>({
  color: '#FFF',
  backgroundColor: '#0099FF',
  '&:hover': {
    backgroundColor: '#6C8AA3',
  },
  '&.Mui-disabled': {
    // background: '#F3F3F3',
    // color: '#DADADA',
    background: 'inherit',
    color: 'inherit',
  },
});

PrimaryButton.defaultProps = {
  ...PrimaryButton.defaultProps,
  variant: 'contained',
};
