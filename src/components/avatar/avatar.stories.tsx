import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from './Avatar';

const story: Meta<AvatarProps> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/38539443?v=4',
    alt: '@diegosilvatech image',
    fallbackContent: 'DS',
    fallbackDelay: 600
  },
  argTypes: {
    src: { description: 'Picture path' },
    alt: { description: 'Picture description' },
    fallbackContent: { description: 'Fallback content' },
    fallbackDelay: { description: 'Fallback delay' }
  },
  parameters: {}
};

export const AvatarExample: Story<AvatarProps> = args => <Avatar {...args} />;

export default story;
