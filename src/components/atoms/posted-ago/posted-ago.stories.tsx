// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { PostedAgo } from './posted-ago.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Atoms/PostedAgo',
  component: PostedAgo,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof PostedAgo>> = (args) => <PostedAgo {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    timestamp: 123132,
    type: 'post'
};