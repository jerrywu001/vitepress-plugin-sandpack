# Templates

Sandbox is a component toolkit for creating live-running code editing experiences, using the power of CodeSandbox.


## All templates

> the `javascript` is also called `vanilla`.

`static` `vanilla` `vanilla-ts` `vue` `vue3` `vue3-ts` `react` `react-ts` `angular` `solid` `svelte` `test-ts`

## Partial Usage

<script setup>
import staticUsage from '../codes/basic-usage/static.ts';
import javascriptUsage from '../codes/basic-usage/javascript.ts';
import reactUsage from '../codes/basic-usage/reactUsage.ts';
</script>

- **static**

::: details markdown code
<CodePanel :value="staticUsage" />
:::

::: sandbox {template=static}
```html index.html
<!DOCTYPE html>
<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
  <script>
    console.log("fooo")
  </script>
</head>
<body>
  <h1>Hello world</h1>
  <button onclick="console.log(document.querySelectorAll('button'))">Log</button>
  <button onclick="console.log(document.querySelectorAll('button'))">Log</button>
</body>
</html>
```
:::

- **vanilla-ts**

::: details markdown code
<CodePanel :value="javascriptUsage" />
:::

::: sandbox {template=vanilla-ts}
```ts index.ts
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello world !!!</h1>
`;
```
:::

- **react**

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
