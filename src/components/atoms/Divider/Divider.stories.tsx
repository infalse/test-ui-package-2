import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from '.';

export default {
  title: 'Components/atoms/Divider',
  component: Divider,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Black = Template.bind({});
Black.args = {
  color: 'black',
};
