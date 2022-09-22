import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, BoxProps } from './Box';

const story: Meta<BoxProps> = {
  title: 'Helpers/Box',
  component: Box,
  args: {},
  argTypes: {},
  parameters: { controls: { disabled: true } }
};

export const BoxExample: Story<BoxProps> = args => (
  <Box {...args}>
    <p>Box content</p>
  </Box>
);

export default story;
