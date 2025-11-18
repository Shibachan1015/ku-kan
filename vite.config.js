import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

const htmlEntries = readdirSync(__dirname)
  .filter((file) => file.endsWith('.html'))
  .reduce((entries, file) => {
    const name = file.replace(/\.html$/, '');
    entries[name] = resolve(__dirname, file);
    return entries;
  }, {});

export default defineConfig({
  appType: 'mpa',
  server: {
    port: 3000,
    host: true,
    open: '/index.html',
    watch: {
      usePolling: false
    }
  },
  build: {
    rollupOptions: {
      input: htmlEntries
    }
  }
});


