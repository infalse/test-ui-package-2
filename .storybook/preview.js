import 'tailwindcss/tailwind.css';
import React from 'react';

export const decorators = [
  Story => (
    <div style={{ margin: '3em', maxWidth: '1400px', margin: 'auto' }}>
      <Story />
    </div>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
