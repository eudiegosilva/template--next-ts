import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'click me',
    type: 'button',
    isFullWidth: false
  },
  argTypes: {
    children: {
      description: 'Button label',
      table: {
        defaultValue: {
          summary: 'click me'
        }
      }
    },
    type: {
      description: 'specifies the type of component'
    },
    isFullWidth: {
      description: 'defines if the component is full width'
    },
    variant: {
      description: 'main visual variations of the component'
    },
    handleClick: {
      description: 'event executed when the component is clicked',
      action: 'button-clicked'
    }
  },
  parameters: {}
} as Meta;

export const ButtonExample: Story<ButtonProps> = args => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};
