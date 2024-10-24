import viteReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'dist', // Customize output directory
    reportCompressedSize: false, // Disable reporting of compressed sizes
    sourcemap: false, // Disable sourcemaps for production (optional)
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js', // Cache busting with hashes
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        // Optional: Adjust manual chunking strategy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor chunks
          }
        },
      },
    },
  },
  plugins: [
    viteConfigPaths(),
    viteReactPlugin(),
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
  base: '/SwifTex/',
});
