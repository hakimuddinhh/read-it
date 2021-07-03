
import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { FeedMenu } from "./feed-menu.component";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Molecules/FeedMenu",
  component: FeedMenu,
};

const Template: Story<ComponentProps<typeof FeedMenu>> = (args) => (
  <FeedMenu {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  votesType: "upvote",
  votesCount: 120,
  commentsCount: 11,
};
