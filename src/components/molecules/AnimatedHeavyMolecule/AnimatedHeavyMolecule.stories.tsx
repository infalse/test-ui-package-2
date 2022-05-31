import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnimatedHeavyMolecule } from '.';

export default {
  title: 'Components/molecules/AnimatedHeavyMolecule',
  component: AnimatedHeavyMolecule,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof AnimatedHeavyMolecule>;

const Template: ComponentStory<typeof AnimatedHeavyMolecule> = args => (
  <AnimatedHeavyMolecule {...args} />
);

export const Default = Template.bind({});
Default.args = {};
