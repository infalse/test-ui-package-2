import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconMap } from '.';

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Icon>;

const icons = Object.keys(IconMap);

const Template: ComponentStory<typeof Icon> = () => (
  <div className="flex flex-wrap">
    {icons.map((name, index) => (
      <div className="flex flex-col justify-between items-center w-12 h-12 m-8">
        <Icon variant={name as keyof typeof IconMap} key={index} />
        <span className="text-xs">{name}</span>
      </div>
    ))}
  </div>
);

export const List = Template.bind({});
List.args = {};
