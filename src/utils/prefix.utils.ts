import { Coder, PrefixModel } from '../models/prefix.model';

// TODO: Razmotriti ima li uopste smisla da se sifarnici vuku sa bekenda, obzirom da ih ima samo 5
export class PrefixUtils {

   static _coderLA: Coder[] =
    [
      {
        code: 'srp' ,
        name: 'Српски'
      },
      {
        code: 'scc' ,
        name: 'Српски - ћирилица'
      },
      {
        code: 'scr' ,
        name: 'Српски - латиница'
      },
      {
        code: 'eng' ,
        name: 'Енглески'
      },
      {
        code: 'ger' ,
        name: 'Немачки'
      },
      {
        code: 'ita' ,
        name: 'Италијански'
      },
      {
        code: 'spa' ,
        name: 'Шпански / Кастиљански'
      },
      {
        code: 'hun' ,
        name: 'Мађарски'
      },
      {
        code: 'slo' ,
        name: 'Словачки'
      },
      {
        code: 'slv' ,
        name: 'Словеначки'
      },
      {
        code: 'bul' ,
        name: 'Бугарски'
      },
      {
        code: 'scn' ,
        name: 'Сицилијански'
      },
      {
        code: 'sco' ,
        name: 'Шкотски'
      },
      {
        code: 'aar' ,
        name: 'Афар'
      },
      {
        code: 'abk' ,
        name: 'Абхаски'
      },
      {
        code: 'ace' ,
        name: 'Акинезе'
      },
      {
        code: 'ach' ,
        name: 'Ачоли'
      },
      {
        code: 'ada' ,
        name: 'Адангме'
      },
      {
        code: 'ady' ,
        name: 'Адyгхе'
      },
      {
        code: 'afa' ,
        name: 'Афроазијски (остали)'
      },
      {
        code: 'afh' ,
        name: 'Африхили'
      },
      {
        code: 'afr' ,
        name: 'Африкаанс'
      },
      {
        code: 'ain' ,
        name: 'Аину'
      },
      {
        code: 'ajm' ,
        name: 'Аљамиа'
      },
      {
        code: 'aka' ,
        name: 'Акан'
      },
      {
        code: 'akk' ,
        name: 'Акадски'
      },
      {
        code: 'alb' ,
        name: 'Албански'
      },
      {
        code: 'ale' ,
        name: 'Алеутски'
      },
      {
        code: 'alg' ,
        name: 'Алгонкински језици'
      },
      {
        code: 'alt' ,
        name: 'Алтаи'
      },
      {
        code: 'amh' ,
        name: 'Амхарски'
      },
      {
        code: 'ang' ,
        name: 'Англосаксонски (450-1100)'
      },
      {
        code: 'anp' ,
        name: 'Ангика'
      },
      {
        code: 'apa' ,
        name: 'Апашки'
      },
      {
        code: 'ara' ,
        name: 'Арапски'
      },
      {
        code: 'arc' ,
        name: 'Арамејски'
      },
      {
        code: 'arg' ,
        name: 'Арагонски'
      },
      {
        code: 'arm' ,
        name: 'Јерменски'
      },
      {
        code: 'arn' ,
        name: 'Араукански'
      },
      {
        code: 'arp' ,
        name: 'Арапахо'
      },
      {
        code: 'art' ,
        name: 'Вештачки (други)'
      },
      {
        code: 'arw' ,
        name: 'Аравак'
      },
      {
        code: 'asm' ,
        name: 'Асамски'
      },
      {
        code: 'ast' ,
        name: 'Астуриан; Бабле'
      },
      {
        code: 'ath' ,
        name: 'Атхапаскански језици'
      },
      {
        code: 'aus' ,
        name: 'Аустралијски језици'
      },
      {
        code: 'ava' ,
        name: 'Аварски'
      },
      {
        code: 'ave' ,
        name: 'Авестички'
      },
      {
        code: 'awa' ,
        name: 'Авадхи'
      },
      {
        code: 'aym' ,
        name: 'Ајмара'
      },
      {
        code: 'aze' ,
        name: 'Азербејџански'
      },
      {
        code: 'bad' ,
        name: 'Банда'
      },
      {
        code: 'bai' ,
        name: 'Бамилеке лангуагес'
      },
      {
        code: 'bak' ,
        name: 'Башкирски'
      },
      {
        code: 'bal' ,
        name: 'Балучи'
      },
      {
        code: 'bam' ,
        name: 'Бамбара'
      },
      {
        code: 'ban' ,
        name: 'Бали'
      },
      {
        code: 'baq' ,
        name: 'Баскијски'
      },
      {
        code: 'bas' ,
        name: 'Баса'
      },
      {
        code: 'bat' ,
        name: 'Балтички (остали)'
      },
      {
        code: 'bej' ,
        name: 'Беџа'
      },
      {
        code: 'bel' ,
        name: 'Белоруски'
      },
      {
        code: 'bem' ,
        name: 'Бемба'
      },
      {
        code: 'ben' ,
        name: 'Бенгалски'
      },
      {
        code: 'ber' ,
        name: 'Берберски језици'
      },
      {
        code: 'bho' ,
        name: 'Бхоџпури'
      },
      {
        code: 'bih' ,
        name: 'Бихари'
      },
      {
        code: 'bik' ,
        name: 'Бикол'
      },
      {
        code: 'bin' ,
        name: 'Бини'
      },
      {
        code: 'bis' ,
        name: 'Бислама'
      },
      {
        code: 'bla' ,
        name: 'Сиксика / Блацкфоот'
      },
      {
        code: 'bnt' ,
        name: 'Банту (остали)'
      },
      {
        code: 'bos' ,
        name: 'Босански (Бошњачки)'
      },
      {
        code: 'bra' ,
        name: 'Браџ'
      },
      {
        code: 'bre' ,
        name: 'Бретонски'
      },
      {
        code: 'btk' ,
        name: 'Батак (Индонезија)'
      },
      {
        code: 'bua' ,
        name: 'Буриат'
      },
      {
        code: 'bug' ,
        name: 'Буги'
      },
      {
        code: 'bur' ,
        name: 'Бурмански'
      },
      {
        code: 'byn' ,
        name: 'Блин / Билин'
      },
      {
        code: 'cad' ,
        name: 'Кадо'
      },
      {
        code: 'cai' ,
        name: 'Централноамерички индијански (остали)'
      },
      {
        code: 'cam' ,
        name: 'Кмерски'
      },
      {
        code: 'car' ,
        name: 'Карипски'
      },
      {
        code: 'cat' ,
        name: 'Каталански'
      },
      {
        code: 'cau' ,
        name: 'Кавкаски (остали)'
      },
      {
        code: 'ceb' ,
        name: 'Кебуански'
      },
      {
        code: 'cha' ,
        name: 'Цхаморро'
      },
      {
        code: 'chb' ,
        name: 'Чибча'
      },
      {
        code: 'che' ,
        name: 'Чеченски'
      },
      {
        code: 'chg' ,
        name: 'Чагатаи'
      },
      {
        code: 'chi' ,
        name: 'Кинески'
      },
      {
        code: 'chk' ,
        name: 'Цхуукесе'
      },
      {
        code: 'chm' ,
        name: 'Мари'
      },
      {
        code: 'chn' ,
        name: 'Чинук жаргон'
      },
      {
        code: 'cho' ,
        name: 'Цхоцктаw'
      },
      {
        code: 'chp' ,
        name: 'Цхипеwyан'
      },
      {
        code: 'chr' ,
        name: 'Чероки'
      },
      {
        code: 'chu' ,
        name: 'Црквенословенски'
      },
      {
        code: 'chv' ,
        name: 'Чувашки'
      },
      {
        code: 'chy' ,
        name: 'Чејенски'
      },
      {
        code: 'cmc' ,
        name: 'Цхамиц лангуагес'
      },
      {
        code: 'cop' ,
        name: 'Коптски'
      },
      {
        code: 'cor' ,
        name: 'Цорнисх'
      },
      {
        code: 'cos' ,
        name: 'Корзикански'
      },
      {
        code: 'cpe' ,
        name: 'Креолски и пидгин, на основи енглеског (остали)'
      },
      {
        code: 'cpf' ,
        name: 'Креолски и пидгин, на основи француског (остали)'
      },
      {
        code: 'cpp' ,
        name: 'Креолски и пидгин, на основи португалског (остали)'
      },
      {
        code: 'cre' ,
        name: 'Кри'
      },
      {
        code: 'crh' ,
        name: 'Кримски татарски / кримски турски'
      },
      {
        code: 'crp' ,
        name: 'Креолски и пидгин (остали)'
      },
      {
        code: 'csb' ,
        name: 'Касхубиан'
      },
      {
        code: 'cus' ,
        name: 'Кушитски (остали)'
      },
      {
        code: 'cze' ,
        name: 'Чешки'
      },
      {
        code: 'dak' ,
        name: 'Дакота'
      },
      {
        code: 'dan' ,
        name: 'Дански'
      },
      {
        code: 'del' ,
        name: 'Делаwаре'
      },
      {
        code: 'den' ,
        name: 'Славе (Атхапасцан)'
      },
      {
        code: 'dgr' ,
        name: 'Догриб'
      },
      {
        code: 'din' ,
        name: 'Динка'
      },
      {
        code: 'div' ,
        name: 'Дивехи'
      },
      {
        code: 'doi' ,
        name: 'Догри'
      },
      {
        code: 'dra' ,
        name: 'Дравидски (остали)'
      },
      {
        code: 'dsb' ,
        name: 'Доњи Лужичко-српски - Лоwер Сорбиан'
      },
      {
        code: 'dua' ,
        name: 'Дуала'
      },
      {
        code: 'dum' ,
        name: 'Средњохоландски (1050-1350)'
      },
      {
        code: 'dut' ,
        name: 'Холандски, Фламански'
      },
      {
        code: 'dyu' ,
        name: 'Дyула'
      },
      {
        code: 'dzo' ,
        name: 'Дзонгкха'
      },
      {
        code: 'efi' ,
        name: 'Ефик'
      },
      {
        code: 'egy' ,
        name: 'Египатски (стари)'
      },
      {
        code: 'eka' ,
        name: 'Екајук'
      },
      {
        code: 'elx' ,
        name: 'Еламитски'
      },
      {
        code: 'enm' ,
        name: 'Средњоенглески (1100-1500)'
      },
      {
        code: 'epo' ,
        name: 'Есперанто'
      },
      {
        code: 'esk' ,
        name: 'Ескимски'
      },
      {
        code: 'est' ,
        name: 'Естонски'
      },
      {
        code: 'eth' ,
        name: 'Етиопски'
      },
      {
        code: 'ewe' ,
        name: 'Еwе'
      },
      {
        code: 'ewo' ,
        name: 'Еwондо'
      },
      {
        code: 'fan' ,
        name: 'Фанг'
      },
      {
        code: 'far' ,
        name: 'Фароесе'
      },
      {
        code: 'fat' ,
        name: 'Фанти'
      },
      {
        code: 'fij' ,
        name: 'Фијиан'
      },
      {
        code: 'fil' ,
        name: 'Филипински'
      },
      {
        code: 'fin' ,
        name: 'Фински'
      },
      {
        code: 'fiu' ,
        name: 'Угрофински (остали)'
      },
      {
        code: 'fon' ,
        name: 'Фон'
      },
      {
        code: 'fre' ,
        name: 'Француски'
      },
      {
        code: 'frm' ,
        name: 'Средњофранцуски (1400-1600)'
      },
      {
        code: 'fro' ,
        name: 'Старофранцуски (842-1400)'
      },
      {
        code: 'fry' ,
        name: 'Фризијски'
      },
      {
        code: 'frr' ,
        name: 'Нортх Фризиан'
      },
      {
        code: 'frs' ,
        name: 'Еаст Фризиан'
      },
      {
        code: 'ful' ,
        name: 'Фулах'
      },
      {
        code: 'fur' ,
        name: 'Фриулиан'
      },
      {
        code: 'gaa' ,
        name: 'Га'
      },
      {
        code: 'gal' ,
        name: 'Галла'
      },
      {
        code: 'gay' ,
        name: 'Гаyо'
      },
      {
        code: 'gba' ,
        name: 'Гбаyа'
      },
      {
        code: 'gem' ,
        name: 'Германски (остали)'
      },
      {
        code: 'geo' ,
        name: 'Грузијски'
      },
      {
        code: 'gez' ,
        name: 'Геез'
      },
      {
        code: 'gil' ,
        name: 'Гилбертесе'
      },
      {
        code: 'gla' ,
        name: 'Гелик / Å котски гелик'
      },
      {
        code: 'gle' ,
        name: 'Ирски'
      },
      {
        code: 'glg' ,
        name: 'Галлеган'
      },
      {
        code: 'glv' ,
        name: 'Манx'
      },
      {
        code: 'gmh' ,
        name: 'Средњовисоконемачки (1050-1500)'
      },
      {
        code: 'goh' ,
        name: 'Старовисоконемачки (750-1050)'
      },
      {
        code: 'gon' ,
        name: 'Гондски'
      },
      {
        code: 'gor' ,
        name: 'Горонтало'
      },
      {
        code: 'got' ,
        name: 'Готски'
      },
      {
        code: 'grb' ,
        name: 'Гребо'
      },
      {
        code: 'grc' ,
        name: 'Старогрчки (-1453)'
      },
      {
        code: 'gre' ,
        name: 'Грчки (1453-)'
      },
      {
        code: 'gsw' ,
        name: 'Сwисс Герман'
      },
      {
        code: 'gua' ,
        name: 'Гуарани'
      },
      {
        code: 'guj' ,
        name: 'Гуџарати'
      },
      {
        code: 'gwi' ,
        name: 'Гwицх'
      },
      {
        code: 'hai' ,
        name: 'Хаида'
      },
      {
        code: 'hat' ,
        name: 'Хаитиан / Хаитиан Цреоле'
      },
      {
        code: 'hau' ,
        name: 'Хауса'
      },
      {
        code: 'haw' ,
        name: 'Хавајски'
      },
      {
        code: 'heb' ,
        name: 'Хебрејски'
      },
      {
        code: 'her' ,
        name: 'Хереро'
      },
      {
        code: 'hil' ,
        name: 'Хилигаyнон'
      },
      {
        code: 'him' ,
        name: 'Химачали'
      },
      {
        code: 'hin' ,
        name: 'Хинди'
      },
      {
        code: 'hit' ,
        name: 'Хиттите'
      },
      {
        code: 'hmn' ,
        name: 'Хмонг'
      },
      {
        code: 'hmo' ,
        name: 'Хири моту'
      },
      {
        code: 'hrv' ,
        name: 'Хрватски'
      },
      {
        code: 'hsb' ,
        name: 'Горњи Лужичко-српски (Уппер Сорбиан)'
      },
      {
        code: 'hup' ,
        name: 'Хупа'
      },
      {
        code: 'iba' ,
        name: 'Ибан'
      },
      {
        code: 'ibo' ,
        name: 'Игбо'
      },
      {
        code: 'ice' ,
        name: 'Исландски'
      },
      {
        code: 'ido' ,
        name: 'Идо'
      },
      {
        code: 'iii' ,
        name: 'Сицхуан Yи'
      },
      {
        code: 'ijo' ,
        name: 'Ијо'
      },
      {
        code: 'iku' ,
        name: 'Инуктитут'
      },
      {
        code: 'ile' ,
        name: 'Интерлингуе'
      },
      {
        code: 'ilo' ,
        name: 'Илоко'
      },
      {
        code: 'ina' ,
        name: 'Интерлингуа (Интернатионал Ауxилиарy Лангуаге Ассоциатион)'
      },
      {
        code: 'inc' ,
        name: 'Индијски (остали)'
      },
      {
        code: 'ind' ,
        name: 'Индонезијски'
      },
      {
        code: 'ine' ,
        name: 'Индоевропски (остали)'
      },
      {
        code: 'inh' ,
        name: 'Ингусх'
      },
      {
        code: 'ipk' ,
        name: 'Инупиак'
      },
      {
        code: 'ira' ,
        name: 'Ирански (остали)'
      },
      {
        code: 'iro' ,
        name: 'Ирокески језици'
      },
      {
        code: 'jav' ,
        name: 'Јавански'
      },
      {
        code: 'jbo' ,
        name: 'Лојбан'
      },
      {
        code: 'jpn' ,
        name: 'Јапански'
      },
      {
        code: 'jpr' ,
        name: 'Јудео-Персиан'
      },
      {
        code: 'jrb' ,
        name: 'Јудео-Арабиц'
      },
      {
        code: 'kaa' ,
        name: 'Кара-Калпак'
      },
      {
        code: 'kab' ,
        name: 'Кабилски'
      },
      {
        code: 'kac' ,
        name: 'Кацхин'
      },
      {
        code: 'kal' ,
        name: 'Калааллисут / Греенландиц'
      },
      {
        code: 'kam' ,
        name: 'Камба'
      },
      {
        code: 'kan' ,
        name: 'Каннада'
      },
      {
        code: 'kar' ,
        name: 'Карен'
      },
      {
        code: 'kas' ,
        name: 'Кашмирски'
      },
      {
        code: 'kau' ,
        name: 'Канури'
      },
      {
        code: 'kaw' ,
        name: 'Кави'
      },
      {
        code: 'kaz' ,
        name: 'Казахски'
      },
      {
        code: 'kbd' ,
        name: 'Кабардиан'
      },
      {
        code: 'kha' ,
        name: 'Кхаси'
      },
      {
        code: 'khi' ,
        name: 'Кхоисан (отхер)'
      },
      {
        code: 'khm' ,
        name: 'Кмерски'
      },
      {
        code: 'kho' ,
        name: 'Кхотанесе'
      },
      {
        code: 'kik' ,
        name: 'Кикуyу'
      },
      {
        code: 'kin' ,
        name: 'Кинyарwанда'
      },
      {
        code: 'kir' ,
        name: 'Киргиски'
      },
      {
        code: 'kmb' ,
        name: 'Кимбунду'
      },
      {
        code: 'kok' ,
        name: 'Конкани'
      },
      {
        code: 'kom' ,
        name: 'Коми'
      },
      {
        code: 'kon' ,
        name: 'Конго'
      },
      {
        code: 'kor' ,
        name: 'Корејски'
      },
      {
        code: 'kos' ,
        name: 'Косраеан'
      },
      {
        code: 'kpe' ,
        name: 'Кпелле'
      },
      {
        code: 'krc' ,
        name: 'Карацхаy-Балкар'
      },
      {
        code: 'krl' ,
        name: 'Карелиан'
      },
      {
        code: 'kro' ,
        name: 'Кру'
      },
      {
        code: 'kru' ,
        name: 'Курукх'
      },
      {
        code: 'kua' ,
        name: 'Куанyама / Кwанyама'
      },
      {
        code: 'kur' ,
        name: 'Курдски'
      },
      {
        code: 'kus' ,
        name: 'Кусаи'
      },
      {
        code: 'kut' ,
        name: 'Кутенаи'
      },
      {
        code: 'lad' ,
        name: 'Ладино'
      },
      {
        code: 'lah' ,
        name: 'Лахнда'
      },
      {
        code: 'lam' ,
        name: 'Ламба'
      },
      {
        code: 'lan' ,
        name: 'Лангдок (после 1500)'
      },
      {
        code: 'lao' ,
        name: 'Лао'
      },
      {
        code: 'lap' ,
        name: 'Лапонски'
      },
      {
        code: 'lat' ,
        name: 'Латински'
      },
      {
        code: 'lav' ,
        name: 'Летонски'
      },
      {
        code: 'lez' ,
        name: 'Лезгхиан'
      },
      {
        code: 'lim' ,
        name: 'Лимбурган / Лимбургисх'
      },
      {
        code: 'lin' ,
        name: 'Лингала'
      },
      {
        code: 'lit' ,
        name: 'Литвански'
      },
      {
        code: 'lol' ,
        name: 'Монго'
      },
      {
        code: 'loz' ,
        name: 'Лози'
      },
      {
        code: 'ltz' ,
        name: 'Луxембуршки'
      },
      {
        code: 'lua' ,
        name: 'Луба-Лулуа'
      },
      {
        code: 'lub' ,
        name: 'Луба-Катанга'
      },
      {
        code: 'lug' ,
        name: 'Ганда'
      },
      {
        code: 'lui' ,
        name: 'Луисено'
      },
      {
        code: 'lun' ,
        name: 'Лунда'
      },
      {
        code: 'luo' ,
        name: 'Луо (Кенија и Танзанија)'
      },
      {
        code: 'lus' ,
        name: 'Лусхаи'
      },
      {
        code: 'mac' ,
        name: 'Македонски'
      },
      {
        code: 'mad' ,
        name: 'Мадурски'
      },
      {
        code: 'mag' ,
        name: 'Магахи'
      },
      {
        code: 'mah' ,
        name: 'Маршалски'
      },
      {
        code: 'mai' ,
        name: 'Маитхили'
      },
      {
        code: 'mak' ,
        name: 'Макасар'
      },
      {
        code: 'mal' ,
        name: 'Малајаламски'
      },
      {
        code: 'man' ,
        name: 'Мандинго'
      },
      {
        code: 'mao' ,
        name: 'Маорски'
      },
      {
        code: 'map' ,
        name: 'Аустронезијски (остали)'
      },
      {
        code: 'mar' ,
        name: 'Маратхи'
      },
      {
        code: 'mas' ,
        name: 'Масаи'
      },
      {
        code: 'max' ,
        name: 'Мански'
      },
      {
        code: 'may' ,
        name: 'Малајски'
      },
      {
        code: 'mdf' ,
        name: 'Моксха'
      },
      {
        code: 'mdr' ,
        name: 'Мандар'
      },
      {
        code: 'men' ,
        name: 'Менде'
      },
      {
        code: 'mga' ,
        name: 'Средњоирски (900-1200)'
      },
      {
        code: 'mic' ,
        name: 'Микмак'
      },
      {
        code: 'min' ,
        name: 'Мингангкабау'
      },
      {
        code: 'mis' ,
        name: 'Остали'
      },
      {
        code: 'mkh' ,
        name: 'Мон-Кхмер (остали)'
      },
      {
        code: 'mla' ,
        name: 'Малагашки'
      },
      {
        code: 'mlt' ,
        name: 'Малтешки'
      },
      {
        code: 'mnc' ,
        name: 'Манчу'
      },
      {
        code: 'mni' ,
        name: 'Манипури'
      },
      {
        code: 'mno' ,
        name: 'Манобо језици'
      },
      {
        code: 'moh' ,
        name: 'Мохаwк'
      },
      {
        code: 'mon' ,
        name: 'Монголски'
      },
      {
        code: 'mos' ,
        name: 'Моси'
      },
      {
        code: 'mul' ,
        name: 'Вишејезични'
      },
      {
        code: 'mun' ,
        name: 'Мунда'
      },
      {
        code: 'mus' ,
        name: 'Цреек / Мускогее'
      },
      {
        code: 'mwl' ,
        name: 'Мирандесе'
      },
      {
        code: 'mwr' ,
        name: 'Марвари'
      },
      {
        code: 'myn' ,
        name: 'Маја језици'
      },
      {
        code: 'myv' ,
        name: 'Ерзyа'
      },
      {
        code: 'nah' ,
        name: 'Нахуатл'
      },
      {
        code: 'nai' ,
        name: 'Северноамерички индијански (остали)'
      },
      {
        code: 'nap' ,
        name: 'Наполитан'
      },
      {
        code: 'nau' ,
        name: 'Науру'
      },
      {
        code: 'nav' ,
        name: 'Навахо'
      },
      {
        code: 'nbl' ,
        name: 'Ндебеле, јужни'
      },
      {
        code: 'nde' ,
        name: 'Ндебеле, северни'
      },
      {
        code: 'ndo' ,
        name: 'Ндонга'
      },
      {
        code: 'nds' ,
        name: 'Нисконемачки / Нискосаксонски'
      },
      {
        code: 'nep' ,
        name: 'Непалски'
      },
      {
        code: 'new' ,
        name: 'Неwари / Непал Бхаса'
      },
      {
        code: 'nia' ,
        name: 'Ниас'
      },
      {
        code: 'nic' ,
        name: 'Нигерско-кордофански (остали)'
      },
      {
        code: 'niu' ,
        name: 'Ниуеан'
      },
      {
        code: 'nno' ,
        name: 'Норwегиан Нyнорск'
      },
      {
        code: 'nob' ,
        name: 'Норwегиан Бокмал'
      },
      {
        code: 'nog' ,
        name: 'Ногаи'
      },
      {
        code: 'non' ,
        name: 'Норсе, Олд'
      },
      {
        code: 'nor' ,
        name: 'Норвешки'
      },
      {
        code: 'nso' ,
        name: 'Северни Сотхо / Педи / Сепеди'
      },
      {
        code: 'nqo' ,
        name: 'Н Ко'
      },
      {
        code: 'nub' ,
        name: 'Нубијски језици'
      },
      {
        code: 'nwc' ,
        name: 'Цлассицал Неwари / Олд Неwари / Цлассицал Непал Бхаса'
      },
      {
        code: 'nya' ,
        name: 'Цхицхеwа / Цхеwа / Нyања'
      },
      {
        code: 'nym' ,
        name: 'Нyамwези'
      },
      {
        code: 'nyn' ,
        name: 'Нyанколе'
      },
      {
        code: 'nyo' ,
        name: 'Нyоро'
      },
      {
        code: 'nzi' ,
        name: 'Нзима'
      },
      {
        code: 'oci' ,
        name: 'Оццитан / Провансалски (после 1500)'
      },
      {
        code: 'oji' ,
        name: 'Ојибwа'
      },
      {
        code: 'ori' ,
        name: 'Ориyа'
      },
      {
        code: 'orm' ,
        name: 'Оромо'
      },
      {
        code: 'osa' ,
        name: 'Осаге'
      },
      {
        code: 'oss' ,
        name: 'Осетски'
      },
      {
        code: 'ota' ,
        name: 'Отомански турски (1500-1928)'
      },
      {
        code: 'oto' ,
        name: 'Отомски језици'
      },
      {
        code: 'paa' ,
        name: 'Папуански (остали)'
      },
      {
        code: 'pag' ,
        name: 'Пангасинан'
      },
      {
        code: 'pal' ,
        name: 'Пахлави'
      },
      {
        code: 'pam' ,
        name: 'Пампанга'
      },
      {
        code: 'pan' ,
        name: 'Пањаби / Пуњаби'
      },
      {
        code: 'pap' ,
        name: 'Папиаменто'
      },
      {
        code: 'pau' ,
        name: 'Палауан'
      },
      {
        code: 'peo' ,
        name: 'Староперсијски (600пне-400не)'
      },
      {
        code: 'per' ,
        name: 'Персијски'
      },
      {
        code: 'phi' ,
        name: 'Филипински (остали)'
      },
      {
        code: 'phn' ,
        name: 'Феничански'
      },
      {
        code: 'pli' ,
        name: 'Пали'
      },
      {
        code: 'pol' ,
        name: 'Пољски'
      },
      {
        code: 'pon' ,
        name: 'Похнпеиан'
      },
      {
        code: 'por' ,
        name: 'Португалски'
      },
      {
        code: 'pra' ,
        name: 'Пракрит лангуагес'
      },
      {
        code: 'pro' ,
        name: 'Провансалски (до 1500)'
      },
      {
        code: 'pus' ,
        name: 'Пусхто'
      },
      {
        code: 'que' ,
        name: 'Qуецхуа'
      },
      {
        code: 'raj' ,
        name: 'Рајастхани'
      },
      {
        code: 'rap' ,
        name: 'Рапануи'
      },
      {
        code: 'rar' ,
        name: 'Раротонган'
      },
      {
        code: 'roa' ,
        name: 'Романски (остали)'
      },
      {
        code: 'roh' ,
        name: 'Реторомански'
      },
      {
        code: 'rom' ,
        name: 'Ромски'
      },
      {
        code: 'rsi' ,
        name: 'Русински'
      },
      {
        code: 'rum' ,
        name: 'Румунски'
      },
      {
        code: 'run' ,
        name: 'Рунди'
      },
      {
        code: 'rus' ,
        name: 'Руски'
      },
      {
        code: 'rup' ,
        name: 'Ароманиан'
      },
      {
        code: 'sad' ,
        name: 'Сандаwе'
      },
      {
        code: 'sag' ,
        name: 'Санго'
      },
      {
        code: 'sah' ,
        name: 'Yакут'
      },
      {
        code: 'sai' ,
        name: 'Јужноамерички индијански (остали)'
      },
      {
        code: 'sal' ,
        name: 'Салишки језици'
      },
      {
        code: 'sam' ,
        name: 'Самаритански арамејски'
      },
      {
        code: 'san' ,
        name: 'Санскрт'
      },
      {
        code: 'sas' ,
        name: 'Сасак'
      },
      {
        code: 'sat' ,
        name: 'Сантали'
      },
      {
        code: 'sel' ,
        name: 'Селкупски'
      },
      {
        code: 'sem' ,
        name: 'Семитски (остали)'
      },
      {
        code: 'sga' ,
        name: 'Ирски, стари (до 900)'
      },
      {
        code: 'sgn' ,
        name: 'Знаковни језици'
      },
      {
        code: 'shn' ,
        name: 'Схан'
      },
      {
        code: 'sid' ,
        name: 'Сидамо'
      },
      {
        code: 'sin' ,
        name: 'Синхала'
      },
      {
        code: 'sio' ,
        name: 'Сиоуан лангуагес'
      },
      {
        code: 'sit' ,
        name: 'Сино-Тибетан (отхер)'
      },
      {
        code: 'sla' ,
        name: 'Словенски (остали)'
      },
      {
        code: 'sma' ,
        name: 'Соутхерн Сами'
      },
      {
        code: 'sme' ,
        name: 'Нортхерн Сами'
      },
      {
        code: 'smi' ,
        name: 'Сами лангуагес (отхер)'
      },
      {
        code: 'smj' ,
        name: 'Луле Сами'
      },
      {
        code: 'smn' ,
        name: 'Инари Сами'
      },
      {
        code: 'smo' ,
        name: 'Самоански'
      },
      {
        code: 'sms' ,
        name: 'Сколт Сами'
      },
      {
        code: 'sna' ,
        name: 'Схона'
      },
      {
        code: 'snd' ,
        name: 'Синдхи'
      },
      {
        code: 'snk' ,
        name: 'Сонинке'
      },
      {
        code: 'sog' ,
        name: 'Согдијски'
      },
      {
        code: 'som' ,
        name: 'Сомалијски'
      },
      {
        code: 'son' ,
        name: 'Сонгхаи'
      },
      {
        code: 'sot' ,
        name: 'Сотхо, Соутхерн'
      },
      {
        code: 'srd' ,
        name: 'Сардинијски'
      },
      {
        code: 'srr' ,
        name: 'Серер'
      },
      {
        code: 'srn' ,
        name: 'Сранан'
      },
      {
        code: 'ssa' ,
        name: 'Нилско-сахарски (остали)'
      },
      {
        code: 'suk' ,
        name: 'Сукума'
      },
      {
        code: 'sun' ,
        name: 'Сундски'
      },
      {
        code: 'sus' ,
        name: 'Сусу'
      },
      {
        code: 'sux' ,
        name: 'Сумеријански'
      },
      {
        code: 'swa' ,
        name: 'Свахили'
      },
      {
        code: 'swe' ,
        name: 'Шведски'
      },
      {
        code: 'swz' ,
        name: 'Сwази'
      },
      {
        code: 'syr' ,
        name: 'Сиријски'
      },
      {
        code: 'syc' ,
        name: 'Сyриац'
      },
      {
        code: 'tah' ,
        name: 'Тахитски'
      },
      {
        code: 'tai' ,
        name: 'Таи (остали)'
      },
      {
        code: 'tam' ,
        name: 'Тамилски'
      },
      {
        code: 'tat' ,
        name: 'Татарски'
      },
      {
        code: 'tel' ,
        name: 'Телугу'
      },
      {
        code: 'tem' ,
        name: 'Тимне'
      },
      {
        code: 'ter' ,
        name: 'Терено'
      },
      {
        code: 'tet' ,
        name: 'Тетум'
      },
      {
        code: 'tgk' ,
        name: 'Таџик'
      },
      {
        code: 'tgl' ,
        name: 'Тагалог'
      },
      {
        code: 'tha' ,
        name: 'Тхаи'
      },
      {
        code: 'tib' ,
        name: 'Тибетански'
      },
      {
        code: 'tig' ,
        name: 'Тигре'
      },
      {
        code: 'tir' ,
        name: 'Тигринyа'
      },
      {
        code: 'tiv' ,
        name: 'Тив'
      },
      {
        code: 'tkl' ,
        name: 'Токелау'
      },
      {
        code: 'tlh' ,
        name: 'Клингон'
      },
      {
        code: 'tli' ,
        name: 'Тлингит'
      },
      {
        code: 'tmh' ,
        name: 'Тамасхек'
      },
      {
        code: 'tog' ,
        name: 'Тонга (Нyаса)'
      },
      {
        code: 'tsi' ,
        name: 'Цимшијен'
      },
      {
        code: 'tso' ,
        name: 'Тсонга'
      },
      {
        code: 'tup' ,
        name: 'Тупи језици'
      },
      {
        code: 'tur' ,
        name: 'Турски'
      },
      {
        code: 'tut' ,
        name: 'Алтајски (остали)'
      },
      {
        code: 'tvl' ,
        name: 'Тувалу'
      },
      {
        code: 'tyv' ,
        name: 'Тувиниан'
      },
      {
        code: 'udm' ,
        name: 'Удмурт'
      },
      {
        code: 'uga' ,
        name: 'Угаритиц'
      },
      {
        code: 'ukr' ,
        name: 'Украјински'
      },
      {
        code: 'und' ,
        name: 'Неодређени'
      },
      {
        code: 'urd' ,
        name: 'Урду'
      },
      {
        code: 'vie' ,
        name: 'Вијетнамски'
      },
      {
        code: 'wel' ,
        name: 'Велшки'
      },
      {
        code: 'yid' ,
        name: 'Јидиш'
      }
    ];

   static _coderDT: Coder[] =
    [
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

   static _coderCC =
    [
      {
        code: 'a' ,
        name: 'Библиографије'
      },
      {
        code: 'b' ,
        name: 'Каталози'
      },
      {
        code: 'c' ,
        name: 'Казала, индекси'
      },
      {
        code: 'd' ,
        name: 'Апстракт'
      },
      {
        code: 'e' ,
        name: 'Речници'
      },
      {
        code: 'f' ,
        name: 'Енциклопедије'
      },
      {
        code: 'g' ,
        name: 'Адресари'
      },
      {
        code: 'h' ,
        name: 'Летописи'
      },
      {
        code: 'i' ,
        name: 'Статистички прегледи'
      },
      {
        code: 'j' ,
        name: 'Уџбеници'
      },
      {
        code: 'k' ,
        name: 'Патентни'
      },
      {
        code: 'l' ,
        name: 'Стандарди'
      },
      {
        code: 'm' ,
        name: 'Дисертација, тезе'
      },
      {
        code: 'm1' ,
        name: 'Мастер рад'
      },
      {
        code: 'm2' ,
        name: 'Магистарски радови'
      },
      {
        code: 'm3' ,
        name: 'Специјалистички радови'
      },
      {
        code: 'm4' ,
        name: 'Хабилитацијски радови'
      },
      {
        code: 'm5' ,
        name: 'Дипломски радови'
      },
      {
        code: 'm6' ,
        name: 'Бачелор радови'
      },
      {
        code: 'm7' ,
        name: 'Дипломски/завршни радови првог степена'
      },
      {
        code: 'm8' ,
        name: 'Бачелор радови првог степена'
      },
      {
        code: 'm9' ,
        name: 'Специјалистички радови струковних студија'
      },
      {
        code: 'n' ,
        name: 'Закони'
      },
      {
        code: 'o' ,
        name: 'НУмеричке табеле'
      },
      {
        code: 'p' ,
        name: 'Технички извештај'
      },
      {
        code: 'q' ,
        name: 'Испитна грађа'
      },
      {
        code: 'r' ,
        name: 'Истраживачки радови, базична истраживања'
      },
      {
        code: 'r1' ,
        name: 'Прикази'
      },
      {
        code: 'r2' ,
        name: 'Научно дело'
      },
      {
        code: 'r3' ,
        name: 'Претхондно саопштење'
      },
      {
        code: 'r4' ,
        name: 'Стручно дело'
      },
      {
        code: 'r5' ,
        name: 'Извештај са конференције'
      },
      {
        code: 'r6' ,
        name: 'Дело није категорисано'
      },
      {
        code: 's' ,
        name: 'Уговори'
      },
      {
        code: 's01' ,
        name: 'Споменице'
      },
      {
        code: 's02' ,
        name: 'Програми'
      },
      {
        code: 's03' ,
        name: 'Посебан отисак'
      },
      {
        code: 's04' ,
        name: 'Сликовнице'
      },
      {
        code: 's05' ,
        name: 'Брошуре'
      },
      {
        code: 's06' ,
        name: 'Монографије'
      },
      {
        code: 's07' ,
        name: 'Хронике'
      },
      {
        code: 's08' ,
        name: 'Студије'
      },
      {
        code: 's09' ,
        name: 'Историографија'
      },
      {
        code: 's10' ,
        name: 'Збирке задатака'
      },
      {
        code: 't' ,
        name: 'Истраживачки радови, развојна истраживања'
      },
      {
        code: 'u' ,
        name: 'Правилници'
      },
      {
        code: 'v' ,
        name: 'Приручници'
      },
      {
        code: 'w' ,
        name: 'Истраживачки радови, апликацијка истраживања'
      },
      {
        code: 'x1' ,
        name: 'Атласи'
      },
      {
        code: 'x2' ,
        name: 'Сепарати'
      },
      {
        code: 'x3' ,
        name: 'Архивска грађа'
      },
      {
        code: 'x4' ,
        name: 'Албуми'
      },
      {
        code: 'x5' ,
        name: 'Водичи'
      },
      {
        code: 'x6' ,
        name: 'Лексикони'
      },
      {
        code: 'x7' ,
        name: 'Статути'
      },
      {
        code: 'x8' ,
        name: 'Антологије'
      },
      {
        code: 'z' ,
        name: 'Зборници'
      },
      {
        code: 'z1' ,
        name: 'Стрипови'
      },
      {
        code: 'z2' ,
        name: 'Остало'
      }
    ];

   static _coderCO =
    [
      {
        code: 'KS' ,
        name: 'Краљевина Србија'
      },
      {
        code: 'KSHS' ,
        name: 'Краљевина Срба, Хрвата и Словенаца'
      },
      {
        code: 'abw' ,
        name: 'Аруба'
      },
      {
        code: 'afg' ,
        name: 'Афганистан'
      },
      {
        code: 'ago' ,
        name: 'Ангола'
      },
      {
        code: 'aia' ,
        name: 'Ангуилла'
      },
      {
        code: 'alb' ,
        name: 'Албанија'
      },
      {
        code: 'and' ,
        name: 'Андора'
      },
      {
        code: 'ant' ,
        name: 'Холандски Антили'
      },
      {
        code: 'are' ,
        name: 'Уједињени Арапски Емирати'
      },
      {
        code: 'arg' ,
        name: 'Аргентина'
      },
      {
        code: 'asm' ,
        name: 'Америчка самоа'
      },
      {
        code: 'ata' ,
        name: 'Антарктик (територија јужно од 60-тог степена ЈГШ)'
      },
      {
        code: 'atf' ,
        name: 'Јужне француске територије'
      },
      {
        code: 'atg' ,
        name: 'Антигва и Барбуда'
      },
      {
        code: 'atn' ,
        name: 'Дроннинг Моуд Ланд'
      },
      {
        code: 'aus' ,
        name: 'Аустралија'
      },
      {
        code: 'aut' ,
        name: 'Аустрија'
      },
      {
        code: 'aze' ,
        name: 'Азербејџан'
      },
      {
        code: 'bdi' ,
        name: 'Бурунди'
      },
      {
        code: 'bel' ,
        name: 'Белгија'
      },
      {
        code: 'ben' ,
        name: 'Бенин'
      },
      {
        code: 'bfa' ,
        name: 'Буркина Фасо'
      },
      {
        code: 'bgd' ,
        name: 'Бангладеш'
      },
      {
        code: 'bgr' ,
        name: 'Бугарска'
      },
      {
        code: 'bhr' ,
        name: 'Бахреин'
      },
      {
        code: 'bhs' ,
        name: 'Бахами'
      },
      {
        code: 'bih' ,
        name: 'Босна и Херцеговина'
      },
      {
        code: 'blr' ,
        name: 'Белорусија'
      },
      {
        code: 'blz' ,
        name: 'Белизе'
      },
      {
        code: 'bmu' ,
        name: 'Бермуда'
      },
      {
        code: 'bol' ,
        name: 'Боливија'
      },
      {
        code: 'bra' ,
        name: 'Бразил'
      },
      {
        code: 'brb' ,
        name: 'Барбадос'
      },
      {
        code: 'brn' ,
        name: 'Брунеј'
      },
      {
        code: 'bth' ,
        name: 'Бутан'
      },
      {
        code: 'bur' ,
        name: 'Бурма'
      },
      {
        code: 'bvt' ,
        name: 'Боувет Исланд (Боуветоyа)'
      },
      {
        code: 'bwa' ,
        name: 'Боцвана'
      },
      {
        code: 'bys' ,
        name: 'Бјелорусија ССР'
      },
      {
        code: 'caf' ,
        name: 'Централноафричка Република'
      },
      {
        code: 'can' ,
        name: 'Канада'
      },
      {
        code: 'cck' ,
        name: 'Цоцос (Кеелинг) Исландс'
      },
      {
        code: 'che' ,
        name: 'Швајцарска'
      },
      {
        code: 'chl' ,
        name: 'Чиле'
      },
      {
        code: 'chn' ,
        name: 'Кина'
      },
      {
        code: 'civ' ,
        name: 'Обала Слоноваче'
      },
      {
        code: 'cmr' ,
        name: 'Камерун'
      },
      {
        code: 'cod' ,
        name: 'Демократска Република Конго'
      },
      {
        code: 'cog' ,
        name: 'Народна Република Конго'
      },
      {
        code: 'cok' ,
        name: 'Цоок Исландс'
      },
      {
        code: 'col' ,
        name: 'Колумбија'
      },
      {
        code: 'com' ,
        name: 'Цоморос'
      },
      {
        code: 'cpv' ,
        name: 'Зеленортска Острва'
      },
      {
        code: 'cri' ,
        name: 'Костарика'
      },
      {
        code: 'csk' ,
        name: 'Чехословачка'
      },
      {
        code: 'cte' ,
        name: 'Цантон анд Ендербурy Исландс'
      },
      {
        code: 'cub' ,
        name: 'Куба'
      },
      {
        code: 'cxr' ,
        name: 'Божићно Острво'
      },
      {
        code: 'cym' ,
        name: 'Кајманска Острва'
      },
      {
        code: 'cyp' ,
        name: 'Кипар'
      },
      {
        code: 'cze' ,
        name: 'Чешка Република'
      },
      {
        code: 'ddr' ,
        name: 'Немачка Демократска Република'
      },
      {
        code: 'deu' ,
        name: 'Савезна Република Немачка'
      },
      {
        code: 'dji' ,
        name: 'Џибути'
      },
      {
        code: 'dma' ,
        name: 'Доминика'
      },
      {
        code: 'dnk' ,
        name: 'Данска'
      },
      {
        code: 'dom' ,
        name: 'Доминиканска Република'
      },
      {
        code: 'dza' ,
        name: 'Алжир'
      },
      {
        code: 'ecu' ,
        name: 'Еквадор'
      },
      {
        code: 'egy' ,
        name: 'Египат'
      },
      {
        code: 'eri' ,
        name: 'Еритреја'
      },
      {
        code: 'esh' ,
        name: 'Западна Сахара'
      },
      {
        code: 'esp' ,
        name: 'Шпанија'
      },
      {
        code: 'est' ,
        name: 'Естонија'
      },
      {
        code: 'eth' ,
        name: 'Етиопија'
      },
      {
        code: 'fin' ,
        name: 'Финска'
      },
      {
        code: 'fji' ,
        name: 'Фији'
      },
      {
        code: 'flk' ,
        name: 'Фолкландска Острва (Малвинас)'
      },
      {
        code: 'fra' ,
        name: 'Француска'
      },
      {
        code: 'fro' ,
        name: 'Фарска Острва'
      },
      {
        code: 'fsm' ,
        name: 'Микронезија'
      },
      {
        code: 'gab' ,
        name: 'Габон'
      },
      {
        code: 'gbr' ,
        name: 'Велика Британија'
      },
      {
        code: 'geo' ,
        name: 'Грузија'
      },
      {
        code: 'gha' ,
        name: 'Гана'
      },
      {
        code: 'gib' ,
        name: 'Гибралтар'
      },
      {
        code: 'gin' ,
        name: 'Гвинеја'
      },
      {
        code: 'glp' ,
        name: 'Гваделупе'
      },
      {
        code: 'gmb' ,
        name: 'Гамбиа'
      },
      {
        code: 'gnb' ,
        name: 'Гвинеја-Бисау'
      },
      {
        code: 'gnq' ,
        name: 'Екваторијална Гвинеја'
      },
      {
        code: 'grc' ,
        name: 'Грчка'
      },
      {
        code: 'grd' ,
        name: 'Гренада'
      },
      {
        code: 'grl' ,
        name: 'Гренланд'
      },
      {
        code: 'gtm' ,
        name: 'Гватемала'
      },
      {
        code: 'guf' ,
        name: 'Француска Гвајана'
      },
      {
        code: 'gum' ,
        name: 'Гуам'
      },
      {
        code: 'guy' ,
        name: 'Гвајана'
      },
      {
        code: 'hkg' ,
        name: 'Хонг Конг'
      },
      {
        code: 'hmd' ,
        name: 'Хеард анд МЦ Доналд Исландс'
      },
      {
        code: 'hnd' ,
        name: 'Хондурас'
      },
      {
        code: 'hrv' ,
        name: 'Хрватска'
      },
      {
        code: 'hti' ,
        name: 'Хаити'
      },
      {
        code: 'hun' ,
        name: 'Мађарска'
      },
      {
        code: 'idn' ,
        name: 'Индонезија'
      },
      {
        code: 'ind' ,
        name: 'Индија'
      },
      {
        code: 'iot' ,
        name: 'Бритисх Индиан Оцеан Территорy (Цхагос Арцхипелаго)'
      },
      {
        code: 'irl' ,
        name: 'Ирска'
      },
      {
        code: 'irn' ,
        name: 'Иран'
      },
      {
        code: 'irq' ,
        name: 'Ирак'
      },
      {
        code: 'isl' ,
        name: 'Исланд'
      },
      {
        code: 'isr' ,
        name: 'Израел'
      },
      {
        code: 'ita' ,
        name: 'Италија'
      },
      {
        code: 'jam' ,
        name: 'Јамајка'
      },
      {
        code: 'jor' ,
        name: 'Јордан'
      },
      {
        code: 'jpn' ,
        name: 'Јапан'
      },
      {
        code: 'jtn' ,
        name: 'Јохнстон Исланд'
      },
      {
        code: 'kaz' ,
        name: 'Казахстан'
      },
      {
        code: 'ken' ,
        name: 'Кенија'
      },
      {
        code: 'kgz' ,
        name: 'Киргистан'
      },
      {
        code: 'khm' ,
        name: 'Кампучија (Камбоџа)'
      },
      {
        code: 'kna' ,
        name: 'Ст. Киттс анд Невис'
      },
      {
        code: 'kor' ,
        name: 'Кореја, Република (ЈуÅ¾на)'
      },
      {
        code: 'kwt' ,
        name: 'Кувајт'
      },
      {
        code: 'lao' ,
        name: 'Лаос'
      },
      {
        code: 'lbn' ,
        name: 'Либан'
      },
      {
        code: 'lbr' ,
        name: 'Либерија'
      },
      {
        code: 'lby' ,
        name: 'Либија'
      },
      {
        code: 'lca' ,
        name: 'Света Луција'
      },
      {
        code: 'lie' ,
        name: 'Лихтенштајн'
      },
      {
        code: 'lki' ,
        name: 'Шри Ланка'
      },
      {
        code: 'lso' ,
        name: 'Лесото'
      },
      {
        code: 'ltu' ,
        name: 'Литванија'
      },
      {
        code: 'lux' ,
        name: 'Луксембург'
      },
      {
        code: 'lva' ,
        name: 'Летонија'
      },
      {
        code: 'mac' ,
        name: 'Макао'
      },
      {
        code: 'mar' ,
        name: 'Мароко'
      },
      {
        code: 'mco' ,
        name: 'Монако'
      },
      {
        code: 'mda' ,
        name: 'Молдавија'
      },
      {
        code: 'mdg' ,
        name: 'Мадагаскар'
      },
      {
        code: 'mdv' ,
        name: 'Малдиви'
      },
      {
        code: 'mex' ,
        name: 'Мексико'
      },
      {
        code: 'mhl' ,
        name: 'Маршалска Острва'
      },
      {
        code: 'mid' ,
        name: 'Мидwаy Исландс'
      },
      {
        code: 'mkd' ,
        name: 'Македонија, Бивша Југословенска Република'
      },
      {
        code: 'mli' ,
        name: 'Мали'
      },
      {
        code: 'mlt' ,
        name: 'Малта'
      },
      {
        code: 'mmr' ,
        name: 'Мyанмар'
      },
      {
        code: 'mng' ,
        name: 'Монголија'
      },
      {
        code: 'mne' ,
        name: 'Црна гора'
      },
      {
        code: 'mnp' ,
        name: 'Нотхерн Мариана Исландс'
      },
      {
        code: 'moz' ,
        name: 'Мозамбик'
      },
      {
        code: 'mrt' ,
        name: 'Мауританиа'
      },
      {
        code: 'msr' ,
        name: 'Монтсеррат'
      },
      {
        code: 'mtq' ,
        name: 'Мартиник'
      },
      {
        code: 'mus' ,
        name: 'Маурицијус'
      },
      {
        code: 'mwi' ,
        name: 'Малави'
      },
      {
        code: 'mys' ,
        name: 'Малезија'
      },
      {
        code: 'myt' ,
        name: 'Маyотте'
      },
      {
        code: 'nam' ,
        name: 'Намбија'
      },
      {
        code: 'ncl' ,
        name: 'Нова Каледонија'
      },
      {
        code: 'ner' ,
        name: 'Нигер'
      },
      {
        code: 'nfk' ,
        name: 'Норфолк Исланд'
      },
      {
        code: 'nga' ,
        name: 'Нигерија'
      },
      {
        code: 'nic' ,
        name: 'Никарагва'
      },
      {
        code: 'niu' ,
        name: 'Ниуе'
      },
      {
        code: 'nld' ,
        name: 'Холандија'
      },
      {
        code: 'nor' ,
        name: 'Норвешка'
      },
      {
        code: 'npl' ,
        name: 'Непал'
      },
      {
        code: 'nru' ,
        name: 'Науру'
      },
      {
        code: 'ntz' ,
        name: 'Неутрал Зоне'
      },
      {
        code: 'nzl' ,
        name: 'Нови Зеланд'
      },
      {
        code: 'omn' ,
        name: 'Оман'
      },
      {
        code: 'pak' ,
        name: 'Пакистан'
      },
      {
        code: 'pan' ,
        name: 'Панама'
      },
      {
        code: 'pci' ,
        name: 'Пацифиц Исландс (труст территорy)'
      },
      {
        code: 'pcn' ,
        name: 'Питцаирн Исланд'
      },
      {
        code: 'per' ,
        name: 'Перу'
      },
      {
        code: 'phl' ,
        name: 'Филипини'
      },
      {
        code: 'plw' ,
        name: 'Палау'
      },
      {
        code: 'png' ,
        name: 'Папуа Неw Гуинеа'
      },
      {
        code: 'pol' ,
        name: 'Пољска'
      },
      {
        code: 'pri' ,
        name: 'Порторико'
      },
      {
        code: 'prk' ,
        name: 'Кореја, Демократска Народна Република'
      },
      {
        code: 'prt' ,
        name: 'Португал'
      },
      {
        code: 'pry' ,
        name: 'Парагвај'
      },
      {
        code: 'pus' ,
        name: 'Унитед Статес Мисцелланеоус Пацифиц Исландс'
      },
      {
        code: 'pyf' ,
        name: 'Француска Полинезија'
      },
      {
        code: 'qat' ,
        name: 'Катар'
      },
      {
        code: 'reu' ,
        name: 'Реунион'
      },
      {
        code: 'rom' ,
        name: 'Румунија'
      },
      {
        code: 'rus' ,
        name: 'Русија'
      },
      {
        code: 'rwa' ,
        name: 'Руанда'
      },
      {
        code: 'sau' ,
        name: 'Саудијска Арабија'
      },
      {
        code: 'scg' ,
        name: 'Србија и Црна Гора'
      },
      {
        code: 'sdn' ,
        name: 'Судан'
      },
      {
        code: 'sen' ,
        name: 'Сенегал'
      },
      {
        code: 'sgp' ,
        name: 'Сингапур'
      },
      {
        code: 'sgs' ,
        name: 'Соутх Георгиа анд тхе Соутх Сандwицх Исландс'
      },
      {
        code: 'shn' ,
        name: 'Ст. Хелена'
      },
      {
        code: 'sjm' ,
        name: 'Свалбард анд Јан Маyен Исландс'
      },
      {
        code: 'slb' ,
        name: 'Соломонска Острва'
      },
      {
        code: 'sle' ,
        name: 'Сијера Леоне'
      },
      {
        code: 'slv' ,
        name: 'Ел Салвадор'
      },
      {
        code: 'smr' ,
        name: 'Сан Марино'
      },
      {
        code: 'som' ,
        name: 'Сомалиа'
      },
      {
        code: 'spm' ,
        name: 'Ст. Пиерре анд Миqуелон'
      },
      {
        code: 'srb' ,
        name: 'Србија'
      },
      {
        code: 'stp' ,
        name: 'Сао Томе и Принципе'
      },
      {
        code: 'sun' ,
        name: 'СССР'
      },
      {
        code: 'sur' ,
        name: 'Суринаме'
      },
      {
        code: 'svk' ,
        name: 'Словачка'
      },
      {
        code: 'svn' ,
        name: 'Словенија'
      },
      {
        code: 'swe' ,
        name: 'Шведска'
      },
      {
        code: 'swz' ,
        name: 'Свазиленд'
      },
      {
        code: 'syc' ,
        name: 'Сејшели'
      },
      {
        code: 'syr' ,
        name: 'Сирија'
      },
      {
        code: 'tca' ,
        name: 'Туркс анд Цаицос Исландс'
      },
      {
        code: 'tcd' ,
        name: 'Чад'
      },
      {
        code: 'tgo' ,
        name: 'Того'
      },
      {
        code: 'tha' ,
        name: 'Тајланд'
      },
      {
        code: 'tjk' ,
        name: 'Таџикистан'
      },
      {
        code: 'tkl' ,
        name: 'Токелау'
      },
      {
        code: 'tkm' ,
        name: 'Туркменистан'
      },
      {
        code: 'tls' ,
        name: 'Тимор-Лесте'
      },
      {
        code: 'tmp' ,
        name: 'Источни Тимор'
      },
      {
        code: 'ton' ,
        name: 'Тонга'
      },
      {
        code: 'tto' ,
        name: 'Тринидад анд Тобаго'
      },
      {
        code: 'tun' ,
        name: 'Тунис'
      },
      {
        code: 'tur' ,
        name: 'Турска'
      },
      {
        code: 'tuv' ,
        name: 'Тивалу'
      },
      {
        code: 'twn' ,
        name: 'Тајван'
      },
      {
        code: 'tza' ,
        name: 'Танзанија'
      },
      {
        code: 'uga' ,
        name: 'Уганда'
      },
      {
        code: 'ukr' ,
        name: 'Украјина'
      },
      {
        code: 'umi' ,
        name: 'Унитед Статес Минор Оутлyинг Исландс'
      },
      {
        code: 'ury' ,
        name: 'Уругвај'
      },
      {
        code: 'usa' ,
        name: 'Сједињене Америчке Државе'
      },
      {
        code: 'uzb' ,
        name: 'Узбекистан'
      },
      {
        code: 'vat' ,
        name: 'Ватикан'
      },
      {
        code: 'vct' ,
        name: 'Саинт Винцет анд тхе Гренадинес'
      },
      {
        code: 'ven' ,
        name: 'Венецуела'
      },
      {
        code: 'vgb' ,
        name: 'Бритисх Виргин Исландс'
      },
      {
        code: 'vir' ,
        name: 'Унитед Статес Виргин Исландс'
      },
      {
        code: 'vnm' ,
        name: 'Вијетнам'
      },
      {
        code: 'vut' ,
        name: 'Вануату'
      },
      {
        code: 'wak' ,
        name: 'Wаке Исланд'
      },
      {
        code: 'wlf' ,
        name: 'Wаллис анд Футуна Исландс'
      },
      {
        code: 'wsm' ,
        name: 'Самоа'
      },
      {
        code: 'yem' ,
        name: 'Јемен'
      },
      {
        code: 'ymd' ,
        name: 'Јемен, Демократска Република'
      },
      {
        code: 'yug' ,
        name: 'Југославија'
      },
      {
        code: 'zaf' ,
        name: 'Соутх Африца'
      },
      {
        code: 'zar' ,
        name: 'Заир'
      },
      {
        code: 'zmb' ,
        name: 'Замбија'
      },
      {
        code: 'zwe' ,
        name: 'Зимбабве'
      }
    ];

   static _coderRT =
    [
      {
        code: 'a' ,
        name: 'Текстуална грађа, штампана'
      },
      {
        code: 'b' ,
        name: 'Текстуална грађа, рукопис'
      },
      {
        code: 'c' ,
        name: 'Ноте, штампане'
      },
      {
        code: 'd' ,
        name: 'Ноте, рукопис'
      },
      {
        code: 'e' ,
        name: 'Картографска грађа, штампана'
      },
      {
        code: 'f' ,
        name: 'Картографска грађа, рукопис'
      },
      {
        code: 'g' ,
        name: 'Аудиовизуелна грађа'
      },
      {
        code: 'i' ,
        name: 'Звучни записи, снимак немузичких интерпретација'
      },
      {
        code: 'j' ,
        name: 'Звучни записи, снимци музичких интерпретација'
      },
      {
        code: 'k' ,
        name: 'Дводимензионалне графике (слике, скице)'
      },
      {
        code: 'l' ,
        name: 'Компјутерски медији'
      },
      {
        code: 'm' ,
        name: 'Мултимедији'
      },
      {
        code: 'r' ,
        name: 'Тродимензионалне ументнине и реалије'
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
      code: 'SB',
      name: 'Предметна одредница'
    },
    {
      code: 'SD',
      name: 'Предметна пододредница'
    }
  ];

}
