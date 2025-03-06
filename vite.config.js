import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    server: {
        port: 3000,
        open: true,
        watch: {
            usePolling: true
        }
    },
    build: {
        chunkSizeWarningLimit: 1000, // Increases warning limit to 1MB
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'; // Splits vendor libraries
                    }
                },
            },
        },
    }
});
