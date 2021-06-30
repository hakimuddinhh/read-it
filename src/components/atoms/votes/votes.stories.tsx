// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { Votes } from "./votes.component";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Atoms/Votes",
  component: Votes,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Votes>> = (args) => (
  <Votes {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  type: "upvote",
  count: 50,
};
