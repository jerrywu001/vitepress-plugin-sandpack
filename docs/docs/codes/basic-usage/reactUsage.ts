const code = `::: sandbox {template=react}
\`\`\`js /App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
\`\`\`

\`\`\`js /Gallery.js [active] [readonly]
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
\`\`\`
:::`;

export default code;
