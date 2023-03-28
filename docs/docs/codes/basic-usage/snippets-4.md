::: sandbox {template=react}
<<< @/snippets/App.js{#hidden}

```js /Clock.js [active]
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}
```
:::
