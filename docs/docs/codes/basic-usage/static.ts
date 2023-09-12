const code = `::: sandbox {template=static}
\`\`\`html index.html
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
\`\`\`
:::`;

export default code;
