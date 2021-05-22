// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { LoaderEvolution } from './loader.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Atoms/LoaderEvolution',
  component: LoaderEvolution,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof LoaderEvolution>> = (args) => <LoaderEvolution {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};