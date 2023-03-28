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

const useSnippets = (input = '') => {
  const strings = input.split(' ');
  let usedSnippets = false;
  for (const str of strings) {
    if (/([{1})([\s\S]*)([\.]{1}([\s\S]+))(]{1})/.test(str)) {
      usedSnippets = true;
      break;
    }
  }
  return usedSnippets;
};

/**
 * @param htmlTag
 * @description htmltag name to component name
 * ```js
 * 'sanbox' -> 'Sandbox'
 * 'sandbox-react' -> SandboxReact
 * ```
 */
const renderSandbox = (tokenList: any[], index: number, htmlTagName: string) => {
  const renderFunc = (tokens: any[], idx: number, htmlTag: string) => {
    if (tokens[idx].nesting === 1) {
      const fileAttr: string[] = [];
      for (
        let i = idx + 1;
        tokens[i] && !(tokens[i].nesting === -1 && tokens[i].type === 'container_sandbox_close');
        ++i
      ) {
        if (tokens[i].type === 'fence' && tokens[i].tag === 'code') {
          let lang = '';
          let tokenVal = (tokens[i]?.info as string) || '';
          if (useSnippets(tokenVal)) {
            if (!tokenVal.includes('prefix=')) {
              tokenVal = tokenVal.replace('[', ' /').replace(']', '');
            } else {
              tokenVal = tokenVal.replace('prefix=', '').replace('[', '').replace(']', '');
            }

            lang = tokenVal.substring(tokenVal.lastIndexOf('.') + 1);
            tokenVal = `${lang} ${tokenVal}`;

            if (tokenVal.includes('#active')) {
              tokenVal = `${tokenVal.replace('#active', '')} [active]`;
            }
            if (tokenVal.includes('#readOnly')) {
              tokenVal = `${tokenVal.replace('#readOnly', '')} [readOnly]`;
            }
            if (tokenVal.includes('#hidden')) {
              tokenVal = `${tokenVal.replace('#hidden', '')} [hidden]`;
            }
          }
          fileAttr.push(tokenVal);
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
