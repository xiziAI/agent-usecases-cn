import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/categories';
const text = z.string().min(1);
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}, '请输入有效的 YYYY-MM-DD 日期');
const cases = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/cases' }),
  schema: z.object({
    slug: text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), title: text, summary: text,
    agents: z.array(text).min(1), category: z.enum(categorySlugs), tags: z.array(text),
    scenario: text, steps: z.array(text).min(1), result: text, pitfalls: z.string(), prompt: z.string(),
    effort: z.string(), cost: z.string(), difficulty: z.number().int().min(1).max(3),
    cn_access: z.enum(['直连', '需代理', '有国产替代']), cn_access_note: text,
    source_url: z.string().url(), source_author: text, source_platform: text, source_date: z.union([date, z.literal("")]),
    lang: text, via: z.string().url().optional(), added_at: date, status: text,
  }),
});
export const collections = { cases };
