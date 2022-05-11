import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

export const Badge = () => (
  <Box display="flex">
    <Box background="positiveLight" padding="xsmall">
      <Text size="xsmall" tone="positive">
        BADGE
      </Text>
    </Box>
  </Box>
);
