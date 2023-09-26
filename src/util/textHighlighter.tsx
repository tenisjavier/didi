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

  const textWithSpan = matches.map((text, index) => {
    return (
      <>
        {text.startsWith("{") && text.endsWith("}") ? (
          <span className={`${styles} text-orange-primary`} key={index}>{text.slice(1, -1)}</span>
        ) : text}
      </>
    )
  });

  return textWithSpan;
}

export default textHighlighter;