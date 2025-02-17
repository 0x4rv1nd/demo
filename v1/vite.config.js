import { defineConfig } from 'vite';
    import { resolve } from 'path';

    export default defineConfig({
      root: './', // Ensure Vite serves from the project root
      server: {
        port: 5173, // Specify a port
        open: false, // Prevent automatic opening
      },
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            verify: resolve(__dirname, 'verify.html'),
            receive: resolve(__dirname, 'receive.html'),
            thanks: resolve(__dirname, 'thanks.html'),
            faq: resolve(__dirname, 'faq.html'),
          },
        },
      },
    });
