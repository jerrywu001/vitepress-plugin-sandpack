import DefaultTheme from 'vitepress/theme';
import { SandBox } from '../../../../dist/esm';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('SandBox', SandBox);
  },
}
