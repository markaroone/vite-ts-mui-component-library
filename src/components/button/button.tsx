import { Button, ButtonProps } from '@mui/material';

export type CustomButtonProps = ButtonProps;

export const CustomButton = ({ ...props }: CustomButtonProps) => {
  return <Button {...props} />;
};
