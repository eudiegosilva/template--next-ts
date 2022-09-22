import { Story, Meta } from '@storybook/react/types-6-0';

import { Switch, SwitchProps } from './Switch';

const story: Meta<SwitchProps> = {
  title: 'Atoms/Switch',
  component: Switch,
  args: {
    label: 'dark mode',
    id: 'dark-mode',
    defaultChecked: false,
    onCheckedChange: () => null
  },
  argTypes: {
    onCheckedChange: {
      description: 'Event executed when the switch is selected',
      action: 'switch-selected'
    }
  },
  parameters: {}
};

export const SwitchExample: Story<SwitchProps> = args => <Switch {...args} />;

export default story;
