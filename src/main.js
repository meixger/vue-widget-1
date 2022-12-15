import { defineCustomElement } from 'vue'
import MyWidget1 from './MyWidget1.vue'
import './main.css'

const styles = [];
const modules = import.meta.glob('./**/*.vue');
for (const path in modules) {
    const mod = await modules[path]();
    styles.push(mod.default.styles);
}
MyWidget1.styles = [styles.flat().join('')];

customElements.define('my-widget-1', defineCustomElement(MyWidget1))