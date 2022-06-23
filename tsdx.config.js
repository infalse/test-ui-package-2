const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top'
        }
      })
    );

    config.plugins.push(
      copy({
        targets: [{ src: 'src/utils/tailwind-preset.js', dest: 'dist/utils' }]
      })
    );
    return config;
  }
};
