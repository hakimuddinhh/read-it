// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { PageHeader } from './page-header.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Molecules/PageHeader',
  component: PageHeader,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof PageHeader>> = (args) => <PageHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  imagePath: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  username: 'Hakimuddin',
  karma: 210
};