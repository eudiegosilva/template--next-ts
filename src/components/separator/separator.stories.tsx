import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Flex } from 'components';

import { Separator, SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Atoms/Separator',
  component: Separator,
  args: { orientation: 'horizontal', decorative: false },
  argTypes: {
    orientation: { description: 'The orientation of the separator.' },
    decorative: {
      description:
        'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.'
    },
    css: { table: { disable: true } }
  },
  parameters: {}
};

export const SeparatorHorizontalExample: Story<SeparatorProps> = args => (
  <Box>
    <p>Blog</p>
    <Separator decorative css={{ margin: '$lg 0' }} {...args} />
    <p>Docs</p>
    <Separator decorative css={{ margin: '$lg 0' }} {...args} />
    <p>Source</p>
  </Box>
);

export const SeparatorVerticalExample: Story<SeparatorProps> = args => (
  <Box
    css={{
      width: '100%',
      maxWidth: 300,
      color: '$text-contrast-high'
    }}
  >
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <p>Blog</p>
      <Separator
        decorative
        orientation="vertical"
        css={{ margin: '0 $lg' }}
        {...args}
      />
      <p>Docs</p>
      <Separator
        decorative
        orientation="vertical"
        css={{ margin: '0 $lg' }}
        {...args}
      />
      <p>Source</p>
    </Flex>
  </Box>
);

SeparatorVerticalExample.args = {
  orientation: 'vertical'
};

export default story;
