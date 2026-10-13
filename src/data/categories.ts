export const categories = [
  { slug: 'product', name: '产品与需求' },
  { slug: 'coding', name: '编程与上线' },
  { slug: 'content', name: '内容与自媒体' },
  { slug: 'growth', name: '增长与获客' },
  { slug: 'office', name: '办公自动化' },
  { slug: 'research', name: '数据与研究' },
  { slug: 'ecommerce', name: '电商与客服' },
  { slug: 'finance', name: '投资与财务' },
  { slug: 'life', name: '生活事务' },
  { slug: 'learning', name: '学习与知识库' },
  { slug: 'solo', name: '一人公司/副业' },
] as const;
export const categorySlugs = categories.map(c => c.slug) as [typeof categories[number]['slug'], ...typeof categories[number]['slug'][]];
export const categoryName = (slug: string) => categories.find(c => c.slug === slug)?.name ?? slug;
