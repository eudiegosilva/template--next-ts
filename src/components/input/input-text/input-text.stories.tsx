import { useForm } from 'react-hook-form';

import { PersonIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputText, InputTextProps } from './InputText';

const story: Meta<InputTextProps> = {
  title: 'Atoms/InputText',
  component: InputText,
  args: {
    name: 'name',
    label: 'Name',
    type: 'text',
    iconPosition: 'left',
    icon: <PersonIcon />,
    register: () => null,
  },
  argTypes: {
    name: { description: 'Specifies the **name** of Input' },
    label: { description: 'Specifies the **label** of Input' },
    type: { description: 'Specifies the **type** of Input' },
    iconPosition: { description: 'Specifies the **icon position** side' },
    icon: { description: 'Specifies the **Icon** of Input' },
    onChange: {
      description: 'Event executed when Input value is changed',
      action: 'input-changed',
      table: { disable: true },
    },
    register: { table: { disable: true } },
  },
  parameters: {},
};

export const InputTextExample: Story<InputTextProps> = (args) => {
  const { register } = useForm();
  return <InputText register={register} {...args} />;
};

export default story;
