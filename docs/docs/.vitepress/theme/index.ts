import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import CodePanel from '../../components/CodePanel.vue';
// @ts-ignore
import MySandbox from '../../components/MySandbox.vue';
// @ts-ignore
import Sandbox from '../../../../src/components/Sandbox.vue';

// for build test
// import { Sandbox } from '../../../../dist/esm';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Sandbox', Sandbox);
    ctx.app.component('MySandbox', MySandbox);
    ctx.app.component('CodePanel', CodePanel);
  },
}
