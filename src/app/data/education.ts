import { Course, HigherEducation, Certificate } from '../models/Education';

export const higherEducations: HigherEducation[] = [
  {
    id: 'spbgikit',
    title: {
      ru: 'Режиссёр анимации и компьютерной графики',
      ua: `Режисер анімації та комп'ютерної графіки`,
      en: 'Animation and Computer Graphics Director',
    },
    icon: './assets/images/education/gikit.png',
    place: {
      ru: 'Санкт-Петербургский Государственный Институт Кино и телевидения',
      ua: 'Санкт-Петербурзький Державний Інститут Кіно і телебачення',
      en: 'St. Petersburg State Institute of Film and Television',
    },
    placeLink: 'https://www.gukit.ru/',
    dateFrom: new Date(1409529600000),
    dateTo: new Date(1496275200000),
  },
];

export const certificates: Certificate[] = [
  {
    id: 'angular-vladilen-minin',
    skillIds: ['Angular 2+'],
    title: {
      ru: 'Udemy - Angular 9 от Владилена Минина',
      ua: 'Udemy - Angular 9 від Владилена Мініна',
      en: 'Udemy - Angular 9 by Vladilen Minin',
    },
    icon: './assets/images/education/udemy.png',
    place: {
      ru: 'Udemy',
      ua: 'Udemy',
      en: 'Udemy',
    },
    placeLink: 'https://www.udemy.com',
    link:
      'https://www.udemy.com/certificate/UC-07be31b4-bb3c-40e9-a514-42cd92384849/',
    receivingDate: new Date(1600992000000),
  },
  {
    id: 'flutter-academind',
    skillIds: ['Flutter', 'Dart'],
    title: {
      ru: 'Udemy - Flutter & Dart от Academind',
      ua: 'Udemy - Angular 9 від Academind',
      en: 'Udemy - Angular 9 by Academind',
    },
    icon: './assets/images/education/udemy.png',
    place: {
      ru: 'Udemy',
      ua: 'Udemy',
      en: 'Udemy',
    },
    placeLink: 'https://www.udemy.com',
    link:
      'https://www.udemy.com/certificate/UC-cfdfee18-d4bb-4445-8cc1-f4f7d62bf7eb/',
    receivingDate: new Date(1604448000000),
  },
  {
    id: 'linkedin-javascript',
    skillIds: ['JavaScript'],
    title: {
      ru: 'Значок оценки навыков JavaScript от LinkedIn',
      ua: 'Значок оцінки навичок JavaScript від LinkedIn',
      en: 'LinkedIn JavaScript Skills Badge',
    },
    icon: './assets/images/education/linkedin.png',
    place: {
      ru: 'LinkedIn',
      ua: 'LinkedIn',
      en: 'LinkedIn',
    },
    placeLink: 'https://www.linkedin.com/',
    link:
      'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/JavaScript/report/',
  },
  {
    id: 'linkedin-html5',
    skillIds: ['HTML5'],
    title: {
      ru: 'Значок оценки навыков HTML от LinkedIn',
      ua: 'Значок оцінки навичок HTML від LinkedIn',
      en: 'LinkedIn HTML Skills Badge',
    },
    icon: './assets/images/education/linkedin.png',
    place: {
      ru: 'LinkedIn',
      ua: 'LinkedIn',
      en: 'LinkedIn',
    },
    placeLink: 'https://www.linkedin.com/',
    link:
      'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/HTML/report/',
  },
  {
    id: 'linked-in-css3',
    skillIds: ['CSS3'],
    title: {
      ru: 'Значок оценки навыков CSS3 от LinkedIn',
      ua: 'Значок оцінки навичок CSS3 від LinkedIn',
      en: 'LinkedIn CSS3 Skills Badge',
    },
    icon: './assets/images/education/linkedin.png',
    place: {
      ru: 'LinkedIn',
      ua: 'LinkedIn',
      en: 'LinkedIn',
    },
    placeLink: 'https://www.linkedin.com/',
    link:
      'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/CSS3/report/',
  },
];

export const courses: Course[] = [
  {
    id: 'angular-vladilen-minin',
    skillIds: ['Angular 2+'],
    title: {
      ru: 'Udemy - Angular 9 от Владилена Минина',
      ua: 'Udemy - Angular 9 від Владилена Мініна',
      en: 'Udemy - Angular 9 by Vladilen Minin',
    },
    icon: './assets/images/education/udemy.png',
    place: {
      ru: 'Udemy',
      ua: 'Udemy',
      en: 'Udemy',
    },
    placeLink: 'https://www.udemy.com',
    certificate: certificates[0],
    dateTo: new Date(1600992000000),
  },
  {
    id: 'flutter-academind',
    skillIds: ['Flutter', 'Dart'],
    title: {
      ru: 'Flutter & Dart от Academind',
      ua: 'Flutter & Dart від Academind',
      en: 'Flutter & Dart by Academind',
    },
    icon: './assets/images/education/udemy.png',
    place: {
      ru: 'Udemy',
      ua: 'Udemy',
      en: 'Udemy',
    },
    placeLink: 'https://www.udemy.com',
    certificate: certificates[1],
    dateTo: new Date(1604448000000),
  },
];
