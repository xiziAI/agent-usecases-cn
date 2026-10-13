import { getCollection } from 'astro:content';
export async function allCases() {
  const cases = await getCollection('cases');
  const slugs = new Set<string>();
  for (const entry of cases) {
    if (slugs.has(entry.data.slug)) throw new Error(`重复的案例 slug: ${entry.data.slug}`);
    slugs.add(entry.data.slug);
  }
  return cases.sort((a, b) => b.data.added_at.localeCompare(a.data.added_at));
}
// Encoding every code point gives each Agent a stable, collision-free URL slug.
export const agentSlug = (name: string) => Array.from(name).map(c => c.codePointAt(0)!.toString(16)).join('-');
export const agentNames = (cases: Awaited<ReturnType<typeof allCases>>) => [...new Set(cases.flatMap(c => c.data.agents))].sort();
