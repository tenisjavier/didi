import React from "react";


const textHighlighter = (text?: string, styles?: string) => {

  if (!text) {
    return;
  }

  const regex = /{[^}]+}|[^{}]+/g;

  const matches = text.match(regex);

  if (!matches) {
    return null;
  }

  const textWithSpan = matches.map((segment, index) => {
    if (segment.startsWith("{") && segment.endsWith("}")) {
      const content = segment.slice(1, -1); // Remove os {}

      if (isHTML(content)) {
        return <span key={index} dangerouslySetInnerHTML={{ __html: content }} />;
      } else {
        return (
          <span className={`${styles} text-orange-primary`} key={index}>
            {content}
          </span>
        );
      }
    } else {
      return segment;
    }
  });

  return textWithSpan;
}

export default textHighlighter;

const isHTML = (str: string): boolean => {
  const doc = new DOMParser().parseFromString(str, "text/html");
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1); // NodeType 1 é ELEMENT_NODE
};