import zh from '@/dictionaries/zh.json';
import en from '@/dictionaries/en.json';

export type Language = 'zh' | 'en';
export type Dictionary = typeof zh | typeof en;

export function getDictionary(locale: Language = 'zh'): Dictionary {
  return {
    'zh': zh,
    'en': en
  }[locale];
} 