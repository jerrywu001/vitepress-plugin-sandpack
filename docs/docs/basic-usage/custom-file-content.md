# Custom file content

> this section is also the basis of usage

Each template has a number of preset files to ensure that the program works properly.

<script setup>
import vue3ts from '../codes/basic-usage/vue3tsEntry.ts';
import replaceVue3tsApp from '../codes/basic-usage/replaceVue3tsApp.ts';
import addVue3tsFile from '../codes/basic-usage/addVue3tsFile.ts';
import reactUsage from '../codes/basic-usage/reactUsage.ts';
</script>

## All templates

> the `javascript` is also called `vanilla`.

- `vanilla` `vanilla-ts` `vue` `vue3` `vue3-ts` `react` `react-ts` `angular` `solid` `svelte` `test-ts`

## Default file

- For example: templte `vue3-ts`.

::: details markdown code
<CodePanel :value="vue3ts" />
:::

::: sandbox {template=vue3-ts}
:::

## Replace default file

- replace `/src/App.vue`

::: details markdown code
<CodePanel :value="replaceVue3tsApp" />
:::


::: sandbox {template=vue3-ts}
```vue /src/App.vue
<script setup lang="ts">
import { ref } from 'vue';

const person = ref<string>('Lily');
</script>

<template>
  <h1>Hi, I am {{ person }}</h1>
</template>
```
:::

## Add some file

::: details markdown code
<CodePanel :value="addVue3tsFile" />
:::


::: sandbox {template=vue3-ts}
```js /src/person.ts
const name = 'Tom';
export { name };
```

```vue /src/App.vue
<script setup lang="ts">
import { ref } from 'vue';
import { name } from './person.ts';

const person = ref<string>(name);
</script>

<template>
  <h1>Hi, I am {{ person }}</h1>
</template>
```
:::

## `React` template usage

::: details markdown code
<CodePanel :value="reactUsage" />
:::

::: sandbox {template=react}
```js /App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

```js /Gallery.js [active] [readonly]
// this file is readOnly

function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```
:::


