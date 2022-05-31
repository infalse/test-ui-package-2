## TSDX

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### Code quality

Code quality is set up with `prettier`, `husky`, and `lint-staged`.

### Storybook

Storybook is used as playground for building components. Run it with `npm run storybook`.

### Jest

Jest tests are set up to run with `npm test`.

## Continuous Integration

### GitHub Actions

Deploy storybook action is added:

- `main` which installs deps, builds storybook and deploys it to gh-pages on pushes with tags.

## Publishing to NPM

Run with `npm run publish-interactive`. It uses [np](https://github.com/sindresorhus/np) for smooth publishing and triggering Storybook deployment.
