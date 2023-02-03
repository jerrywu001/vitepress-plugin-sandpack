import DefaultTheme from 'vitepress/theme';
// import { SandBox } from '../../../../dist/esm';
// @ts-ignore
import SandBox from '../../../../src/components/SandBox.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('SandBox', SandBox);
  },
}
