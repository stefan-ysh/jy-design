"use client";

import { useLanguage } from "@/components/providers/language-provider";

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  fullDescription: string[];
  imageUrl: string;
  galleryImages: string[];
  tags: string[];
  date: string;
  featured: boolean;
}

// 默认项目数据，用于SSR或fallback
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "品茶与茶品牌视觉设计",
    slug: "tea-brand-design",
    client: "品茶茶叶",
    category: "品牌设计",
    description: "为传统茶叶品牌设计新的视觉形象，结合现代设计语言与传统茶文化元素，打造独特品牌识别系统。",
    fullDescription: [
      "品茶是一家专注于传统中国茶文化的品牌，致力于在保留传统茶文化精髓的同时，向现代年轻消费者推广优质茶叶。",
      "设计挑战在于如何平衡传统与现代，创造出既尊重茶文化传统又具有当代视觉吸引力的品牌形象。",
      "我采用了极简的设计风格，结合传统中国水墨画的意境和笔触，创造出具有东方美学特色的现代品牌视觉系统。",
      "完整的品牌设计包括品牌标识、包装设计、店面视觉系统、营销物料和数字媒体视觉设计。通过这些设计元素的协调统一，帮助品牌建立了清晰一致的品牌形象。"
    ],
    imageUrl: "/images/project1-main.jpg",
    galleryImages: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg",
      "/images/project1-3.jpg",
      "/images/project1-4.jpg"
    ],
    tags: ["品牌设计", "包装设计", "标志设计", "视觉识别系统"],
    date: "2023-05",
    featured: true
  },
  {
    id: "2",
    title: "晨光书店品牌重塑计划",
    slug: "morning-light-bookstore-rebrand",
    client: "晨光书店",
    category: "品牌重塑",
    description: "为有着30年历史的本地书店进行品牌更新，保留品牌核心价值的同时赋予其现代活力。",
    fullDescription: [
      "晨光书店是一家拥有30年历史的社区书店，面临数字化冲击和年轻读者流失的挑战。",
      "品牌重塑的目标是保留书店的历史传承和社区情感连接，同时为其注入现代活力，吸引新一代读者。",
      "设计过程中，我深入研究了书店的历史、价值观和目标受众，确定了'知识之光，社区之家'的品牌核心理念。",
      "新的视觉系统采用了温暖的色调和简洁的图形语言，创造出既熟悉又焕然一新的视觉体验。重新设计的空间布局和导视系统提升了顾客体验，增加了书店的社交属性。",
      "项目成果包括全新的品牌标识、店面设计、宣传材料和社交媒体视觉风格，帮助书店成功吸引了更多年轻读者，同时保持了老顾客的忠诚度。"
    ],
    imageUrl: "/images/project2-main.jpg",
    galleryImages: [
      "/images/project2-1.jpg",
      "/images/project2-2.jpg",
      "/images/project2-3.jpg",
      "/images/project2-4.jpg"
    ],
    tags: ["品牌重塑", "标志设计", "空间设计", "视觉系统"],
    date: "2023-08",
    featured: true
  },
  {
    id: "3",
    title: "自然之音音乐节视觉设计",
    slug: "nature-sound-music-festival",
    client: "自然之音音乐节组委会",
    category: "活动视觉设计",
    description: "为生态主题音乐节设计完整的视觉识别系统和宣传材料，融合音乐与自然元素。",
    fullDescription: [
      "自然之音是一个以环保和可持续发展为主题的年度音乐节，旨在通过音乐传递环保理念。",
      "设计需要体现音乐节的生态理念，同时具有艺术感和吸引力，能够有效吸引目标观众。",
      "我创造了一套基于自然元素（水、风、土、火）的视觉语言，通过流动的线条和有机形态表现音乐的律动与自然的和谐。",
      "色彩选择包括大自然的绿色、蓝色和土黄色，辅以活力的橙色作为点缀，创造出生态又不失活力的视觉效果。",
      "完整的设计套件包括海报、宣传册、节目单、网站设计、舞台背景、导视系统和周边产品设计，为音乐节提供了一致且具有辨识度的视觉体验。"
    ],
    imageUrl: "/images/project3-main.jpg",
    galleryImages: [
      "/images/project3-1.jpg",
      "/images/project3-2.jpg",
      "/images/project3-3.jpg",
      "/images/project3-4.jpg"
    ],
    tags: ["活动设计", "海报设计", "品牌设计", "环保主题"],
    date: "2023-10",
    featured: true
  },
  {
    id: "4",
    title: "城市轻食品牌包装设计",
    slug: "urban-light-food-packaging",
    client: "轻盈生活",
    category: "包装设计",
    description: "为城市健康轻食品牌设计简约时尚的包装系统，突出产品的健康、便捷特性。",
    fullDescription: [
      "轻盈生活是一个专注于城市忙碌白领的健康轻食品牌，提供营养均衡、方便携带的食品选择。",
      "包装设计需要传达产品的健康属性、优质原料和便携特性，同时符合目标受众的审美喜好。",
      "设计采用了简约的几何图形和明亮的色彩，创造出清新现代的视觉效果。包装上清晰的信息层级让消费者可以快速识别产品特性和营养成分。",
      "为了强调环保理念，包装材料选择了可回收纸质和植物基塑料，设计上也融入了环保元素。",
      "包装系统包括沙拉盒、三明治包装、饮品瓶和零食包，形成了统一而有变化的产品线视觉形象。附加的手提袋和餐具设计完善了整体用餐体验。",
      "通过这一包装系统，品牌成功在竞争激烈的市场中建立了独特的视觉识别，并有效传达了健康、便捷的品牌价值。"
    ],
    imageUrl: "/images/project4-main.jpg",
    galleryImages: [
      "/images/project4-1.jpg",
      "/images/project4-2.jpg",
      "/images/project4-3.jpg",
      "/images/project4-4.jpg"
    ],
    tags: ["包装设计", "品牌设计", "产品设计", "可持续设计"],
    date: "2023-12",
    featured: false
  },
  {
    id: "5",
    title: "城市漫步摄影展视觉设计",
    slug: "urban-walk-photography-exhibition",
    client: "城市艺术协会",
    category: "展览设计",
    description: "为城市主题摄影展设计展览视觉系统，包括海报、展览导览和空间布置等。",
    fullDescription: [
      "城市漫步是一个探索现代都市生活与人文景观的摄影展，展出多位摄影师捕捉的城市瞬间和故事。",
      "设计需要创造一个能够突出摄影作品、提升观展体验的视觉环境，同时传达展览的城市探索主题。",
      "我设计了以城市线条和框架为灵感的视觉系统，通过几何形状和建筑元素构建出城市感。色彩选择上保持克制，主要使用黑白灰调，辅以点缀色，让摄影作品成为视觉焦点。",
      "展览空间规划充分考虑了观众流动和作品叙事顺序，创造出一条城市'漫步'路线，让观众如同在城市中探索一般体验展览。",
      "完整的设计包括展览主视觉、宣传海报、邀请函、展览导览、空间布置、作品标签和周边产品。通过统一的设计语言，为观众提供了沉浸式的展览体验。"
    ],
    imageUrl: "/images/project5-main.jpg",
    galleryImages: [
      "/images/project5-1.jpg",
      "/images/project5-2.jpg",
      "/images/project5-3.jpg",
      "/images/project5-4.jpg"
    ],
    tags: ["展览设计", "海报设计", "空间设计", "导视系统"],
    date: "2024-02",
    featured: false
  },
];

// 添加缓存数据，避免不必要的重复创建
let cachedProjects: Project[] | null = null;
let lastLanguage: string | null = null;

// 这个钩子函数用于获取当前语言的项目数据
export function useProjects() {
  const { dictionary, language } = useLanguage();
  
  // 如果语言没变且缓存存在，直接返回缓存
  if (cachedProjects && lastLanguage === language) {
    return cachedProjects;
  }
  
  // 否则从字典创建新的项目数组
  const projects = dictionary.projectData?.projects || defaultProjects;
  
  // 更新缓存
  cachedProjects = projects;
  lastLanguage = language;
  
  return projects;
}

// 确保返回的是数组
export function getAllProjects(): Project[] {
  if (typeof window === 'undefined') {
    return defaultProjects; // 服务器端渲染时使用默认数据
  }
  
  // 不在这里调用 React Hook
  return defaultProjects;
}

// 创建一个 React 组件来使用这些数据
export function useAllProjects(): Project[] {
  const projects = useProjects();
  
  // 确保返回值是数组类型
  if (Array.isArray(projects)) {
    return projects;
  } else {
    console.warn('Projects data is not an array, using default projects instead');
    return defaultProjects;
  }
}

export function getFeaturedProjects(): Project[] {
  const projects = getAllProjects();
  // 确保是数组类型再使用filter
  return Array.isArray(projects) 
    ? projects.filter((project: Project) => project.featured)
    : [];
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  // 确保是数组类型再使用find
  return Array.isArray(projects)
    ? projects.find((project: Project) => project.slug === slug)
    : undefined;
}

export function getRelatedProjects(currentSlug: string, count = 4): Project[] {
  const projects = getAllProjects();
  const currentProject = getProjectBySlug(currentSlug);
  
  if (!currentProject || !Array.isArray(projects)) {
    return [];
  }
  
  return projects
    .filter((project: Project) => project.slug !== currentSlug && project.category === currentProject.category)
    .slice(0, count);
} 