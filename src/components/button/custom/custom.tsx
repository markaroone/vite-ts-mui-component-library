import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type CustomButtonProps = ButtonProps;

export const CustomButton = styled(Button)({
  textTransform: 'capitalize',
});
