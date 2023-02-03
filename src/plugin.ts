import type MarkdownIt from 'markdown-it';
import container from 'markdown-it-container';
import type { RenderRule } from 'markdown-it/lib/renderer';

const useSandBox = (md: MarkdownIt, componentName = 'sandbox') => {
  md.use(container, componentName, {
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const attrs: string[] = [];
        for (
          let i = idx + 1;
          !(
            tokens[i].nesting === -1 &&
            tokens[i].type === 'container_sandbox_close'
          );
          ++i
        ) {
          if (tokens[i].type === 'fence' && tokens[i].tag === 'code') {
            attrs.push(tokens[i].info);
          }
        }
        const props = tokens[idx].attrs?.map(([key, val]) => (val ? `${key}="${val}"` : key)) || [];
        return `<SandBox codeOptions="${encodeURIComponent(JSON.stringify(attrs))}" ${props.join(' ')}>`;
      }
      return '</SandBox>';
    },
  } satisfies { render: RenderRule });
};

export { useSandBox };
