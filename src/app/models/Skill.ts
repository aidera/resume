import { LanguageVariation } from './LanguageVariation';
import { Certificate } from './Certificate';

export enum TechSkillCategory {
  languages,
  interfaces,
  layout,
  testing,
  optimization,
  backend,
  editors,
  design,
  // other,
}

export interface TechSkill {
  name: string;
  image: string;
  type: TechSkillCategory[];
  knowledgeRating: 0 | 1 | 2 | 3 | 4 | 5;
  lastUse?: Date | null | 'now';
  experienceInYears: number;
  priority?: number;
  comment?: LanguageVariation;
  certificates?: Certificate[];
}

export interface SoftSkill {
  name: LanguageVariation;
  icon: string;
  comment?: LanguageVariation;
  priority?: number;
}
