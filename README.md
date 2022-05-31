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

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
