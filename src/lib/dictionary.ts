import zh from '@/dictionaries/zh.json';
import en from '@/dictionaries/en.json';

export type Language = 'zh' | 'en';

export function getDictionary(locale: Language = 'zh') {
  return {
    'zh': zh,
    'en': en
  }[locale];
} 