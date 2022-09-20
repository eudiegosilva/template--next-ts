import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: { name: 'share', flip: false, type: 'outline', size: 24 },
  argTypes: {},
  parameters: {}
} as Meta;

export const IconExample: Story<IconProps> = args => {
  return <Icon {...args} />;
};
