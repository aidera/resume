import { LanguageVariation } from './LanguageVariation';

export interface Certificate {
  name: LanguageVariation;
  link: string;
  date?: Date;
}
