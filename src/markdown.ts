export type Block =
  { type: 'h2'; text: string } | { type: 'p'; text: string } | { type: 'ul'; items: string[] };

export const parseMarkdown = (source: string): { meta: string; blocks: Block[] } => {
  let meta = '';
  const blocks: Block[] = [];

  for (const line of source.split(/\r?\n/)) {
    const last = blocks.length > 0 ? blocks[blocks.length - 1] : undefined;
    if (line.startsWith('# ')) continue;
    if (line.startsWith('Effective date:')) meta = line.trim();
    else if (line.startsWith('## ')) blocks.push({ type: 'h2', text: line.slice(3).trim() });
    else if (line.startsWith('- ')) {
      if (last?.type === 'ul') last.items.push(line.slice(2));
      else blocks.push({ type: 'ul', items: [line.slice(2)] });
    } else if (line.trim()) blocks.push({ type: 'p', text: line });
  }

  return { meta, blocks };
};
