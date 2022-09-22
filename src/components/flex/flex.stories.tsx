import { Story, Meta } from '@storybook/react/types-6-0';

import { Flex, FlexProps } from './Flex';

const story: Meta<FlexProps> = {
  title: 'Helpers/Flex',
  component: Flex,
  args: {},
  argTypes: {},
  parameters: { controls: { disabled: true } }
};

export const FlexExample: Story<FlexProps> = args => (
  <Flex {...args}>
    <p>Flex content</p>
  </Flex>
);

export default story;
