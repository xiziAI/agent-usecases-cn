export const categories = [
  { slug: 'product', name: '产品与需求', icon: 'bulb' },
  { slug: 'coding', name: '编程与上线', icon: 'code' },
  { slug: 'content', name: '内容与自媒体', icon: 'file' },
  { slug: 'growth', name: '增长与获客', icon: 'chart' },
  { slug: 'office', name: '办公自动化', icon: 'briefcase' },
  { slug: 'research', name: '数据与研究', icon: 'search' },
  { slug: 'ecommerce', name: '电商与客服', icon: 'cart' },
  { slug: 'finance', name: '投资与财务', icon: 'wallet' },
  { slug: 'life', name: '生活事务', icon: 'home' },
  { slug: 'learning', name: '学习与知识库', icon: 'book' },
  { slug: 'solo', name: '一人公司/副业', icon: 'briefcase' },
] as const;
export const categorySlugs = categories.map(c => c.slug) as [typeof categories[number]['slug'], ...typeof categories[number]['slug'][]];
export const categoryName = (slug: string) => categories.find(c => c.slug === slug)?.name ?? slug;

export const categoryIcon = (slug: string) => categories.find(c => c.slug === slug)?.icon ?? 'grid';
