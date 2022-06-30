import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.tsx',
    unsafe: 'src/unsafe/index.tsx'
  },
  format: 'esm',
  treeshake: true,
  splitting: true,
  sourcemap: false,
  clean: true
});
