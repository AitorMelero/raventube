import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    alias: { '@/': new URL('./src/', import.meta.url).pathname },
    setupFiles: 'tests/setup/setup.ts',
  },
})
