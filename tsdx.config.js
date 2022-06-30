const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    if (options.format === 'esm') {
      config = { ...config, preserveModules: true };

      config.output = {
        ...config.output,
        dir: 'dist/',
        entryFileNames: '[name].esm.js'
      };

      delete config.output.file;
    }

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
