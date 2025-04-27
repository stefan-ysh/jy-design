# JY Design - 平面设计师作品集网站

这是一个为平面设计师打造的个人品牌网站，用于展示设计师本人和相关的设计案例详解。网站采用现代化的设计风格，具有良好的用户体验和视觉美感。

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架，提供服务器端渲染和静态生成功能
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，提供类型检查
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Framer Motion](https://www.framer.com/motion/) - React 动画库
- [Anime.js](https://animejs.com/) - JavaScript 动画库
- [Lucide Icons](https://lucide.dev/) - 开源图标库
- [Radix UI](https://www.radix-ui.com/) - 无样式的可访问性组件

## 特点

- 响应式设计 - 自适应手机、平板和桌面设备
- 现代美观的 UI 设计
- 流畅的页面过渡和组件动画
- 深色/浅色模式支持
- SEO 友好
- 作品集详情展示
- 联系表单

## 项目结构

```
jy-design/
├── public/              # 静态资源
│   └── images/          # 图片资源
├── src/                 # 源代码
│   ├── app/             # Next.js App Router 页面
│   │   ├── about/       # 关于页面
│   │   ├── contact/     # 联系页面
│   │   ├── projects/    # 项目列表和详情页
│   │   ├── layout.tsx   # 主布局组件
│   │   └── page.tsx     # 首页
│   ├── components/      # React 组件
│   │   ├── layout/      # 布局组件（导航栏、页脚等）
│   │   └── ui/          # UI 组件（按钮、卡片等）
│   ├── data/            # 数据文件
│   │   ├── profile.ts   # 设计师个人信息
│   │   └── projects.ts  # 项目数据
│   ├── hooks/           # 自定义 React Hooks
│   └── lib/             # 工具函数和共享代码
└── ...                  # 配置文件等
```

## 安装与运行

确保你的系统已安装 [Node.js](https://nodejs.org/) (推荐使用 v18.17.0 或更高版本)。

1. 克隆仓库
```bash
git clone https://github.com/yourusername/jy-design.git
cd jy-design
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署

网站可以部署到任何支持 Next.js 的平台，推荐使用 [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/)。

### 使用 Vercel 部署

```bash
npm install -g vercel
vercel
```

## 自定义

1. 更新个人资料：编辑 `src/data/profile.ts` 文件
2. 添加/修改项目：编辑 `src/data/projects.ts` 文件
3. 更换图片：替换 `public/images/` 目录中的图片
4. 修改样式：编辑 `src/app/globals.css` 和组件中的 Tailwind 类

## 许可

[MIT](LICENSE)
