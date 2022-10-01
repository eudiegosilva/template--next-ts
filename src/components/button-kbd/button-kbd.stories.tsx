import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonKbd, ButtonKbdProps } from './ButtonKbd';

const story: Meta<ButtonKbdProps> = {
  title: 'Atoms/ButtonKbd',
  component: ButtonKbd,
  args: { children: 'ctrl' },
  argTypes: {},
  parameters: {}
};

export const ButtonKbdExample: Story<ButtonKbdProps> = args => (
  <ButtonKbd {...args} />
);

export default story;
