import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleInjector from './@mxg/vite-plugin-style-injector-shadowdom'
import path from 'path'

export default defineConfig(({ command }) => {
  const enableCustomElementAndStyleInjector = command === "build"
  return {
    plugins: [
      vue({
        ...(enableCustomElementAndStyleInjector ? {} : { customElement: false })
      }),
      ...(enableCustomElementAndStyleInjector ? [styleInjector()] : []),
    ],
  };
})
