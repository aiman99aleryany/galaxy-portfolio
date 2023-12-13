/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

interface ViteConfigInput {
  mode: string;
  command: string;
}

function viteConfig(args: ViteConfigInput) {
  // Production mode
  if (args.mode === 'production')
    return defineConfig({
      plugins: [react(), tsconfigPaths()],
      css: {
        postcss: {
          plugins: [autoprefixer],
        },
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[hash:base64:5]',
        },
      },
      build: {
        cssMinify: true,
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`,
          },
        },
      },
    });

  // Development mode
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
  });
}

export default viteConfig;
