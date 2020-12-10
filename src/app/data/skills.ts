import { TechSkill, TechSkillCategory } from '../models/Skill';

export const techSkills: TechSkill[] = [
  {
    name: 'TypeScript',
    image: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
    type: [TechSkillCategory.languages],
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1001,
    comment: {
      ru: 'Основной язык программирования',
      ua: 'Основна мова програмування',
      en: 'Main programming language',
    },
  },
  {
    name: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    type: [TechSkillCategory.languages],
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1000,
    comment: {
      ru: 'Основной язык программирования',
      ua: 'Основна мова програмування',
      en: 'Main programming language',
    },
    certificates: [
      {
        name: {
          ru: 'Значок оценки навыков JavaScript от LinkedIn',
          ua: 'Значок оцінки навичок JavaScript від LinkedIn',
          en: 'LinkedIn JavaScript Skills Badge',
        },
        link:
          'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/JavaScript/report/',
      },
    ],
  },
  {
    name: 'Angular 2+',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    type: [TechSkillCategory.interfaces],
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 2000,
    comment: {
      ru: 'Любимый фреймворк',
      ua: 'Улюблений фреймворк',
      en: 'Favorite framework',
    },
    certificates: [
      {
        name: {
          ru: 'Сертификация Angular об окончании курса от Владилена Минина',
          ua: 'Сертифікація Angular про закінчення курсу від Владилена Мініна',
          en: 'Angular Certification on Course Completion from Vladilen Minin',
        },
        link:
          'https://www.udemy.com/certificate/UC-07be31b4-bb3c-40e9-a514-42cd92384849/',
        date: new Date(1600992000000),
      },
    ],
  },
  {
    name: 'Angular Material',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/220px-Google_Material_Design_Logo.svg.png',
    type: [TechSkillCategory.layout],
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1002,
  },
  {
    name: 'RxJs',
    image: 'https://cdn.worldvectorlogo.com/logos/rxjs-1.svg',
    type: [TechSkillCategory.interfaces],
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1999,
  },
  {
    name: 'NgRx',
    image: 'https://ngrx.io/assets/images/badge.svg',
    type: [TechSkillCategory.interfaces],
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1998,
  },
  {
    name: 'Redux',
    image: 'https://ariol.by/ariolby/img/redux-2.svg',
    type: [TechSkillCategory.interfaces],
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1500,
    comment: {
      ru: 'В том числе redux-thunk и redux-saga',
      ua: 'У тому числі redux-thunk і redux-saga',
      en: 'Including redux-thunk and redux-saga',
    },
  },
  {
    name: 'React',
    image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
    type: [TechSkillCategory.interfaces],
    knowledgeRating: 7,
    lastUse: new Date(1606780800000),
    experienceInYears: 1,
    priority: 1501,
    comment: {
      ru: 'В том числе и на TypeScript, с ипользованием хуков',
      ua: 'У тому числі і на TypeScript, з використанням хуков',
      en: 'Including TypeScript, using hooks',
    },
  },
  {
    name: 'Material-UI (React)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/220px-Google_Material_Design_Logo.svg.png',
    type: [TechSkillCategory.layout],
    knowledgeRating: 8,
    lastUse: new Date(1606780800000),
    experienceInYears: 0.5,
    priority: 1002,
  },
  {
    name: 'HTML5',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png',
    type: [TechSkillCategory.layout],
    knowledgeRating: 10,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1003,
    certificates: [
      {
        name: {
          ru: 'Значок оценки навыков HTML от LinkedIn',
          ua: 'Значок оцінки навичок HTML від LinkedIn',
          en: 'LinkedIn HTML Skills Badge',
        },
        link:
          'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/HTML/report/',
      },
    ],
  },
  {
    name: 'CSS3',
    image: 'https://coryrylan.com/assets/images/posts/types/css.svg',
    type: [TechSkillCategory.layout],
    knowledgeRating: 10,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1003,
    certificates: [
      {
        name: {
          ru: 'Значок оценки навыков CSS3 от LinkedIn',
          ua: 'Значок оцінки навичок CSS3 від LinkedIn',
          en: 'LinkedIn CSS3 Skills Badge',
        },
        link:
          'https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/detail/assessments/CSS3/report/',
      },
    ],
  },
  {
    name: 'Node.js',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
    type: [TechSkillCategory.backend, TechSkillCategory.languages],
    knowledgeRating: 5,
    lastUse: new Date(1598918400000),
    experienceInYears: 0.3,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
  },
  {
    name: 'MongoDB',
    image:
      'https://stickerzone.shop/wp-content/uploads/2018/05/Mongo-DB-logo.png',
    type: [TechSkillCategory.backend],
    knowledgeRating: 5,
    lastUse: new Date(1598918400000),
    experienceInYears: 0.3,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
  },
  {
    name: 'MySQL',
    type: [TechSkillCategory.backend],
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/MySQL_logo_logotype.png',
    knowledgeRating: 5,
    lastUse: new Date(1583020800000),
    experienceInYears: 1,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
  },
  {
    name: 'Git',
    type: [TechSkillCategory.optimization],
    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
  },
  {
    name: 'Dart',
    type: [TechSkillCategory.languages],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/768px-Dart-logo.png',
    knowledgeRating: 5,
    lastUse: new Date(1606780800000),
    experienceInYears: 0.2,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
    certificates: [
      {
        name: {
          ru: 'Сертификация Flutter & Dart об окончании курса от Academind',
          ua: 'Сертифікація Flutter & Dart про закінчення курсу від Academind',
          en:
            'Flutter & Dart Certification on Course Completion from Academind',
        },
        link:
          'https://www.udemy.com/certificate/UC-cfdfee18-d4bb-4445-8cc1-f4f7d62bf7eb/',
        date: new Date(1601769600000),
      },
    ],
  },
  {
    name: 'Flutter',
    type: [TechSkillCategory.interfaces],
    image:
      'https://strattonapps.com/wp-content/uploads/2020/02/flutter-logo-5086DD11C5-seeklogo.com_.png',
    knowledgeRating: 5,
    lastUse: new Date(1606780800000),
    experienceInYears: 0.2,
    priority: 950,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
    certificates: [
      {
        name: {
          ru: 'Сертификация Flutter & Dart об окончании курса от Academind',
          ua: 'Сертифікація Flutter & Dart про закінчення курсу від Academind',
          en:
            'Flutter & Dart Certification on Course Completion from Academind',
        },
        link:
          'https://www.udemy.com/certificate/UC-cfdfee18-d4bb-4445-8cc1-f4f7d62bf7eb/',
        date: new Date(1601769600000),
      },
    ],
  },
  {
    name: 'GSAP',
    type: [TechSkillCategory.layout],
    image:
      'https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png',
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
  },
  {
    name: 'Bootstrap',
    type: [TechSkillCategory.layout],
    image: 'https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png',
    knowledgeRating: 6,
    lastUse: new Date(1575158400000),
    experienceInYears: 0.5,
    priority: 900,
  },
  {
    name: 'Karma + Jasmine',
    type: [TechSkillCategory.testing],
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png',
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1000,
  },
  {
    name: 'Protractor',
    type: [TechSkillCategory.testing],
    image: 'https://img.stackshare.io/service/1754/protractor-logo1.png',
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1000,
  },
  {
    name: 'Firebase',
    type: [TechSkillCategory.backend],
    image: 'https://img.icons8.com/color/452/firebase.png',
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 0.5,
    priority: 1005,
  },
  {
    name: 'Pug',
    type: [TechSkillCategory.layout],
    image: 'https://cdn.worldvectorlogo.com/logos/pug.svg',
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1000,
  },
  {
    name: 'Handlebars',
    type: [TechSkillCategory.layout],
    image:
      'https://lh3.googleusercontent.com/proxy/ZgD6gZsVljFuRM-lXLVPk7A6ahbi0ubQUp3YrlZZigjPQ5SQPsuHvnOYQxEk5TaIPNIdT9mixubwhaewCTViumRmcZqXd3-Hg3KokED4L765TN8tn2Fg_xw',
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1000,
  },
  {
    name: 'SCSS/SASS',
    type: [TechSkillCategory.layout],
    image: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
    knowledgeRating: 10,
    lastUse: 'now',
    experienceInYears: 3,
    priority: 1000,
  },
  {
    name: 'Webpack',
    type: [TechSkillCategory.optimization, TechSkillCategory.layout],
    image:
      'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
    knowledgeRating: 5,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Используется в проектах с простым наполнением, где фреймворк будет излишним',
      ua:
        'Використовується в проектах з простим наповненням, де фреймворк буде зайвим',
      en:
        'Used in projects with simple content, where the framework will be redundant',
    },
  },
  {
    name: 'Gulp',
    type: [TechSkillCategory.optimization, TechSkillCategory.layout],
    image: 'https://miro.medium.com/max/1200/1*IGn5E-1wp5mQ2DHoevVCFA.png',
    knowledgeRating: 6,
    lastUse: new Date(1583020800000),
    experienceInYears: 2,
    priority: 1000,
  },
  {
    name: 'ESlint',
    type: [TechSkillCategory.optimization],
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/358/full/eslintlogo.png',
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 2,
    priority: 1000,
  },
  {
    name: 'Prettier',
    type: [TechSkillCategory.optimization],
    image:
      'https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png',
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 2,
    priority: 1000,
  },
  {
    name: 'Husky',
    type: [TechSkillCategory.optimization],
    image:
      'https://media.istockphoto.com/vectors/siberian-husky-dog-vector-id656093788?b=1&k=6&m=656093788&s=612x612&w=0&h=5qW96WDuvL-m2S84TGwDM2ahj-liWYIzTT3HBvVJYvw=',
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
  },
  {
    name: 'Laravel',
    type: [TechSkillCategory.backend],
    image: 'https://cdn.iconscout.com/icon/free/png-256/laravel-226015.png',
    knowledgeRating: 4,
    lastUse: new Date(1583020800000),
    experienceInYears: 0.3,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
  },
  {
    name: 'PHP',
    type: [TechSkillCategory.languages, TechSkillCategory.backend],
    image: 'https://pngimg.com/uploads/php/php_PNG43.png',
    knowledgeRating: 4,
    lastUse: new Date(1583020800000),
    experienceInYears: 0.7,
    priority: 998,
    comment: {
      ru: 'Прошла базу для понимания процессов',
      ua: 'Пройшла базу для розуміння процесів',
      en: 'Passed the base for understanding the processes',
    },
  },
  {
    name: 'Webstorm',
    type: [TechSkillCategory.editors],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/WebStorm.png/1200px-WebStorm.png',
    knowledgeRating: 8,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
  },
  {
    name: 'Android Studio',
    type: [TechSkillCategory.editors],
    image:
      'https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png',
    knowledgeRating: 7,
    lastUse: new Date(1606780800000),
    experienceInYears: 0.2,
    priority: 950,
  },
  {
    name: 'VS Code',
    type: [TechSkillCategory.editors],
    image:
      'https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png',
    knowledgeRating: 7,
    lastUse: new Date(1601589596000),
    experienceInYears: 2,
    priority: 1000,
  },
  {
    name: 'Figma',
    type: [TechSkillCategory.design, TechSkillCategory.layout],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png',
    knowledgeRating: 7,
    lastUse: 'now',
    experienceInYears: 1,
    priority: 1000,
  },
  {
    name: 'Photoshop',
    type: [TechSkillCategory.design],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png',
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 6,
    priority: 1000,
    comment: {
      ru: 'Умею не только использовать элементы макета, но и создавать их',
      ua: 'Вмію не тільки використовувати елементи макета, але і створювати їх',
      en: 'I can not only use layout elements, but also create them',
    },
  },
  {
    name: 'Illustrator',
    type: [TechSkillCategory.design],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png',
    knowledgeRating: 9,
    lastUse: 'now',
    experienceInYears: 5,
    priority: 1000,
    comment: {
      ru: 'Умею не только использовать элементы макета, но и создавать их',
      ua: 'Вмію не тільки використовувати елементи макета, але і створювати їх',
      en: 'I can not only use layout elements, but also create them',
    },
  },
  {
    name: 'Animate',
    type: [TechSkillCategory.design],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png',
    knowledgeRating: 7,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru: 'Владею навыками анимации (в том числе и SVG), благодаря образованию',
      ua: 'Володію навичками анімації (в тому числі і SVG), завдяки освіті',
      en: 'I have skills in animation (including SVG), thanks to education',
    },
  },
  {
    name: 'Google Web Designer',
    type: [TechSkillCategory.design],
    image:
      'https://www.saashub.com/images/app/service_logos/6/20d311e9e5ce/large.png?1527079213',
    knowledgeRating: 6,
    lastUse: new Date(1585778396000),
    experienceInYears: 0.4,
    priority: 1000,
    comment: {
      ru: 'Владею навыками анимации (в том числе и SVG), благодаря образованию',
      ua: 'Володію навичками анімації (в тому числі і SVG), завдяки освіті',
      en: 'I have skills in animation (including SVG), thanks to education',
    },
  },
  {
    name: 'Google Analytics',
    type: [TechSkillCategory.promotion],
    image:
      'https://seeklogo.com/images/G/google-analytics-logo-879A9F173A-seeklogo.com.png',
    knowledgeRating: 10,
    lastUse: new Date(1585778396000),
    experienceInYears: 2,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
    certificates: [
      {
        name: {
          ru: 'Google Analytics Individual Qualification',
          ua: 'Google Analytics Individual Qualification',
          en: 'Google Analytics Individual Qualification',
        },
        link: 'https://skillshop.exceedlms.com/student/award/38333364',
        date: new Date(1570838400000),
      },
      {
        name: {
          ru: 'Google Analytics для начинающих',
          ua: 'Google Analytics для початківців',
          en: 'Google Analytics for Beginners',
        },
        link:
          'https://analytics.google.com/analytics/academy/certificate/eNaK9h8aQ4maqP6FfMyTWg',
        date: new Date(1569628800000),
      },
      {
        name: {
          ru: 'Расширенный курс по Google Аналитике',
          ua: 'Розширений курс по Google Аналітиці',
          en: 'Advanced Google Analytics Course',
        },
        link:
          'https://analytics.google.com/analytics/academy/certificate/S-id5GHvSAGuWEG7X5H21A',
        date: new Date(1570924800000),
      },
    ],
  },
  {
    name: 'Google Tag Manager',
    type: [TechSkillCategory.promotion],
    image:
      'https://seeklogo.com/images/G/google-tag-manager-logo-B742352AFC-seeklogo.com.png',
    knowledgeRating: 9,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
  },
  {
    name: 'Google Search Console',
    type: [TechSkillCategory.promotion],
    image: 'https://cdn.worldvectorlogo.com/logos/google-search-console.svg',
    knowledgeRating: 8,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
  },
  {
    name: 'Yandex Metrika',
    type: [TechSkillCategory.promotion],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbm_ZyowNdrohvHxMRCFwrVietCyyEAEfPQ&usqp=CAU',
    knowledgeRating: 8,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
  },
  {
    name: 'Yandex Webmaster',
    type: [TechSkillCategory.promotion],
    image: 'https://cdn.worldvectorlogo.com/logos/yandex-2.svg',
    knowledgeRating: 8,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
  },
  {
    name: 'Facebook Analytics',
    type: [TechSkillCategory.promotion],
    image:
      'https://play-lh.googleusercontent.com/9dsF8GxuAJgej_jBgau8xrWtDcdrhwtk5LgQphKozrpK7aENfJ424HOzK0seSvLptdCM',
    knowledgeRating: 7,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 1000,
    comment: {
      ru:
        'Работала маркетологом и могу не только подключать, но и использовать',
      ua:
        'Працювала маркетологом і можу не тільки підключати, але і використовувати',
      en: 'I worked as a marketer and can not only connect, but also use',
    },
  },
  {
    name: 'jQuery',
    type: [TechSkillCategory.layout],
    image:
      'https://lh3.googleusercontent.com/proxy/bb2J_grGaT91bvjF88VuyvjgH8-VazApOsD1P_hp7N8EdlwwPO--M4TVPdTXbXwmfMDhUohbnkKQ-X0c13Y',
    knowledgeRating: 8,
    lastUse: new Date(1585778396000),
    experienceInYears: 1,
    priority: 900,
  },
  {
    name: 'Vue',
    type: [TechSkillCategory.interfaces],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    knowledgeRating: 5,
    lastUse: new Date(1593561600000),
    experienceInYears: 0.2,
    priority: 1000,
  },
];
