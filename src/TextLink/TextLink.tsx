import { Box } from "../Box/Box";
import * as styles from "./TextLink.css";
import { tone } from "../Text/Text.css";

export const TextLink = ({ children }) => (
  <Box as="a" className={[tone.link, styles.underline].join(" ")}>
    {children}
  </Box>
);
