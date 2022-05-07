import { ReactNode } from "react";
import { Box } from "../Box/Box";
import { vars } from "../vars.css";

export const Stack = ({
  children,
  space = "medium"
}: {
  children: ReactNode;
  space?: keyof typeof vars.space;
}) => (
  <Box display="flex" flexDirection="column" gap={space}>
    {children}
  </Box>
);
