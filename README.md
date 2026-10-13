# Agent 案例库

Astro 5 + TypeScript 静态站点，使用系统字体和纯 CSS。

```sh
npm install
npm run dev
npm run build
npm run preview
```

Pagefind 搜索索引在 `npm run build` 时生成，完整搜索请使用 `npm run preview` 验证。只有案例详情页进入搜索索引。

将案例 JSON 放入 `src/content/cases/`。字段由 `src/content.config.ts` 校验；日期使用 YYYY-MM-DD，slug 使用小写英文、数字和连字符且必须唯一。所有记录都会生成页面；status 为展示字段。示例记录是演示数据，发布前请替换。

11 个分类定义在 `src/data/categories.ts`。Agent 页面 URL 由名称的 Unicode 码点编码生成，支持中文名称并避免 slug 冲突。

构建生产版本前设置站点域名，用于 RSS：

```sh
SITE_URL=https://your-domain.example npm run build
```

未设置时使用 https://example.com 占位地址。构建产物位于 `dist/`，可部署到静态托管服务。
