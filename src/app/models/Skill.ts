export enum TechSkillCategory {
  languages,
  interfaces,
  layout,
  testing,
  optimization,
  backend,
  editors,
  design,
  promotion,
}

export interface TechSkill {
  name: string;
  image: string;
  type: TechSkillCategory[];
  knowledgeRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  lastUse?: Date | null | 'now';
  experienceInYears: number;
  priority?: number;
}
