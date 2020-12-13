import { LanguageVariation } from './LanguageVariation';
import { Certificate } from './Education';

export interface SkillType {
  id: string;
  title: LanguageVariation;
  priority: number;
}

export interface Skill {
  id: string;
  title: LanguageVariation;
  image?: string;
  typeIds: string[];
  knowledgeRating: 0 | 1 | 2 | 3 | 4 | 5;
  lastUse?: Date | 'now';
  experienceInYears?: number;
  priority: number;
  comment?: LanguageVariation;
  certificates?: Certificate[];
}
