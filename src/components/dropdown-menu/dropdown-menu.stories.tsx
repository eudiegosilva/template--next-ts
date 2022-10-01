import { Story, Meta } from '@storybook/react/types-6-0';

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu';

const story: Meta<DropdownMenuProps> = {
  title: 'Atoms/DropdownMenu',
  component: DropdownMenu,
  args: {},
  argTypes: {},
  parameters: {}
};

export const DropdownMenuExample: Story<DropdownMenuProps> = args => (
  <DropdownMenu {...args} />
);

export default story;
