import { Box } from "../Box/Box";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";

export const Alert = ({ dark, children }) => (
  <Box
    display="block"
    background={dark ? "positive" : "positiveLight"}
    padding="medium"
  >
    <Stack space="small">
      <Text size="medium">Alert</Text>
      {children}
    </Stack>
  </Box>
);
