import 'tailwindcss/tailwind.css';
import React from 'react';

export const decorators = [
  Story => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
