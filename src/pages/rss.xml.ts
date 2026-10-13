import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allCases } from '../lib/cases';
export async function GET(context: APIContext) {
  const cases = await allCases();
  return rss({ title: 'Agent 案例库', description: 'AI Agent 中文应用案例、步骤与提示词', site: context.site!, customData: '<language>zh-CN</language>', items: cases.map(({ data: c }) => ({ title: c.title, description: c.summary, pubDate: new Date(c.added_at), link: `/use-case/${c.slug}/` })) });
}
