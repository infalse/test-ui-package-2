import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from '.';

export default {
  title: 'Components/atoms/Divider',
  component: Divider,
  parameters: {
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
