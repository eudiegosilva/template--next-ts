import { Story, Meta } from '@storybook/react/types-6-0';

import { DashboardArea, DashboardAreaProps } from './DashboardArea';

const story: Meta<DashboardAreaProps> = {
  title: 'Atoms/DashboardArea',
  component: DashboardArea,
  args: {},
  argTypes: {},
  parameters: {},
};

export const DashboardAreaExample: Story<DashboardAreaProps> = (args) => (
  <DashboardArea {...args} />
);

export default story;
