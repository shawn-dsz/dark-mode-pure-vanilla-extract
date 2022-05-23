export default [
  {
    group: 'Sample',
    name: 'Demo',
    code: `
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

    <Box background="surface" padding="large" style={{ flex: 1 }}>
      <Stack space="large">
        <Stack space="small">
          <Badge />
          <Text size="large">
            Heading on surface <TextLink>Link</TextLink>{" "}
          </Text>
        </Stack>
        <Field />

        <Alert dark>
          <Alert dark={false}>
            <Alert dark>
            </Alert>
          </Alert>
        </Alert>
      </Stack>
    </Box>
  </Stack>
</Box>
    `,
  },
];
