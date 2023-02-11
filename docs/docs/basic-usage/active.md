# Active File

> the active file in editor

## Default active file in editor

> the `javascript` is also called `vanilla`.

- vanilla: `/src/index.js`
- vanilla-ts: `/src/index.ts`
- vue: `/src/App.vue`
- vue3: `/src/App.vue`
- vue3-ts: `/src/App.vue`
- react: `/App.js`
- react-ts: `/App.tsx`
- angular: `/src/app/app.component.ts`
- solid: `/App.tsx`
- svelte: `/index.js`
- test-ts: `/add.test.ts`

### usage

For example, like `vue3-ts`, the default active file in editor is `/src/App.vue`.

<script setup>
import vue3ts from '../codes/basic-usage/addVue3tsFile.ts';
import changeActive from '../codes/basic-usage/changeActive.ts';
</script>

::: details markdown code
<CodePanel :value="vue3ts" />
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

## Custom active file

also `vue3-ts`, we can change the active file very easy.

you can see, the active file is not /src/App.vue.

::: details markdown code
<CodePanel :value="changeActive" />
:::

::: sandbox {template=vue3-ts}
```js /src/person.ts [active]
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
