import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  skipNodeModulesBundle: true,
  minify: true,
  clean: true,
  shims: true,
  dts: true
});
