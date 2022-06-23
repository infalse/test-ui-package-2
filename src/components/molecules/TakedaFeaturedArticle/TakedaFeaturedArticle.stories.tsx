import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TakedaFeaturedArticle } from '.';

export default {
  title: 'Components/molecules/TakedaFeaturedArticle',
  component: TakedaFeaturedArticle,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof TakedaFeaturedArticle>;

const Template: ComponentStory<typeof TakedaFeaturedArticle> = args => (
  <TakedaFeaturedArticle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  media: 'https://www.jquery-az.com/html/images/banana.jpg',
  title: 'Custom card title',
  url: 'www.google.com'
};
