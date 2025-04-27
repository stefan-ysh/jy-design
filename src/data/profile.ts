"use client";

import { useLanguage } from "@/components/providers/language-provider";

export interface Skill {
  name: string;
  level: number; // 1-10
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string[];
  photo: string;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  contactEmail: string;
}

// 公共资源路径，这个不需要国际化
const PHOTO_PATH = "/images/designer-portrait.jpg";

// 这个函数用于从字典中获取当前语言的profile信息
export function useProfile(): Profile {
  const { dictionary } = useLanguage();
  
  return {
    name: dictionary.profile.name,
    role: dictionary.profile.role,
    bio: dictionary.profile.bio,
    photo: PHOTO_PATH,
    skills: dictionary.profile.skills,
    experiences: dictionary.profile.experiences,
    education: dictionary.profile.education,
    contactEmail: dictionary.profile.contactEmail
  };
}

// 为了兼容现有代码，提供一个默认导出
// 但推荐使用useProfile钩子来获取国际化的profile数据
// const defaultProfile: Profile = {
//   name: "刘静妍",
//   role: "平面设计师 & 品牌广告设计师",
//   bio: [
//     "我是一名专注于平面设计与品牌广告的设计师，拥有5年专业设计经验。",
//     "我擅长将品牌理念转化为引人注目的视觉广告，帮助客户在竞争激烈的市场中获得更多关注。",
//     "我相信优秀的设计应当既美观又实用，既能吸引眼球又能传达信息。这种理念贯穿我的每一个项目，无论是品牌设计、广告设计还是用户界面设计。",
//     "我热爱与不同行业的客户合作，深入了解他们的业务需求和目标受众，为他们创造既符合品牌调性又能引起共鸣的视觉广告。",
//     "当我不在设计时，你可以发现我在探索艺术展览，摄影捕捉城市风景，或是在咖啡馆里阅读设计类书籍，汲取灵感。"
//   ],
//   photo: PHOTO_PATH,
//   skills: [
//     { name: "品牌设计", level: 9 },
//     { name: "排版设计", level: 8 },
//     { name: "包装设计", level: 9 },
//     { name: "UI/UX设计", level: 7 },
//     { name: "Logo设计", level: 8 },
//     { name: "插画设计", level: 6 },
//     { name: "Adobe Photoshop", level: 9 },
//     { name: "Adobe Illustrator", level: 9 },
//     { name: "Adobe InDesign", level: 8 },
//     { name: "Figma", level: 7 }
//   ],
//   experiences: [
//     {
//       company: "明视觉设计工作室",
//       position: "资深平面设计师",
//       period: "2022年至今",
//       description: "负责高端客户品牌广告设计项目，包括品牌标识、平面广告和市场营销材料。带领小型设计团队，确保项目质量和按时交付。"
//     },
//     {
//       company: "创想广告传媒",
//       position: "平面设计师",
//       period: "2019年 - 2022年",
//       description: "参与广告活动的视觉设计工作，包括平面广告、社交媒体图像和推广印刷材料。与客户直接沟通，理解需求并提供创意广告解决方案。"
//     },
//     {
//       company: "新锐数字营销",
//       position: "初级设计师",
//       period: "2018年 - 2019年",
//       description: "协助设计团队完成各类数字广告设计任务，包括社交媒体广告、网页广告设计和电子邮件营销视觉设计。"
//     }
//   ],
//   education: [
//     {
//       institution: "中央美术学院",
//       degree: "视觉传达设计 - 本科学士",
//       period: "2014年 - 2018年"
//     },
//     {
//       institution: "伦敦艺术大学",
//       degree: "品牌设计与战略 - 交换生项目",
//       period: "2017年春季学期"
//     }
//   ],
//   contactEmail: "contact@jydesign.com"
// };

// export default defaultProfile; 