import { Story, Meta } from '@storybook/react/types-6-0';

import { Spheres, SpheresProps } from './Spheres';

const story: Meta<SpheresProps> = {
  title: 'Atoms/Spheres',
  component: Spheres,
  args: {},
  argTypes: {},
  parameters: {},
};

export const SpheresExample: Story<SpheresProps> = (args) => (
  <Spheres {...args} />
);

export default story;
