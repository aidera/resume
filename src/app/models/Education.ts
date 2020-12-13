import { LanguageVariation } from './LanguageVariation';

export interface HigherEducation {
  id: string;
  title: LanguageVariation;
  place: LanguageVariation;
  placeLink: string;
  comment?: LanguageVariation;
  icon?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface Course {
  id: string;
  title: LanguageVariation;
  place: LanguageVariation;
  placeLink: string;
  comment?: LanguageVariation;
  icon?: string;
  skillIds?: string[];
  certificate?: Certificate;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface Certificate {
  id: string;
  title: LanguageVariation;
  place: LanguageVariation;
  placeLink: string;
  comment?: LanguageVariation;
  icon?: string;
  skillIds?: string[];
  receivingDate?: Date;
  link?: string;
}
