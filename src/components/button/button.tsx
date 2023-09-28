import { Button, ButtonProps } from '@mui/material';

export type CustomButtonProps = Omit<ButtonProps, 'children'> & {
  children: string;
};

export const CustomButton = ({
  children = 'Custom Button',
  ...props
}: CustomButtonProps) => {
  return <Button {...props} />;
};
