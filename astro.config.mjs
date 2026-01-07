// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercelServerless from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["package-name"]
    }
  },
  output: 'server',
  adapter: vercelServerless(),
});