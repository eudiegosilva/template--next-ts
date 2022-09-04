import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'Button',
    type: 'button',
    isFullWidth: false
  },
  argTypes: {
    children: {
      description: 'component label',
      table: {
        defaultValue: {
          summary: 'button example'
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
  }
} as Meta;

export const ButtonDefault: Story<ButtonProps> = args => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};
