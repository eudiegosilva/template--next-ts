import { Story, Meta } from '@storybook/react/types-6-0';

import { FormLogin, FormLoginProps } from './FormLogin';

const story: Meta<FormLoginProps> = {
  title: 'Generated/FormLogin',
  component: FormLogin,
  args: {},
  argTypes: {},
  parameters: {}
};

export const FormLoginExample: Story<FormLoginProps> = args => (
  <FormLogin {...args} />
);

export default story;
