import Token from 'markdown-it/lib/token';

/**
 * @param htmlTag
 * @description htmltag name to component name
 * ```js
 * 'sanbox' -> 'Sandbox'
 * 'sandbox-react' -> SandboxReact
 * ```
 */
const getComponentName = (tagName: string) => {
  const chars = tagName.split('-');
  return chars.map(a => a.substring(0, 1).toUpperCase() + a.substring(1)).join('-');
};

/**
 * @param htmlTag
 * @description htmltag name to component name
 * ```js
 * 'sanbox' -> 'Sandbox'
 * 'sandbox-react' -> SandboxReact
 * ```
 */
const renderSandbox = (tokenList: Token[], index: number, htmlTagName: string) => {
  const renderFunc = (tokens: Token[], idx: number, htmlTag: string) => {
    if (tokens[idx].nesting === 1) {
      const fileAttr: string[] = [];
      for (
        let i = idx + 1;
        tokens[i] && !(tokens[i].nesting === -1 && tokens[i].type === 'container_sandbox_close');
        ++i
      ) {
        if (tokens[i].type === 'fence' && tokens[i].tag === 'code') {
          fileAttr.push(tokens[i]?.info);
        }
      }
      const attrs = tokens[idx].attrs?.map(([key, val]) => (val ? `${key}="${val}"` : key)) || [];
      return `<${getComponentName(htmlTag)} codeOptions="${encodeURIComponent(JSON.stringify(fileAttr))}" ${attrs.join(' ')}>`;
    }
    return `</${getComponentName(htmlTag)}>`;
  };
  return renderFunc(tokenList, index, htmlTagName);
};

export default renderSandbox;
