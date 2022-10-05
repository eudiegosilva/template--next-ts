import { Story, Meta } from '@storybook/react/types-6-0';

import { PageLayout, PageLayoutProps } from './PageLayout';

const story: Meta<PageLayoutProps> = {
  title: 'Organisms/PageLayout',
  component: PageLayout,
  args: {},
  argTypes: {},
  parameters: { layout: 'fullscreen' },
};

export const PageLayoutExample: Story<PageLayoutProps> = (args) => (
  <PageLayout {...args} />
);

export default story;
