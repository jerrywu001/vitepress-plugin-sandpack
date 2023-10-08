# Themes

Have multi themes (**Support dark mode**):

> see: node_modules/@codesandbox/sandpack-themes/dist/esm/index.d.ts

`amethyst` `aquaBlue` `atomDark` `cobalt2` `cyberpunk` `dracula` `ecoLight` `freeCodeCampDark` `githubLight`

`gruvboxDark` `gruvboxLight` `levelUp` `monokaiPro` `neoCyan` `nightOwl` `sandpackDark` `freeCodeCampLight` `oceanBlue`

## online preview

<a href="https://sandpack-vue3.netlify.app/?path=/story/presets-themes-external--amethyst" target="_blank">online preview</a>

<script setup>
import customTheme from '../codes/basic-usage/customTheme.ts';
import defaultTheme from '../codes/basic-usage/defaultTheme.ts';
</script>

## the default theme

> You can click the themes button in the top right corner to switch to dark mode.

::: details markdown code
<CodePanel :value="defaultTheme" />
:::

::: sandbox
:::

## custom theme

> You can click the themes button in the top right corner to switch to dark mode.

::: details markdown code
<CodePanel :value="customTheme" />
:::

::: sandbox {template=angular lightTheme=aquaBlue darkTheme=gruvboxDark}
:::
