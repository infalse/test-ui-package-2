import React from 'react';
import { ComponentStory } from '@storybook/react';

import {
  AppleIcon,
  ChevronRedIcon,
  ChevronLeftIcon,
  CalendarIcon,
  ClockIcon,
  LinkedInIcon,
  ChevronRightIcon
} from '.';

export default {
  title: 'Components/atoms/Icon',
  parameters: {
    layout: 'fullscreen'
  }
};

const IconMap = [
  AppleIcon,
  ChevronRedIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  ClockIcon,
  LinkedInIcon
];

const Template: ComponentStory<typeof AppleIcon> = () => (
  <div className="flex flex-wrap">
    {IconMap.map((Icon, index) => (
      <div key={index} className="flex flex-col justify-between items-center w-12 h-12 m-8">
        <Icon />
        <span className="text-xs pt-2">{(Icon as React.FC).displayName}</span>
      </div>
    ))}
  </div>
);

export const List = Template.bind({});
List.args = {};
