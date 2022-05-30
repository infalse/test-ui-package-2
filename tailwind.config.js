module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist:
    process.env.NODE_ENV === 'production'
      ? []
      : [
          {
            pattern: /^(.*?)/,
          },
        ],
};
