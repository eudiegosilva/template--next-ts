import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Examples/Typography',
  component: Typography,
  args: {},
  argTypes: {
    children: {
      description: 'Text content'
    },
    element: {
      description: 'HTML element'
    },
    variant: {
      description: 'Text style'
    },
    weight: {
      description: 'Text weight'
    },
    size: {
      description: 'Text height'
    },
    lineHeight: {
      description: 'Text line height'
    }
  },
  parameters: {}
} as Meta;

export const TypographyBodyExample: Story<TypographyProps> = args => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};

TypographyBodyExample.args = {
  variant: 'body',
  size: 'md',
  weight: 400,
  lineHeight: 100,
  element: 'p',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos.'
};

export const TypographyHeadingExample: Story<TypographyProps> = args => {
  const { children } = args;
  return <Typography {...args}>{children}</Typography>;
};

TypographyHeadingExample.args = {
  variant: 'heading',
  size: '5x',
  weight: 700,
  lineHeight: 133,
  element: 'h1',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos.'
};
