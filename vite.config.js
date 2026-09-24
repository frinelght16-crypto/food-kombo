const { cpSync } = require('node:fs');
const { resolve } = require('node:path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  // Keep generated files and runtime assets working beneath /<repository>/ on Pages.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [{
    name: 'copy-runtime-assets',
    apply: 'build',
    closeBundle() {
      cpSync(resolve(__dirname, 'assets'), resolve(__dirname, 'dist/assets'), { recursive: true });
    }
  }]
});
