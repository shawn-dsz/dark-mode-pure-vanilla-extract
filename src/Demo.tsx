import React from 'react';
import { Box } from './Box/Box';
import { Stack } from './Stack/Stack';
import { Badge } from './Badge/Badge';
import { Text } from './Text/Text';
import { TextLink } from './TextLink/TextLink';
import { Alert } from './Alert/Alert';
import { Field } from './Field/Field';
import { Button } from './Button/Button';

const CustomColorTest = () => (
  <Box>
    <Box
      background="customDark"
      padding="xsmall"
      style={{ background: 'purple' }}
    >
      <Text>
        customDark <TextLink>link</TextLink>
      </Text>
    </Box>
    <Box
      background="customLight"
      padding="xsmall"
      style={{ background: 'lightpink' }}
    >
      <Text>
        customLight <TextLink>link</TextLink>
      </Text>
    </Box>
    <Box background="surface" padding="xsmall">
      <Text>
        surface <TextLink>link</TextLink>
      </Text>
    </Box>
  </Box>
);

const TextTest = () => (
  <Stack space="small">
    <Text>
      Default text <TextLink>link</TextLink>
    </Text>
    <Text tone="positive">
      Positive text <TextLink>link</TextLink>
    </Text>
    <Text tone="link">
      Explicit link tone <TextLink>link</TextLink>
    </Text>
  </Stack>
);

export const Demo = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    padding="large"
    style={{ flex: 1 }}
  >
    <Stack space="medium">
      <Text size="large">
        Welcome to Mr Yum <TextLink>Login</TextLink>
      </Text>
      <Field />
      <CustomColorTest />
      <TextTest />

      <Box background="surface" padding="large" style={{ flex: 1 }}>
        <Stack space="large">
          <Stack space="small">
            <Badge />
            <Text size="large">
              Heading on surface <TextLink>Link</TextLink>{' '}
            </Text>
          </Stack>
          <Field />
          <CustomColorTest />
          <TextTest />
          <Alert dark>
            <Field />
            <CustomColorTest />
            <TextTest />
            <Alert dark={false}>
              <CustomColorTest />
              <TextTest />
              <Alert dark>
                <CustomColorTest />
                <TextTest />
              </Alert>
            </Alert>
          </Alert>
        </Stack>
      </Box>
    </Stack>
  </Box>
);
