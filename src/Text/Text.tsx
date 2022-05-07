import React, { ReactNode } from "react";
import { Box } from "../Box/Box";
import { vars } from "../vars.css";
import * as styles from "./Text.css";

interface Props {
  children: ReactNode;
  tone?: keyof typeof styles.tone;
  size?: keyof typeof vars.fontSize;
}

export const Text = ({ children, tone = "neutral", size = "small" }: Props) => {
  return (
    <Box
      as="span"
      display="block"
      fontFamily="body"
      fontSize={size}
      className={[
        styles.tone[tone],
        tone !== "neutral" && tone !== "link" ? styles.neutralLink : ""
      ].join(" ")}
    >
      {children}
    </Box>
  );
};
