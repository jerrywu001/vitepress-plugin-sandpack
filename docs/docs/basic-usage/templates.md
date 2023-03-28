# Templates

Sandbox is a component toolkit for creating live-running code editing experiences, using the power of CodeSandbox.


## All templates

> the `javascript` is also called `vanilla`.

`vanilla` `vanilla-ts` `vue` `vue3` `vue3-ts` `react` `react-ts` `angular` `solid` `svelte` `test-ts`

# Usage

<script setup>
import reactUsage from '../codes/basic-usage/reactUsage.ts';
</script>

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

see: [Custom file](./custom-file-content.md)
