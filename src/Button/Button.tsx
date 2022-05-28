import React, { ReactNode, MouseEvent } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { button as buttonStyles, ButtonVariants } from './Button.css';

interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  onClick,
  ...rest
}: Props & ButtonVariants) => (
  <Box
    // onClick={onClick}
    className={buttonStyles({
      ...rest,
    })}
  >
    <Text>{children}</Text>
  </Box>
);
