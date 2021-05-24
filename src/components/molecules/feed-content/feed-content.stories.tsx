// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { FeedContent } from './feed-content.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Molecules/FeedContent',
  component: FeedContent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof FeedContent>> = (args) => <FeedContent {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Something'
};