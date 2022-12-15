import { defineCustomElement } from 'vue'
import { createApp } from 'vue'
import MyWidget1 from './MyWidget1.ce.vue'
import { STYLE_PLACEHOLDER } from '../@mxg/vite-plugin-style-injector-shadowdom'
import './main.css'

const isCustomElementStyleAvailable = MyWidget1.styles
if (isCustomElementStyleAvailable)
    customElements.define('my-widget-1', defineCustomElement({ ...MyWidget1, styles: [STYLE_PLACEHOLDER] }))
else
    createApp(MyWidget1).mount('my-widget-1')
