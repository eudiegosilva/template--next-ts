import { Story, Meta } from '@storybook/react/types-6-0';

import { Separator, SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Atoms/Separator',
  component: Separator,
  args: {},
  argTypes: {},
  parameters: {}
};

export const SeparatorExample: Story<SeparatorProps> = args => (
  <Separator {...args} />
);

export default story;
