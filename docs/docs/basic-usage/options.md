# Options

<script setup>
import hideEditor from '../codes/options/hideEditor.ts';
import autorun from '../codes/options/autorun.ts';
import previewHeight from '../codes/options/height.ts';
import coderHeight from '../codes/options/editorHeight.ts';
import navigator from '../codes/options/navigator.ts';
import linenumbers from '../codes/options/linenumbers.ts';
import refresh from '../codes/options/refresh.ts';
import tabs from '../codes/options/tabs.ts';
import closableTabs from '../codes/options/closableTabs.ts';
import console from '../codes/options/console.ts';
import consolebutton from '../codes/options/consolebutton.ts';
import wrapContent from '../codes/options/wrapContent.ts';
import resizablePanels from '../codes/options/resizablePanels.ts';
import readOnly from '../codes/options/readOnly.ts';
import showReadOnly from '../codes/options/showReadOnly.ts';
import readOnlyPer from '../codes/options/readOnlyPer.ts';
</script>

## hideEditor <small style="font-size: 12px; color: var(--vp-c-green);">from @0.3.0</small>

`default: false`

::: details markdown code
<CodePanel :value="hideEditor" />
:::

::: sandbox {hideEditor}
:::

## autorun

`default: true`

set `autorun=false`，then you should click the run button in editor area.

::: details markdown code
<CodePanel :value="autorun" />
:::

::: sandbox {autorun=false}
:::

## coderHeight <small style="font-size: 12px; color: var(--vp-c-green);">from @0.3.0</small>

`default: undefined`

::: details markdown code
<CodePanel :value="coderHeight" />
:::

::: sandbox {coderHeight=512}
```vue /src/App.vue
<template>
  <!-- coder area height: 512px -->
  <h3>The coder area height: {{ msg }}</h3>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('512px');
</script>
```
:::

## previewHeight <small style="font-size: 12px; color: var(--vp-c-green);">from @0.3.0</small>

`default: undefined`

::: details markdown code
<CodePanel :value="previewHeight" />
:::

::: sandbox {previewHeight=512}
```vue /src/App.vue
<template>
  <h3>Preview Height: {{ msg }}</h3>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('512px');
</script>
```
:::

## showNavigator

`default: false`

::: details markdown code
<CodePanel :value="navigator" />
:::

::: sandbox {showNavigator=true}
:::

## showLineNumbers

`default: false`

::: details markdown code
<CodePanel :value="linenumbers" />
:::

::: sandbox {showLineNumbers=true}
:::

## wrapContent

`default: false`

::: details markdown code
<CodePanel :value="wrapContent" />
:::

::: sandbox {wrapContent}
:::

## showRefreshButton

`default: true`

It will not take effect when enable `showNavigator`

::: details markdown code
<CodePanel :value="refresh" />
:::

::: sandbox {showRefreshButton=false}
:::

## showTabs

`default: true`

::: details markdown code
<CodePanel :value="tabs" />
:::

::: sandbox {showTabs=false}
:::

## closableTabs

show the close icon of tabs

`default: false`

::: details markdown code
<CodePanel :value="closableTabs" />
:::

::: sandbox {template=vue3-ts closableTabs}
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

## showConsole

show the console log panel.

`default: false`

::: details markdown code
<CodePanel :value="console" />
:::

::: sandbox {showConsole}
:::

## showConsoleButton

show the button which can toggle the console panel.

`default: true`

::: details markdown code
<CodePanel :value="consolebutton" />
:::

::: sandbox {showConsoleButton=false}
:::

## resizablePanels

enable resizable editor width

`default: true`

::: details markdown code
<CodePanel :value="resizablePanels" />
:::

::: sandbox {resizablePanels=false}
:::

## readOnly

set all files readonly or not.

`default: false`

- **readOnly globally**

> all files are readOnly

::: details markdown code
<CodePanel :value="readOnly" />
:::

::: sandbox {template=vue3-ts readOnly}
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

- **readOnly by file**

> set `/src/App.vue` with readOnly

::: details markdown code
<CodePanel :value="readOnlyPer" />
:::

::: sandbox {template=vue3-ts}
```js /src/person.ts
const name = 'Tom';
export { name };
```

```vue /src/App.vue [readOnly]
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

## showReadOnly

show readOnly label of file.

`default: true`

::: details markdown code
<CodePanel :value="showReadOnly" />
:::

::: sandbox {template=vue3-ts readOnly showReadOnly=false}
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
