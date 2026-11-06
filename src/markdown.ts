export type Block = { type: 'p'; text: string } | { type: 'ul'; items: string[] };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface ParsedPolicy {
  meta: string;
  intro: Block[];
  summary: string[];
  sections: Section[];
}

const META = /^(Effective date|Date d'entrée en vigueur)\s*:/;

const slugify = (title: string): string =>
  title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const push = (blocks: Block[], line: string) => {
  const last = blocks.length > 0 ? blocks[blocks.length - 1] : undefined;
  if (line.startsWith('- ')) {
    if (last?.type === 'ul') last.items.push(line.slice(2));
    else blocks.push({ type: 'ul', items: [line.slice(2)] });
  } else if (line.trim()) {
    blocks.push({ type: 'p', text: line });
  }
};

/**
 * Parses the policy markdown: the first `##` section is the short summary (its bullets are shown
 * in a highlighted box), the following ones become numbered, linkable sections.
 */
export const parseMarkdown = (source: string): ParsedPolicy => {
  let meta = '';
  const intro: Block[] = [];
  const all: Section[] = [];

  for (const line of source.split(/\r?\n/)) {
    if (line.startsWith('# ')) continue;
    if (META.test(line)) meta = line.trim();
    else if (line.startsWith('## ')) {
      const title = line.slice(3).trim();
      all.push({ id: slugify(title) || `section-${all.length}`, title, blocks: [] });
    } else if (all.length > 0) push(all[all.length - 1].blocks, line);
    else push(intro, line);
  }

  const [first, ...sections] = all;
  const summary = first?.blocks.flatMap((b) => (b.type === 'ul' ? b.items : [])) ?? [];

  return { meta, intro, summary, sections };
};
