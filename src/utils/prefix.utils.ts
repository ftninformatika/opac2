import {Coder, PrefixModel} from '../models/prefix.model';

// TODO: Razmotriti ima li uopste smisla da se sifarnici vuku sa bekenda, obzirom da ih ima samo 5
export class PrefixUtils {

  static field100e: Coder[] =
    [
    {
      code: 'a',
      name: 'дечја, општа'
    },
    {
      code: 'b',
      name: 'предшколска, 0-5 година'
    },
    {
      code: 'c',
      name: 'школска, 5-10 година'
    },
    {
      code: 'd',
      name: 'дечја, 9-14 година'
    },
    {
      code: 'e',
      name: 'омладинска, 14-20 година'
    },
    {
      code: 'k',
      name: 'за одрасле, озбиљна'
    },
    {
      code: 'm',
      name: 'за одрасле, општа'
    },
    {
      code: 'u',
      name: 'непознато'
    }
  ];

  static field100e_lat: Coder[] =
    [
      {
        code: 'a',
        name: 'dečja, opšta'
      },
      {
        code: 'b',
        name: 'predškolska, 0-5 godina'
      },
      {
        code: 'c',
        name: 'školska, 5-10 godina'
      },
      {
        code: 'd',
        name: 'dečja, 9-14 godina'
      },
      {
        code: 'e',
        name: 'omladinska, 14-20 godina'
      },
      {
        code: 'k',
        name: 'za odrasle, ozbiljna'
      },
      {
        code: 'm',
        name: 'za odrasle, opšta'
      },
      {
        code: 'u',
        name: 'nepoznato'
      }
    ];

  static field100e_en: Coder[] =
    [
      {
        code: 'a',
        name: 'children, general'
      },
      {
        code: 'b',
        name: 'preschool, 0-5 years'
      },
      {
        code: 'c',
        name: 'school age, 5-10 years'
      },
      {
        code: 'd',
        name: 'children, 9-14 years'
      },
      {
        code: 'e',
        name: 'youth, 14-20 years'
      },
      {
        code: 'k',
        name: 'for adults, serious'
      },
      {
        code: 'm',
        name: 'adult, general'
      },
      {
        code: 'u',
        name: 'unknown'
      }
    ];

  static _coderLA: Coder[] =
    [
      {
        code: 'srp',
        name: 'Српски'
      },
      {
        code: 'scc',
        name: 'Српски - ћирилица'
      },
      {
        code: 'scr',
        name: 'Српски - латиница'
      },
      {
        code: 'eng',
        name: 'Енглески'
      },
      {
        code: 'ger',
        name: 'Немачки'
      },
      {
        code: 'ita',
        name: 'Италијански'
      },
      {
        code: 'spa',
        name: 'Шпански / Кастиљански'
      },
      {
        code: 'hun',
        name: 'Мађарски'
      },
      {
        code: 'slo',
        name: 'Словачки'
      },
      {
        code: 'slv',
        name: 'Словеначки'
      },
      {
        code: 'bul',
        name: 'Бугарски'
      },
      {
        code: 'scn',
        name: 'Сицилијански'
      },
      {
        code: 'sco',
        name: 'Шкотски'
      },
      {
        code: 'aar',
        name: 'Афар'
      },
      {
        code: 'abk',
        name: 'Абхаски'
      },
      {
        code: 'ace',
        name: 'Акинезе'
      },
      {
        code: 'ach',
        name: 'Ачоли'
      },
      {
        code: 'ada',
        name: 'Адангме'
      },
      {
        code: 'ady',
        name: 'Адyгхе'
      },
      {
        code: 'afa',
        name: 'Афроазијски (остали)'
      },
      {
        code: 'afh',
        name: 'Африхили'
      },
      {
        code: 'afr',
        name: 'Африкаанс'
      },
      {
        code: 'ain',
        name: 'Аину'
      },
      {
        code: 'ajm',
        name: 'Аљамиа'
      },
      {
        code: 'aka',
        name: 'Акан'
      },
      {
        code: 'akk',
        name: 'Акадски'
      },
      {
        code: 'alb',
        name: 'Албански'
      },
      {
        code: 'ale',
        name: 'Алеутски'
      },
      {
        code: 'alg',
        name: 'Алгонкински језици'
      },
      {
        code: 'alt',
        name: 'Алтаи'
      },
      {
        code: 'amh',
        name: 'Амхарски'
      },
      {
        code: 'ang',
        name: 'Англосаксонски (450-1100)'
      },
      {
        code: 'anp',
        name: 'Ангика'
      },
      {
        code: 'apa',
        name: 'Апашки'
      },
      {
        code: 'ara',
        name: 'Арапски'
      },
      {
        code: 'arc',
        name: 'Арамејски'
      },
      {
        code: 'arg',
        name: 'Арагонски'
      },
      {
        code: 'arm',
        name: 'Јерменски'
      },
      {
        code: 'arn',
        name: 'Араукански'
      },
      {
        code: 'arp',
        name: 'Арапахо'
      },
      {
        code: 'art',
        name: 'Вештачки (други)'
      },
      {
        code: 'arw',
        name: 'Аравак'
      },
      {
        code: 'asm',
        name: 'Асамски'
      },
      {
        code: 'ast',
        name: 'Астуриан; Бабле'
      },
      {
        code: 'ath',
        name: 'Атхапаскански језици'
      },
      {
        code: 'aus',
        name: 'Аустралијски језици'
      },
      {
        code: 'ava',
        name: 'Аварски'
      },
      {
        code: 'ave',
        name: 'Авестички'
      },
      {
        code: 'awa',
        name: 'Авадхи'
      },
      {
        code: 'aym',
        name: 'Ајмара'
      },
      {
        code: 'aze',
        name: 'Азербејџански'
      },
      {
        code: 'bad',
        name: 'Банда'
      },
      {
        code: 'bai',
        name: 'Бамилеке лангуагес'
      },
      {
        code: 'bak',
        name: 'Башкирски'
      },
      {
        code: 'bal',
        name: 'Балучи'
      },
      {
        code: 'bam',
        name: 'Бамбара'
      },
      {
        code: 'ban',
        name: 'Бали'
      },
      {
        code: 'baq',
        name: 'Баскијски'
      },
      {
        code: 'bas',
        name: 'Баса'
      },
      {
        code: 'bat',
        name: 'Балтички (остали)'
      },
      {
        code: 'bej',
        name: 'Беџа'
      },
      {
        code: 'bel',
        name: 'Белоруски'
      },
      {
        code: 'bem',
        name: 'Бемба'
      },
      {
        code: 'ben',
        name: 'Бенгалски'
      },
      {
        code: 'ber',
        name: 'Берберски језици'
      },
      {
        code: 'bho',
        name: 'Бхоџпури'
      },
      {
        code: 'bih',
        name: 'Бихари'
      },
      {
        code: 'bik',
        name: 'Бикол'
      },
      {
        code: 'bin',
        name: 'Бини'
      },
      {
        code: 'bis',
        name: 'Бислама'
      },
      {
        code: 'bla',
        name: 'Сиксика / Блацкфоот'
      },
      {
        code: 'bnt',
        name: 'Банту (остали)'
      },
      {
        code: 'bos',
        name: 'Босански (Бошњачки)'
      },
      {
        code: 'bra',
        name: 'Браџ'
      },
      {
        code: 'bre',
        name: 'Бретонски'
      },
      {
        code: 'btk',
        name: 'Батак (Индонезија)'
      },
      {
        code: 'bua',
        name: 'Буриат'
      },
      {
        code: 'bug',
        name: 'Буги'
      },
      {
        code: 'bur',
        name: 'Бурмански'
      },
      {
        code: 'byn',
        name: 'Блин / Билин'
      },
      {
        code: 'cad',
        name: 'Кадо'
      },
      {
        code: 'cai',
        name: 'Централноамерички индијански (остали)'
      },
      {
        code: 'cam',
        name: 'Кмерски'
      },
      {
        code: 'car',
        name: 'Карипски'
      },
      {
        code: 'cat',
        name: 'Каталански'
      },
      {
        code: 'cau',
        name: 'Кавкаски (остали)'
      },
      {
        code: 'ceb',
        name: 'Кебуански'
      },
      {
        code: 'cha',
        name: 'Цхаморро'
      },
      {
        code: 'chb',
        name: 'Чибча'
      },
      {
        code: 'che',
        name: 'Чеченски'
      },
      {
        code: 'chg',
        name: 'Чагатаи'
      },
      {
        code: 'chi',
        name: 'Кинески'
      },
      {
        code: 'chk',
        name: 'Цхуукесе'
      },
      {
        code: 'chm',
        name: 'Мари'
      },
      {
        code: 'chn',
        name: 'Чинук жаргон'
      },
      {
        code: 'cho',
        name: 'Цхоцктаw'
      },
      {
        code: 'chp',
        name: 'Цхипеwyан'
      },
      {
        code: 'chr',
        name: 'Чероки'
      },
      {
        code: 'chu',
        name: 'Црквенословенски'
      },
      {
        code: 'chv',
        name: 'Чувашки'
      },
      {
        code: 'chy',
        name: 'Чејенски'
      },
      {
        code: 'cmc',
        name: 'Цхамиц лангуагес'
      },
      {
        code: 'cop',
        name: 'Коптски'
      },
      {
        code: 'cor',
        name: 'Цорнисх'
      },
      {
        code: 'cos',
        name: 'Корзикански'
      },
      {
        code: 'cpe',
        name: 'Креолски и пидгин, на основи енглеског (остали)'
      },
      {
        code: 'cpf',
        name: 'Креолски и пидгин, на основи француског (остали)'
      },
      {
        code: 'cpp',
        name: 'Креолски и пидгин, на основи португалског (остали)'
      },
      {
        code: 'cre',
        name: 'Кри'
      },
      {
        code: 'crh',
        name: 'Кримски татарски / кримски турски'
      },
      {
        code: 'crp',
        name: 'Креолски и пидгин (остали)'
      },
      {
        code: 'csb',
        name: 'Касхубиан'
      },
      {
        code: 'cus',
        name: 'Кушитски (остали)'
      },
      {
        code: 'cze',
        name: 'Чешки'
      },
      {
        code: 'dak',
        name: 'Дакота'
      },
      {
        code: 'dan',
        name: 'Дански'
      },
      {
        code: 'del',
        name: 'Делаwаре'
      },
      {
        code: 'den',
        name: 'Славе (Атхапасцан)'
      },
      {
        code: 'dgr',
        name: 'Догриб'
      },
      {
        code: 'din',
        name: 'Динка'
      },
      {
        code: 'div',
        name: 'Дивехи'
      },
      {
        code: 'doi',
        name: 'Догри'
      },
      {
        code: 'dra',
        name: 'Дравидски (остали)'
      },
      {
        code: 'dsb',
        name: 'Доњи Лужичко-српски - Лоwер Сорбиан'
      },
      {
        code: 'dua',
        name: 'Дуала'
      },
      {
        code: 'dum',
        name: 'Средњохоландски (1050-1350)'
      },
      {
        code: 'dut',
        name: 'Холандски, Фламански'
      },
      {
        code: 'dyu',
        name: 'Дyула'
      },
      {
        code: 'dzo',
        name: 'Дзонгкха'
      },
      {
        code: 'efi',
        name: 'Ефик'
      },
      {
        code: 'egy',
        name: 'Египатски (стари)'
      },
      {
        code: 'eka',
        name: 'Екајук'
      },
      {
        code: 'elx',
        name: 'Еламитски'
      },
      {
        code: 'enm',
        name: 'Средњоенглески (1100-1500)'
      },
      {
        code: 'epo',
        name: 'Есперанто'
      },
      {
        code: 'esk',
        name: 'Ескимски'
      },
      {
        code: 'est',
        name: 'Естонски'
      },
      {
        code: 'eth',
        name: 'Етиопски'
      },
      {
        code: 'ewe',
        name: 'Еwе'
      },
      {
        code: 'ewo',
        name: 'Еwондо'
      },
      {
        code: 'fan',
        name: 'Фанг'
      },
      {
        code: 'far',
        name: 'Фароесе'
      },
      {
        code: 'fat',
        name: 'Фанти'
      },
      {
        code: 'fij',
        name: 'Фијиан'
      },
      {
        code: 'fil',
        name: 'Филипински'
      },
      {
        code: 'fin',
        name: 'Фински'
      },
      {
        code: 'fiu',
        name: 'Угрофински (остали)'
      },
      {
        code: 'fon',
        name: 'Фон'
      },
      {
        code: 'fre',
        name: 'Француски'
      },
      {
        code: 'frm',
        name: 'Средњофранцуски (1400-1600)'
      },
      {
        code: 'fro',
        name: 'Старофранцуски (842-1400)'
      },
      {
        code: 'fry',
        name: 'Фризијски'
      },
      {
        code: 'frr',
        name: 'Нортх Фризиан'
      },
      {
        code: 'frs',
        name: 'Еаст Фризиан'
      },
      {
        code: 'ful',
        name: 'Фулах'
      },
      {
        code: 'fur',
        name: 'Фриулиан'
      },
      {
        code: 'gaa',
        name: 'Га'
      },
      {
        code: 'gal',
        name: 'Галла'
      },
      {
        code: 'gay',
        name: 'Гаyо'
      },
      {
        code: 'gba',
        name: 'Гбаyа'
      },
      {
        code: 'gem',
        name: 'Германски (остали)'
      },
      {
        code: 'geo',
        name: 'Грузијски'
      },
      {
        code: 'gez',
        name: 'Геез'
      },
      {
        code: 'gil',
        name: 'Гилбертесе'
      },
      {
        code: 'gla',
        name: 'Гелик / Å котски гелик'
      },
      {
        code: 'gle',
        name: 'Ирски'
      },
      {
        code: 'glg',
        name: 'Галлеган'
      },
      {
        code: 'glv',
        name: 'Манx'
      },
      {
        code: 'gmh',
        name: 'Средњовисоконемачки (1050-1500)'
      },
      {
        code: 'goh',
        name: 'Старовисоконемачки (750-1050)'
      },
      {
        code: 'gon',
        name: 'Гондски'
      },
      {
        code: 'gor',
        name: 'Горонтало'
      },
      {
        code: 'got',
        name: 'Готски'
      },
      {
        code: 'grb',
        name: 'Гребо'
      },
      {
        code: 'grc',
        name: 'Старогрчки (-1453)'
      },
      {
        code: 'gre',
        name: 'Грчки (1453-)'
      },
      {
        code: 'gsw',
        name: 'Сwисс Герман'
      },
      {
        code: 'gua',
        name: 'Гуарани'
      },
      {
        code: 'guj',
        name: 'Гуџарати'
      },
      {
        code: 'gwi',
        name: 'Гwицх'
      },
      {
        code: 'hai',
        name: 'Хаида'
      },
      {
        code: 'hat',
        name: 'Хаитиан / Хаитиан Цреоле'
      },
      {
        code: 'hau',
        name: 'Хауса'
      },
      {
        code: 'haw',
        name: 'Хавајски'
      },
      {
        code: 'heb',
        name: 'Хебрејски'
      },
      {
        code: 'her',
        name: 'Хереро'
      },
      {
        code: 'hil',
        name: 'Хилигаyнон'
      },
      {
        code: 'him',
        name: 'Химачали'
      },
      {
        code: 'hin',
        name: 'Хинди'
      },
      {
        code: 'hit',
        name: 'Хиттите'
      },
      {
        code: 'hmn',
        name: 'Хмонг'
      },
      {
        code: 'hmo',
        name: 'Хири моту'
      },
      {
        code: 'hrv',
        name: 'Хрватски'
      },
      {
        code: 'hsb',
        name: 'Горњи Лужичко-српски (Уппер Сорбиан)'
      },
      {
        code: 'hup',
        name: 'Хупа'
      },
      {
        code: 'iba',
        name: 'Ибан'
      },
      {
        code: 'ibo',
        name: 'Игбо'
      },
      {
        code: 'ice',
        name: 'Исландски'
      },
      {
        code: 'ido',
        name: 'Идо'
      },
      {
        code: 'iii',
        name: 'Сицхуан Yи'
      },
      {
        code: 'ijo',
        name: 'Ијо'
      },
      {
        code: 'iku',
        name: 'Инуктитут'
      },
      {
        code: 'ile',
        name: 'Интерлингуе'
      },
      {
        code: 'ilo',
        name: 'Илоко'
      },
      {
        code: 'ina',
        name: 'Интерлингуа (Интернатионал Ауxилиарy Лангуаге Ассоциатион)'
      },
      {
        code: 'inc',
        name: 'Индијски (остали)'
      },
      {
        code: 'ind',
        name: 'Индонезијски'
      },
      {
        code: 'ine',
        name: 'Индоевропски (остали)'
      },
      {
        code: 'inh',
        name: 'Ингусх'
      },
      {
        code: 'ipk',
        name: 'Инупиак'
      },
      {
        code: 'ira',
        name: 'Ирански (остали)'
      },
      {
        code: 'iro',
        name: 'Ирокески језици'
      },
      {
        code: 'jav',
        name: 'Јавански'
      },
      {
        code: 'jbo',
        name: 'Лојбан'
      },
      {
        code: 'jpn',
        name: 'Јапански'
      },
      {
        code: 'jpr',
        name: 'Јудео-Персиан'
      },
      {
        code: 'jrb',
        name: 'Јудео-Арабиц'
      },
      {
        code: 'kaa',
        name: 'Кара-Калпак'
      },
      {
        code: 'kab',
        name: 'Кабилски'
      },
      {
        code: 'kac',
        name: 'Кацхин'
      },
      {
        code: 'kal',
        name: 'Калааллисут / Греенландиц'
      },
      {
        code: 'kam',
        name: 'Камба'
      },
      {
        code: 'kan',
        name: 'Каннада'
      },
      {
        code: 'kar',
        name: 'Карен'
      },
      {
        code: 'kas',
        name: 'Кашмирски'
      },
      {
        code: 'kau',
        name: 'Канури'
      },
      {
        code: 'kaw',
        name: 'Кави'
      },
      {
        code: 'kaz',
        name: 'Казахски'
      },
      {
        code: 'kbd',
        name: 'Кабардиан'
      },
      {
        code: 'kha',
        name: 'Кхаси'
      },
      {
        code: 'khi',
        name: 'Кхоисан (отхер)'
      },
      {
        code: 'khm',
        name: 'Кмерски'
      },
      {
        code: 'kho',
        name: 'Кхотанесе'
      },
      {
        code: 'kik',
        name: 'Кикуyу'
      },
      {
        code: 'kin',
        name: 'Кинyарwанда'
      },
      {
        code: 'kir',
        name: 'Киргиски'
      },
      {
        code: 'kmb',
        name: 'Кимбунду'
      },
      {
        code: 'kok',
        name: 'Конкани'
      },
      {
        code: 'kom',
        name: 'Коми'
      },
      {
        code: 'kon',
        name: 'Конго'
      },
      {
        code: 'kor',
        name: 'Корејски'
      },
      {
        code: 'kos',
        name: 'Косраеан'
      },
      {
        code: 'kpe',
        name: 'Кпелле'
      },
      {
        code: 'krc',
        name: 'Карацхаy-Балкар'
      },
      {
        code: 'krl',
        name: 'Карелиан'
      },
      {
        code: 'kro',
        name: 'Кру'
      },
      {
        code: 'kru',
        name: 'Курукх'
      },
      {
        code: 'kua',
        name: 'Куанyама / Кwанyама'
      },
      {
        code: 'kur',
        name: 'Курдски'
      },
      {
        code: 'kus',
        name: 'Кусаи'
      },
      {
        code: 'kut',
        name: 'Кутенаи'
      },
      {
        code: 'lad',
        name: 'Ладино'
      },
      {
        code: 'lah',
        name: 'Лахнда'
      },
      {
        code: 'lam',
        name: 'Ламба'
      },
      {
        code: 'lan',
        name: 'Лангдок (после 1500)'
      },
      {
        code: 'lao',
        name: 'Лао'
      },
      {
        code: 'lap',
        name: 'Лапонски'
      },
      {
        code: 'lat',
        name: 'Латински'
      },
      {
        code: 'lav',
        name: 'Летонски'
      },
      {
        code: 'lez',
        name: 'Лезгхиан'
      },
      {
        code: 'lim',
        name: 'Лимбурган / Лимбургисх'
      },
      {
        code: 'lin',
        name: 'Лингала'
      },
      {
        code: 'lit',
        name: 'Литвански'
      },
      {
        code: 'lol',
        name: 'Монго'
      },
      {
        code: 'loz',
        name: 'Лози'
      },
      {
        code: 'ltz',
        name: 'Луxембуршки'
      },
      {
        code: 'lua',
        name: 'Луба-Лулуа'
      },
      {
        code: 'lub',
        name: 'Луба-Катанга'
      },
      {
        code: 'lug',
        name: 'Ганда'
      },
      {
        code: 'lui',
        name: 'Луисено'
      },
      {
        code: 'lun',
        name: 'Лунда'
      },
      {
        code: 'luo',
        name: 'Луо (Кенија и Танзанија)'
      },
      {
        code: 'lus',
        name: 'Лусхаи'
      },
      {
        code: 'mac',
        name: 'Македонски'
      },
      {
        code: 'mad',
        name: 'Мадурски'
      },
      {
        code: 'mag',
        name: 'Магахи'
      },
      {
        code: 'mah',
        name: 'Маршалски'
      },
      {
        code: 'mai',
        name: 'Маитхили'
      },
      {
        code: 'mak',
        name: 'Макасар'
      },
      {
        code: 'mal',
        name: 'Малајаламски'
      },
      {
        code: 'man',
        name: 'Мандинго'
      },
      {
        code: 'mao',
        name: 'Маорски'
      },
      {
        code: 'map',
        name: 'Аустронезијски (остали)'
      },
      {
        code: 'mar',
        name: 'Маратхи'
      },
      {
        code: 'mas',
        name: 'Масаи'
      },
      {
        code: 'max',
        name: 'Мански'
      },
      {
        code: 'may',
        name: 'Малајски'
      },
      {
        code: 'mdf',
        name: 'Моксха'
      },
      {
        code: 'mdr',
        name: 'Мандар'
      },
      {
        code: 'men',
        name: 'Менде'
      },
      {
        code: 'mga',
        name: 'Средњоирски (900-1200)'
      },
      {
        code: 'mic',
        name: 'Микмак'
      },
      {
        code: 'min',
        name: 'Мингангкабау'
      },
      {
        code: 'mis',
        name: 'Остали'
      },
      {
        code: 'mkh',
        name: 'Мон-Кхмер (остали)'
      },
      {
        code: 'mla',
        name: 'Малагашки'
      },
      {
        code: 'mlt',
        name: 'Малтешки'
      },
      {
        code: 'mnc',
        name: 'Манчу'
      },
      {
        code: 'mni',
        name: 'Манипури'
      },
      {
        code: 'mno',
        name: 'Манобо језици'
      },
      {
        code: 'moh',
        name: 'Мохаwк'
      },
      {
        code: 'mon',
        name: 'Монголски'
      },
      {
        code: 'mos',
        name: 'Моси'
      },
      {
        code: 'mul',
        name: 'Вишејезични'
      },
      {
        code: 'mun',
        name: 'Мунда'
      },
      {
        code: 'mus',
        name: 'Цреек / Мускогее'
      },
      {
        code: 'mwl',
        name: 'Мирандесе'
      },
      {
        code: 'mwr',
        name: 'Марвари'
      },
      {
        code: 'myn',
        name: 'Маја језици'
      },
      {
        code: 'myv',
        name: 'Ерзyа'
      },
      {
        code: 'nah',
        name: 'Нахуатл'
      },
      {
        code: 'nai',
        name: 'Северноамерички индијански (остали)'
      },
      {
        code: 'nap',
        name: 'Наполитан'
      },
      {
        code: 'nau',
        name: 'Науру'
      },
      {
        code: 'nav',
        name: 'Навахо'
      },
      {
        code: 'nbl',
        name: 'Ндебеле, јужни'
      },
      {
        code: 'nde',
        name: 'Ндебеле, северни'
      },
      {
        code: 'ndo',
        name: 'Ндонга'
      },
      {
        code: 'nds',
        name: 'Нисконемачки / Нискосаксонски'
      },
      {
        code: 'nep',
        name: 'Непалски'
      },
      {
        code: 'new',
        name: 'Неwари / Непал Бхаса'
      },
      {
        code: 'nia',
        name: 'Ниас'
      },
      {
        code: 'nic',
        name: 'Нигерско-кордофански (остали)'
      },
      {
        code: 'niu',
        name: 'Ниуеан'
      },
      {
        code: 'nno',
        name: 'Норwегиан Нyнорск'
      },
      {
        code: 'nob',
        name: 'Норwегиан Бокмал'
      },
      {
        code: 'nog',
        name: 'Ногаи'
      },
      {
        code: 'non',
        name: 'Норсе, Олд'
      },
      {
        code: 'nor',
        name: 'Норвешки'
      },
      {
        code: 'nso',
        name: 'Северни Сотхо / Педи / Сепеди'
      },
      {
        code: 'nqo',
        name: 'Н Ко'
      },
      {
        code: 'nub',
        name: 'Нубијски језици'
      },
      {
        code: 'nwc',
        name: 'Цлассицал Неwари / Олд Неwари / Цлассицал Непал Бхаса'
      },
      {
        code: 'nya',
        name: 'Цхицхеwа / Цхеwа / Нyања'
      },
      {
        code: 'nym',
        name: 'Нyамwези'
      },
      {
        code: 'nyn',
        name: 'Нyанколе'
      },
      {
        code: 'nyo',
        name: 'Нyоро'
      },
      {
        code: 'nzi',
        name: 'Нзима'
      },
      {
        code: 'oci',
        name: 'Оццитан / Провансалски (после 1500)'
      },
      {
        code: 'oji',
        name: 'Ојибwа'
      },
      {
        code: 'ori',
        name: 'Ориyа'
      },
      {
        code: 'orm',
        name: 'Оромо'
      },
      {
        code: 'osa',
        name: 'Осаге'
      },
      {
        code: 'oss',
        name: 'Осетски'
      },
      {
        code: 'ota',
        name: 'Отомански турски (1500-1928)'
      },
      {
        code: 'oto',
        name: 'Отомски језици'
      },
      {
        code: 'paa',
        name: 'Папуански (остали)'
      },
      {
        code: 'pag',
        name: 'Пангасинан'
      },
      {
        code: 'pal',
        name: 'Пахлави'
      },
      {
        code: 'pam',
        name: 'Пампанга'
      },
      {
        code: 'pan',
        name: 'Пањаби / Пуњаби'
      },
      {
        code: 'pap',
        name: 'Папиаменто'
      },
      {
        code: 'pau',
        name: 'Палауан'
      },
      {
        code: 'peo',
        name: 'Староперсијски (600пне-400не)'
      },
      {
        code: 'per',
        name: 'Персијски'
      },
      {
        code: 'phi',
        name: 'Филипински (остали)'
      },
      {
        code: 'phn',
        name: 'Феничански'
      },
      {
        code: 'pli',
        name: 'Пали'
      },
      {
        code: 'pol',
        name: 'Пољски'
      },
      {
        code: 'pon',
        name: 'Похнпеиан'
      },
      {
        code: 'por',
        name: 'Португалски'
      },
      {
        code: 'pra',
        name: 'Пракрит лангуагес'
      },
      {
        code: 'pro',
        name: 'Провансалски (до 1500)'
      },
      {
        code: 'pus',
        name: 'Пусхто'
      },
      {
        code: 'que',
        name: 'Qуецхуа'
      },
      {
        code: 'raj',
        name: 'Рајастхани'
      },
      {
        code: 'rap',
        name: 'Рапануи'
      },
      {
        code: 'rar',
        name: 'Раротонган'
      },
      {
        code: 'roa',
        name: 'Романски (остали)'
      },
      {
        code: 'roh',
        name: 'Реторомански'
      },
      {
        code: 'rom',
        name: 'Ромски'
      },
      {
        code: 'rsi',
        name: 'Русински'
      },
      {
        code: 'rum',
        name: 'Румунски'
      },
      {
        code: 'run',
        name: 'Рунди'
      },
      {
        code: 'rus',
        name: 'Руски'
      },
      {
        code: 'rup',
        name: 'Ароманиан'
      },
      {
        code: 'sad',
        name: 'Сандаwе'
      },
      {
        code: 'sag',
        name: 'Санго'
      },
      {
        code: 'sah',
        name: 'Yакут'
      },
      {
        code: 'sai',
        name: 'Јужноамерички индијански (остали)'
      },
      {
        code: 'sal',
        name: 'Салишки језици'
      },
      {
        code: 'sam',
        name: 'Самаритански арамејски'
      },
      {
        code: 'san',
        name: 'Санскрт'
      },
      {
        code: 'sas',
        name: 'Сасак'
      },
      {
        code: 'sat',
        name: 'Сантали'
      },
      {
        code: 'sel',
        name: 'Селкупски'
      },
      {
        code: 'sem',
        name: 'Семитски (остали)'
      },
      {
        code: 'sga',
        name: 'Ирски, стари (до 900)'
      },
      {
        code: 'sgn',
        name: 'Знаковни језици'
      },
      {
        code: 'shn',
        name: 'Схан'
      },
      {
        code: 'sid',
        name: 'Сидамо'
      },
      {
        code: 'sin',
        name: 'Синхала'
      },
      {
        code: 'sio',
        name: 'Сиоуан лангуагес'
      },
      {
        code: 'sit',
        name: 'Сино-Тибетан (отхер)'
      },
      {
        code: 'sla',
        name: 'Словенски (остали)'
      },
      {
        code: 'sma',
        name: 'Соутхерн Сами'
      },
      {
        code: 'sme',
        name: 'Нортхерн Сами'
      },
      {
        code: 'smi',
        name: 'Сами лангуагес (отхер)'
      },
      {
        code: 'smj',
        name: 'Луле Сами'
      },
      {
        code: 'smn',
        name: 'Инари Сами'
      },
      {
        code: 'smo',
        name: 'Самоански'
      },
      {
        code: 'sms',
        name: 'Сколт Сами'
      },
      {
        code: 'sna',
        name: 'Схона'
      },
      {
        code: 'snd',
        name: 'Синдхи'
      },
      {
        code: 'snk',
        name: 'Сонинке'
      },
      {
        code: 'sog',
        name: 'Согдијски'
      },
      {
        code: 'som',
        name: 'Сомалијски'
      },
      {
        code: 'son',
        name: 'Сонгхаи'
      },
      {
        code: 'sot',
        name: 'Сотхо, Соутхерн'
      },
      {
        code: 'srd',
        name: 'Сардинијски'
      },
      {
        code: 'srr',
        name: 'Серер'
      },
      {
        code: 'srn',
        name: 'Сранан'
      },
      {
        code: 'ssa',
        name: 'Нилско-сахарски (остали)'
      },
      {
        code: 'suk',
        name: 'Сукума'
      },
      {
        code: 'sun',
        name: 'Сундски'
      },
      {
        code: 'sus',
        name: 'Сусу'
      },
      {
        code: 'sux',
        name: 'Сумеријански'
      },
      {
        code: 'swa',
        name: 'Свахили'
      },
      {
        code: 'swe',
        name: 'Шведски'
      },
      {
        code: 'swz',
        name: 'Сwази'
      },
      {
        code: 'syr',
        name: 'Сиријски'
      },
      {
        code: 'syc',
        name: 'Сyриац'
      },
      {
        code: 'tah',
        name: 'Тахитски'
      },
      {
        code: 'tai',
        name: 'Таи (остали)'
      },
      {
        code: 'tam',
        name: 'Тамилски'
      },
      {
        code: 'tat',
        name: 'Татарски'
      },
      {
        code: 'tel',
        name: 'Телугу'
      },
      {
        code: 'tem',
        name: 'Тимне'
      },
      {
        code: 'ter',
        name: 'Терено'
      },
      {
        code: 'tet',
        name: 'Тетум'
      },
      {
        code: 'tgk',
        name: 'Таџик'
      },
      {
        code: 'tgl',
        name: 'Тагалог'
      },
      {
        code: 'tha',
        name: 'Тхаи'
      },
      {
        code: 'tib',
        name: 'Тибетански'
      },
      {
        code: 'tig',
        name: 'Тигре'
      },
      {
        code: 'tir',
        name: 'Тигринyа'
      },
      {
        code: 'tiv',
        name: 'Тив'
      },
      {
        code: 'tkl',
        name: 'Токелау'
      },
      {
        code: 'tlh',
        name: 'Клингон'
      },
      {
        code: 'tli',
        name: 'Тлингит'
      },
      {
        code: 'tmh',
        name: 'Тамасхек'
      },
      {
        code: 'tog',
        name: 'Тонга (Нyаса)'
      },
      {
        code: 'tsi',
        name: 'Цимшијен'
      },
      {
        code: 'tso',
        name: 'Тсонга'
      },
      {
        code: 'tup',
        name: 'Тупи језици'
      },
      {
        code: 'tur',
        name: 'Турски'
      },
      {
        code: 'tut',
        name: 'Алтајски (остали)'
      },
      {
        code: 'tvl',
        name: 'Тувалу'
      },
      {
        code: 'tyv',
        name: 'Тувиниан'
      },
      {
        code: 'udm',
        name: 'Удмурт'
      },
      {
        code: 'uga',
        name: 'Угаритиц'
      },
      {
        code: 'ukr',
        name: 'Украјински'
      },
      {
        code: 'und',
        name: 'Неодређени'
      },
      {
        code: 'urd',
        name: 'Урду'
      },
      {
        code: 'vie',
        name: 'Вијетнамски'
      },
      {
        code: 'wel',
        name: 'Велшки'
      },
      {
        code: 'yid',
        name: 'Јидиш'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderLA_lat: Coder[] =
    [
      {
        code: 'srp',
        name: 'Srpski'
      },
      {
        code: 'scc',
        name: 'Srpski - ćirilica'
      },
      {
        code: 'scr',
        name: 'Srpski - latinica'
      },
      {
        code: 'eng',
        name: 'Engleski'
      },
      {
        code: 'ger',
        name: 'Nemački'
      },
      {
        code: 'ita',
        name: 'Italijanski'
      },
      {
        code: 'spa',
        name: 'Španski / Kastiljanski'
      },
      {
        code: 'hun',
        name: 'Mađarski'
      },
      {
        code: 'slo',
        name: 'Slovački'
      },
      {
        code: 'slv',
        name: 'Slovenački'
      },
      {
        code: 'bul',
        name: 'Bugarski'
      },
      {
        code: 'scn',
        name: 'Sicilijanski'
      },
      {
        code: 'sco',
        name: 'Škotski'
      },
      {
        code: 'aar',
        name: 'Afar'
      },
      {
        code: 'abk',
        name: 'Abhaski'
      },
      {
        code: 'ace',
        name: 'Akineze'
      },
      {
        code: 'ach',
        name: 'Ačoli'
      },
      {
        code: 'ada',
        name: 'Adangme'
      },
      {
        code: 'ady',
        name: 'Adyghe'
      },
      {
        code: 'afa',
        name: 'Afroazijski (ostali)'
      },
      {
        code: 'afh',
        name: 'Afrihili'
      },
      {
        code: 'afr',
        name: 'Afrikaans'
      },
      {
        code: 'ain',
        name: 'Ainu'
      },
      {
        code: 'ajm',
        name: 'Aljamia'
      },
      {
        code: 'aka',
        name: 'Akan'
      },
      {
        code: 'akk',
        name: 'Akadski'
      },
      {
        code: 'alb',
        name: 'Albanski'
      },
      {
        code: 'ale',
        name: 'Aleutski'
      },
      {
        code: 'alg',
        name: 'Algonkinski jezici'
      },
      {
        code: 'alt',
        name: 'Altai'
      },
      {
        code: 'amh',
        name: 'Amharski'
      },
      {
        code: 'ang',
        name: 'Anglosaksonski (450-1100)'
      },
      {
        code: 'anp',
        name: 'Angika'
      },
      {
        code: 'apa',
        name: 'Apaški'
      },
      {
        code: 'ara',
        name: 'Arapski'
      },
      {
        code: 'arc',
        name: 'Aramejski'
      },
      {
        code: 'arg',
        name: 'Aragonski'
      },
      {
        code: 'arm',
        name: 'Jermenski'
      },
      {
        code: 'arn',
        name: 'Araukanski'
      },
      {
        code: 'arp',
        name: 'Arapaho'
      },
      {
        code: 'art',
        name: 'Veštački (drugi)'
      },
      {
        code: 'arw',
        name: 'Aravak'
      },
      {
        code: 'asm',
        name: 'Asamski'
      },
      {
        code: 'ast',
        name: 'Asturian; Bable'
      },
      {
        code: 'ath',
        name: 'Athapaskanski jezici'
      },
      {
        code: 'aus',
        name: 'Australijski jezici'
      },
      {
        code: 'ava',
        name: 'Avarski'
      },
      {
        code: 'ave',
        name: 'Avestički'
      },
      {
        code: 'awa',
        name: 'Avadhi'
      },
      {
        code: 'aym',
        name: 'Ajmara'
      },
      {
        code: 'aze',
        name: 'Azerbejdžanski'
      },
      {
        code: 'bad',
        name: 'Banda'
      },
      {
        code: 'bai',
        name: 'Bamileke languages'
      },
      {
        code: 'bak',
        name: 'Baškirski'
      },
      {
        code: 'bal',
        name: 'Baluči'
      },
      {
        code: 'bam',
        name: 'Bambara'
      },
      {
        code: 'ban',
        name: 'Bali'
      },
      {
        code: 'baq',
        name: 'Baskijski'
      },
      {
        code: 'bas',
        name: 'Basa'
      },
      {
        code: 'bat',
        name: 'Baltički (ostali)'
      },
      {
        code: 'bej',
        name: 'Bedža'
      },
      {
        code: 'bel',
        name: 'Beloruski'
      },
      {
        code: 'bem',
        name: 'Bemba'
      },
      {
        code: 'ben',
        name: 'Bengalski'
      },
      {
        code: 'ber',
        name: 'Berberski jezici'
      },
      {
        code: 'bho',
        name: 'Bhodžpuri'
      },
      {
        code: 'bih',
        name: 'Bihari'
      },
      {
        code: 'bik',
        name: 'Bikol'
      },
      {
        code: 'bin',
        name: 'Bini'
      },
      {
        code: 'bis',
        name: 'Bislama'
      },
      {
        code: 'bla',
        name: 'Siksika / Blackfoot'
      },
      {
        code: 'bnt',
        name: 'Bantu (ostali)'
      },
      {
        code: 'bos',
        name: 'Bosanski (Bošnjački)'
      },
      {
        code: 'bra',
        name: 'Bradž'
      },
      {
        code: 'bre',
        name: 'Bretonski'
      },
      {
        code: 'btk',
        name: 'Batak (Indonezija)'
      },
      {
        code: 'bua',
        name: 'Buriat'
      },
      {
        code: 'bug',
        name: 'Bugi'
      },
      {
        code: 'bur',
        name: 'Burmanski'
      },
      {
        code: 'byn',
        name: 'Blin / Bilin'
      },
      {
        code: 'cad',
        name: 'Kado'
      },
      {
        code: 'cai',
        name: 'Centralnoamerički indijanski (ostali)'
      },
      {
        code: 'cam',
        name: 'Kmerski'
      },
      {
        code: 'car',
        name: 'Karipski'
      },
      {
        code: 'cat',
        name: 'Katalanski'
      },
      {
        code: 'cau',
        name: 'Kavkaski (ostali)'
      },
      {
        code: 'ceb',
        name: 'Kebuanski'
      },
      {
        code: 'cha',
        name: 'Chamorro'
      },
      {
        code: 'chb',
        name: 'Čibča'
      },
      {
        code: 'che',
        name: 'Čečenski'
      },
      {
        code: 'chg',
        name: 'Čagatai'
      },
      {
        code: 'chi',
        name: 'Kineski'
      },
      {
        code: 'chk',
        name: 'Chuukese'
      },
      {
        code: 'chm',
        name: 'Mari'
      },
      {
        code: 'chn',
        name: 'Činuk žargon'
      },
      {
        code: 'cho',
        name: 'Chocktaw'
      },
      {
        code: 'chp',
        name: 'Chipewyan'
      },
      {
        code: 'chr',
        name: 'Čeroki'
      },
      {
        code: 'chu',
        name: 'Crkvenoslovenski'
      },
      {
        code: 'chv',
        name: 'Čuvaški'
      },
      {
        code: 'chy',
        name: 'Čejenski'
      },
      {
        code: 'cmc',
        name: 'Chamic languages'
      },
      {
        code: 'cop',
        name: 'Koptski'
      },
      {
        code: 'cor',
        name: 'Cornish'
      },
      {
        code: 'cos',
        name: 'Korzikanski'
      },
      {
        code: 'cpe',
        name: 'Kreolski i pidgin, na osnovi engleskog (ostali)'
      },
      {
        code: 'cpf',
        name: 'Kreolski i pidgin, na osnovi francuskog (ostali)'
      },
      {
        code: 'cpp',
        name: 'Kreolski i pidgin, na osnovi portugalskog (ostali)'
      },
      {
        code: 'cre',
        name: 'Kri'
      },
      {
        code: 'crh',
        name: 'Krimski tatarski / krimski turski'
      },
      {
        code: 'crp',
        name: 'Kreolski i pidgin (ostali)'
      },
      {
        code: 'csb',
        name: 'Kashubian'
      },
      {
        code: 'cus',
        name: 'Kušitski (ostali)'
      },
      {
        code: 'cze',
        name: 'Češki'
      },
      {
        code: 'dak',
        name: 'Dakota'
      },
      {
        code: 'dan',
        name: 'Danski'
      },
      {
        code: 'del',
        name: 'Delaware'
      },
      {
        code: 'den',
        name: 'Slave (Athapascan)'
      },
      {
        code: 'dgr',
        name: 'Dogrib'
      },
      {
        code: 'din',
        name: 'Dinka'
      },
      {
        code: 'div',
        name: 'Divehi'
      },
      {
        code: 'doi',
        name: 'Dogri'
      },
      {
        code: 'dra',
        name: 'Dravidski (ostali)'
      },
      {
        code: 'dsb',
        name: 'Donji Lužičko-srpski - Lower Sorbian'
      },
      {
        code: 'dua',
        name: 'Duala'
      },
      {
        code: 'dum',
        name: 'Srednjoholandski (1050-1350)'
      },
      {
        code: 'dut',
        name: 'Holandski, Flamanski'
      },
      {
        code: 'dyu',
        name: 'Dyula'
      },
      {
        code: 'dzo',
        name: 'Dzongkha'
      },
      {
        code: 'efi',
        name: 'Efik'
      },
      {
        code: 'egy',
        name: 'Egipatski (stari)'
      },
      {
        code: 'eka',
        name: 'Ekajuk'
      },
      {
        code: 'elx',
        name: 'Elamitski'
      },
      {
        code: 'enm',
        name: 'Srednjoengleski (1100-1500)'
      },
      {
        code: 'epo',
        name: 'Esperanto'
      },
      {
        code: 'esk',
        name: 'Eskimski'
      },
      {
        code: 'est',
        name: 'Estonski'
      },
      {
        code: 'eth',
        name: 'Etiopski'
      },
      {
        code: 'ewe',
        name: 'Ewe'
      },
      {
        code: 'ewo',
        name: 'Ewondo'
      },
      {
        code: 'fan',
        name: 'Fang'
      },
      {
        code: 'far',
        name: 'Faroese'
      },
      {
        code: 'fat',
        name: 'Fanti'
      },
      {
        code: 'fij',
        name: 'Fijian'
      },
      {
        code: 'fil',
        name: 'Filipinski'
      },
      {
        code: 'fin',
        name: 'Finski'
      },
      {
        code: 'fiu',
        name: 'Ugrofinski (ostali)'
      },
      {
        code: 'fon',
        name: 'Fon'
      },
      {
        code: 'fre',
        name: 'Francuski'
      },
      {
        code: 'frm',
        name: 'Srednjofrancuski (1400-1600)'
      },
      {
        code: 'fro',
        name: 'Starofrancuski (842-1400)'
      },
      {
        code: 'fry',
        name: 'Frizijski'
      },
      {
        code: 'frr',
        name: 'North Frizian'
      },
      {
        code: 'frs',
        name: 'East Frizian'
      },
      {
        code: 'ful',
        name: 'Fulah'
      },
      {
        code: 'fur',
        name: 'Friulian'
      },
      {
        code: 'gaa',
        name: 'Ga'
      },
      {
        code: 'gal',
        name: 'Galla'
      },
      {
        code: 'gay',
        name: 'Gayo'
      },
      {
        code: 'gba',
        name: 'Gbaya'
      },
      {
        code: 'gem',
        name: 'Germanski (ostali)'
      },
      {
        code: 'geo',
        name: 'Gruzijski'
      },
      {
        code: 'gez',
        name: 'Geez'
      },
      {
        code: 'gil',
        name: 'Gilbertese'
      },
      {
        code: 'gla',
        name: 'Gelik / Å kotski gelik'
      },
      {
        code: 'gle',
        name: 'Irski'
      },
      {
        code: 'glg',
        name: 'Gallegan'
      },
      {
        code: 'glv',
        name: 'Manx'
      },
      {
        code: 'gmh',
        name: 'Srednjovisokonemački (1050-1500)'
      },
      {
        code: 'goh',
        name: 'Starovisokonemački (750-1050)'
      },
      {
        code: 'gon',
        name: 'Gondski'
      },
      {
        code: 'gor',
        name: 'Gorontalo'
      },
      {
        code: 'got',
        name: 'Gotski'
      },
      {
        code: 'grb',
        name: 'Grebo'
      },
      {
        code: 'grc',
        name: 'Starogrčki (-1453)'
      },
      {
        code: 'gre',
        name: 'Grčki (1453-)'
      },
      {
        code: 'gsw',
        name: 'Swiss German'
      },
      {
        code: 'gua',
        name: 'Guarani'
      },
      {
        code: 'guj',
        name: 'Gudžarati'
      },
      {
        code: 'gwi',
        name: 'Gwich'
      },
      {
        code: 'hai',
        name: 'Haida'
      },
      {
        code: 'hat',
        name: 'Haitian / Haitian Creole'
      },
      {
        code: 'hau',
        name: 'Hausa'
      },
      {
        code: 'haw',
        name: 'Havajski'
      },
      {
        code: 'heb',
        name: 'Hebrejski'
      },
      {
        code: 'her',
        name: 'Herero'
      },
      {
        code: 'hil',
        name: 'Hiligaynon'
      },
      {
        code: 'him',
        name: 'Himačali'
      },
      {
        code: 'hin',
        name: 'Hindi'
      },
      {
        code: 'hit',
        name: 'Hittite'
      },
      {
        code: 'hmn',
        name: 'Hmong'
      },
      {
        code: 'hmo',
        name: 'Hiri motu'
      },
      {
        code: 'hrv',
        name: 'Hrvatski'
      },
      {
        code: 'hsb',
        name: 'Gornji Lužičko-srpski (Upper Sorbian)'
      },
      {
        code: 'hup',
        name: 'Hupa'
      },
      {
        code: 'iba',
        name: 'Iban'
      },
      {
        code: 'ibo',
        name: 'Igbo'
      },
      {
        code: 'ice',
        name: 'Islandski'
      },
      {
        code: 'ido',
        name: 'Ido'
      },
      {
        code: 'iii',
        name: 'Sichuan Yi'
      },
      {
        code: 'ijo',
        name: 'Ijo'
      },
      {
        code: 'iku',
        name: 'Inuktitut'
      },
      {
        code: 'ile',
        name: 'Interlingue'
      },
      {
        code: 'ilo',
        name: 'Iloko'
      },
      {
        code: 'ina',
        name: 'Interlingua (International Auxiliary Language Association)'
      },
      {
        code: 'inc',
        name: 'Indijski (ostali)'
      },
      {
        code: 'ind',
        name: 'Indonezijski'
      },
      {
        code: 'ine',
        name: 'Indoevropski (ostali)'
      },
      {
        code: 'inh',
        name: 'Ingush'
      },
      {
        code: 'ipk',
        name: 'Inupiak'
      },
      {
        code: 'ira',
        name: 'Iranski (ostali)'
      },
      {
        code: 'iro',
        name: 'Irokeski jezici'
      },
      {
        code: 'jav',
        name: 'Javanski'
      },
      {
        code: 'jbo',
        name: 'Lojban'
      },
      {
        code: 'jpn',
        name: 'Japanski'
      },
      {
        code: 'jpr',
        name: 'Judeo-Persian'
      },
      {
        code: 'jrb',
        name: 'Judeo-Arabic'
      },
      {
        code: 'kaa',
        name: 'Kara-Kalpak'
      },
      {
        code: 'kab',
        name: 'Kabilski'
      },
      {
        code: 'kac',
        name: 'Kachin'
      },
      {
        code: 'kal',
        name: 'Kalaallisut / Greenlandic'
      },
      {
        code: 'kam',
        name: 'Kamba'
      },
      {
        code: 'kan',
        name: 'Kannada'
      },
      {
        code: 'kar',
        name: 'Karen'
      },
      {
        code: 'kas',
        name: 'Kašmirski'
      },
      {
        code: 'kau',
        name: 'Kanuri'
      },
      {
        code: 'kaw',
        name: 'Kavi'
      },
      {
        code: 'kaz',
        name: 'Kazahski'
      },
      {
        code: 'kbd',
        name: 'Kabardian'
      },
      {
        code: 'kha',
        name: 'Khasi'
      },
      {
        code: 'khi',
        name: 'Khoisan (other)'
      },
      {
        code: 'khm',
        name: 'Kmerski'
      },
      {
        code: 'kho',
        name: 'Khotanese'
      },
      {
        code: 'kik',
        name: 'Kikuyu'
      },
      {
        code: 'kin',
        name: 'Kinyarwanda'
      },
      {
        code: 'kir',
        name: 'Kirgiski'
      },
      {
        code: 'kmb',
        name: 'Kimbundu'
      },
      {
        code: 'kok',
        name: 'Konkani'
      },
      {
        code: 'kom',
        name: 'Komi'
      },
      {
        code: 'kon',
        name: 'Kongo'
      },
      {
        code: 'kor',
        name: 'Korejski'
      },
      {
        code: 'kos',
        name: 'Kosraean'
      },
      {
        code: 'kpe',
        name: 'Kpelle'
      },
      {
        code: 'krc',
        name: 'Karachay-Balkar'
      },
      {
        code: 'krl',
        name: 'Karelian'
      },
      {
        code: 'kro',
        name: 'Kru'
      },
      {
        code: 'kru',
        name: 'Kurukh'
      },
      {
        code: 'kua',
        name: 'Kuanyama / Kwanyama'
      },
      {
        code: 'kur',
        name: 'Kurdski'
      },
      {
        code: 'kus',
        name: 'Kusai'
      },
      {
        code: 'kut',
        name: 'Kutenai'
      },
      {
        code: 'lad',
        name: 'Ladino'
      },
      {
        code: 'lah',
        name: 'Lahnda'
      },
      {
        code: 'lam',
        name: 'Lamba'
      },
      {
        code: 'lan',
        name: 'Langdok (posle 1500)'
      },
      {
        code: 'lao',
        name: 'Lao'
      },
      {
        code: 'lap',
        name: 'Laponski'
      },
      {
        code: 'lat',
        name: 'Latinski'
      },
      {
        code: 'lav',
        name: 'Letonski'
      },
      {
        code: 'lez',
        name: 'Lezghian'
      },
      {
        code: 'lim',
        name: 'Limburgan / Limburgish'
      },
      {
        code: 'lin',
        name: 'Lingala'
      },
      {
        code: 'lit',
        name: 'Litvanski'
      },
      {
        code: 'lol',
        name: 'Mongo'
      },
      {
        code: 'loz',
        name: 'Lozi'
      },
      {
        code: 'ltz',
        name: 'Luxemburški'
      },
      {
        code: 'lua',
        name: 'Luba-Lulua'
      },
      {
        code: 'lub',
        name: 'Luba-Katanga'
      },
      {
        code: 'lug',
        name: 'Ganda'
      },
      {
        code: 'lui',
        name: 'Luiseno'
      },
      {
        code: 'lun',
        name: 'Lunda'
      },
      {
        code: 'luo',
        name: 'Luo (Kenija i Tanzanija)'
      },
      {
        code: 'lus',
        name: 'Lushai'
      },
      {
        code: 'mac',
        name: 'Makedonski'
      },
      {
        code: 'mad',
        name: 'Madurski'
      },
      {
        code: 'mag',
        name: 'Magahi'
      },
      {
        code: 'mah',
        name: 'Maršalski'
      },
      {
        code: 'mai',
        name: 'Maithili'
      },
      {
        code: 'mak',
        name: 'Makasar'
      },
      {
        code: 'mal',
        name: 'Malajalamski'
      },
      {
        code: 'man',
        name: 'Mandingo'
      },
      {
        code: 'mao',
        name: 'Maorski'
      },
      {
        code: 'map',
        name: 'Austronezijski (ostali)'
      },
      {
        code: 'mar',
        name: 'Marathi'
      },
      {
        code: 'mas',
        name: 'Masai'
      },
      {
        code: 'max',
        name: 'Manski'
      },
      {
        code: 'may',
        name: 'Malajski'
      },
      {
        code: 'mdf',
        name: 'Moksha'
      },
      {
        code: 'mdr',
        name: 'Mandar'
      },
      {
        code: 'men',
        name: 'Mende'
      },
      {
        code: 'mga',
        name: 'Srednjoirski (900-1200)'
      },
      {
        code: 'mic',
        name: 'Mikmak'
      },
      {
        code: 'min',
        name: 'Mingangkabau'
      },
      {
        code: 'mis',
        name: 'Ostali'
      },
      {
        code: 'mkh',
        name: 'Mon-Khmer (ostali)'
      },
      {
        code: 'mla',
        name: 'Malagaški'
      },
      {
        code: 'mlt',
        name: 'Malteški'
      },
      {
        code: 'mnc',
        name: 'Manču'
      },
      {
        code: 'mni',
        name: 'Manipuri'
      },
      {
        code: 'mno',
        name: 'Manobo jezici'
      },
      {
        code: 'moh',
        name: 'Mohawk'
      },
      {
        code: 'mon',
        name: 'Mongolski'
      },
      {
        code: 'mos',
        name: 'Mosi'
      },
      {
        code: 'mul',
        name: 'Višejezični'
      },
      {
        code: 'mun',
        name: 'Munda'
      },
      {
        code: 'mus',
        name: 'Creek / Muskogee'
      },
      {
        code: 'mwl',
        name: 'Mirandese'
      },
      {
        code: 'mwr',
        name: 'Marvari'
      },
      {
        code: 'myn',
        name: 'Maja jezici'
      },
      {
        code: 'myv',
        name: 'Erzya'
      },
      {
        code: 'nah',
        name: 'Nahuatl'
      },
      {
        code: 'nai',
        name: 'Severnoamerički indijanski (ostali)'
      },
      {
        code: 'nap',
        name: 'Napolitan'
      },
      {
        code: 'nau',
        name: 'Nauru'
      },
      {
        code: 'nav',
        name: 'Navaho'
      },
      {
        code: 'nbl',
        name: 'Ndebele, južni'
      },
      {
        code: 'nde',
        name: 'Ndebele, severni'
      },
      {
        code: 'ndo',
        name: 'Ndonga'
      },
      {
        code: 'nds',
        name: 'Niskonemački / Niskosaksonski'
      },
      {
        code: 'nep',
        name: 'Nepalski'
      },
      {
        code: 'new',
        name: 'Newari / Nepal Bhasa'
      },
      {
        code: 'nia',
        name: 'Nias'
      },
      {
        code: 'nic',
        name: 'Nigersko-kordofanski (ostali)'
      },
      {
        code: 'niu',
        name: 'Niuean'
      },
      {
        code: 'nno',
        name: 'Norwegian Nynorsk'
      },
      {
        code: 'nob',
        name: 'Norwegian Bokmal'
      },
      {
        code: 'nog',
        name: 'Nogai'
      },
      {
        code: 'non',
        name: 'Norse, Old'
      },
      {
        code: 'nor',
        name: 'Norveški'
      },
      {
        code: 'nso',
        name: 'Severni Sotho / Pedi / Sepedi'
      },
      {
        code: 'nqo',
        name: 'N Ko'
      },
      {
        code: 'nub',
        name: 'Nubijski jezici'
      },
      {
        code: 'nwc',
        name: 'Classical Newari / Old Newari / Classical Nepal Bhasa'
      },
      {
        code: 'nya',
        name: 'Chichewa / Chewa / Nyanja'
      },
      {
        code: 'nym',
        name: 'Nyamwezi'
      },
      {
        code: 'nyn',
        name: 'Nyankole'
      },
      {
        code: 'nyo',
        name: 'Nyoro'
      },
      {
        code: 'nzi',
        name: 'Nzima'
      },
      {
        code: 'oci',
        name: 'Occitan / Provansalski (posle 1500)'
      },
      {
        code: 'oji',
        name: 'Ojibwa'
      },
      {
        code: 'ori',
        name: 'Oriya'
      },
      {
        code: 'orm',
        name: 'Oromo'
      },
      {
        code: 'osa',
        name: 'Osage'
      },
      {
        code: 'oss',
        name: 'Osetski'
      },
      {
        code: 'ota',
        name: 'Otomanski turski (1500-1928)'
      },
      {
        code: 'oto',
        name: 'Otomski jezici'
      },
      {
        code: 'paa',
        name: 'Papuanski (ostali)'
      },
      {
        code: 'pag',
        name: 'Pangasinan'
      },
      {
        code: 'pal',
        name: 'Pahlavi'
      },
      {
        code: 'pam',
        name: 'Pampanga'
      },
      {
        code: 'pan',
        name: 'Panjabi / Punjabi'
      },
      {
        code: 'pap',
        name: 'Papiamento'
      },
      {
        code: 'pau',
        name: 'Palauan'
      },
      {
        code: 'peo',
        name: 'Staropersijski (600pne-400ne)'
      },
      {
        code: 'per',
        name: 'Persijski'
      },
      {
        code: 'phi',
        name: 'Filipinski (ostali)'
      },
      {
        code: 'phn',
        name: 'Feničanski'
      },
      {
        code: 'pli',
        name: 'Pali'
      },
      {
        code: 'pol',
        name: 'Poljski'
      },
      {
        code: 'pon',
        name: 'Pohnpeian'
      },
      {
        code: 'por',
        name: 'Portugalski'
      },
      {
        code: 'pra',
        name: 'Prakrit languages'
      },
      {
        code: 'pro',
        name: 'Provansalski (do 1500)'
      },
      {
        code: 'pus',
        name: 'Pushto'
      },
      {
        code: 'que',
        name: 'Quechua'
      },
      {
        code: 'raj',
        name: 'Rajasthani'
      },
      {
        code: 'rap',
        name: 'Rapanui'
      },
      {
        code: 'rar',
        name: 'Rarotongan'
      },
      {
        code: 'roa',
        name: 'Romanski (ostali)'
      },
      {
        code: 'roh',
        name: 'Retoromanski'
      },
      {
        code: 'rom',
        name: 'Romski'
      },
      {
        code: 'rsi',
        name: 'Rusinski'
      },
      {
        code: 'rum',
        name: 'Rumunski'
      },
      {
        code: 'run',
        name: 'Rundi'
      },
      {
        code: 'rus',
        name: 'Ruski'
      },
      {
        code: 'rup',
        name: 'Aromanian'
      },
      {
        code: 'sad',
        name: 'Sandawe'
      },
      {
        code: 'sag',
        name: 'Sango'
      },
      {
        code: 'sah',
        name: 'Yakut'
      },
      {
        code: 'sai',
        name: 'Južnoamerički indijanski (ostali)'
      },
      {
        code: 'sal',
        name: 'Sališki jezici'
      },
      {
        code: 'sam',
        name: 'Samaritanski aramejski'
      },
      {
        code: 'san',
        name: 'Sanskrt'
      },
      {
        code: 'sas',
        name: 'Sasak'
      },
      {
        code: 'sat',
        name: 'Santali'
      },
      {
        code: 'sel',
        name: 'Selkupski'
      },
      {
        code: 'sem',
        name: 'Semitski (ostali)'
      },
      {
        code: 'sga',
        name: 'Irski, stari (do 900)'
      },
      {
        code: 'sgn',
        name: 'Znakovni jezici'
      },
      {
        code: 'shn',
        name: 'Shan'
      },
      {
        code: 'sid',
        name: 'Sidamo'
      },
      {
        code: 'sin',
        name: 'Sinhala'
      },
      {
        code: 'sio',
        name: 'Siouan languages'
      },
      {
        code: 'sit',
        name: 'Sino-Tibetan (other)'
      },
      {
        code: 'sla',
        name: 'Slovenski (ostali)'
      },
      {
        code: 'sma',
        name: 'Southern Sami'
      },
      {
        code: 'sme',
        name: 'Northern Sami'
      },
      {
        code: 'smi',
        name: 'Sami languages (other)'
      },
      {
        code: 'smj',
        name: 'Lule Sami'
      },
      {
        code: 'smn',
        name: 'Inari Sami'
      },
      {
        code: 'smo',
        name: 'Samoanski'
      },
      {
        code: 'sms',
        name: 'Skolt Sami'
      },
      {
        code: 'sna',
        name: 'Shona'
      },
      {
        code: 'snd',
        name: 'Sindhi'
      },
      {
        code: 'snk',
        name: 'Soninke'
      },
      {
        code: 'sog',
        name: 'Sogdijski'
      },
      {
        code: 'som',
        name: 'Somalijski'
      },
      {
        code: 'son',
        name: 'Songhai'
      },
      {
        code: 'sot',
        name: 'Sotho, Southern'
      },
      {
        code: 'srd',
        name: 'Sardinijski'
      },
      {
        code: 'srr',
        name: 'Serer'
      },
      {
        code: 'srn',
        name: 'Sranan'
      },
      {
        code: 'ssa',
        name: 'Nilsko-saharski (ostali)'
      },
      {
        code: 'suk',
        name: 'Sukuma'
      },
      {
        code: 'sun',
        name: 'Sundski'
      },
      {
        code: 'sus',
        name: 'Susu'
      },
      {
        code: 'sux',
        name: 'Sumerijanski'
      },
      {
        code: 'swa',
        name: 'Svahili'
      },
      {
        code: 'swe',
        name: 'Švedski'
      },
      {
        code: 'swz',
        name: 'Swazi'
      },
      {
        code: 'syr',
        name: 'Sirijski'
      },
      {
        code: 'syc',
        name: 'Syriac'
      },
      {
        code: 'tah',
        name: 'Tahitski'
      },
      {
        code: 'tai',
        name: 'Tai (ostali)'
      },
      {
        code: 'tam',
        name: 'Tamilski'
      },
      {
        code: 'tat',
        name: 'Tatarski'
      },
      {
        code: 'tel',
        name: 'Telugu'
      },
      {
        code: 'tem',
        name: 'Timne'
      },
      {
        code: 'ter',
        name: 'Tereno'
      },
      {
        code: 'tet',
        name: 'Tetum'
      },
      {
        code: 'tgk',
        name: 'Tadžik'
      },
      {
        code: 'tgl',
        name: 'Tagalog'
      },
      {
        code: 'tha',
        name: 'Thai'
      },
      {
        code: 'tib',
        name: 'Tibetanski'
      },
      {
        code: 'tig',
        name: 'Tigre'
      },
      {
        code: 'tir',
        name: 'Tigrinya'
      },
      {
        code: 'tiv',
        name: 'Tiv'
      },
      {
        code: 'tkl',
        name: 'Tokelau'
      },
      {
        code: 'tlh',
        name: 'Klingon'
      },
      {
        code: 'tli',
        name: 'Tlingit'
      },
      {
        code: 'tmh',
        name: 'Tamashek'
      },
      {
        code: 'tog',
        name: 'Tonga (Nyasa)'
      },
      {
        code: 'tsi',
        name: 'Cimšijen'
      },
      {
        code: 'tso',
        name: 'Tsonga'
      },
      {
        code: 'tup',
        name: 'Tupi jezici'
      },
      {
        code: 'tur',
        name: 'Turski'
      },
      {
        code: 'tut',
        name: 'Altajski (ostali)'
      },
      {
        code: 'tvl',
        name: 'Tuvalu'
      },
      {
        code: 'tyv',
        name: 'Tuvinian'
      },
      {
        code: 'udm',
        name: 'Udmurt'
      },
      {
        code: 'uga',
        name: 'Ugaritic'
      },
      {
        code: 'ukr',
        name: 'Ukrajinski'
      },
      {
        code: 'und',
        name: 'Neodređeni'
      },
      {
        code: 'urd',
        name: 'Urdu'
      },
      {
        code: 'vie',
        name: 'Vijetnamski'
      },
      {
        code: 'wel',
        name: 'Velški'
      },
      {
        code: 'yid',
        name: 'Jidiš'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderLA_en: Coder[] =
    [
      {
        code: 'srp',
        name: 'Serbian'
      },
      {
        code: 'scc',
        name: 'Serbian - Cyrillic'
      },
      {
        code: 'scr',
        name: 'Serbian - Latin'
      },
      {
        code: 'eng',
        name: 'English'
      },
      {
        code: 'ger',
        name: 'German'
      },
      {
        code: 'ita',
        name: 'Italian'
      },
      {
        code: 'spa',
        name: 'Spanish / Castilian'
      },
      {
        code: 'hun',
        name: 'Hungarian'
      },
      {
        code: 'slo',
        name: 'Slovak'
      },
      {
        code: 'slv',
        name: 'Slovenian'
      },
      {
        code: 'bul',
        name: 'Bulgarian'
      },
      {
        code: 'scn',
        name: 'Sicilian'
      },
      {
        code: 'sco',
        name: 'Scottish'
      },
      {
        code: 'aar',
        name: 'Afar'
      },
      {
        code: 'abk',
        name: 'Abkhazian'
      },
      {
        code: 'ace',
        name: 'Akinesis'
      },
      {
        code: 'ah',
        name: 'Acholi'
      },
      {
        code: 'ada',
        name: 'Adangme'
      },
      {
        code: 'ady',
        name: 'Adyghe'
      },
      {
        code: 'afa',
        name: 'Afro-Asian (Other)'
      },
      {
        code: 'afh',
        name: 'Afrihili'
      },
      {
        code: 'afr',
        name: 'Afrikaans'
      },
      {
        code: 'ain',
        name: 'Ainu'
      },
      {
        code: 'ajm',
        name: 'Aljamia'
      },
      {
        code: 'aka',
        name: 'Akan'
      },
      {
        code: 'akk',
        name: 'Akkadian'
      },
      {
        code: 'alb',
        name: 'Albanian'
      },
      {
        code: 'but',
        name: 'Aleutian'
      },
      {
        code: 'alg',
        name: 'Algonquian languages'
      },
      {
        code: 'alt',
        name: 'Altai'
      },
      {
        code: 'amh',
        name: 'Amharic'
      },
      {
        code: 'ang',
        name: 'Anglo-Saxon (450-1100)'
      },
      {
        code: 'anp',
        name: 'Angika'
      },
      {
        code: 'apa',
        name: 'Apache'
      },
      {
        code: 'ara',
        name: 'Arabic'
      },
      {
        code: 'arc',
        name: 'Aramaic'
      },
      {
        code: 'arg',
        name: 'Aragonese'
      },
      {
        code: 'arm',
        name: 'Armenian'
      },
      {
        code: 'arn',
        name: 'Araucanian'
      },
      {
        code: 'arp',
        name: 'Arapaho'
      },
      {
        code: 'art',
        name: 'Artificial (other)'
      },
      {
        code: 'arw',
        name: 'Arawak'
      },
      {
        code: 'asm',
        name: 'Assamese'
      },
      {
        code: 'ast',
        name: 'Asturian; babble'
      },
      {
        code: 'ath',
        name: 'Athapascan languages'
      },
      {
        code: 'aus',
        name: 'Australian languages'
      },
      {
        code: 'ava',
        name: 'Avarski'
      },
      {
        code: 'ave',
        name: 'Avesti'
      },
      {
        code: 'awa',
        name: 'Avadhi'
      },
      {
        code: 'aym',
        name: 'Aymara'
      },
      {
        code: 'aze',
        name: 'Azerbaijani'
      },
      {
        code: 'bad',
        name: 'Gang'
      },
      {
        code: 'bai',
        name: 'Bamileke languages'
      },
      {
        code: 'bak',
        name: 'Bashkir'
      },
      {
        code: 'bal',
        name: 'Baluchi'
      },
      {
        code: 'bam',
        name: 'Bambara'
      },
      {
        code: 'ban',
        name: 'Bali'
      },
      {
        code: 'baq',
        name: 'Basque'
      },
      {
        code: 'bass',
        name: 'Basa'
      },
      {
        code: 'bat',
        name: 'Baltic (other)'
      },
      {
        code: 'bey',
        name: 'Beja'
      },
      {
        code: 'white',
        name: 'Belarusian'
      },
      {
        code: 'bem',
        name: 'Bemba'
      },
      {
        code: 'ben',
        name: 'Bengali'
      },
      {
        code: 'ber',
        name: 'Berber languages'
      },
      {
        code: 'bho',
        name: 'Bhojpuri'
      },
      {
        code: 'bih',
        name: 'Bihari'
      },
      {
        code: 'bull',
        name: 'Bicol'
      },
      {
        code: 'bin',
        name: 'Benny'
      },
      {
        code: 'encore',
        name: 'Bislama'
      },
      {
        code: 'blah',
        name: 'Siksika / Blackfoot'
      },
      {
        code: 'bnt',
        name: 'Bantu (others)'
      },
      {
        code: 'bos',
        name: 'Bosnian (Bosnian)'
      },
      {
        code: 'bra',
        name: 'Bradge'
      },
      {
        code: 'bre',
        name: 'Breton'
      },
      {
        code: 'btk',
        name: 'Batak (Indonesia)'
      },
      {
        code: 'bua',
        name: 'Buriat'
      },
      {
        code: 'bug',
        name: 'Boogie'
      },
      {
        code: 'bur',
        name: 'Burmese'
      },
      {
        code: 'byn',
        name: 'Blin / Bilin'
      },
      {
        code: 'cad',
        name: 'Kado'
      },
      {
        code: 'cai',
        name: 'Central American Indian (Other)'
      },
      {
        code: 'cam',
        name: 'Khmer'
      },
      {
        code: 'car',
        name: 'Caribbean'
      },
      {
        code: 'cat',
        name: 'Catalan'
      },
      {
        code: 'cau',
        name: 'Caucasian (Other)'
      },
      {
        code: 'ceb',
        name: 'Cebuan'
      },
      {
        code: 'cha',
        name: 'Chamorro'
      },
      {
        code: 'chb',
        name: 'Chibcha'
      },
      {
        code: 'che',
        name: 'Chechen'
      },
      {
        code: 'chg',
        name: 'Chagatai'
      },
      {
        code: 'chi',
        name: 'Chinese'
      },
      {
        code: 'chk',
        name: 'Chuukese'
      },
      {
        code: 'chm',
        name: 'Marie'
      },
      {
        code: 'chn',
        name: 'Chinook Jargon'
      },
      {
        code: 'cho',
        name: 'Chocktaw'
      },
      {
        code: 'chp',
        name: 'Chipewyan'
      },
      {
        code: 'chr',
        name: 'Cherokee'
      },
      {
        code: 'chu',
        name: 'Church Slavic'
      },
      {
        code: 'chv',
        name: 'Chuvashki'
      },
      {
        code: 'chy',
        name: 'Cheyenne'
      },
      {
        code: 'cmc',
        name: 'Chamic languages'
      },
      {
        code: 'cop',
        name: 'Coptic'
      },
      {
        code: 'cor',
        name: 'Cornish'
      },
      {
        code: 'cos',
        name: 'Corsican'
      },
      {
        code: 'cpe',
        name: 'Creole and Pidgin, based on English (Other)'
      },
      {
        code: 'cpf',
        name: 'Creole and Pidgin, based on French (Other)'
      },
      {
        code: 'cpp',
        name: 'Creole and Pidgin, based on Portuguese (Other)'
      },
      {
        code: 'cre',
        name: 'Cree'
      },
      {
        code: 'crh',
        name: 'Crimean Tatar / Crimean Turkish'
      },
      {
        code: 'crp',
        name: 'Creole and Pidgin (Other)'
      },
      {
        code: 'csb',
        name: 'Kashubian'
      },
      {
        code: 'cus',
        name: 'Cushitic (Other)'
      },
      {
        code: 'cze',
        name: 'Czech'
      },
      {
        code: 'dak',
        name: 'Dakota'
      },
      {
        code: 'day',
        name: 'Danish'
      },
      {
        code: 'del',
        name: 'Delaware'
      },
      {
        code: 'den',
        name: 'Slave (Athapascan)'
      },
      {
        code: 'dgr',
        name: 'Dogrib'
      },
      {
        code: 'din',
        name: 'Dinka'
      },
      {
        code: 'div',
        name: 'Divehi'
      },
      {
        code: 'doi',
        name: 'Dogri'
      },
      {
        code: 'dra',
        name: 'Dravidian (Other)'
      },
      {
        code: 'dsb',
        name: 'Lower Sorbian - Lower Sorbian'
      },
      {
        code: 'dua',
        name: 'Duala'
      },
      {
        code: 'dum',
        name: 'Middle Dutch (1050-1350)'
      },
      {
        code: 'dut',
        name: 'Dutch, Flemish'
      },
      {
        code: 'dyu',
        name: 'Dyula'
      },
      {
        code: 'dzo',
        name: 'Dzongkha'
      },
      {
        code: 'efi',
        name: 'Efik'
      },
      {
        code: 'egy',
        name: 'Egyptian (Old)'
      },
      {
        code: 'eka',
        name: 'Ekajuk'
      },
      {
        code: 'elx',
        name: 'Elamite'
      },
      {
        code: 'enm',
        name: 'Middle English (1100-1500)'
      },
      {
        code: 'epo',
        name: 'Esperanto'
      },
      {
        code: 'esk',
        name: 'Eskimo'
      },
      {
        code: 'est',
        name: 'Estonian'
      },
      {
        code: 'eth',
        name: 'Ethiopian'
      },
      {
        code: 'ewe',
        name: 'Ewe'
      },
      {
        code: 'ewo',
        name: 'Ewondo'
      },
      {
        code: 'fan',
        name: 'Fang'
      },
      {
        code: 'far',
        name: 'Faroese'
      },
      {
        code: 'fat',
        name: 'Fanti'
      },
      {
        code: 'fij',
        name: 'Fijian'
      },
      {
        code: 'fil',
        name: 'Filipino'
      },
      {
        code: 'fin',
        name: 'Finnish'
      },
      {
        code: 'fiu',
        name: 'Finnish (other)'
      },
      {
        code: 'fon',
        name: 'Fon'
      },
      {
        code: 'fre',
        name: 'French'
      },
      {
        code: 'frm',
        name: 'Middle French (1400-1600)'
      },
      {
        code: 'fro',
        name: 'Old French (842-1400)'
      },
      {
        code: 'fry',
        name: 'Frisian'
      },
      {
        code: 'frr',
        name: 'North Frisian'
      },
      {
        code: 'frs',
        name: 'East Frisian'
      },
      {
        code: 'ful',
        name: 'Fulah'
      },
      {
        code: 'fur',
        name: 'Friulian'
      },
      {
        code: 'gaa',
        name: 'Ga'
      },
      {
        code: 'gal',
        name: 'Galla'
      },
      {
        code: 'gay',
        name: 'Gayo'
      },
      {
        code: 'gba',
        name: 'Gbaya'
      },
      {
        code: 'gem',
        name: 'German (Other)'
      },
      {
        code: 'geo',
        name: 'Georgian'
      },
      {
        code: 'gez',
        name: 'Geez'
      },
      {
        code: 'gil',
        name: 'Gilbertese'
      },
      {
        code: 'gla',
        name: 'Gaelic / Scottish Gaelic'
      },
      {
        code: 'look',
        name: 'Irish'
      },
      {
        code: 'glg',
        name: 'Gallegan'
      },
      {
        code: 'glv',
        name: 'Manx'
      },
      {
        code: 'gmh',
        name: 'Middle High German (1050-1500)'
      },
      {
        code: 'goh',
        name: 'Old High German (750-1050)'
      },
      {
        code: 'gon',
        name: 'Gondski'
      },
      {
        code: 'gor',
        name: 'Gorontalo'
      },
      {
        code: 'got',
        name: 'Gothic'
      },
      {
        code: 'coat of arms',
        name: 'Grebo'
      },
      {
        code: 'grc',
        name: 'Old Greek (-1453)'
      },
      {
        code: 'gre',
        name: 'Greek (1453-)'
      },
      {
        code: 'gsw',
        name: 'Swiss German'
      },
      {
        code: 'gua',
        name: 'Guarani'
      },
      {
        code: 'guj',
        name: 'Gujarati'
      },
      {
        code: 'gwi',
        name: 'Gwich'
      },
      {
        code: 'hai',
        name: 'Haida'
      },
      {
        code: 'hat',
        name: 'Haitian / Haitian Creole'
      },
      {
        code: 'hau',
        name: 'Hausa'
      },
      {
        code: 'haw',
        name: 'Hawaiian'
      },
      {
        code: 'heb',
        name: 'Hebrew'
      },
      {
        code: 'her',
        name: 'Herero'
      },
      {
        code: 'hill',
        name: 'Hiligaynon'
      },
      {
        code: 'him',
        name: 'Himachal'
      },
      {
        code: 'hin',
        name: 'Hindi'
      },
      {
        code: 'hit',
        name: 'Hittite'
      },
      {
        code: 'hmn',
        name: 'Hmong'
      },
      {
        code: 'hmo',
        name: 'Hiri motu'
      },
      {
        code: 'hrv',
        name: 'Croatian'
      },
      {
        code: 'hsb',
        name: 'Upper Sorbian'
      },
      {
        code: 'hoop',
        name: 'Hupa'
      },
      {
        code: 'iba',
        name: 'Iban'
      },
      {
        code: 'ibo',
        name: 'Igbo'
      },
      {
        code: 'ice',
        name: 'Icelandic'
      },
      {
        code: 'ido',
        name: 'Ido'
      },
      {
        code: 'iii',
        name: 'Sichuan Yi'
      },
      {
        code: 'ijo',
        name: 'Ijo'
      },
      {
        code: 'iku',
        name: 'Inuktitut'
      },
      {
        code: 'ile',
        name: 'Interlingue'
      },
      {
        code: 'ilo',
        name: 'Iloko'
      },
      {
        code: 'ina',
        name: 'Interlingua (International Auxiliary Language Association)'
      },
      {
        code: 'inc',
        name: 'Indian (Other)'
      },
      {
        code: 'ind',
        name: 'Indonesian'
      },
      {
        code: 'ine',
        name: 'Indo-European (Other)'
      },
      {
        code: 'inh',
        name: 'Ingush'
      },
      {
        code: 'ipk',
        name: 'Inupiaq'
      },
      {
        code: 'ira',
        name: 'Iranian (Other)'
      },
      {
        code: 'iro',
        name: 'Iroquoian Languages'
      },
      {
        code: 'jav',
        name: 'Javanese'
      },
      {
        code: 'jbo',
        name: 'Lojban'
      },
      {
        code: 'jpn',
        name: 'Japanese'
      },
      {
        code: 'jpr',
        name: 'Judeo-Persian'
      },
      {
        code: 'jrb',
        name: 'Judeo-Arabic'
      },
      {
        code: 'kaa',
        name: 'Kara-Kalpak'
      },
      {
        code: 'kab',
        name: 'Kabilski'
      },
      {
        code: 'kac',
        name: 'Kachin'
      },
      {
        code: 'kal',
        name: 'Kalaallisut / Greenlandic'
      },
      {
        code: 'kam',
        name: 'Kamba'
      },
      {
        code: 'kan',
        name: 'Kannada'
      },
      {
        code: 'kar',
        name: 'Karen'
      },
      {
        code: 'kas',
        name: 'Kashmiri'
      },
      {
        code: 'kau',
        name: 'Kanuri'
      },
      {
        code: 'kaw',
        name: 'Kavi'
      },
      {
        code: 'kaz',
        name: 'Kazakh'
      },
      {
        code: 'kbd',
        name: 'Kabardian'
      },
      {
        code: 'kha',
        name: 'Khasi'
      },
      {
        code: 'khi',
        name: 'Khoisan (other)'
      },
      {
        code: 'khm',
        name: 'Khmer'
      },
      {
        code: 'kho',
        name: 'Khotanese'
      },
      {
        code: 'kik',
        name: 'Kikuyu'
      },
      {
        code: 'kin',
        name: 'Kinyarwanda'
      },
      {
        code: 'kir',
        name: 'Kyrgyz'
      },
      {
        code: 'kmb',
        name: 'Kimbundu'
      },
      {
        code: 'kok',
        name: 'Konkani'
      },
      {
        code: 'com',
        name: 'Komi'
      },
      {
        code: 'con',
        name: 'Congo'
      },
      {
        code: 'kor',
        name: 'Korean'
      },
      {
        code: 'kos',
        name: 'Kosraean'
      },
      {
        code: 'kpe',
        name: 'Kpelle'
      },
      {
        code: 'krc',
        name: 'Karachay-Balkar'
      },
      {
        code: 'krl',
        name: 'Karelian'
      },
      {
        code: 'kro',
        name: 'Kru'
      },
      {
        code: 'kru',
        name: 'Kurukh'
      },
      {
        code: 'kua',
        name: 'Kuanyama / Kwanyama'
      },
      {
        code: 'kur',
        name: 'Kurdish'
      },
      {
        code: 'kus',
        name: 'Kusai'
      },
      {
        code: 'kut',
        name: 'Kutenai'
      },
      {
        code: 'lad',
        name: 'Ladino'
      },
      {
        code: 'lah',
        name: 'Lahnda'
      },
      {
        code: 'lam',
        name: 'Lamba'
      },
      {
        code: 'lan',
        name: 'Languq (after 1500)'
      },
      {
        code: 'lao',
        name: 'Lao'
      },
      {
        code: 'lap',
        name: 'Lappish'
      },
      {
        code: 'lat',
        name: 'Latin'
      },
      {
        code: 'lion',
        name: 'Latvian'
      },
      {
        code: 'lez',
        name: 'Lezghian'
      },
      {
        code: 'lim',
        name: 'Limburgan / Limburgish'
      },
      {
        code: 'lin',
        name: 'Lingala'
      },
      {
        code: 'lit',
        name: 'Lithuanian'
      },
      {
        code: 'lol',
        name: 'Mongo'
      },
      {
        code: 'loz',
        name: 'Lozi'
      },
      {
        code: 'ltz',
        name: 'Luxembourgish'
      },
      {
        code: 'lua',
        name: 'Luba-Lulua'
      },
      {
        code: 'lub',
        name: 'Luba-Katanga'
      },
      {
        code: 'lug',
        name: 'Ganda'
      },
      {
        code: 'lui',
        name: 'Luiseno'
      },
      {
        code: 'lun',
        name: 'Lunda'
      },
      {
        code: 'luo',
        name: 'Luo (Kenya and Tanzania)'
      },
      {
        code: 'lus',
        name: 'Lushai'
      },
      {
        code: 'mac',
        name: 'Macedonian'
      },
      {
        code: 'mad',
        name: 'Maduran'
      },
      {
        code: 'mag',
        name: 'Magahi'
      },
      {
        code: 'mah',
        name: 'Maršalski'
      },
      {
        code: 'mai',
        name: 'Maithili'
      },
      {
        code: 'mak',
        name: 'Makasar'
      },
      {
        code: 'mal',
        name: 'Malayalam'
      },
      {
        code: 'man',
        name: 'Mandingo'
      },
      {
        code: 'mao',
        name: 'Maori'
      },
      {
        code: 'map',
        name: 'Austronesian (Other)'
      },
      {
        code: 'mar',
        name: 'Marathi'
      },
      {
        code: 'mass',
        name: 'Masai'
      },
      {
        code: 'max',
        name: 'Mansky'
      },
      {
        code: 'may',
        name: 'Malay'
      },
      {
        code: 'mdf',
        name: 'Moksha'
      },
      {
        code: 'mdr',
        name: 'Mandar'
      },
      {
        code: 'men',
        name: 'Mende'
      },
      {
        code: 'mga',
        name: 'Middle Irish (900-1200)'
      },
      {
        code: 'mic',
        name: 'Mikmak'
      },
      {
        code: 'min',
        name: 'Mingangkabau'
      },
      {
        code: 'mis',
        name: 'Other'
      },
      {
        code: 'mkh',
        name: 'Mon-Khmer (others)'
      },
      {
        code: 'mla',
        name: 'Malagasy'
      },
      {
        code: 'mlt',
        name: 'Maltese'
      },
      {
        code: 'mnc',
        name: 'Manchu'
      },
      {
        code: 'mni',
        name: 'Manipuri'
      },
      {
        code: 'mno',
        name: 'Manobo languages'
      },
      {
        code: 'moh',
        name: 'Mohawk'
      },
      {
        code: 'mon',
        name: 'Mongolian'
      },
      {
        code: 'mos',
        name: 'Mosi'
      },
      {
        code: 'mul',
        name: 'Multilingual'
      },
      {
        code: 'mun',
        name: 'Munda'
      },
      {
        code: 'mus',
        name: 'Creek / Muskogee'
      },
      {
        code: 'mwl',
        name: 'Mirandese'
      },
      {
        code: 'mwr',
        name: 'Marwari'
      },
      {
        code: 'myn',
        name: 'Mayan Languages'
      },
      {
        code: 'myv',
        name: 'Erzya'
      },
      {
        code: 'nah',
        name: 'Nahuatl'
      },
      {
        code: 'nai',
        name: 'North American Indian (Other)'
      },
      {
        code: 'nap',
        name: 'Napolitan'
      },
      {
        code: 'nau',
        name: 'Nauru'
      },
      {
        code: 'nav',
        name: 'Navajo'
      },
      {
        code: 'nbl',
        name: 'Ndebele, South'
      },
      {
        code: 'nde',
        name: 'Ndebele, Northern'
      },
      {
        code: 'ndo',
        name: 'Ndonga'
      },
      {
        code: 'nds',
        name: 'Low German / Low Saxon'
      },
      {
        code: 'nep',
        name: 'Nepali'
      },
      {
        code: 'new',
        name: 'Newari / Nepal Bhasa'
      },
      {
        code: 'nia',
        name: 'Nias'
      },
      {
        code: 'nothing',
        name: 'Nigero-Kordofan (other)'
      },
      {
        code: 'niu',
        name: 'Niuean'
      },
      {
        code: 'nno',
        name: 'Norwegian Nynorsk'
      },
      {
        code: 'nob',
        name: 'Norwegian Bokmal'
      },
      {
        code: 'nog',
        name: 'Legs'
      },
      {
        code: 'non',
        name: 'Norse, Old'
      },
      {
        code: 'nor',
        name: 'Norwegian'
      },
      {
        code: 'nso',
        name: 'Northern Sotho / Pedi / Sepedi'
      },
      {
        code: 'nqo',
        name: 'N Who'
      },
      {
        code: 'nub',
        name: 'Nubian languages'
      },
      {
        code: 'nwc',
        name: 'Classical Newari / Old Newari / Classical Nepal Bhasa'
      },
      {
        code: 'nya',
        name: 'Chichewa / Chewa / Nyanja'
      },
      {
        code: 'nym',
        name: 'Nyamwezi'
      },
      {
        code: 'nyn',
        name: 'Nyankole'
      },
      {
        code: 'nyo',
        name: 'Nyoro'
      },
      {
        code: 'nzi',
        name: 'Nzima'
      },
      {
        code: 'eyes',
        name: 'Occitan / Provençal (after 1500)'
      },
      {
        code: 'oji',
        name: 'Ojibwa'
      },
      {
        code: 'ori',
        name: 'Oriya'
      },
      {
        code: 'orm',
        name: 'Oromo'
      },
      {
        code: 'osa',
        name: 'Osage'
      },
      {
        code: 'oss',
        name: 'Ossetian'
      },
      {
        code: 'ota',
        name: 'Ottoman Turkish (1500-1928)'
      },
      {
        code: 'oto',
        name: 'Ottoman languages'
      },
      {
        code: 'paa',
        name: 'Papuan (Other)'
      },
      {
        code: 'pag',
        name: 'Pangasinan'
      },
      {
        code: 'pal',
        name: 'Pahlavi'
      },
      {
        code: 'pam',
        name: 'Pampanga'
      },
      {
        code: 'pan',
        name: 'Panjabi / Punjabi'
      },
      {
        code: 'pap',
        name: 'Papiamento'
      },
      {
        code: 'pau',
        name: 'Palauan'
      },
      {
        code: 'peo',
        name: 'Old Persian (600 BC-400 AD)'
      },
      {
        code: 'per',
        name: 'Persian'
      },
      {
        code: 'phi',
        name: 'Filipino (Other)'
      },
      {
        code: 'phn',
        name: 'Phoenician'
      },
      {
        code: 'pli',
        name: 'Pali'
      },
      {
        code: 'pol',
        name: 'Polish'
      },
      {
        code: 'mon',
        name: 'Pohnpeian'
      },
      {
        code: 'por',
        name: 'Portuguese'
      },
      {
        code: 'pra',
        name: 'Prakrit languages'
      },
      {
        code: 'pro',
        name: 'Provencal (until 1500)'
      },
      {
        code: 'pus',
        name: 'Pushto'
      },
      {
        code: 'que',
        name: 'Quechua'
      },
      {
        code: 'raj',
        name: 'Rajasthani'
      },
      {
        code: 'rap',
        name: 'Rapanui'
      },
      {
        code: 'rar',
        name: 'Rarotongan'
      },
      {
        code: 'roa',
        name: 'Romance (other)'
      },
      {
        code: 'roh',
        name: 'Romance'
      },
      {
        code: 'rom',
        name: 'Roma'
      },
      {
        code: 'rsi',
        name: 'Rusyn'
      },
      {
        code: 'rum',
        name: 'Romanian'
      },
      {
        code: 'run',
        name: 'Round'
      },
      {
        code: 'rus',
        name: 'Russian'
      },
      {
        code: 'hole',
        name: 'Aromanian'
      },
      {
        code: 'now',
        name: 'Sandawe'
      },
      {
        code: 'sag',
        name: 'Sango'
      },
      {
        code: 'sah',
        name: 'Yakut'
      },
      {
        code: 'sai',
        name: 'South American Indian (Other)'
      },
      {
        code: 'sal',
        name: 'Salic languages'
      },
      {
        code: 'sam',
        name: 'Samaritan Aramaic'
      },
      {
        code: 'san',
        name: 'Sanskrit'
      },
      {
        code: 'sas',
        name: 'Sasak'
      },
      {
        code: 'hour',
        name: 'Santali'
      },
      {
        code: 'sel',
        name: 'Selkupski'
      },
      {
        code: 'sem',
        name: 'Semitic (Other)'
      },
      {
        code: 'sga',
        name: 'Irish, ancient (to 900)'
      },
      {
        code: 'sgn',
        name: 'Sign Languages'
      },
      {
        code: 'shn',
        name: 'Shan'
      },
      {
        code: 'sid',
        name: 'Sidamo'
      },
      {
        code: 'son',
        name: 'Sinhala'
      },
      {
        code: 'sio',
        name: 'Siouan languages'
      },
      {
        code: 'sit',
        name: 'Sino-Tibetan (other)'
      },
      {
        code: 'sla',
        name: 'Slovenian (other)'
      },
      {
        code: 'sma',
        name: 'Southern Sami'
      },
      {
        code: 'sme',
        name: 'Northern Sami'
      },
      {
        code: 'smi',
        name: 'Sami languages (other)'
      },
      {
        code: 'smj',
        name: 'Lule Sami'
      },
      {
        code: 'smn',
        name: 'Inari Sami'
      },
      {
        code: 'smo',
        name: 'Samoan'
      },
      {
        code: 'sms',
        name: 'Skolt Sami'
      },
      {
        code: 'dream',
        name: 'Shona'
      },
      {
        code: 'snd',
        name: 'Sindhi'
      },
      {
        code: 'snk',
        name: 'Soninke'
      },
      {
        code: 'sog',
        name: 'Sogdian'
      },
      {
        code: 'catfish',
        name: 'Somali'
      },
      {
        code: 'dream',
        name: 'Songhai'
      },
      {
        code: 'sot',
        name: 'Sotho, Southern'
      },
      {
        code: 'srd',
        name: 'Sardinian'
      },
      {
        code: 'srr',
        name: 'Serer'
      },
      {
        code: 'srn',
        name: 'Sranan'
      },
      {
        code: 'ssa',
        name: 'Nile-Saharan (others)'
      },
      {
        code: 'suk',
        name: 'Sukuma'
      },
      {
        code: 'sun',
        name: 'Sunda'
      },
      {
        code: 'sus',
        name: 'Susu'
      },
      {
        code: 'sux',
        name: 'Sumerian'
      },
      {
        code: 'swa',
        name: 'Swahili'
      },
      {
        code: 'swe',
        name: 'Swedish'
      },
      {
        code: 'swz',
        name: 'Swazi'
      },
      {
        code: 'cheese',
        name: 'Syrian'
      },
      {
        code: 'syc',
        name: 'Syriac'
      },
      {
        code: 'tah',
        name: 'Tahitian'
      },
      {
        code: 'tai',
        name: 'Tai (others)'
      },
      {
        code: 'there',
        name: 'Tamil'
      },
      {
        code: 'tat',
        name: 'Tatarski'
      },
      {
        code: 'tel',
        name: 'Telugu'
      },
      {
        code: 'them',
        name: 'Timne'
      },
      {
        code: 'ter',
        name: 'Tereno'
      },
      {
        code: 'tet',
        name: 'Tetum'
      },
      {
        code: 'tgk',
        name: 'Tajik'
      },
      {
        code: 'tgl',
        name: 'Tagalog'
      },
      {
        code: 'tha',
        name: 'Thai'
      },
      {
        code: 'tib',
        name: 'Tibetan'
      },
      {
        code: 'tig',
        name: 'Tigers'
      },
      {
        code: 'tir',
        name: 'Tigrinya'
      },
      {
        code: 'tiv',
        name: 'Tiv'
      },
      {
        code: 'tkl',
        name: 'Tokelau'
      },
      {
        code: 'tlh',
        name: 'Klingon'
      },
      {
        code: 'tli',
        name: 'Tlingit'
      },
      {
        code: 'tmh',
        name: 'Tamashek'
      },
      {
        code: 'tog',
        name: 'Tonga (Nyasa)'
      },
      {
        code: 'tsi',
        name: 'Cimšijen'
      },
      {
        code: 'tso',
        name: 'Tsonga'
      },
      {
        code: 'dull',
        name: 'Dull tongues'
      },
      {
        code: 'tour',
        name: 'Turkish'
      },
      {
        code: 'tut',
        name: 'Altaic (other)'
      },
      {
        code: 'tvl',
        name: 'Tuvalu'
      },
      {
        code: 'tyv',
        name: 'Tuvinian'
      },
      {
        code: 'udm',
        name: 'Udmurt'
      },
      {
        code: 'uga',
        name: 'Ugaritic'
      },
      {
        code: 'ukr',
        name: 'Ukrainian'
      },
      {
        code: 'und',
        name: 'Unspecified'
      },
      {
        code: 'urd',
        name: 'Urdu'
      },
      {
        code: 'more',
        name: 'Vietnamese'
      },
      {
        code: 'wel',
        name: 'Welsh'
      },
      {
        code: 'yid',
        name: 'Yiddish'
      }
    ];

  static _coderDT: Coder[] =
    [
      {
        code: '*',
        name: 'Сва грађа',
      },
      {
        code: 'm',
        name: 'Монографски',
      },
      {
        code: 's',
        name: 'Периодични',
      },
      {
        code: 'a',
        name: 'Аналитички',
      },
      {
        code: 'c',
        name: 'Књижевна збирка - нумерисана',
      },
      {
        code: 'd',
        name: 'Изведени радови',
      },
      {
        code: 'e',
        name: 'Књижевна збирка - ненумерисана',
      },
      {
        code: 'r',
        name: 'Разгледнице',
      },
      {
        code: 'z',
        name: 'Збирни',
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderDT_lat: Coder[] =
    [
      {
        code: '*',
        name: 'Sva građa',
      },
      {
        code: 'm',
        name: 'Monografski',
      },
      {
        code: 's',
        name: 'Periodični',
      },
      {
        code: 'a',
        name: 'Analitički',
      },
      {
        code: 'c',
        name: 'Književna zbirka - numerisana',
      },
      {
        code: 'd',
        name: 'Izvedeni radovi',
      },
      {
        code: 'e',
        name: 'Književna zbirka - nenumerisana',
      },
      {
        code: 'r',
        name: 'Razglednice',
      },
      {
        code: 'z',
        name: 'Zbirni',
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderDT_en: Coder[] =
    [
      {
        code: '*',
        name: 'All materials',
      },
      {
        code: 'm',
        name: 'Monographic',
      },
      {
        code: 's',
        name: 'Periodical',
      },
      {
        code: 'a',
        name: 'Analytical',
      },
      {
        code: 'c',
        name: 'Literary collection - numbered',
      },
      {
        code: 'd',
        name: 'Performed works',
      },
      {
        code: 'e',
        name: 'Literary collection - unnumbered',
      },
      {
        code: 'r',
        name: 'Postcards',
      },
      {
        code: 'z',
        name: 'Collective',
      }
    ];

  static _coderCC =
    [
      {
        code: 'a',
        name: 'Библиографије'
      },
      {
        code: 'b',
        name: 'Каталози'
      },
      {
        code: 'c',
        name: 'Казала, индекси'
      },
      {
        code: 'd',
        name: 'Апстракт'
      },
      {
        code: 'e',
        name: 'Речници'
      },
      {
        code: 'f',
        name: 'Енциклопедије'
      },
      {
        code: 'g',
        name: 'Адресари'
      },
      {
        code: 'h',
        name: 'Летописи'
      },
      {
        code: 'i',
        name: 'Статистички прегледи'
      },
      {
        code: 'j',
        name: 'Уџбеници'
      },
      {
        code: 'k',
        name: 'Патентни'
      },
      {
        code: 'l',
        name: 'Стандарди'
      },
      {
        code: 'm',
        name: 'Дисертација, тезе'
      },
      {
        code: 'm1',
        name: 'Мастер рад'
      },
      {
        code: 'm2',
        name: 'Магистарски радови'
      },
      {
        code: 'm3',
        name: 'Специјалистички радови'
      },
      {
        code: 'm4',
        name: 'Хабилитацијски радови'
      },
      {
        code: 'm5',
        name: 'Дипломски радови'
      },
      {
        code: 'm6',
        name: 'Бачелор радови'
      },
      {
        code: 'm7',
        name: 'Дипломски/завршни радови првог степена'
      },
      {
        code: 'm8',
        name: 'Бачелор радови првог степена'
      },
      {
        code: 'm9',
        name: 'Специјалистички радови струковних студија'
      },
      {
        code: 'n',
        name: 'Закони'
      },
      {
        code: 'o',
        name: 'НУмеричке табеле'
      },
      {
        code: 'p',
        name: 'Технички извештај'
      },
      {
        code: 'q',
        name: 'Испитна грађа'
      },
      {
        code: 'r',
        name: 'Истраживачки радови, базична истраживања'
      },
      {
        code: 'r1',
        name: 'Прикази'
      },
      {
        code: 'r2',
        name: 'Научно дело'
      },
      {
        code: 'r3',
        name: 'Претхондно саопштење'
      },
      {
        code: 'r4',
        name: 'Стручно дело'
      },
      {
        code: 'r5',
        name: 'Извештај са конференције'
      },
      {
        code: 'r6',
        name: 'Дело није категорисано'
      },
      {
        code: 's',
        name: 'Уговори'
      },
      {
        code: 's01',
        name: 'Споменице'
      },
      {
        code: 's02',
        name: 'Програми'
      },
      {
        code: 's03',
        name: 'Посебан отисак'
      },
      {
        code: 's04',
        name: 'Сликовнице'
      },
      {
        code: 's05',
        name: 'Брошуре'
      },
      {
        code: 's06',
        name: 'Монографије'
      },
      {
        code: 's07',
        name: 'Хронике'
      },
      {
        code: 's08',
        name: 'Студије'
      },
      {
        code: 's09',
        name: 'Историографија'
      },
      {
        code: 's10',
        name: 'Збирке задатака'
      },
      {
        code: 't',
        name: 'Истраживачки радови, развојна истраживања'
      },
      {
        code: 'u',
        name: 'Правилници'
      },
      {
        code: 'v',
        name: 'Приручници'
      },
      {
        code: 'w',
        name: 'Истраживачки радови, апликацијка истраживања'
      },
      {
        code: 'x1',
        name: 'Атласи'
      },
      {
        code: 'x2',
        name: 'Сепарати'
      },
      {
        code: 'x3',
        name: 'Архивска грађа'
      },
      {
        code: 'x4',
        name: 'Албуми'
      },
      {
        code: 'x5',
        name: 'Водичи'
      },
      {
        code: 'x6',
        name: 'Лексикони'
      },
      {
        code: 'x7',
        name: 'Статути'
      },
      {
        code: 'x8',
        name: 'Антологије'
      },
      {
        code: 'z',
        name: 'Зборници'
      },
      {
        code: 'z1',
        name: 'Стрипови'
      },
      {
        code: 'z2',
        name: 'Остало'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderCC_lat =
    [
      {
        code: 'a',
        name: 'Bibliografije'
      },
      {
        code: 'b',
        name: 'Katalozi'
      },
      {
        code: 'c',
        name: 'Kazala, indeksi'
      },
      {
        code: 'd',
        name: 'Apstrakt'
      },
      {
        code: 'e',
        name: 'Rečnici'
      },
      {
        code: 'f',
        name: 'Enciklopedije'
      },
      {
        code: 'g',
        name: 'Adresari'
      },
      {
        code: 'h',
        name: 'Letopisi'
      },
      {
        code: 'i',
        name: 'Statistički pregledi'
      },
      {
        code: 'j',
        name: 'Udžbenici'
      },
      {
        code: 'k',
        name: 'Patentni'
      },
      {
        code: 'l',
        name: 'Standardi'
      },
      {
        code: 'm',
        name: 'Disertacija, teze'
      },
      {
        code: 'm1',
        name: 'Master rad'
      },
      {
        code: 'm2',
        name: 'Magistarski radovi'
      },
      {
        code: 'm3',
        name: 'Specijalistički radovi'
      },
      {
        code: 'm4',
        name: 'Habilitacijski radovi'
      },
      {
        code: 'm5',
        name: 'Diplomski radovi'
      },
      {
        code: 'm6',
        name: 'Bačelor radovi'
      },
      {
        code: 'm7',
        name: 'Diplomski/završni radovi prvog stepena'
      },
      {
        code: 'm8',
        name: 'Bačelor radovi prvog stepena'
      },
      {
        code: 'm9',
        name: 'Specijalistički radovi strukovnih studija'
      },
      {
        code: 'n',
        name: 'Zakoni'
      },
      {
        code: 'o',
        name: 'NUmeričke tabele'
      },
      {
        code: 'p',
        name: 'Tehnički izveštaj'
      },
      {
        code: 'q',
        name: 'Ispitna građa'
      },
      {
        code: 'r',
        name: 'Istraživački radovi, bazična istraživanja'
      },
      {
        code: 'r1',
        name: 'Prikazi'
      },
      {
        code: 'r2',
        name: 'Naučno delo'
      },
      {
        code: 'r3',
        name: 'Prethondno saopštenje'
      },
      {
        code: 'r4',
        name: 'Stručno delo'
      },
      {
        code: 'r5',
        name: 'Izveštaj sa konferencije'
      },
      {
        code: 'r6',
        name: 'Delo nije kategorisano'
      },
      {
        code: 's',
        name: 'Ugovori'
      },
      {
        code: 's01',
        name: 'Spomenice'
      },
      {
        code: 's02',
        name: 'Programi'
      },
      {
        code: 's03',
        name: 'Poseban otisak'
      },
      {
        code: 's04',
        name: 'Slikovnice'
      },
      {
        code: 's05',
        name: 'Brošure'
      },
      {
        code: 's06',
        name: 'Monografije'
      },
      {
        code: 's07',
        name: 'Hronike'
      },
      {
        code: 's08',
        name: 'Studije'
      },
      {
        code: 's09',
        name: 'Istoriografija'
      },
      {
        code: 's10',
        name: 'Zbirke zadataka'
      },
      {
        code: 't',
        name: 'Istraživački radovi, razvojna istraživanja'
      },
      {
        code: 'u',
        name: 'Pravilnici'
      },
      {
        code: 'v',
        name: 'Priručnici'
      },
      {
        code: 'w',
        name: 'Istraživački radovi, aplikacijka istraživanja'
      },
      {
        code: 'x1',
        name: 'Atlasi'
      },
      {
        code: 'x2',
        name: 'Separati'
      },
      {
        code: 'x3',
        name: 'Arhivska građa'
      },
      {
        code: 'x4',
        name: 'Albumi'
      },
      {
        code: 'x5',
        name: 'Vodiči'
      },
      {
        code: 'x6',
        name: 'Leksikoni'
      },
      {
        code: 'x7',
        name: 'Statuti'
      },
      {
        code: 'x8',
        name: 'Antologije'
      },
      {
        code: 'z',
        name: 'Zbornici'
      },
      {
        code: 'z1',
        name: 'Stripovi'
      },
      {
        code: 'z2',
        name: 'Ostalo'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderCC_en =
    [
      {
        code: 'a',
        name: 'Bibliographies'
      },
      {
        code: 'b',
        name: 'Catalogues'
      },
      {
        code: 'c',
        name: 'Indexes'
      },
      {
        code: 'd',
        name: 'Abstract'
      },
      {
        code: 'e',
        name: 'Dictionaries'
      },
      {
        code: 'f',
        name: 'Encyclopedias'
      },
      {
        code: 'g',
        name: 'Address books'
      },
      {
        code: 'h',
        name: 'Chronicles'
      },
      {
        code: 'i',
        name: 'Statistical reviews'
      },
      {
        code: 'j',
        name: 'Textbooks'
      },
      {
        code: 'k',
        name: 'Patents'
      },
      {
        code: 'l',
        name: 'Standards'
      },
      {
        code: 'm',
        name: 'Dissertation, theses'
      },
      {
        code: 'm1',
        name: 'Master thesis'
      },
      {
        code: 'm2',
        name: 'Master theses'
      },
      {
        code: 'm3',
        name: 'Specialist papers'
      },
      {
        code: 'm4',
        name: 'Habilitation works'
      },
      {
        code: 'm5',
        name: 'Undergraduate theses'
      },
      {
        code: 'm6',
        name: 'Bachelor theses'
      },
      {
        code: 'm7',
        name: 'Undergraduate/final theses of the first degre'
      },
      {
        code: 'm8',
        name: 'Bachelor theses of the first degree'
      },
      {
        code: 'm9',
        name: 'Specialist works of professional studies'
      },
      {
        code: 'n',
        name: 'Laws'
      },
      {
        code: 'o',
        name: 'Numerical tables'
      },
      {
        code: 'p',
        name: 'Technical report'
      },
      {
        code: 'q',
        name: 'Exam material'
      },
      {
        code: 'r',
        name: 'Research papers, basic research'
      },
      {
        code: 'r1',
        name: 'Reviews'
      },
      {
        code: 'r2',
        name: 'Scientific work'
      },
      {
        code: 'r3',
        name: 'Previous notification'
      },
      {
        code: 'r4',
        name: 'Professional work'
      },
      {
        code: 'r5',
        name: 'Conference report'
      },
      {
        code: 'r6',
        name: 'The book is not categorized'
      },
      {
        code: 's',
        name: 'Contracts'
      },
      {
        code: 's01',
        name: 'Commemorative works'
      },
      {
        code: 's02',
        name: 'Programs'
      },
      {
        code: 's03',
        name: 'Special print'
      },
      {
        code: 's04',
        name: 'Picture books'
      },
      {
        code: 's05',
        name: 'Brochures'
      },
      {
        code: 's06',
        name: 'Monographs'
      },
      {
        code: 's07',
        name: 'Chronicles'
      },
      {
        code: 's08',
        name: 'Studies'
      },
      {
        code: 's09',
        name: 'Historiography'
      },
      {
        code: 's10',
        name: 'Exercise book'
      },
      {
        code: 't',
        name: 'Research works, developmental research'
      },
      {
        code: 'u',
        name: 'Rulebooks'
      },
      {
        code: 'v',
        name: 'Manuals'
      },
      {
        code: 'w',
        name: 'Research papers, application researchа'
      },
      {
        code: 'x1',
        name: 'Atlases'
      },
      {
        code: 'x2',
        name: 'Separates'
      },
      {
        code: 'x3',
        name: 'Archive material'
      },
      {
        code: 'x4',
        name: 'Albums'
      },
      {
        code: 'x5',
        name: 'Guides'
      },
      {
        code: 'x6',
        name: 'Lexicons'
      },
      {
        code: 'x7',
        name: 'Statutes'
      },
      {
        code: 'x8',
        name: 'Anthologies'
      },
      {
        code: 'z',
        name: 'Proceedings'
      },
      {
        code: 'z1',
        name: 'Comics'
      },
      {
        code: 'z2',
        name: 'Other'
      }
    ];

  static _coderCO =
    [
      {
        code: 'KS',
        name: 'Краљевина Србија'
      },
      {
        code: 'KSHS',
        name: 'Краљевина Срба, Хрвата и Словенаца'
      },
      {
        code: 'abw',
        name: 'Аруба'
      },
      {
        code: 'afg',
        name: 'Афганистан'
      },
      {
        code: 'ago',
        name: 'Ангола'
      },
      {
        code: 'aia',
        name: 'Ангуилла'
      },
      {
        code: 'alb',
        name: 'Албанија'
      },
      {
        code: 'and',
        name: 'Андора'
      },
      {
        code: 'ant',
        name: 'Холандски Антили'
      },
      {
        code: 'are',
        name: 'Уједињени Арапски Емирати'
      },
      {
        code: 'arg',
        name: 'Аргентина'
      },
      {
        code: 'asm',
        name: 'Америчка самоа'
      },
      {
        code: 'ata',
        name: 'Антарктик (територија јужно од 60-тог степена ЈГШ)'
      },
      {
        code: 'atf',
        name: 'Јужне француске територије'
      },
      {
        code: 'atg',
        name: 'Антигва и Барбуда'
      },
      {
        code: 'atn',
        name: 'Дроннинг Моуд Ланд'
      },
      {
        code: 'aus',
        name: 'Аустралија'
      },
      {
        code: 'aut',
        name: 'Аустрија'
      },
      {
        code: 'aze',
        name: 'Азербејџан'
      },
      {
        code: 'bdi',
        name: 'Бурунди'
      },
      {
        code: 'bel',
        name: 'Белгија'
      },
      {
        code: 'ben',
        name: 'Бенин'
      },
      {
        code: 'bfa',
        name: 'Буркина Фасо'
      },
      {
        code: 'bgd',
        name: 'Бангладеш'
      },
      {
        code: 'bgr',
        name: 'Бугарска'
      },
      {
        code: 'bhr',
        name: 'Бахреин'
      },
      {
        code: 'bhs',
        name: 'Бахами'
      },
      {
        code: 'bih',
        name: 'Босна и Херцеговина'
      },
      {
        code: 'blr',
        name: 'Белорусија'
      },
      {
        code: 'blz',
        name: 'Белизе'
      },
      {
        code: 'bmu',
        name: 'Бермуда'
      },
      {
        code: 'bol',
        name: 'Боливија'
      },
      {
        code: 'bra',
        name: 'Бразил'
      },
      {
        code: 'brb',
        name: 'Барбадос'
      },
      {
        code: 'brn',
        name: 'Брунеј'
      },
      {
        code: 'bth',
        name: 'Бутан'
      },
      {
        code: 'bur',
        name: 'Бурма'
      },
      {
        code: 'bvt',
        name: 'Боувет Исланд (Боуветоyа)'
      },
      {
        code: 'bwa',
        name: 'Боцвана'
      },
      {
        code: 'bys',
        name: 'Бјелорусија ССР'
      },
      {
        code: 'caf',
        name: 'Централноафричка Република'
      },
      {
        code: 'can',
        name: 'Канада'
      },
      {
        code: 'cck',
        name: 'Цоцос (Кеелинг) Исландс'
      },
      {
        code: 'che',
        name: 'Швајцарска'
      },
      {
        code: 'chl',
        name: 'Чиле'
      },
      {
        code: 'chn',
        name: 'Кина'
      },
      {
        code: 'civ',
        name: 'Обала Слоноваче'
      },
      {
        code: 'cmr',
        name: 'Камерун'
      },
      {
        code: 'cod',
        name: 'Демократска Република Конго'
      },
      {
        code: 'cog',
        name: 'Народна Република Конго'
      },
      {
        code: 'cok',
        name: 'Цоок Исландс'
      },
      {
        code: 'col',
        name: 'Колумбија'
      },
      {
        code: 'com',
        name: 'Цоморос'
      },
      {
        code: 'cpv',
        name: 'Зеленортска Острва'
      },
      {
        code: 'cri',
        name: 'Костарика'
      },
      {
        code: 'csk',
        name: 'Чехословачка'
      },
      {
        code: 'cte',
        name: 'Цантон анд Ендербурy Исландс'
      },
      {
        code: 'cub',
        name: 'Куба'
      },
      {
        code: 'cxr',
        name: 'Божићно Острво'
      },
      {
        code: 'cym',
        name: 'Кајманска Острва'
      },
      {
        code: 'cyp',
        name: 'Кипар'
      },
      {
        code: 'cze',
        name: 'Чешка Република'
      },
      {
        code: 'ddr',
        name: 'Немачка Демократска Република'
      },
      {
        code: 'deu',
        name: 'Савезна Република Немачка'
      },
      {
        code: 'dji',
        name: 'Џибути'
      },
      {
        code: 'dma',
        name: 'Доминика'
      },
      {
        code: 'dnk',
        name: 'Данска'
      },
      {
        code: 'dom',
        name: 'Доминиканска Република'
      },
      {
        code: 'dza',
        name: 'Алжир'
      },
      {
        code: 'ecu',
        name: 'Еквадор'
      },
      {
        code: 'egy',
        name: 'Египат'
      },
      {
        code: 'eri',
        name: 'Еритреја'
      },
      {
        code: 'esh',
        name: 'Западна Сахара'
      },
      {
        code: 'esp',
        name: 'Шпанија'
      },
      {
        code: 'est',
        name: 'Естонија'
      },
      {
        code: 'eth',
        name: 'Етиопија'
      },
      {
        code: 'fin',
        name: 'Финска'
      },
      {
        code: 'fji',
        name: 'Фији'
      },
      {
        code: 'flk',
        name: 'Фолкландска Острва (Малвинас)'
      },
      {
        code: 'fra',
        name: 'Француска'
      },
      {
        code: 'fro',
        name: 'Фарска Острва'
      },
      {
        code: 'fsm',
        name: 'Микронезија'
      },
      {
        code: 'gab',
        name: 'Габон'
      },
      {
        code: 'gbr',
        name: 'Велика Британија'
      },
      {
        code: 'geo',
        name: 'Грузија'
      },
      {
        code: 'gha',
        name: 'Гана'
      },
      {
        code: 'gib',
        name: 'Гибралтар'
      },
      {
        code: 'gin',
        name: 'Гвинеја'
      },
      {
        code: 'glp',
        name: 'Гваделупе'
      },
      {
        code: 'gmb',
        name: 'Гамбиа'
      },
      {
        code: 'gnb',
        name: 'Гвинеја-Бисау'
      },
      {
        code: 'gnq',
        name: 'Екваторијална Гвинеја'
      },
      {
        code: 'grc',
        name: 'Грчка'
      },
      {
        code: 'grd',
        name: 'Гренада'
      },
      {
        code: 'grl',
        name: 'Гренланд'
      },
      {
        code: 'gtm',
        name: 'Гватемала'
      },
      {
        code: 'guf',
        name: 'Француска Гвајана'
      },
      {
        code: 'gum',
        name: 'Гуам'
      },
      {
        code: 'guy',
        name: 'Гвајана'
      },
      {
        code: 'hkg',
        name: 'Хонг Конг'
      },
      {
        code: 'hmd',
        name: 'Хеард анд МЦ Доналд Исландс'
      },
      {
        code: 'hnd',
        name: 'Хондурас'
      },
      {
        code: 'hrv',
        name: 'Хрватска'
      },
      {
        code: 'hti',
        name: 'Хаити'
      },
      {
        code: 'hun',
        name: 'Мађарска'
      },
      {
        code: 'idn',
        name: 'Индонезија'
      },
      {
        code: 'ind',
        name: 'Индија'
      },
      {
        code: 'iot',
        name: 'Бритисх Индиан Оцеан Территорy (Цхагос Арцхипелаго)'
      },
      {
        code: 'irl',
        name: 'Ирска'
      },
      {
        code: 'irn',
        name: 'Иран'
      },
      {
        code: 'irq',
        name: 'Ирак'
      },
      {
        code: 'isl',
        name: 'Исланд'
      },
      {
        code: 'isr',
        name: 'Израел'
      },
      {
        code: 'ita',
        name: 'Италија'
      },
      {
        code: 'jam',
        name: 'Јамајка'
      },
      {
        code: 'jor',
        name: 'Јордан'
      },
      {
        code: 'jpn',
        name: 'Јапан'
      },
      {
        code: 'jtn',
        name: 'Јохнстон Исланд'
      },
      {
        code: 'kaz',
        name: 'Казахстан'
      },
      {
        code: 'ken',
        name: 'Кенија'
      },
      {
        code: 'kgz',
        name: 'Киргистан'
      },
      {
        code: 'khm',
        name: 'Кампучија (Камбоџа)'
      },
      {
        code: 'kna',
        name: 'Ст. Киттс анд Невис'
      },
      {
        code: 'kor',
        name: 'Кореја, Република (ЈуÅ¾на)'
      },
      {
        code: 'kwt',
        name: 'Кувајт'
      },
      {
        code: 'lao',
        name: 'Лаос'
      },
      {
        code: 'lbn',
        name: 'Либан'
      },
      {
        code: 'lbr',
        name: 'Либерија'
      },
      {
        code: 'lby',
        name: 'Либија'
      },
      {
        code: 'lca',
        name: 'Света Луција'
      },
      {
        code: 'lie',
        name: 'Лихтенштајн'
      },
      {
        code: 'lki',
        name: 'Шри Ланка'
      },
      {
        code: 'lso',
        name: 'Лесото'
      },
      {
        code: 'ltu',
        name: 'Литванија'
      },
      {
        code: 'lux',
        name: 'Луксембург'
      },
      {
        code: 'lva',
        name: 'Летонија'
      },
      {
        code: 'mac',
        name: 'Макао'
      },
      {
        code: 'mar',
        name: 'Мароко'
      },
      {
        code: 'mco',
        name: 'Монако'
      },
      {
        code: 'mda',
        name: 'Молдавија'
      },
      {
        code: 'mdg',
        name: 'Мадагаскар'
      },
      {
        code: 'mdv',
        name: 'Малдиви'
      },
      {
        code: 'mex',
        name: 'Мексико'
      },
      {
        code: 'mhl',
        name: 'Маршалска Острва'
      },
      {
        code: 'mid',
        name: 'Мидwаy Исландс'
      },
      {
        code: 'mkd',
        name: 'Македонија, Бивша Југословенска Република'
      },
      {
        code: 'mli',
        name: 'Мали'
      },
      {
        code: 'mlt',
        name: 'Малта'
      },
      {
        code: 'mmr',
        name: 'Мyанмар'
      },
      {
        code: 'mng',
        name: 'Монголија'
      },
      {
        code: 'mne',
        name: 'Црна гора'
      },
      {
        code: 'mnp',
        name: 'Нотхерн Мариана Исландс'
      },
      {
        code: 'moz',
        name: 'Мозамбик'
      },
      {
        code: 'mrt',
        name: 'Мауританиа'
      },
      {
        code: 'msr',
        name: 'Монтсеррат'
      },
      {
        code: 'mtq',
        name: 'Мартиник'
      },
      {
        code: 'mus',
        name: 'Маурицијус'
      },
      {
        code: 'mwi',
        name: 'Малави'
      },
      {
        code: 'mys',
        name: 'Малезија'
      },
      {
        code: 'myt',
        name: 'Маyотте'
      },
      {
        code: 'nam',
        name: 'Намбија'
      },
      {
        code: 'ncl',
        name: 'Нова Каледонија'
      },
      {
        code: 'ner',
        name: 'Нигер'
      },
      {
        code: 'nfk',
        name: 'Норфолк Исланд'
      },
      {
        code: 'nga',
        name: 'Нигерија'
      },
      {
        code: 'nic',
        name: 'Никарагва'
      },
      {
        code: 'niu',
        name: 'Ниуе'
      },
      {
        code: 'nld',
        name: 'Холандија'
      },
      {
        code: 'nor',
        name: 'Норвешка'
      },
      {
        code: 'npl',
        name: 'Непал'
      },
      {
        code: 'nru',
        name: 'Науру'
      },
      {
        code: 'ntz',
        name: 'Неутрал Зоне'
      },
      {
        code: 'nzl',
        name: 'Нови Зеланд'
      },
      {
        code: 'omn',
        name: 'Оман'
      },
      {
        code: 'pak',
        name: 'Пакистан'
      },
      {
        code: 'pan',
        name: 'Панама'
      },
      {
        code: 'pci',
        name: 'Пацифиц Исландс (труст территорy)'
      },
      {
        code: 'pcn',
        name: 'Питцаирн Исланд'
      },
      {
        code: 'per',
        name: 'Перу'
      },
      {
        code: 'phl',
        name: 'Филипини'
      },
      {
        code: 'plw',
        name: 'Палау'
      },
      {
        code: 'png',
        name: 'Папуа Неw Гуинеа'
      },
      {
        code: 'pol',
        name: 'Пољска'
      },
      {
        code: 'pri',
        name: 'Порторико'
      },
      {
        code: 'prk',
        name: 'Кореја, Демократска Народна Република'
      },
      {
        code: 'prt',
        name: 'Португал'
      },
      {
        code: 'pry',
        name: 'Парагвај'
      },
      {
        code: 'pus',
        name: 'Унитед Статес Мисцелланеоус Пацифиц Исландс'
      },
      {
        code: 'pyf',
        name: 'Француска Полинезија'
      },
      {
        code: 'qat',
        name: 'Катар'
      },
      {
        code: 'reu',
        name: 'Реунион'
      },
      {
        code: 'rom',
        name: 'Румунија'
      },
      {
        code: 'rus',
        name: 'Русија'
      },
      {
        code: 'rwa',
        name: 'Руанда'
      },
      {
        code: 'sau',
        name: 'Саудијска Арабија'
      },
      {
        code: 'scg',
        name: 'Србија и Црна Гора'
      },
      {
        code: 'sdn',
        name: 'Судан'
      },
      {
        code: 'sen',
        name: 'Сенегал'
      },
      {
        code: 'sgp',
        name: 'Сингапур'
      },
      {
        code: 'sgs',
        name: 'Соутх Георгиа анд тхе Соутх Сандwицх Исландс'
      },
      {
        code: 'shn',
        name: 'Ст. Хелена'
      },
      {
        code: 'sjm',
        name: 'Свалбард анд Јан Маyен Исландс'
      },
      {
        code: 'slb',
        name: 'Соломонска Острва'
      },
      {
        code: 'sle',
        name: 'Сијера Леоне'
      },
      {
        code: 'slv',
        name: 'Ел Салвадор'
      },
      {
        code: 'smr',
        name: 'Сан Марино'
      },
      {
        code: 'som',
        name: 'Сомалиа'
      },
      {
        code: 'spm',
        name: 'Ст. Пиерре анд Миqуелон'
      },
      {
        code: 'srb',
        name: 'Србија'
      },
      {
        code: 'stp',
        name: 'Сао Томе и Принципе'
      },
      {
        code: 'sun',
        name: 'СССР'
      },
      {
        code: 'sur',
        name: 'Суринаме'
      },
      {
        code: 'svk',
        name: 'Словачка'
      },
      {
        code: 'svn',
        name: 'Словенија'
      },
      {
        code: 'swe',
        name: 'Шведска'
      },
      {
        code: 'swz',
        name: 'Свазиленд'
      },
      {
        code: 'syc',
        name: 'Сејшели'
      },
      {
        code: 'syr',
        name: 'Сирија'
      },
      {
        code: 'tca',
        name: 'Туркс анд Цаицос Исландс'
      },
      {
        code: 'tcd',
        name: 'Чад'
      },
      {
        code: 'tgo',
        name: 'Того'
      },
      {
        code: 'tha',
        name: 'Тајланд'
      },
      {
        code: 'tjk',
        name: 'Таџикистан'
      },
      {
        code: 'tkl',
        name: 'Токелау'
      },
      {
        code: 'tkm',
        name: 'Туркменистан'
      },
      {
        code: 'tls',
        name: 'Тимор-Лесте'
      },
      {
        code: 'tmp',
        name: 'Источни Тимор'
      },
      {
        code: 'ton',
        name: 'Тонга'
      },
      {
        code: 'tto',
        name: 'Тринидад анд Тобаго'
      },
      {
        code: 'tun',
        name: 'Тунис'
      },
      {
        code: 'tur',
        name: 'Турска'
      },
      {
        code: 'tuv',
        name: 'Тивалу'
      },
      {
        code: 'twn',
        name: 'Тајван'
      },
      {
        code: 'tza',
        name: 'Танзанија'
      },
      {
        code: 'uga',
        name: 'Уганда'
      },
      {
        code: 'ukr',
        name: 'Украјина'
      },
      {
        code: 'umi',
        name: 'Унитед Статес Минор Оутлyинг Исландс'
      },
      {
        code: 'ury',
        name: 'Уругвај'
      },
      {
        code: 'usa',
        name: 'Сједињене Америчке Државе'
      },
      {
        code: 'uzb',
        name: 'Узбекистан'
      },
      {
        code: 'vat',
        name: 'Ватикан'
      },
      {
        code: 'vct',
        name: 'Саинт Винцет анд тхе Гренадинес'
      },
      {
        code: 'ven',
        name: 'Венецуела'
      },
      {
        code: 'vgb',
        name: 'Бритисх Виргин Исландс'
      },
      {
        code: 'vir',
        name: 'Унитед Статес Виргин Исландс'
      },
      {
        code: 'vnm',
        name: 'Вијетнам'
      },
      {
        code: 'vut',
        name: 'Вануату'
      },
      {
        code: 'wak',
        name: 'Wаке Исланд'
      },
      {
        code: 'wlf',
        name: 'Wаллис анд Футуна Исландс'
      },
      {
        code: 'wsm',
        name: 'Самоа'
      },
      {
        code: 'yem',
        name: 'Јемен'
      },
      {
        code: 'ymd',
        name: 'Јемен, Демократска Република'
      },
      {
        code: 'yug',
        name: 'Југославија'
      },
      {
        code: 'zaf',
        name: 'Соутх Африца'
      },
      {
        code: 'zar',
        name: 'Заир'
      },
      {
        code: 'zmb',
        name: 'Замбија'
      },
      {
        code: 'zwe',
        name: 'Зимбабве'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderCO_lat =
    [
      {
        code: 'KS',
        name: 'Kraljevina Srbija'
      },
      {
        code: 'KSHS',
        name: 'Kraljevina Srba, Hrvata i Slovenaca'
      },
      {
        code: 'abw',
        name: 'Aruba'
      },
      {
        code: 'afg',
        name: 'Afganistan'
      },
      {
        code: 'ago',
        name: 'Angola'
      },
      {
        code: 'aia',
        name: 'Anguilla'
      },
      {
        code: 'alb',
        name: 'Albanija'
      },
      {
        code: 'and',
        name: 'Andora'
      },
      {
        code: 'ant',
        name: 'Holandski Antili'
      },
      {
        code: 'are',
        name: 'Ujedinjeni Arapski Emirati'
      },
      {
        code: 'arg',
        name: 'Argentina'
      },
      {
        code: 'asm',
        name: 'Američka samoa'
      },
      {
        code: 'ata',
        name: 'Antarktik (teritorija južno od 60-tog stepena JGŠ)'
      },
      {
        code: 'atf',
        name: 'Južne francuske teritorije'
      },
      {
        code: 'atg',
        name: 'Antigva i Barbuda'
      },
      {
        code: 'atn',
        name: 'Dronning Moud Land'
      },
      {
        code: 'aus',
        name: 'Australija'
      },
      {
        code: 'aut',
        name: 'Austrija'
      },
      {
        code: 'aze',
        name: 'Azerbejdžan'
      },
      {
        code: 'bdi',
        name: 'Burundi'
      },
      {
        code: 'bel',
        name: 'Belgija'
      },
      {
        code: 'ben',
        name: 'Benin'
      },
      {
        code: 'bfa',
        name: 'Burkina Faso'
      },
      {
        code: 'bgd',
        name: 'Bangladeš'
      },
      {
        code: 'bgr',
        name: 'Bugarska'
      },
      {
        code: 'bhr',
        name: 'Bahrein'
      },
      {
        code: 'bhs',
        name: 'Bahami'
      },
      {
        code: 'bih',
        name: 'Bosna i Hercegovina'
      },
      {
        code: 'blr',
        name: 'Belorusija'
      },
      {
        code: 'blz',
        name: 'Belize'
      },
      {
        code: 'bmu',
        name: 'Bermuda'
      },
      {
        code: 'bol',
        name: 'Bolivija'
      },
      {
        code: 'bra',
        name: 'Brazil'
      },
      {
        code: 'brb',
        name: 'Barbados'
      },
      {
        code: 'brn',
        name: 'Brunej'
      },
      {
        code: 'bth',
        name: 'Butan'
      },
      {
        code: 'bur',
        name: 'Burma'
      },
      {
        code: 'bvt',
        name: 'Bouvet Island (Bouvetoya)'
      },
      {
        code: 'bwa',
        name: 'Bocvana'
      },
      {
        code: 'bys',
        name: 'Bjelorusija SSR'
      },
      {
        code: 'caf',
        name: 'Centralnoafrička Republika'
      },
      {
        code: 'can',
        name: 'Kanada'
      },
      {
        code: 'cck',
        name: 'Cocos (Keeling) Islands'
      },
      {
        code: 'che',
        name: 'Švajcarska'
      },
      {
        code: 'chl',
        name: 'Čile'
      },
      {
        code: 'chn',
        name: 'Kina'
      },
      {
        code: 'civ',
        name: 'Obala Slonovače'
      },
      {
        code: 'cmr',
        name: 'Kamerun'
      },
      {
        code: 'cod',
        name: 'Demokratska Republika Kongo'
      },
      {
        code: 'cog',
        name: 'Narodna Republika Kongo'
      },
      {
        code: 'cok',
        name: 'Cook Islands'
      },
      {
        code: 'col',
        name: 'Kolumbija'
      },
      {
        code: 'com',
        name: 'Comoros'
      },
      {
        code: 'cpv',
        name: 'Zelenortska Ostrva'
      },
      {
        code: 'cri',
        name: 'Kostarika'
      },
      {
        code: 'csk',
        name: 'Čehoslovačka'
      },
      {
        code: 'cte',
        name: 'Canton and Enderbury Islands'
      },
      {
        code: 'cub',
        name: 'Kuba'
      },
      {
        code: 'cxr',
        name: 'Božićno Ostrvo'
      },
      {
        code: 'cym',
        name: 'Kajmanska Ostrva'
      },
      {
        code: 'cyp',
        name: 'Kipar'
      },
      {
        code: 'cze',
        name: 'Češka Republika'
      },
      {
        code: 'ddr',
        name: 'Nemačka Demokratska Republika'
      },
      {
        code: 'deu',
        name: 'Savezna Republika Nemačka'
      },
      {
        code: 'dji',
        name: 'Džibuti'
      },
      {
        code: 'dma',
        name: 'Dominika'
      },
      {
        code: 'dnk',
        name: 'Danska'
      },
      {
        code: 'dom',
        name: 'Dominikanska Republika'
      },
      {
        code: 'dza',
        name: 'Alžir'
      },
      {
        code: 'ecu',
        name: 'Ekvador'
      },
      {
        code: 'egy',
        name: 'Egipat'
      },
      {
        code: 'eri',
        name: 'Eritreja'
      },
      {
        code: 'esh',
        name: 'Zapadna Sahara'
      },
      {
        code: 'esp',
        name: 'Španija'
      },
      {
        code: 'est',
        name: 'Estonija'
      },
      {
        code: 'eth',
        name: 'Etiopija'
      },
      {
        code: 'fin',
        name: 'Finska'
      },
      {
        code: 'fji',
        name: 'Fiji'
      },
      {
        code: 'flk',
        name: 'Folklandska Ostrva (Malvinas)'
      },
      {
        code: 'fra',
        name: 'Francuska'
      },
      {
        code: 'fro',
        name: 'Farska Ostrva'
      },
      {
        code: 'fsm',
        name: 'Mikronezija'
      },
      {
        code: 'gab',
        name: 'Gabon'
      },
      {
        code: 'gbr',
        name: 'Velika Britanija'
      },
      {
        code: 'geo',
        name: 'Gruzija'
      },
      {
        code: 'gha',
        name: 'Gana'
      },
      {
        code: 'gib',
        name: 'Gibraltar'
      },
      {
        code: 'gin',
        name: 'Gvineja'
      },
      {
        code: 'glp',
        name: 'Gvadelupe'
      },
      {
        code: 'gmb',
        name: 'Gambia'
      },
      {
        code: 'gnb',
        name: 'Gvineja-Bisau'
      },
      {
        code: 'gnq',
        name: 'Ekvatorijalna Gvineja'
      },
      {
        code: 'grc',
        name: 'Grčka'
      },
      {
        code: 'grd',
        name: 'Grenada'
      },
      {
        code: 'grl',
        name: 'Grenland'
      },
      {
        code: 'gtm',
        name: 'Gvatemala'
      },
      {
        code: 'guf',
        name: 'Francuska Gvajana'
      },
      {
        code: 'gum',
        name: 'Guam'
      },
      {
        code: 'guy',
        name: 'Gvajana'
      },
      {
        code: 'hkg',
        name: 'Hong Kong'
      },
      {
        code: 'hmd',
        name: 'Heard and MC Donald Islands'
      },
      {
        code: 'hnd',
        name: 'Honduras'
      },
      {
        code: 'hrv',
        name: 'Hrvatska'
      },
      {
        code: 'hti',
        name: 'Haiti'
      },
      {
        code: 'hun',
        name: 'Mađarska'
      },
      {
        code: 'idn',
        name: 'Indonezija'
      },
      {
        code: 'ind',
        name: 'Indija'
      },
      {
        code: 'iot',
        name: 'British Indian Ocean Territory (Chagos Archipelago)'
      },
      {
        code: 'irl',
        name: 'Irska'
      },
      {
        code: 'irn',
        name: 'Iran'
      },
      {
        code: 'irq',
        name: 'Irak'
      },
      {
        code: 'isl',
        name: 'Island'
      },
      {
        code: 'isr',
        name: 'Izrael'
      },
      {
        code: 'ita',
        name: 'Italija'
      },
      {
        code: 'jam',
        name: 'Jamajka'
      },
      {
        code: 'jor',
        name: 'Jordan'
      },
      {
        code: 'jpn',
        name: 'Japan'
      },
      {
        code: 'jtn',
        name: 'Johnston Island'
      },
      {
        code: 'kaz',
        name: 'Kazahstan'
      },
      {
        code: 'ken',
        name: 'Kenija'
      },
      {
        code: 'kgz',
        name: 'Kirgistan'
      },
      {
        code: 'khm',
        name: 'Kampučija (Kambodža)'
      },
      {
        code: 'kna',
        name: 'St. Kitts and Nevis'
      },
      {
        code: 'kor',
        name: 'Koreja, Republika (JuÅ¾na)'
      },
      {
        code: 'kwt',
        name: 'Kuvajt'
      },
      {
        code: 'lao',
        name: 'Laos'
      },
      {
        code: 'lbn',
        name: 'Liban'
      },
      {
        code: 'lbr',
        name: 'Liberija'
      },
      {
        code: 'lby',
        name: 'Libija'
      },
      {
        code: 'lca',
        name: 'Sveta Lucija'
      },
      {
        code: 'lie',
        name: 'Lihtenštajn'
      },
      {
        code: 'lki',
        name: 'Šri Lanka'
      },
      {
        code: 'lso',
        name: 'Lesoto'
      },
      {
        code: 'ltu',
        name: 'Litvanija'
      },
      {
        code: 'lux',
        name: 'Luksemburg'
      },
      {
        code: 'lva',
        name: 'Letonija'
      },
      {
        code: 'mac',
        name: 'Makao'
      },
      {
        code: 'mar',
        name: 'Maroko'
      },
      {
        code: 'mco',
        name: 'Monako'
      },
      {
        code: 'mda',
        name: 'Moldavija'
      },
      {
        code: 'mdg',
        name: 'Madagaskar'
      },
      {
        code: 'mdv',
        name: 'Maldivi'
      },
      {
        code: 'mex',
        name: 'Meksiko'
      },
      {
        code: 'mhl',
        name: 'Maršalska Ostrva'
      },
      {
        code: 'mid',
        name: 'Midway Islands'
      },
      {
        code: 'mkd',
        name: 'Makedonija, Bivša Jugoslovenska Republika'
      },
      {
        code: 'mli',
        name: 'Mali'
      },
      {
        code: 'mlt',
        name: 'Malta'
      },
      {
        code: 'mmr',
        name: 'Myanmar'
      },
      {
        code: 'mng',
        name: 'Mongolija'
      },
      {
        code: 'mne',
        name: 'Crna gora'
      },
      {
        code: 'mnp',
        name: 'Nothern Mariana Islands'
      },
      {
        code: 'moz',
        name: 'Mozambik'
      },
      {
        code: 'mrt',
        name: 'Mauritania'
      },
      {
        code: 'msr',
        name: 'Montserrat'
      },
      {
        code: 'mtq',
        name: 'Martinik'
      },
      {
        code: 'mus',
        name: 'Mauricijus'
      },
      {
        code: 'mwi',
        name: 'Malavi'
      },
      {
        code: 'mys',
        name: 'Malezija'
      },
      {
        code: 'myt',
        name: 'Mayotte'
      },
      {
        code: 'nam',
        name: 'Nambija'
      },
      {
        code: 'ncl',
        name: 'Nova Kaledonija'
      },
      {
        code: 'ner',
        name: 'Niger'
      },
      {
        code: 'nfk',
        name: 'Norfolk Island'
      },
      {
        code: 'nga',
        name: 'Nigerija'
      },
      {
        code: 'nic',
        name: 'Nikaragva'
      },
      {
        code: 'niu',
        name: 'Niue'
      },
      {
        code: 'nld',
        name: 'Holandija'
      },
      {
        code: 'nor',
        name: 'Norveška'
      },
      {
        code: 'npl',
        name: 'Nepal'
      },
      {
        code: 'nru',
        name: 'Nauru'
      },
      {
        code: 'ntz',
        name: 'Neutral Zone'
      },
      {
        code: 'nzl',
        name: 'Novi Zeland'
      },
      {
        code: 'omn',
        name: 'Oman'
      },
      {
        code: 'pak',
        name: 'Pakistan'
      },
      {
        code: 'pan',
        name: 'Panama'
      },
      {
        code: 'pci',
        name: 'Pacific Islands (trust territory)'
      },
      {
        code: 'pcn',
        name: 'Pitcairn Island'
      },
      {
        code: 'per',
        name: 'Peru'
      },
      {
        code: 'phl',
        name: 'Filipini'
      },
      {
        code: 'plw',
        name: 'Palau'
      },
      {
        code: 'png',
        name: 'Papua New Guinea'
      },
      {
        code: 'pol',
        name: 'Poljska'
      },
      {
        code: 'pri',
        name: 'Portoriko'
      },
      {
        code: 'prk',
        name: 'Koreja, Demokratska Narodna Republika'
      },
      {
        code: 'prt',
        name: 'Portugal'
      },
      {
        code: 'pry',
        name: 'Paragvaj'
      },
      {
        code: 'pus',
        name: 'United States Miscellaneous Pacific Islands'
      },
      {
        code: 'pyf',
        name: 'Francuska Polinezija'
      },
      {
        code: 'qat',
        name: 'Katar'
      },
      {
        code: 'reu',
        name: 'Reunion'
      },
      {
        code: 'rom',
        name: 'Rumunija'
      },
      {
        code: 'rus',
        name: 'Rusija'
      },
      {
        code: 'rwa',
        name: 'Ruanda'
      },
      {
        code: 'sau',
        name: 'Saudijska Arabija'
      },
      {
        code: 'scg',
        name: 'Srbija i Crna Gora'
      },
      {
        code: 'sdn',
        name: 'Sudan'
      },
      {
        code: 'sen',
        name: 'Senegal'
      },
      {
        code: 'sgp',
        name: 'Singapur'
      },
      {
        code: 'sgs',
        name: 'South Georgia and the South Sandwich Islands'
      },
      {
        code: 'shn',
        name: 'St. Helena'
      },
      {
        code: 'sjm',
        name: 'Svalbard and Jan Mayen Islands'
      },
      {
        code: 'slb',
        name: 'Solomonska Ostrva'
      },
      {
        code: 'sle',
        name: 'Sijera Leone'
      },
      {
        code: 'slv',
        name: 'El Salvador'
      },
      {
        code: 'smr',
        name: 'San Marino'
      },
      {
        code: 'som',
        name: 'Somalia'
      },
      {
        code: 'spm',
        name: 'St. Pierre and Miquelon'
      },
      {
        code: 'srb',
        name: 'Srbija'
      },
      {
        code: 'stp',
        name: 'Sao Tome i Principe'
      },
      {
        code: 'sun',
        name: 'SSSR'
      },
      {
        code: 'sur',
        name: 'Suriname'
      },
      {
        code: 'svk',
        name: 'Slovačka'
      },
      {
        code: 'svn',
        name: 'Slovenija'
      },
      {
        code: 'swe',
        name: 'Švedska'
      },
      {
        code: 'swz',
        name: 'Svazilend'
      },
      {
        code: 'syc',
        name: 'Sejšeli'
      },
      {
        code: 'syr',
        name: 'Sirija'
      },
      {
        code: 'tca',
        name: 'Turks and Caicos Islands'
      },
      {
        code: 'tcd',
        name: 'Čad'
      },
      {
        code: 'tgo',
        name: 'Togo'
      },
      {
        code: 'tha',
        name: 'Tajland'
      },
      {
        code: 'tjk',
        name: 'Tadžikistan'
      },
      {
        code: 'tkl',
        name: 'Tokelau'
      },
      {
        code: 'tkm',
        name: 'Turkmenistan'
      },
      {
        code: 'tls',
        name: 'Timor-Leste'
      },
      {
        code: 'tmp',
        name: 'Istočni Timor'
      },
      {
        code: 'ton',
        name: 'Tonga'
      },
      {
        code: 'tto',
        name: 'Trinidad and Tobago'
      },
      {
        code: 'tun',
        name: 'Tunis'
      },
      {
        code: 'tur',
        name: 'Turska'
      },
      {
        code: 'tuv',
        name: 'Tivalu'
      },
      {
        code: 'twn',
        name: 'Tajvan'
      },
      {
        code: 'tza',
        name: 'Tanzanija'
      },
      {
        code: 'uga',
        name: 'Uganda'
      },
      {
        code: 'ukr',
        name: 'Ukrajina'
      },
      {
        code: 'umi',
        name: 'United States Minor Outlying Islands'
      },
      {
        code: 'ury',
        name: 'Urugvaj'
      },
      {
        code: 'usa',
        name: 'Sjedinjene Američke Države'
      },
      {
        code: 'uzb',
        name: 'Uzbekistan'
      },
      {
        code: 'vat',
        name: 'Vatikan'
      },
      {
        code: 'vct',
        name: 'Saint Vincet and the Grenadines'
      },
      {
        code: 'ven',
        name: 'Venecuela'
      },
      {
        code: 'vgb',
        name: 'British Virgin Islands'
      },
      {
        code: 'vir',
        name: 'United States Virgin Islands'
      },
      {
        code: 'vnm',
        name: 'Vijetnam'
      },
      {
        code: 'vut',
        name: 'Vanuatu'
      },
      {
        code: 'wak',
        name: 'Wake Island'
      },
      {
        code: 'wlf',
        name: 'Wallis and Futuna Islands'
      },
      {
        code: 'wsm',
        name: 'Samoa'
      },
      {
        code: 'yem',
        name: 'Jemen'
      },
      {
        code: 'ymd',
        name: 'Jemen, Demokratska Republika'
      },
      {
        code: 'yug',
        name: 'Jugoslavija'
      },
      {
        code: 'zaf',
        name: 'South Africa'
      },
      {
        code: 'zar',
        name: 'Zair'
      },
      {
        code: 'zmb',
        name: 'Zambija'
      },
      {
        code: 'zwe',
        name: 'Zimbabve'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderCO_en =
    [
      {
        code: 'KS',
        name: 'Kingdom of Serbia'
      },
      {
        code: 'KSHS',
        name: 'Kingdom of Serbs, Croats and Slovenes'
      },
      {
        code: 'abw',
        name: 'Aruba'
      },
      {
        code: 'afg',
        name: 'Afghanistan'
      },
      {
        code: 'ago',
        name: 'Angola'
      },
      {
        code: 'aia',
        name: 'Anguilla'
      },
      {
        code: 'alb',
        name: 'Albania'
      },
      {
        code: 'and',
        name: 'Andorra'
      },
      {
        code: 'ant',
        name: 'Netherlands Antilles'
      },
      {
        code: 'are',
        name: 'United Arab Emirates'
      },
      {
        code: 'arg',
        name: 'Argentina'
      },
      {
        code: 'asm',
        name: 'American Samoa'
      },
      {
        code: 'ata',
        name: 'Antarctic (territory south of the 60th degree of latitude)'
      },
      {
        code: 'atf',
        name: 'Southern French Territories'
      },
      {
        code: 'atg',
        name: 'Antigua and Barbuda'
      },
      {
        code: 'atn',
        name: 'Dronning Maud Land'
      },
      {
        code: 'aus',
        name: 'Australia'
      },
      {
        code: 'out',
        name: 'Austria'
      },
      {
        code: 'aze',
        name: 'Azerbaijan'
      },
      {
        code: 'bdi',
        name: 'Burundi'
      },
      {
        code: 'white',
        name: 'Belgium'
      },
      {
        code: 'ben',
        name: 'Benin'
      },
      {
        code: 'bfa',
        name: 'Burkina Faso'
      },
      {
        code: 'bgd',
        name: 'Bangladesh'
      },
      {
        code: 'bgr',
        name: 'Bulgaria'
      },
      {
        code: 'bhr',
        name: 'Bahrain'
      },
      {
        code: 'bhs',
        name: 'Bahamas'
      },
      {
        code: 'bih',
        name: 'Bosnia and Herzegovina'
      },
      {
        code: 'blr',
        name: 'Belarus'
      },
      {
        code: 'blz',
        name: 'Belize'
      },
      {
        code: 'bmu',
        name: 'Bermuda'
      },
      {
        code: 'pain',
        name: 'Bolivia'
      },
      {
        code: 'bra',
        name: 'Brazil'
      },
      {
        code: 'brb',
        name: 'Barbados'
      },
      {
        code: 'brn',
        name: 'Brunei'
      },
      {
        code: 'bth',
        name: 'Bhutan'
      },
      {
        code: 'bur',
        name: 'Burma'
      },
      {
        code: 'bvt',
        name: 'Bouvet Island (Bouvetoya)'
      },
      {
        code: 'bwa',
        name: 'Botswana'
      },
      {
        code: 'bys',
        name: 'Belarusian SSR'
      },
      {
        code: 'cafe',
        name: 'Central African Republic'
      },
      {
        code: 'can',
        name: 'Canada'
      },
      {
        code: 'cck',
        name: 'Cocos (Keeling) Islands'
      },
      {
        code: 'che',
        name: 'Switzerland'
      },
      {
        code: 'chl',
        name: 'Chile'
      },
      {
        code: 'chn',
        name: 'China'
      },
      {
        code: 'civ',
        name: 'Ivory Coast'
      },
      {
        code: 'cmr',
        name: 'Cameroon'
      },
      {
        code: 'code',
        name: 'Democratic Republic of the Congo'
      },
      {
        code: 'cog',
        name: 'People\'s Republic of Congo'
      },
      {
        code: 'cok',
        name: 'Cook Islands'
      },
      {
        code: 'col',
        name: 'Colombia'
      },
      {
        code: 'com',
        name: 'Comoros'
      },
      {
        code: 'cpv',
        name: 'North Cape Islands'
      },
      {
        code: 'cri',
        name: 'Costa Rica'
      },
      {
        code: 'csk',
        name: 'Czechoslovakia'
      },
      {
        code: 'cte',
        name: 'Canton and Enderbury Islands'
      },
      {
        code: 'cub',
        name: 'Cuba'
      },
      {
        code: 'cxr',
        name: 'Christmas Island'
      },
      {
        code: 'cym',
        name: 'Cayman Islands'
      },
      {
        code: 'cyp',
        name: 'Cyprus'
      },
      {
        code: 'cze',
        name: 'Czech Republic'
      },
      {
        code: 'ddr',
        name: 'German Democratic Republic'
      },
      {
        code: 'deu',
        name: 'Federal Republic of Germany'
      },
      {
        code: 'dji',
        name: 'Djibouti'
      },
      {
        code: 'dma',
        name: 'Dominika'
      },
      {
        code: 'dnk',
        name: 'Denmark'
      },
      {
        code: 'home',
        name: 'Dominican Republic'
      },
      {
        code: 'dza',
        name: 'Algeria'
      },
      {
        code: 'ecu',
        name: 'Ecuador'
      },
      {
        code: 'egy',
        name: 'Egypt'
      },
      {
        code: 'eri',
        name: 'Eritrea'
      },
      {
        code: 'esh',
        name: 'Western Sahara'
      },
      {
        code: 'esp',
        name: 'Spain'
      },
      {
        code: 'est',
        name: 'Estonia'
      },
      {
        code: 'eth',
        name: 'Ethiopia'
      },
      {
        code: 'fine',
        name: 'Finland'
      },
      {
        code: 'fji',
        name: 'Fiji'
      },
      {
        code: 'flk',
        name: 'Falkland Islands (Malvinas)'
      },
      {
        code: 'fra',
        name: 'France'
      },
      {
        code: 'fro',
        name: 'Faroe Islands'
      },
      {
        code: 'fsm',
        name: 'Micronesia'
      },
      {
        code: 'gab',
        name: 'Gabon'
      },
      {
        code: 'gbr',
        name: 'Great Britain'
      },
      {
        code: 'geo',
        name: 'Georgia'
      },
      {
        code: 'gha',
        name: 'Ghana'
      },
      {
        code: 'gib',
        name: 'Gibraltar'
      },
      {
        code: 'gin',
        name: 'Guinea'
      },
      {
        code: 'glp',
        name: 'Guadeloupe'
      },
      {
        code: 'gmb',
        name: 'Gambia'
      },
      {
        code: 'gnb',
        name: 'Guinea-Bissau'
      },
      {
        code: 'gnq',
        name: 'Equatorial Guinea'
      },
      {
        code: 'grc',
        name: 'Greece'
      },
      {
        code: 'ugly',
        name: 'Grenada'
      },
      {
        code: 'grl',
        name: 'Greenland'
      },
      {
        code: 'gtm',
        name: 'Guatemala'
      },
      {
        code: 'guf',
        name: 'French Guiana'
      },
      {
        code: 'gum',
        name: 'Guam'
      },
      {
        code: 'guy',
        name: 'Guyana'
      },
      {
        code: 'hkg',
        name: 'Hong Kong'
      },
      {
        code: 'hmd',
        name: 'Heard and MC Donald Islands'
      },
      {
        code: 'hnd',
        name: 'Honduras'
      },
      {
        code: 'hrv',
        name: 'Croatia'
      },
      {
        code: 'hti',
        name: 'Haiti'
      },
      {
        code: 'hun',
        name: 'Hungary'
      },
      {
        code: 'idn',
        name: 'Indonesia'
      },
      {
        code: 'ind',
        name: 'India'
      },
      {
        code: 'iot',
        name: 'British Indian Ocean Territory (Chagos Archipelago)'
      },
      {
        code: 'irl',
        name: 'Ireland'
      },
      {
        code: 'irn',
        name: 'Iran'
      },
      {
        code: 'irq',
        name: 'Iraq'
      },
      {
        code: 'isl',
        name: 'Iceland'
      },
      {
        code: 'isr',
        name: 'Israel'
      },
      {
        code: 'ita',
        name: 'Italy'
      },
      {
        code: 'jam',
        name: 'Jamaica'
      },
      {
        code: 'jor',
        name: 'Jordan'
      },
      {
        code: 'jpn',
        name: 'Japan'
      },
      {
        code: 'jtn',
        name: 'Johnston Island'
      },
      {
        code: 'kaz',
        name: 'Kazakhstan'
      },
      {
        code: 'ken',
        name: 'Kenya'
      },
      {
        code: 'kgz',
        name: 'Kyrgyzstan'
      },
      {
        code: 'khm',
        name: 'Kampuchi (Cambodia)'
      },
      {
        code: 'kna',
        name: 'St. Kitts and Nevis'
      },
      {
        code: 'kor',
        name: 'Korea, Republic of (South)'
      },
      {
        code: 'kwt',
        name: 'Kuwait'
      },
      {
        code: 'lao',
        name: 'Laos'
      },
      {
        code: 'lbn',
        name: 'Lebanon'
      },
      {
        code: 'lbr',
        name: 'Liberia'
      },
      {
        code: 'lby',
        name: 'Libya'
      },
      {
        code: 'lca',
        name: 'Saint Lucia'
      },
      {
        code: 'lie',
        name: 'Liechtenstein'
      },
      {
        code: 'lki',
        name: 'Sri Lanka'
      },
      {
        code: 'lso',
        name: 'Lesotho'
      },
      {
        code: 'ltu',
        name: 'Lithuania'
      },
      {
        code: 'lux',
        name: 'Luxembourg'
      },
      {
        code: 'lion',
        name: 'Latvia'
      },
      {
        code: 'mac',
        name: 'Macao'
      },
      {
        code: 'mar',
        name: 'Morocco'
      },
      {
        code: 'mco',
        name: 'Monaco'
      },
      {
        code: 'mda',
        name: 'Moldova'
      },
      {
        code: 'mdg',
        name: 'Madagascar'
      },
      {
        code: 'mdv',
        name: 'Maldives'
      },
      {
        code: 'mex',
        name: 'Mexico'
      },
      {
        code: 'mhl',
        name: 'Marshall Islands'
      },
      {
        code: 'mid',
        name: 'Midway Islands'
      },
      {
        code: 'mkd',
        name: 'Macedonia, Former Yugoslav Republic of'
      },
      {
        code: 'mli',
        name: 'Little'
      },
      {
        code: 'mlt',
        name: 'Malta'
      },
      {
        code: 'mmr',
        name: 'Myanmar'
      },
      {
        code: 'mng',
        name: 'Mongolia'
      },
      {
        code: 'me',
        name: 'Montenegro'
      },
      {
        code: 'mnp',
        name: 'Northern Mariana Islands'
      },
      {
        code: 'moz',
        name: 'Mozambique'
      },
      {
        code: 'dead',
        name: 'Mauritania'
      },
      {
        code: 'msr',
        name: 'Montserrat'
      },
      {
        code: 'mtq',
        name: 'Martinique'
      },
      {
        code: 'mus',
        name: 'Mauritius'
      },
      {
        code: 'mwi',
        name: 'Malawi'
      },
      {
        code: 'mys',
        name: 'Malaysia'
      },
      {
        code: 'myt',
        name: 'Mayotte'
      },
      {
        code: 'nam',
        name: 'Nambia'
      },
      {
        code: 'ncl',
        name: 'New Caledonia'
      },
      {
        code: 'ner',
        name: 'Niger'
      },
      {
        code: 'nfk',
        name: 'Norfolk Island'
      },
      {
        code: 'nga',
        name: 'Nigeria'
      },
      {
        code: 'nothing',
        name: 'Nicaragua'
      },
      {
        code: 'niu',
        name: 'Niue'
      },
      {
        code: 'nld',
        name: 'Netherlands'
      },
      {
        code: 'nor',
        name: 'Norway'
      },
      {
        code: 'npl',
        name: 'Nepal'
      },
      {
        code: 'nru',
        name: 'Nauru'
      },
      {
        code: 'ntz',
        name: 'Neutral Zone'
      },
      {
        code: 'nzl',
        name: 'New Zealand'
      },
      {
        code: 'omn',
        name: 'Oman'
      },
      {
        code: 'pak',
        name: 'Pakistan'
      },
      {
        code: 'pan',
        name: 'Panama'
      },
      {
        code: 'pci',
        name: 'Pacific Islands (trust territory)'
      },
      {
        code: 'pcn',
        name: 'Pitcairn Island'
      },
      {
        code: 'per',
        name: 'Peru'
      },
      {
        code: 'phl',
        name: 'Philippines'
      },
      {
        code: 'plw',
        name: 'Palau'
      },
      {
        code: 'png',
        name: 'Papua New Guinea'
      },
      {
        code: 'sex',
        name: 'Poland'
      },
      {
        code: 'pri',
        name: 'Puerto Rico'
      },
      {
        code: 'prk',
        name: 'Korea, Democratic People\'s Republic'
      },
      {
        code: 'prt',
        name: 'Portugal'
      },
      {
        code: 'pry',
        name: 'Paraguay'
      },
      {
        code: 'kiss',
        name: 'United States Miscellaneous Pacific Islands'
      },
      {
        code: 'pyf',
        name: 'French Polynesia'
      },
      {
        code: 'qat',
        name: 'Qatar'
      },
      {
        code: 'reu',
        name: 'Reunion'
      },
      {
        code: 'rom',
        name: 'Romania'
      },
      {
        code: 'rus',
        name: 'Russia'
      },
      {
        code: 'rwa',
        name: 'Rwanda'
      },
      {
        code: 'sau',
        name: 'Saudi Arabia'
      },
      {
        code: 'scg',
        name: 'Serbia and Montenegro'
      },
      {
        code: 'sdn',
        name: 'Sudan'
      },
      {
        code: 'sen',
        name: 'Senegal'
      },
      {
        code: 'sgp',
        name: 'Singapore'
      },
      {
        code: 'sgs',
        name: 'South Georgia and the South Sandwich Islands'
      },
      {
        code: 'shn',
        name: 'St. Helena'
      },
      {
        code: 'sjm',
        name: 'Svalbard and Jan Mayen Islands'
      },
      {
        code: 'slb',
        name: 'Solomon Islands'
      },
      {
        code: 'sle',
        name: 'Sierra Leone'
      },
      {
        code: 'slv',
        name: 'El Salvador'
      },
      {
        code: 'smr',
        name: 'San Marino'
      },
      {
        code: 'catfish',
        name: 'Somalia'
      },
      {
        code: 'spm',
        name: 'St. Pierre and Miquelon'
      },
      {
        code: 'srb',
        name: 'Serbia'
      },
      {
        code: 'stp',
        name: 'Sao Tome and Principe'
      },
      {
        code: 'sun',
        name: 'USSR'
      },
      {
        code: 'sur',
        name: 'Suriname'
      },
      {
        code: 'svk',
        name: 'Slovakia'
      },
      {
        code: 'svn',
        name: 'Slovenia'
      },
      {
        code: 'swe',
        name: 'Sweden'
      },
      {
        code: 'swz',
        name: 'Swaziland'
      },
      {
        code: 'syc',
        name: 'Seychelles'
      },
      {
        code: 'cheese',
        name: 'Syria'
      },
      {
        code: 'tca',
        name: 'Turks and Caicos Islands'
      },
      {
        code: 'tcd',
        name: 'Chad'
      },
      {
        code: 'that',
        name: 'Togo'
      },
      {
        code: 'tha',
        name: 'Thailand'
      },
      {
        code: 'tjk',
        name: 'Tajikistan'
      },
      {
        code: 'tkl',
        name: 'Tokelau'
      },
      {
        code: 'tkm',
        name: 'Turkmenistan'
      },
      {
        code: 'tls',
        name: 'Timor-Leste'
      },
      {
        code: 'tmp',
        name: 'East Timor'
      },
      {
        code: 'tone',
        name: 'Tonga'
      },
      {
        code: 'tto',
        name: 'Trinidad and Tobago'
      },
      {
        code: 'tun',
        name: 'Tunisia'
      },
      {
        code: 'tour',
        name: 'Turkey'
      },
      {
        code: 'tuv',
        name: 'Tivalu'
      },
      {
        code: 'twn',
        name: 'Taiwan'
      },
      {
        code: 'tza',
        name: 'Tanzania'
      },
      {
        code: 'uga',
        name: 'Uganda'
      },
      {
        code: 'ukr',
        name: 'Ukraine'
      },
      {
        code: 'umi',
        name: 'United States Minor Outlying Islands'
      },
      {
        code: 'ury',
        name: 'Uruguay'
      },
      {
        code: 'usa',
        name: 'United States'
      },
      {
        code: 'uzb',
        name: 'Uzbekistan'
      },
      {
        code: 'watt',
        name: 'Vatican'
      },
      {
        code: 'vct',
        name: 'Saint Vincent and the Grenadines'
      },
      {
        code: 'out',
        name: 'Venezuela'
      },
      {
        code: 'vgb',
        name: 'British Virgin Islands'
      },
      {
        code: 'vir',
        name: 'United States Virgin Islands'
      },
      {
        code: 'vnm',
        name: 'Vietnam'
      },
      {
        code: 'vut',
        name: 'Vanuatu'
      },
      {
        code: 'wak',
        name: 'Wake Island'
      },
      {
        code: 'wlf',
        name: 'Wallis and Futuna Islands'
      },
      {
        code: 'wsm',
        name: 'Samoa'
      },
      {
        code: 'yem',
        name: 'Yemen'
      },
      {
        code: 'ymd',
        name: 'Yemen, Democratic Republic of'
      },
      {
        code: 'yug',
        name: 'Yugoslavia'
      },
      {
        code: 'zaf',
        name: 'South Africa'
      },
      {
        code: 'is',
        name: 'Zaire'
      },
      {
        code: 'zmb',
        name: 'Zambia'
      },
      {
        code: 'zwe',
        name: 'Zimbabwe'
      }
    ];

  static _coderRT =
    [
      {
        code: 'a',
        name: 'Текстуална грађа, штампана'
      },
      {
        code: 'b',
        name: 'Текстуална грађа, рукопис'
      },
      {
        code: 'c',
        name: 'Ноте, штампане'
      },
      {
        code: 'd',
        name: 'Ноте, рукопис'
      },
      {
        code: 'e',
        name: 'Картографска грађа, штампана'
      },
      {
        code: 'f',
        name: 'Картографска грађа, рукопис'
      },
      {
        code: 'g',
        name: 'Аудиовизуелна грађа'
      },
      {
        code: 'i',
        name: 'Звучни записи, снимак немузичких интерпретација'
      },
      {
        code: 'j',
        name: 'Звучни записи, снимци музичких интерпретација'
      },
      {
        code: 'k',
        name: 'Дводимензионалне графике (слике, скице)'
      },
      {
        code: 'l',
        name: 'Компјутерски медији'
      },
      {
        code: 'm',
        name: 'Мултимедији'
      },
      {
        code: 'r',
        name: 'Тродимензионалне ументнине и реалије'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderRT_lat =
    [
      {
        code: 'a',
        name: 'Tekstualna građa, štampana'
      },
      {
        code: 'b',
        name: 'Tekstualna građa, rukopis'
      },
      {
        code: 'c',
        name: 'Note, štampane'
      },
      {
        code: 'd',
        name: 'Note, rukopis'
      },
      {
        code: 'e',
        name: 'Kartografska građa, štampana'
      },
      {
        code: 'f',
        name: 'Kartografska građa, rukopis'
      },
      {
        code: 'g',
        name: 'Audiovizuelna građa'
      },
      {
        code: 'i',
        name: 'Zvučni zapisi, snimak nemuzičkih interpretacija'
      },
      {
        code: 'j',
        name: 'Zvučni zapisi, snimci muzičkih interpretacija'
      },
      {
        code: 'k',
        name: 'Dvodimenzionalne grafike (slike, skice)'
      },
      {
        code: 'l',
        name: 'Kompjuterski mediji'
      },
      {
        code: 'm',
        name: 'Multimediji'
      },
      {
        code: 'r',
        name: 'Trodimenzionalne umentnine i realije'
      }
    ];

  // tslint:disable-next-line:variable-name
  static _coderRT_en =
    [
      {
        code: 'a',
        name: 'Text material, printed'
      },
      {
        code: 'b',
        name: 'Text material, manuscript'
      },
      {
        code: 'c',
        name: 'Notes, printed'
      },
      {
        code: 'd',
        name: 'Notes, manuscript'
      },
      {
        code: 'e',
        name: 'Cartographic material, printed'
      },
      {
        code: 'f',
        name: 'Cartographic material, manuscript'
      },
      {
        code: 'g',
        name: 'Audiovisual material, printed'
      },
      {
        code: 'i',
        name: 'Sound recordings, recordings of non-musical interpretations'
      },
      {
        code: 'j',
        name: 'Sound recordings, recordings of musical interpretations'
      },
      {
        code: 'k',
        name: 'Two-dimensional graphics (pictures, sketches)'
      },
      {
        code: 'l',
        name: 'Computer media'
      },
      {
        code: 'm',
        name: 'Multimedia'
      },
      {
        code: 'r',
        name: 'Тhree-dimensional artworks and realia'
      }
    ];

  static _coder856u = [
    {
      code: '.*',
      name: 'Постоји'
    }
  ];

  // tslint:disable-next-line:variable-name
  static _coder856u_lat = [
    {
      code: '.*',
      name: 'Postoji'
    }
  ];

  // tslint:disable-next-line:variable-name
  static _coder856u_en = [
    {
      code: '.*',
      name: 'Exists'
    }
  ];

  public static Prefixes: PrefixModel[] = [
    {
      code: 'DT',
      name: 'Врста грађе',
      coder: PrefixUtils._coderDT
    },
    {
      code: 'AU',
      name: 'Аутор'
    },
    {
      code: 'TI',
      name: 'Наслов'
    },
    {
      code: 'KW',
      name: 'Кључне речи'
    },
    {
      code: 'PU',
      name: 'Издавач'
    },
    {
      code: 'PY',
      name: 'Година издавања'
    },
    {
      code: 'PP',
      name: 'Место издавања'
    },
    {
      code: 'LA',
      name: 'Језик',
      coder: PrefixUtils._coderLA,
    },
    {
      code: 'CO',
      name: 'Држава издавања',
      coder: PrefixUtils._coderCO
    },
    {
      code: 'IN',
      name: 'Инвентарни број'
    },
    {
      code: 'DC',
      name: 'UDK'
    },
    {
      code: 'BN',
      name: 'ISBN'
    },
    {
      code: 'SP',
      name: 'ISSN'
    },
    {
      code: 'RN',
      name: 'Број записа'
    },
    {
      code: 'CC',
      name: 'Код за врсту садржаја',
      coder: PrefixUtils._coderCC
    },
    {
      code: 'RT',
      name: 'Код за врсту записа',
      coder: PrefixUtils._coderRT
    },
    {
      code: '856u',
      name: 'URL дигитални примерак',
      coder: PrefixUtils._coder856u
    }
    ,
    {
      code: 'SB',
      name: 'Предметна одредница'
    },
    {
      code: 'SD',
      name: 'Предметна пододредница'
    },
    {
      code: '100e',
      name: 'Код за намену',
      coder: PrefixUtils.field100e
    }
  ];

  // tslint:disable-next-line:variable-name
  public static Prefixes_lat: PrefixModel[] = [
    {
      code: 'DT',
      name: 'Vrsta građe',
      coder: PrefixUtils._coderDT_lat
    },
    {
      code: 'AU',
      name: 'Autor'
    },
    {
      code: 'TI',
      name: 'Naslov'
    },
    {
      code: 'KW',
      name: 'Ključne reči'
    },
    {
      code: 'PU',
      name: 'Izdavač'
    },
    {
      code: 'PY',
      name: 'Godina izdavanja'
    },
    {
      code: 'PP',
      name: 'Mesto izdavanja'
    },
    {
      code: 'LA',
      name: 'Jezik',
      coder: PrefixUtils._coderLA_lat,
    },
    {
      code: 'CO',
      name: 'Država izdavanja',
      coder: PrefixUtils._coderCO_lat
    },
    {
      code: 'IN',
      name: 'Inventarni broj'
    },
    {
      code: 'DC',
      name: 'UDK'
    },
    {
      code: 'BN',
      name: 'ISBN'
    },
    {
      code: 'SP',
      name: 'ISSN'
    },
    {
      code: 'RN',
      name: 'Broj zapisa'
    },
    {
      code: 'CC',
      name: 'Kod za vrstu sadržaja',
      coder: PrefixUtils._coderCC_lat
    },
    {
      code: 'RT',
      name: 'Kod za vrstu zapisa',
      coder: PrefixUtils._coderRT_lat
    },
    {
      code: '856u',
      name: 'URL digitalni primerak',
      coder: PrefixUtils._coder856u_lat
    }
    ,
    {
      code: 'SB',
      name: 'Predmetna odrednica'
    },
    {
      code: 'SD',
      name: 'Predmetna pododrednica'
    },
    {
      code: '100e',
      name: 'Kod za namenu',
      coder: PrefixUtils.field100e_lat
    }
  ];

  // tslint:disable-next-line:variable-name
  public static Prefixes_en: PrefixModel[] = [
    {
      code: 'DT',
      name: 'Type of material',
      coder: PrefixUtils._coderDT_en
    },
    {
      code: 'AU',
      name: 'Author'
    },
    {
      code: 'TI',
      name: 'Title'
    },
    {
      code: 'KW',
      name: 'Keywords'
    },
    {
      code: 'PU',
      name: 'Publisher'
    },
    {
      code: 'PY',
      name: 'Year of publication'
    },
    {
      code: 'PP',
      name: 'Place of publication'
    },
    {
      code: 'LA',
      name: 'Language',
      coder: PrefixUtils._coderLA_en,
    },
    {
      code: 'CO',
      name: 'Country of publication',
      coder: PrefixUtils._coderCO_en
    },
    {
      code: 'IN',
      name: 'Inventory number'
    },
    {
      code: 'DC',
      name: 'UDC'
    },
    {
      code: 'BN',
      name: 'ISBN'
    },
    {
      code: 'SP',
      name: 'ISSN'
    },
    {
      code: 'RN',
      name: 'Record number'
    },
    {
      code: 'CC',
      name: 'Code for content type',
      coder: PrefixUtils._coderCC_en
    },
    {
      code: 'RT',
      name: 'Code for record type',
      coder: PrefixUtils._coderRT_en
    },
    {
      code: '856u',
      name: 'URL digital copy',
      coder: PrefixUtils._coder856u_en
    }
    ,
    {
      code: 'SB',
      name: 'Subject heading'
    },
    {
      code: 'SD',
      name: 'Subject subheading'
    },
    {
      code: '100e',
      name: 'Purpose code',
      coder: PrefixUtils.field100e_en
    }
  ];

}
