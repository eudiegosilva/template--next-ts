import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './Icon';

const story: Meta<IconProps> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {},
  argTypes: {},
  parameters: {}
};

export const IconExample: Story<IconProps> = args => {
  return <Icon {...args} />;
};

export default story;
