// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Comments } from './comments.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Molecules/Comments',
  component: Comments,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Comments>> = (args) => <Comments {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};