import { defineConfig } from 'wxt';
import preact from '@preact/preset-vite';

export default defineConfig({
    modules: [],
    vite: () => ({
        plugins: [preact()],
        resolve: {
            alias: {
                '@': '.',
                react: 'preact/compat',
                'react-dom': 'preact/compat',
            },
        },
    }),
});
