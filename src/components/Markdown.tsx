import React from 'react';
import type { Block } from '../markdown.ts';

const INLINE = /(\*\*.+?\*\*|https:\/\/\S+|[\w.]+@[\w.]+\.\w+)/g;

const inline = (text: string): React.ReactNode[] =>
  text.split(INLINE).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('https://')) {
      return (
        <a key={i} href={part} rel="noopener">
          {part}
        </a>
      );
    }
    if (/^[\w.]+@[\w.]+\.\w+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    return part;
  });

export const MarkdownBlocks: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <>
    {blocks.map((b, i) => {
      if (b.type === 'p') return <p key={i}>{inline(b.text)}</p>;
      return (
        <ul key={i}>
          {b.items.map((item, j) => (
            <li key={j}>{inline(item)}</li>
          ))}
        </ul>
      );
    })}
  </>
);
