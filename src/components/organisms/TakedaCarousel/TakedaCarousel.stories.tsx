import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TakedaCarousel } from '.';
import {
  NextComponent,
  PrevComponent,
  TakedaFeaturedArticle
} from '../../molecules/TakedaFeaturedArticle';

export default {
  title: 'Components/organisms/TakedaCarousel',
  component: TakedaCarousel,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof TakedaCarousel>;

const Template: ComponentStory<typeof TakedaCarousel> = args => <TakedaCarousel {...args} />;

const items = [
  {
    title: 'Takeda has published its 2021 Annual Integrated Report',
    url: '/investors/2021-annual-report-article/',
    media:
      'https://res.cloudinary.com/takeda/image/upload/c_lfill,w_1200/q_auto:eco/f_auto/v1/migration/878fc25599f650c7e47164c3e42b90ee6d600d31-768x433'
  },
  {
    title: 'Access to Medicine 2020 Progress Report',
    url: '/investors/2021-annual-report-article/',
    media:
      'https://res.cloudinary.com/takeda/image/upload/c_lfill,w_1200/q_auto:eco/f_auto/v1/migration/7f73261ffc325cbc00d4e894a6892266ac7f4581-768x432'
  },
  {
    title:
      'President of Research & Development Says Maintaining Trust in Science is Critical for Public Health',
    url: '/research-and-development/andy-article/',
    media: 'https://www.jquery-az.com/html/images/banana.jpg'
  }
];

export const Default = Template.bind({});
Default.args = {
  className: 'relative px-[20px]',
  isInfinite: true,
  hasNavigation: false,
  items: items,
  hasAutoScroll: true,
  perMove: 1,
  perPage: 2,
  slidesGap: 20,
  ItemComponent: TakedaFeaturedArticle,
  PrevComponent: PrevComponent,
  NextComponent: NextComponent
};
