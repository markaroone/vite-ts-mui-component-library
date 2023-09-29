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
    background: '#EAEAEA',
    color: '#C0C0C0',
  },
});
