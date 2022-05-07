import { Box } from "../Box/Box";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";

export const Field = () => (
  <Stack space="xsmall">
    <Text>Field Label</Text>
    <Box
      background="surface"
      display="flex"
      alignItems="center"
      padding="small"
      borderRadius="large"
      border="field"
      style={{ height: 44, width: "100%" }}
    >
      <Text>Field</Text>
    </Box>
  </Stack>
);
