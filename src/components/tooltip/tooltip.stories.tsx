import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip, TooltipProps } from './Tooltip';

const story: Meta<TooltipProps> = {
  title: 'Generated/Tooltip',
  component: Tooltip,
  args: { content: 'add to favorites' },
  argTypes: {},
  parameters: {},
};

export const TooltipExample: Story<TooltipProps> = (args) => (
  <Tooltip {...args} />
);

export default story;
