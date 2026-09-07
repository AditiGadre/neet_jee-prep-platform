import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'NEXT_PUBLIC_', 'SUPABASE_'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) return 'vendor-lucide';
              if (id.includes('@supabase') || id.includes('supabase')) return 'vendor-supabase';
              if (id.includes('katex')) return 'vendor-katex';
              if (id.includes('canvas-confetti')) return 'vendor-confetti';
              return 'vendor-core';
            }
            if (id.includes('src/data/fingertipsBiologyQuestions')) {
              return 'data-biology';
            }
            if (id.includes('src/data/chemistryQuestions') || id.includes('src/data/chemistryMockTests')) {
              return 'data-chemistry';
            }
            if (
              id.includes('src/data/physics') ||
              id.includes('src/data/units') ||
              id.includes('src/data/vectors') ||
              id.includes('src/data/motion') ||
              id.includes('src/data/laws') ||
              id.includes('src/data/friction') ||
              id.includes('src/data/workEnergy') ||
              id.includes('src/data/gravitation') ||
              id.includes('src/data/elasticity') ||
              id.includes('src/data/surface') ||
              id.includes('src/data/fluid') ||
              id.includes('src/data/thermal') ||
              id.includes('src/data/thermodynamics') ||
              id.includes('src/data/transmission') ||
              id.includes('src/data/shm') ||
              id.includes('src/data/waves') ||
              id.includes('src/data/electrostatics') ||
              id.includes('src/data/magnetism')
            ) {
              return 'data-physics';
            }
          }
        }
      },
      chunkSizeWarningLimit: 5000
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
