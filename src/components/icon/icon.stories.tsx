import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './Icon';

const story: Meta<IconProps> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'bolt-outline',
    flip: false,
    size: 24,
    color: '$primary-09'
  },
  argTypes: {
    name: {
      description: 'icon name',
      table: { defaultValue: { summary: '' } }
    },
    flip: {
      description: 'icon orientation',
      table: { defaultValue: { summary: 'false' } }
    },
    size: {
      description: 'icon size',
      table: { defaultValue: { summary: '24' } }
    },
    color: { description: 'icon color' }
  },
  parameters: {}
};

export const IconExample: Story<IconProps> = args => {
  return <Icon {...args} />;
};

export default story;
