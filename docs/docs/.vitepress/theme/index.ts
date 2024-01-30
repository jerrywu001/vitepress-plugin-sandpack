import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import Sponsors from '../components/sponsor.vue';
// @ts-ignore
import CodePanel from '../../components/CodePanel.vue';
// @ts-ignore
import MySandbox from '../../components/MySandbox.vue';
// @ts-ignore
import OptsSandbox from '../../components/OptsSandbox.vue';
// @ts-ignore
import Sandbox from '../../../../src/components/Sandbox.vue';
import { h } from 'vue';

// for build test
// import { Sandbox } from '../../../../dist/esm';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(Sponsors),
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Sandbox', Sandbox);
    ctx.app.component('MySandbox', MySandbox);
    ctx.app.component('OptsSandbox', OptsSandbox);
    ctx.app.component('CodePanel', CodePanel);
  },
}
