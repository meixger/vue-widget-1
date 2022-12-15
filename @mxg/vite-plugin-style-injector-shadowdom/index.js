import MagicString from 'magic-string';
export const STYLE_PLACEHOLDER = '@vite-plugin-style-injector-placeholder';
const cssLangs = `\\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\\?)`
const cssLangRE = new RegExp(cssLangs)
const placeholderRE = new RegExp('(?:\r\n|\r|\n)', 'g')
export default () => {
  const cssCodes = []
  return {
    name: '@mxg/vite-plugin-style-injector-shadowdom',
    apply: 'build',
    transform(code, id) {
      const isCSS = cssLangRE.test(id);
      if (isCSS) {
        cssCodes.push(code)
        return { code: '', map: null }
      }
      return { code: code, map: null }
    },
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        if (!code.match(STYLE_PLACEHOLDER))
          return code
        const replace = cssCodes.join('').replace(placeholderRE, '');
        var magic = new MagicString(code)
        magic.replace(STYLE_PLACEHOLDER, replace.replace(/'/g, '\\\'').replace(/"/g, '\\\"'))
        return { code: magic.toString(), map: magic.generateMap({ hires: true }) }
      }
      // Returning null will apply no transformations.
      return { code: code, map: null }
    },
  }
}