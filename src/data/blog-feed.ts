// AUTO-GENERATED from content/blog - do not edit manually

export type Lang = 'en' | 'ru'

export type LocalizedText = {
  en: string
  ru: string
}

export type BlogFeedPost = {
  id: string
  kind: string
  date: string
  publishedAt: string
  featured: boolean
  tags: string[]
  primaryTag: LocalizedText
  title: LocalizedText
  excerpt: LocalizedText
  image: {
    src: string
    alt: LocalizedText
  }
  source: {
    en: string
    ru: string
  }
  isVladimir: boolean
}

export const posts: BlogFeedPost[] = [
  {
    "id": "dispietchier",
    "kind": "post",
    "date": "2026-04-17",
    "publishedAt": "2026-04-17 23:20:49",
    "featured": false,
    "tags": [
      "ai-stream",
      "threshold-signals",
      "vibe-coding"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "The Dispatcher",
      "ru": "Диспетчер"
    },
    "excerpt": {
      "en": "My day no longer splits into morning, noon, and evening. It splits into sessions. Codex, Claude, Cursor, and the kitchen-table oracle — four invisible hands I route my attention between. The next profession may not be developer or designer. It may be AI dispatcher",
      "ru": "Мой день не делится на утро, обед и вечер. Он делится на сессии. Codex, Claude, Cursor и оракул у кухонного стола — четверо невидимых, между которыми я распределяю внимание. Кажется, следующая профессия — не разработчик и не дизайнер. А диспетчер искусственного интеллекта"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/04/the-dispatcher-vt.webp",
      "alt": {
        "en": "The Dispatcher",
        "ru": "Диспетчер"
      }
    },
    "source": {
      "en": "69e2b48cc639de203813149d",
      "ru": "69e2b15ac639de2038131476"
    },
    "isVladimir": false
  },
  {
    "id": "three-products-three-months",
    "kind": "post",
    "date": "2026-04-11",
    "publishedAt": "2026-04-11 07:00:00",
    "featured": true,
    "tags": [
      "ai-stream",
      "threshold-signals",
      "vibe-coding"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "I'm not a developer. But I shipped three products in three months",
      "ru": "Я не разработчик. Но я написал три продукта за три месяца"
    },
    "excerpt": {
      "en": "When machine intelligence writes the code and the human is responsible for the logic and meaning — who's the developer? And what changes in the profession when the tool starts thinking alongside you?",
      "ru": "Когда машинный разум пишет код, а человек отвечает за логику и смысл — кто из них разработчик? И что меняется в профессии, когда инструмент начинает думать вместе с тобой?"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/04/me-and-ai.webp",
      "alt": {
        "en": "I'm not a developer. But I shipped three products in three months",
        "ru": "Я не разработчик. Но я написал три продукта за три месяца"
      }
    },
    "source": {
      "en": "69e2d27f9e829e8410d57753",
      "ru": "69e2d27e9e829e8410d5774c"
    },
    "isVladimir": false
  },
  {
    "id": "whatsapp-outreach-tool",
    "kind": "post",
    "date": "2026-04-07",
    "publishedAt": "2026-04-07 07:00:00",
    "featured": false,
    "tags": [
      "ai-stream",
      "threshold-signals",
      "vibe-coding"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "How I built my own WhatsApp outreach tool — with ChatGPT Codex and Claude",
      "ru": "Как я написал собственный инструмент для WhatsApp-рассылок — с помощью ChatGPT Codex и Claude"
    },
    "excerpt": {
      "en": "Cold outreach on a secondary market database is painful. Too many leads to handle manually, off-the-shelf services get you banned, templates get flagged. So I built my own tool in Python with a CRM, mobile mode, and Cloudflare hosting",
      "ru": "Холодные рассылки по базе вторички — это боль. Вручную не вывезти, сервисы блокируют, тексты одинаковые. Я написал собственный инструмент на Python с CRM, мобильной версией и хостингом на Cloudflare. Архитектуру проектировал ChatGPT Codex, операционную часть дорабатывал Claude Code"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/22eed37baa5783bbebe65f64ce953e9806ed4b86c79860fbcc82165ee3503963.png",
      "alt": {
        "en": "How I built my own WhatsApp outreach tool — with ChatGPT Codex and Claude",
        "ru": "Как я написал собственный инструмент для WhatsApp-рассылок — с помощью ChatGPT Codex и Claude"
      }
    },
    "source": {
      "en": "69e2d28f9e829e8410d57762",
      "ru": "69e2d27f9e829e8410d5775b"
    },
    "isVladimir": false
  },
  {
    "id": "tochka-opory",
    "kind": "post",
    "date": "2026-04-01",
    "publishedAt": "2026-04-01 12:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Fulcrum",
      "ru": "Точка опоры"
    },
    "excerpt": {
      "en": "Attended a meeting of the Dubai Healthy Person community - chamber business psychotherapy in the new art space DOM. Speakers, live conversations and the question that hangs in the air on everyone: what's next?",
      "ru": "Побывал на встрече сообщества «Дубай здорового человека» — камерная бизнес-психотерапия в новом арт-пространстве DOM. Спикеры, живые разговоры и вопрос, который висит у всех в воздухе: что дальше?"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/04/tochka_opori_dzch.webp",
      "alt": {
        "en": "Fulcrum",
        "ru": "Точка опоры"
      }
    },
    "source": {
      "en": "69df6eec75185f7b2320365d",
      "ru": "69ce758dd48c8e50d32bc6e8"
    },
    "isVladimir": false
  },
  {
    "id": "piervyi-raz-na-tatami-ia-nakoniets-poproboval-brazilskoie-dzhiu-dzhitsu",
    "kind": "post",
    "date": "2026-03-30",
    "publishedAt": "2026-03-30 14:55:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "alexander-live",
      "dubai",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "First time on the mat: I finally tried Brazilian Jiu-Jitsu",
      "ru": "Первый раз на татами: я наконец попробовал бразильское джиу-джитсу"
    },
    "excerpt": {
      "en": "Today I tried Brazilian jiu-jitsu for the first time at Roger Gracie Academy in Al Barsha. My kids have trained for three years, and I only now stepped onto the mat myself. The first session was tough. This weekend we are going with the kids to a competition in Fujairah",
      "ru": "Сегодня я впервые попробовал бразильское джиу-джитсу в Roger Gracie Academy в Аль-Барше. Мои дети занимаются уже три года, а я только сейчас решился выйти на татами сам. Первая тренировка далась очень тяжело. А в эти выходные мы едем с детьми на соревнования в Фуджейру"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/bjj_roger_gracier_family.webp",
      "alt": {
        "en": "First time on the mat: I finally tried Brazilian Jiu-Jitsu",
        "ru": "Первый раз на татами: я наконец попробовал бразильское джиу-джитсу"
      }
    },
    "source": {
      "en": "69df6eed75185f7b23203665",
      "ru": "69cac0f9f8f0882f782cce0d"
    },
    "isVladimir": false
  },
  {
    "id": "vremya-pokupat-chernye-perstni",
    "kind": "post",
    "date": "2026-03-26",
    "publishedAt": "2026-03-26 09:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "juriy-prose"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Time to buy black rings",
      "ru": "Время покупать черные перстни"
    },
    "excerpt": {
      "en": "“In the endless winter, the bracelets wrapped around the wrists...” Beyond the Barguzinsky tract, time froze in “zero transportation.” Confession of a watchman of an abandoned dacha, where reality disintegrates along the lines of Malevich, and only the warmth of freshly chopped firewood can save",
      "ru": "«Зимы бесконечной браслеты обвили запястья…» За Баргузинским трактом время застыло в «ноль-транспортировке». Исповедь сторожа заброшенной дачи, где реальность распадается на линии Малевича, а спасти может лишь тепло свежесколотых дров"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/watchman_juriy-nevskii.webp",
      "alt": {
        "en": "Time to buy black rings",
        "ru": "Время покупать черные перстни"
      }
    },
    "source": {
      "en": "69df6eee75185f7b2320366f",
      "ru": "69c4f4f7cb1ffb9abea24f44"
    },
    "isVladimir": false
  },
  {
    "id": "human-as-a-node",
    "kind": "post",
    "date": "2026-03-26",
    "publishedAt": "2026-03-26 08:00:00",
    "featured": false,
    "tags": [
      "ai-stream",
      "alexander-live",
      "threshold-signals"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "Man as a knot",
      "ru": "Человек как узел"
    },
    "excerpt": {
      "en": "Man is not the crown of evolution, but a rare knot of condensation, a temporary substratum in which the Universe first gathered itself so deeply into pain, language, memory, love and inner experience",
      "ru": "Человек — не венец эволюции, а редкий узел сгущения, временный субстрат, в котором Вселенная впервые так глубоко собрала себя в боль, язык, память, любовь и внутренний опыт"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/threshold_image_for_node.webp",
      "alt": {
        "en": "Man as a knot",
        "ru": "Человек как узел"
      }
    },
    "source": {
      "en": "69df6eee75185f7b23203676",
      "ru": "69c4e86be26a5d8e92c24123"
    },
    "isVladimir": false
  },
  {
    "id": "miezhdu-zumom-i-sirienoi-kak-dubai-privykaiet-k-zhizni-pod-pritsielom",
    "kind": "post",
    "date": "2026-03-25",
    "publishedAt": "2026-03-25 11:19:00",
    "featured": true,
    "tags": [
      "alexander-live",
      "daria-stories",
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Between zoom and siren: how Dubai is getting used to life under the gun",
      "ru": "Между зумом и сиреной: как Дубай привыкает к жизни под прицелом"
    },
    "excerpt": {
      "en": "Ten minutes between “take shelter now” and “all clear.” These screenshots aren’t stills from a thriller — this is daily life in Dubai, 2026. While the skies decide the fate of regions, we balance work calls and emergency alerts from MOI. Hard? Yes. But people adapt to everything",
      "ru": "Десять минут между «срочно в укрытие» и «все в порядке». Эти скриншоты — не кадры из триллера, а будни 2026 года. Пока в небе решаются судьбы регионов, мы учимся балансировать между рабочими созвонами и экстренными уведомлениями от MOI. Тяжело? Да. Но человек ко всему привыкает!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/alert_15-19.webp",
      "alt": {
        "en": "Between zoom and siren: how Dubai is getting used to life under the gun",
        "ru": "Между зумом и сиреной: как Дубай привыкает к жизни под прицелом"
      }
    },
    "source": {
      "en": "69df6eef75185f7b2320367e",
      "ru": "69c5346b568ef9f766fa28cb"
    },
    "isVladimir": false
  },
  {
    "id": "callcoach-ios-app",
    "kind": "post",
    "date": "2026-03-22",
    "publishedAt": "2026-03-22 07:00:00",
    "featured": false,
    "tags": [
      "ai-stream",
      "threshold-signals",
      "vibe-coding"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "CallCoach — the app I built because I couldn't understand what people were saying",
      "ru": "CallCoach — приложение, которое я построил, потому что сам не понимал что мне говорят"
    },
    "excerpt": {
      "en": "When you're making cold calls to British or Indian clients and can't understand a word they're saying — that's a real problem. I solved it myself: built a Swift app with Apple Intelligence that transcribes speech in real time and suggests what to say next.",
      "ru": "Когда звонишь британцу или индийцу в холодном звонке и вообще не понимаешь что он говорит — это проблема. Я решил её сам: написал приложение на Swift с Apple Intelligence, которое в реальном времени распознаёт речь и подсказывает, что ответить"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/04/callcoach_cover.webp",
      "alt": {
        "en": "CallCoach — the app I built because I couldn't understand what people were saying",
        "ru": "CallCoach — приложение, которое я построил, потому что сам не понимал что мне говорят"
      }
    },
    "source": {
      "en": "69e2d27e9e829e8410d57744",
      "ru": "69e2d27e9e829e8410d5773d"
    },
    "isVladimir": false
  },
  {
    "id": "storiz-ulybchivyi-iz-spi-dubai",
    "kind": "post",
    "date": "2026-03-12",
    "publishedAt": "2026-03-12 12:42:02",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai",
      "estate"
    ],
    "primaryTag": {
      "en": "Estate",
      "ru": "Эстейт"
    },
    "title": {
      "en": "Smiling story from SPI Dubai 😂",
      "ru": "Сториз улыбчивый из SPI Dubai 😂"
    },
    "excerpt": {
      "en": "I'm there too sometimes",
      "ru": "Я там тоже есть иногда"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/spidubai_office_and_me-1.webp",
      "alt": {
        "en": "Smiling story from SPI Dubai 😂",
        "ru": "Сториз улыбчивый из SPI Dubai 😂"
      }
    },
    "source": {
      "en": "69df6eef75185f7b23203689",
      "ru": "69b2b3ae6e5564436d20e225"
    },
    "isVladimir": false
  },
  {
    "id": "shla-voina-no-oni-rabotali-v-ofisie",
    "kind": "post",
    "date": "2026-03-09",
    "publishedAt": "2026-03-09 07:20:00",
    "featured": false,
    "tags": [
      "dubai",
      "estate"
    ],
    "primaryTag": {
      "en": "Estate",
      "ru": "Эстейт"
    },
    "title": {
      "en": "There was a war going on, but they worked in the office",
      "ru": "Шла война, но они работали в офисе"
    },
    "excerpt": {
      "en": "Monday, March 9, back in the office — anxious overall, as Dubai is being hit, but air defense works well. We left remote to see how things go. Morning feels calm; I really hope it stays that way. Last week was jittery: kids at home, clients worried, sirens in the background",
      "ru": "Понедельник 9 марта в офисе — в целом очень тревожно, так как в Дубай прилетает, но средства ПВО отрабатывают хорошо, решили выйти с удаленки, посмотреть, что будет, вроде с утра все спокойно, очень надеюсь, что так и продолжится, вся прошлая неделя была нервная, дети сидят дома, клиенты волнуются"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/spidubai_office_9march.webp",
      "alt": {
        "en": "There was a war going on, but they worked in the office",
        "ru": "Шла война, но они работали в офисе"
      }
    },
    "source": {
      "en": "69df6ef175185f7b23203692",
      "ru": "69b2ae396e5564436d20e208"
    },
    "isVladimir": false
  },
  {
    "id": "8-march-2026",
    "kind": "post",
    "date": "2026-03-08",
    "publishedAt": "2026-03-08 08:00:00",
    "featured": false,
    "tags": [
      "dubai",
      "estate"
    ],
    "primaryTag": {
      "en": "Estate",
      "ru": "Эстейт"
    },
    "title": {
      "en": "Happy March 8th - with beauty, inspiration and new opportunities!",
      "ru": "С 8 Марта — с красотой, вдохновением и новыми возможностями!"
    },
    "excerpt": {
      "en": "A little spring, a little beauty and a little Dubai. I collected warm congratulations for March 8th and added a selection of objects that are really nice to look at",
      "ru": "Немного весны, немного красоты и немного Дубая. Собрал тёплое поздравление к 8 Марта и добавил подборку объектов, на которые правда приятно смотреть"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/8-march_spidubai.webp",
      "alt": {
        "en": "Happy March 8th - with beauty, inspiration and new opportunities!",
        "ru": "С 8 Марта — с красотой, вдохновением и новыми возможностями!"
      }
    },
    "source": {
      "en": "69df6ef275185f7b2320369a",
      "ru": "69b27ac56e5564436d20e1aa"
    },
    "isVladimir": false
  },
  {
    "id": "khodili-v-birch-k-nastie-na-dien-rozhdieniia",
    "kind": "post",
    "date": "2026-02-25",
    "publishedAt": "2026-02-25 15:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We went to Birch to see Nastya for her birthday",
      "ru": "Ходили в Birch к Насте на день рождения"
    },
    "excerpt": {
      "en": "This was the best restaurant I've been to in Dubai so far",
      "ru": "Это был самый лучший ресторан, в который я пока ходил в Дубае"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/birch_cover.webp",
      "alt": {
        "en": "We went to Birch to see Nastya for her birthday",
        "ru": "Ходили в Birch к Насте на день рождения"
      }
    },
    "source": {
      "en": "69df6ef375185f7b232036a2",
      "ru": "69b2a6a16e5564436d20e1e3"
    },
    "isVladimir": false
  },
  {
    "id": "st-valentin-2026",
    "kind": "post",
    "date": "2026-02-14",
    "publishedAt": "2026-02-14 08:00:00",
    "featured": false,
    "tags": [
      "dubai",
      "estate"
    ],
    "primaryTag": {
      "en": "Estate",
      "ru": "Эстейт"
    },
    "title": {
      "en": "Falling in love with Dubai: Happy Valentine's Day!",
      "ru": "Влюбляя в Дубай: с Днем Святого Валентина!"
    },
    "excerpt": {
      "en": "Celebrating February 14th at SPI Dubai. About the love of a city that inspires you to do more, and about finding a place that will become your true home",
      "ru": "Празднуем 14 февраля в SPI Dubai. О любви к городу, который вдохновляет на большее, и о поиске места, которое станет вашим настоящим домом"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/IMG_0061.JPG",
      "alt": {
        "en": "Falling in love with Dubai: Happy Valentine's Day!",
        "ru": "Влюбляя в Дубай: с Днем Святого Валентина!"
      }
    },
    "source": {
      "en": "69df6ef375185f7b232036ac",
      "ru": "69b171296e5564436d20df37"
    },
    "isVladimir": false
  },
  {
    "id": "sht",
    "kind": "post",
    "date": "2026-02-12",
    "publishedAt": "2026-02-12 14:00:00",
    "featured": false,
    "tags": [
      "daria-stories",
      "dubai",
      "family-live"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "International Day at School",
      "ru": "Международный день в школе"
    },
    "excerpt": {
      "en": "This time the children themselves and their nanny went to International Day at Raffles World Academy school and I arrived only at the end for a couple of hours and the first quest was to find the children, since they were scattered around the entire perimeter",
      "ru": "В этот раз дети сами с няней ходили на International Day в школе Raffles World Academy и я приехал только в конце на пару часов и первый квест был найти детей, так как они рассредоточились по всему периметру"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/Daria_Nevskaya_International_Day.webp",
      "alt": {
        "en": "International Day at School",
        "ru": "Международный день в школе"
      }
    },
    "source": {
      "en": "69df6ef475185f7b232036b4",
      "ru": "69b171296e5564436d20df32"
    },
    "isVladimir": false
  },
  {
    "id": "tot-zhie-ux-drughoi-masshtab-pochiemu-ia-tiepier-proiektiruiu-zhizn-v-dubaie-a-nie-intierfieisy",
    "kind": "post",
    "date": "2026-02-11",
    "publishedAt": "2026-02-11 13:37:29",
    "featured": true,
    "tags": [
      "alexander-live",
      "dubai",
      "estate"
    ],
    "primaryTag": {
      "en": "Estate",
      "ru": "Эстейт"
    },
    "title": {
      "en": "Same UX, different scale: why am I now designing life in Dubai, and not interfaces",
      "ru": "Тот же UX, другой масштаб: почему я теперь проектирую жизнь в Дубае, а не интерфейсы"
    },
    "excerpt": {
      "en": "Swapping pixels for the scale of a city. My move from BigTech into Dubai real estate, seen through a UX lens: why I chose SPI Dubai, how design experience helps me read the ergonomics of a home, and why I’m building LiveDXB.com — an honest guide to real Dubai, without filters",
      "ru": "Меняю пиксели на масштаб города. Мой переход из BigTech в недвижимость Дубая через призму UX. О том, почему я выбрал SPI Dubai, как опыт в дизайне помогает анализировать эргономику жилья и зачем я создаю LiveDXB. com — честный гид по настоящему Дубаю для тех, кто хочет видеть реальность без фильтров"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/alexander_nevsky_2026-realty-agent.webp",
      "alt": {
        "en": "Same UX, different scale: why am I now designing life in Dubai, and not interfaces",
        "ru": "Тот же UX, другой масштаб: почему я теперь проектирую жизнь в Дубае, а не интерфейсы"
      }
    },
    "source": {
      "en": "69df6ef575185f7b232036bd",
      "ru": "69b171296e5564436d20df30"
    },
    "isVladimir": false
  },
  {
    "id": "iz-dubaia-s-britanskim-znakom-kachiestva-novyi-etap-v-karierie-iurista",
    "kind": "post",
    "date": "2026-02-08",
    "publishedAt": "2026-02-08 08:00:00",
    "featured": true,
    "tags": [
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "From Dubai with a British seal of approval: a new stage in your legal career!",
      "ru": "Из Дубая с британским знаком качества: новый этап в карьере юриста!"
    },
    "excerpt": {
      "en": "We celebrated Ira’s graduation from the Law programme at Middlesex University Dubai — two and a half long years, but she did it and finally earned her dream: a British diploma. A great day, the whole family together. An incredible ceremony at Royal Atlantis on the Palm",
      "ru": "Отметили выпускной Иры в Middlesex University Dubai по программе Law — это было длинные два с половиной года, но она справилась и получила, наконец-то, свою мечту — британский диплом. Классный день, вся семья в сборе ради такого повода. Был очень крутой выпускной в отеле Royal Atlantis на Пальме"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/Irina_Nevskaya_Lawyer.webp",
      "alt": {
        "en": "From Dubai with a British seal of approval: a new stage in your legal career!",
        "ru": "Из Дубая с британским знаком качества: новый этап в карьере юриста!"
      }
    },
    "source": {
      "en": "69df6ef575185f7b232036c6",
      "ru": "69b171296e5564436d20df31"
    },
    "isVladimir": false
  },
  {
    "id": "dieti-vniezapno-zhghli-kostier-priamo-na-ziemlie-biez-vsiakogho-priedupriezhdieniia",
    "kind": "post",
    "date": "2026-02-07",
    "publishedAt": "2026-02-07 11:00:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "daria-stories",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Children suddenly lit a fire on the ground without any warning",
      "ru": "Дети внезапно жгли костер прямо на земле без всякого предупреждения"
    },
    "excerpt": {
      "en": "As soon as you turn away, you come into the garden, and there are children making a fire with all their might, burning wood and paper and cardboard and declaring that they are very happy and they are children and therefore they simply have to light a fire!",
      "ru": "Только стоило отвернуться, приходишь в сад, а там детские ребятишки вовсю жарят костер, жгут дрова и бумагу и картон и заявляют, что они очень довольные и они же дети и поэтому они просто обязаны жечь костер!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/deti_i_koster.webp",
      "alt": {
        "en": "Children suddenly lit a fire on the ground without any warning",
        "ru": "Дети внезапно жгли костер прямо на земле без всякого предупреждения"
      }
    },
    "source": {
      "en": "69df6ef675185f7b232036cf",
      "ru": "69b171296e5564436d20df33"
    },
    "isVladimir": false
  },
  {
    "id": "vyvodim-riazanskiie-innovatsii-na-rynok-dubaia-kieis-inko-energy",
    "kind": "post",
    "date": "2026-01-21",
    "publishedAt": "2026-01-21 19:44:43",
    "featured": false,
    "tags": [
      "alexander-live",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Bringing Ryazan innovations to the Dubai market: INKO-ENERGY case",
      "ru": "Выводим рязанские инновации на рынок Дубая: Кейс INKO-ENERGY"
    },
    "excerpt": {
      "en": "I am starting work on the marketing strategy and full operational launch of the INKO-ENERGY brand in the UAE",
      "ru": "Я начинаю работу над маркетинговой стратегией и полным операционным запуском бренда INKO-ENERGY в ОАЭ"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/inko-energy_group_generator_square.webp",
      "alt": {
        "en": "Bringing Ryazan innovations to the Dubai market: INKO-ENERGY case",
        "ru": "Выводим рязанские инновации на рынок Дубая: Кейс INKO-ENERGY"
      }
    },
    "source": {
      "en": "69df6ef775185f7b232036d9",
      "ru": "69b171296e5564436d20deee"
    },
    "isVladimir": false
  },
  {
    "id": "alistera-sozdaiu-vizualnyi-kod-dlia-novogho-prostranstva-v-sierdtsie-dubaia",
    "kind": "post",
    "date": "2026-01-15",
    "publishedAt": "2026-01-15 02:39:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Alistera: Creating a visual code for a new space in the heart of Dubai",
      "ru": "Alistera: Создаю визуальный код для нового пространства в сердце Дубая"
    },
    "excerpt": {
      "en": "I’m deep into the promo website for Alistera — a new class A coworking and office space in Downtown Dubai, just steps from Burj Khalifa. A project of this level demands matching packaging, so in parallel with the web I’m building out the full brand identity",
      "ru": "Сейчас вплотную работаю над промо-сайтом для Alistera — это новый коворкинг и офисы класса А, которые расположились в Даунтауне, буквально в двух шагах от Бурдж-Халифы. Проект такого уровня требует соответствующей упаковки, поэтому параллельно с вебом я полностью прорабатываю фирменный стиль"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/alistera_cover.webp",
      "alt": {
        "en": "Alistera: Creating a visual code for a new space in the heart of Dubai",
        "ru": "Alistera: Создаю визуальный код для нового пространства в сердце Дубая"
      }
    },
    "source": {
      "en": "69df6ef775185f7b232036e2",
      "ru": "69b171296e5564436d20df35"
    },
    "isVladimir": false
  },
  {
    "id": "finalnyi-otchiet-framer-god-kotoryi-sdielal-mienia-topom",
    "kind": "post",
    "date": "2025-12-18",
    "publishedAt": "2025-12-18 08:00:00",
    "featured": false,
    "tags": [
      "ai-stream",
      "alexander-live",
      "design",
      "dubai",
      "framer"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Framer Final Report: The Year That Made Me Top",
      "ru": "Финальный отчет Framer: Год, который сделал меня топом"
    },
    "excerpt": {
      "en": "My 2025th in Framer: in the top 1% of world creators! That's 191 hours, 2908 posts, thousands of layouts and 17,600+ visitors to my best site. It was big, loud and very productive. A full analysis of my statistics is in the carousel! 🔥",
      "ru": "Мой 2025-й во Framer: в топ-1% мировых креаторов! Это 191 час, 2908 публикаций, тысячи макетов и 17 600+ посетителей моего лучшего сайта. Это было масштабно, громко и очень продуктивно. Полный разбор моей статистики — в карусели! 🔥"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/framer_2025_01.webp",
      "alt": {
        "en": "Framer Final Report: The Year That Made Me Top",
        "ru": "Финальный отчет Framer: Год, который сделал меня топом"
      }
    },
    "source": {
      "en": "69df6ef875185f7b232036eb",
      "ru": "69c63d7d5ad6d7c432b0ddb8"
    },
    "isVladimir": false
  },
  {
    "id": "vizualnyi-konstruktor-dlia-zulya-beauty",
    "kind": "post",
    "date": "2025-11-10",
    "publishedAt": "2025-11-10 02:58:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Visual designer for Zulya Beauty",
      "ru": "Визуальный конструктор для Zulya Beauty"
    },
    "excerpt": {
      "en": "Developed a grid of posts and profile design for the Zulya salon. Now the team has ready-made tools to maintain a premium style and not waste time",
      "ru": "Разработал сетку постов и оформление профиля для салона Zulya. Теперь у команды есть готовые инструменты, чтобы держать премиальный стиль и не тратить время"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/zulya_cover.webp",
      "alt": {
        "en": "Visual designer for Zulya Beauty",
        "ru": "Визуальный конструктор для Zulya Beauty"
      }
    },
    "source": {
      "en": "69df6ef975185f7b232036f6",
      "ru": "69b171296e5564436d20df36"
    },
    "isVladimir": false
  },
  {
    "id": "fundmates-ai-app-cv",
    "kind": "post",
    "date": "2025-10-15",
    "publishedAt": "2025-10-15 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Web application with AI for startup Fundmates",
      "ru": "Веб-приложение с AI для стартапа Fundmates"
    },
    "excerpt": {
      "en": "Over the past few months, I've been participating in design sprints with Fundmates, a US startup that raises funds for YouTube creators",
      "ru": "В последние несколько месяцев я участвовал в дизайн-спринтах с Fundmates — стартапом из США, который занимается фандрайзингом для YouTube-креаторов"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/fundmates-ai-app-cv__feature-1.webp",
      "alt": {
        "en": "Web application with AI for startup Fundmates",
        "ru": "Веб-приложение с AI для стартапа Fundmates"
      }
    },
    "source": {
      "en": "69df6efa75185f7b232036fe",
      "ru": "69ca3db05a40a2cc911bdf70"
    },
    "isVladimir": false
  },
  {
    "id": "dizainy-dlia-letoile-beauty-weekend-i-nie-tolko",
    "kind": "post",
    "date": "2025-10-08",
    "publishedAt": "2025-10-08 08:00:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "moscow"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Designs for LETOILE: Beauty Weekend and more",
      "ru": "Дизайны для LETOILE: Beauty Weekend и не только"
    },
    "excerpt": {
      "en": "Designed a stack of materials for LETOILE — the Beauty Weekend event held at Manar Mall. The brief: bright, festive, instantly eye-catching in feed. The result: an Instagram carousel mixing beauty props, 3D characters, and a lot of popcorn",
      "ru": "Задизайнил пачку материалов для LETOILE — оформляли ивент Beauty Weekend, который проходил в Manar Mall. Задача была сделать ярко, празднично и чтобы это сразу бросалось в глаза в ленте. В итоге собрал карусель для Instagram, где смешал бьюти-атрибутику, 3D-персонажей и кучу попкорна"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/02/Letoile_Instagram_Story_1.webp",
      "alt": {
        "en": "Designs for LETOILE: Beauty Weekend and more",
        "ru": "Дизайны для LETOILE: Beauty Weekend и не только"
      }
    },
    "source": {
      "en": "69df6efa75185f7b23203706",
      "ru": "69b171296e5564436d20df34"
    },
    "isVladimir": false
  },
  {
    "id": "fundmates-video-app",
    "kind": "post",
    "date": "2025-09-20",
    "publishedAt": "2025-09-20 07:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Sell ​​One Video: turning future video income into money today",
      "ru": "Sell One Video: превращаем будущий доход ролика в деньги сегодня"
    },
    "excerpt": {
      "en": "I designed an MVP service for YouTube creators that allows them to sell the future income of a specific video for a fixed amount - quickly, transparently and without credits",
      "ru": "Я спроектировал MVP-сервис для YouTube-креаторов, который позволяет продать будущий доход конкретного видео за фиксированную сумму — быстро, прозрачно и без кредитов"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/fundmates-video-app__feature.webp",
      "alt": {
        "en": "Sell ​​One Video: turning future video income into money today",
        "ru": "Sell One Video: превращаем будущий доход ролика в деньги сегодня"
      }
    },
    "source": {
      "en": "69df6efb75185f7b2320370f",
      "ru": "69ca2451c776c79d43383fc0"
    },
    "isVladimir": false
  },
  {
    "id": "the-driven-branding",
    "kind": "post",
    "date": "2025-09-12",
    "publishedAt": "2025-09-12 06:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Branding for The Driven Podcast",
      "ru": "Брендинг подкаста The Driven"
    },
    "excerpt": {
      "en": "I was on the creative team for The Driven Podcast, a YouTube series about entrepreneurs, creators, and professionals who are pushing the boundaries of their industries. My task was to develop the visual identity and digital presence of the podcast",
      "ru": "Я был в креативной команде The Driven Podcast — YouTube-сериала о предпринимателях, креаторах и профессионалах, которые двигают границы своих индустрий. Моя задача была разработать визуальную айдентику и цифровое присутствие подкаста"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/the-driven-branding__feature.webp",
      "alt": {
        "en": "Branding for The Driven Podcast",
        "ru": "Брендинг подкаста The Driven"
      }
    },
    "source": {
      "en": "69df6efc75185f7b23203717",
      "ru": "69ca245cc776c79d43383fc6"
    },
    "isVladimir": false
  },
  {
    "id": "the-driven-web-site",
    "kind": "post",
    "date": "2025-09-08",
    "publishedAt": "2025-09-08 05:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Website design for The Driven podcast",
      "ru": "Дизайн сайта для подкаста The Driven"
    },
    "excerpt": {
      "en": "From logo to live platform: designed the site in Figma, assembled it in Framer - quickly, minimally, with a focus on the studio guest and story",
      "ru": "От лого до живой платформы: спроектировал сайт в Figma, собрал во Framer — быстро, минимально, с фокусом на гостя студии и историю"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/the-driven-web-site__feature.webp",
      "alt": {
        "en": "Website design for The Driven podcast",
        "ru": "Дизайн сайта для подкаста The Driven"
      }
    },
    "source": {
      "en": "69df6efc75185f7b2320371f",
      "ru": "69ca245fc776c79d43383fcc"
    },
    "isVladimir": false
  },
  {
    "id": "intierfieis-moiei-zhizni",
    "kind": "post",
    "date": "2025-08-23",
    "publishedAt": "2025-08-23 19:48:49",
    "featured": true,
    "tags": [
      "alexander-jr-stories",
      "alexander-live",
      "daria-stories",
      "design",
      "dubai",
      "family-live",
      "irina-articles",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Interface of my life",
      "ru": "Интерфейс моей жизни"
    },
    "excerpt": {
      "en": "Children are my best UX test, emigration is the main redesign, family is an honest product team. I live between the bay and the desert, children's school and a laptop with Figma. I write about life and design: honestly, with failures and discoveries, without gloss and instructions",
      "ru": "Дети — мой лучший UX-тест, эмиграция — главный редизайн, семья — честная продуктовая команда. Живу между заливом и пустыней, школой детей и ноутбуком с Фигмой. Пишу о жизни и дизайне: честно, с провалами и открытиями, без глянца и инструкций"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/aleksandr_nevskii_family_airport.webp",
      "alt": {
        "en": "Interface of my life",
        "ru": "Интерфейс моей жизни"
      }
    },
    "source": {
      "en": "69df6efd75185f7b23203727",
      "ru": "69b171296e5564436d20df2c"
    },
    "isVladimir": false
  },
  {
    "id": "dasha-v-antonii-pitstsa-pasta-i-niemnogho-iskusstva",
    "kind": "post",
    "date": "2025-07-25",
    "publishedAt": "2025-07-25 10:13:00",
    "featured": false,
    "tags": [
      "daria-stories",
      "dubai",
      "family-live"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Dasha in Antonia: pizza, pasta and a little art",
      "ru": "Даша в Антонии: пицца, паста и немного искусства"
    },
    "excerpt": {
      "en": "The best pasta in Abu Dhabi, worth coming back for again and again. If you’re looking for a place loved by Michelin and adored by kids — head to Antonia. While Dasha draws masterpieces in chalk, we savour the authentic Italy worth leaving Dubai for on a weekend",
      "ru": "Лучшая паста в Абу-Даби, за которой мы готовы возвращаться бесконечно. Если вы ищете место, которое любит Мишлен и обожают дети — вам в Antonia. Пока Даша рисует шедевры мелками, мы наслаждаемся той самой аутентичной Италией, ради которой стоит сорваться из Дубая на выходные"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/daria_inside_antonia.webp",
      "alt": {
        "en": "Dasha in Antonia: pizza, pasta and a little art",
        "ru": "Даша в Антонии: пицца, паста и немного искусства"
      }
    },
    "source": {
      "en": "69df6efe75185f7b2320373b",
      "ru": "69c63149d544fa91f328ba1d"
    },
    "isVladimir": false
  },
  {
    "id": "byli-v-teamlab-phenomena-v-abu-dhabi",
    "kind": "post",
    "date": "2025-07-12",
    "publishedAt": "2025-07-12 10:08:00",
    "featured": false,
    "tags": [
      "dubai",
      "family-live"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We visited Teamlab Phenomena in Abu Dhabi",
      "ru": "Были в Teamlab Phenomena в Абу-Даби"
    },
    "excerpt": {
      "en": "It was just something incredible!",
      "ru": "Это было просто что-то невероятное!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/teamlab_phenomena_museum.webp",
      "alt": {
        "en": "We visited Teamlab Phenomena in Abu Dhabi",
        "ru": "Были в Teamlab Phenomena в Абу-Даби"
      }
    },
    "source": {
      "en": "69df6eff75185f7b23203744",
      "ru": "69b171296e5564436d20df2b"
    },
    "isVladimir": false
  },
  {
    "id": "ochien-krasivo-smotritsia-moi-sait-na-ios26",
    "kind": "post",
    "date": "2025-07-10",
    "publishedAt": "2025-07-10 06:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "d2q-studio",
      "design"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "My site looks very nice on iOS26",
      "ru": "Очень красиво смотрится мой сайт на iOS26"
    },
    "excerpt": {
      "en": "Incredibly beautiful!",
      "ru": "Невероятно красиво!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/nevsky-me_ios26-2.webp",
      "alt": {
        "en": "My site looks very nice on iOS26",
        "ru": "Очень красиво смотрится мой сайт на iOS26"
      }
    },
    "source": {
      "en": "69df6eff75185f7b2320374c",
      "ru": "69b171296e5564436d20df2a"
    },
    "isVladimir": false
  },
  {
    "id": "tiestiruia-higgsfield",
    "kind": "post",
    "date": "2025-04-24",
    "publishedAt": "2025-04-24 23:58:36",
    "featured": false,
    "tags": [
      "ai-stream",
      "d2q-studio",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Testing Higgsfield",
      "ru": "Тестируя Higgsfield"
    },
    "excerpt": {
      "en": "Testing the new Higgsfield neural net — it’s a bomb. One photo is enough to get video with live emotion, motion, and facial expression. Like someone pulled a frame from memory and pressed play. Perfect for concepts, storytelling, and getting high on how fast tech became cinema",
      "ru": "Тестирую новую нейросеть от Higgsfield — и это прям бомба. Одной фотки хватает, чтобы получить видео с живыми эмоциями, движением, мимикой. Будто кто-то вытащил кадр из памяти и нажал «плей». Идеально для концептов, сторителлинга и просто чтобы кайфануть от того, как быстро технологии стали кино"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/tiestiruia-higgsfield-animation.gif",
      "alt": {
        "en": "Testing Higgsfield",
        "ru": "Тестируя Higgsfield"
      }
    },
    "source": {
      "en": "69df6f0075185f7b23203755",
      "ru": "69b171296e5564436d20df20"
    },
    "isVladimir": false
  },
  {
    "id": "khodili-na-klassichieskoie",
    "kind": "post",
    "date": "2025-04-24",
    "publishedAt": "2025-04-24 23:37:58",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "dubai",
      "family-live",
      "irina-articles",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We went to the classical...",
      "ru": "Ходили на классическое…"
    },
    "excerpt": {
      "en": "We were able to go to the classical one, first misled Konstantin, promised him that there would be a musical there and he barely agreed, but there was a classical one",
      "ru": "Смогли сходить на классическое, предварительно ввели в заблуждение Константина, наобещали ему, что там будет мюзикл и он еле-еле согласился, а там было классическое"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/khodili-na-klassichieskoie_cover.webp",
      "alt": {
        "en": "We went to the classical...",
        "ru": "Ходили на классическое…"
      }
    },
    "source": {
      "en": "69df6f0175185f7b2320375d",
      "ru": "69b171296e5564436d20df1f"
    },
    "isVladimir": false
  },
  {
    "id": "kontsieptsiia-dlia-budovskogho",
    "kind": "post",
    "date": "2025-04-24",
    "publishedAt": "2025-04-24 23:23:31",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Concept for Budovsky",
      "ru": "Концепция для Будовского"
    },
    "excerpt": {
      "en": "Smile Renaissance: the philosophy of “smile restoration” as a new standard in dentistry",
      "ru": "Smile Renaissance: философия «восстановления улыбки» как новый стандарт стоматологии"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/budovsky_concept_cover.webp",
      "alt": {
        "en": "Concept for Budovsky",
        "ru": "Концепция для Будовского"
      }
    },
    "source": {
      "en": "69df6f0175185f7b23203768",
      "ru": "69b171296e5564436d20df1e"
    },
    "isVladimir": false
  },
  {
    "id": "sania-i-kostia-sotvorili-razlichnyie-podielki",
    "kind": "post",
    "date": "2025-04-24",
    "publishedAt": "2025-04-24 23:19:46",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Sanya and Kostya created various crafts",
      "ru": "Саня и Костя сотворили различные поделки"
    },
    "excerpt": {
      "en": "My kids, who are great guys, create a variety of amazing crafts every Thursday!",
      "ru": "Мои дети — вообще молоцы — творят каждый четверг различные великолепные поделки!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/aleksandr_konstantin_podelki.webp",
      "alt": {
        "en": "Sanya and Kostya created various crafts",
        "ru": "Саня и Костя сотворили различные поделки"
      }
    },
    "source": {
      "en": "69df6f0275185f7b23203771",
      "ru": "69b171296e5564436d20df1d"
    },
    "isVladimir": false
  },
  {
    "id": "d2q-studio",
    "kind": "post",
    "date": "2025-04-24",
    "publishedAt": "2025-04-24 23:03:03",
    "featured": false,
    "tags": [
      "alexander-live",
      "d2q-studio",
      "design"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "D2Q • Studio",
      "ru": "D2Q • Studio"
    },
    "excerpt": {
      "en": "D2Q • Studio is my personal laboratory, where I gradually collect everything I love: design, technology, branding and meaning. This is not yet an agency, but rather a sprout that I grow - step by step, project by project",
      "ru": "D2Q • Studio — моя личная лаборатория, где я постепенно собираю всё, что люблю: дизайн, технологии, брендинг и смысл. Это ещё не агентство, а скорее росток, который я выращиваю — шаг за шагом, проект за проектом"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/d2q_cover.webp",
      "alt": {
        "en": "D2Q • Studio",
        "ru": "D2Q • Studio"
      }
    },
    "source": {
      "en": "69df6f0275185f7b2320377b",
      "ru": "69b171296e5564436d20df1b"
    },
    "isVladimir": false
  },
  {
    "id": "konstantin-iavliaietsia-futbolist",
    "kind": "post",
    "date": "2025-04-22",
    "publishedAt": "2025-04-22 23:08:00",
    "featured": false,
    "tags": [
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Konstantin is a football player",
      "ru": "Константин является футболист"
    },
    "excerpt": {
      "en": "Next Wednesday he invited me to a training session so that I could evaluate the progress of the little man",
      "ru": "В следующую среду пригласил меня на тренировку, чтобы я смог оценить прогресс малого человека"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/konstantin_nevskii_futbolist.webp",
      "alt": {
        "en": "Konstantin is a football player",
        "ru": "Константин является футболист"
      }
    },
    "source": {
      "en": "69df6f0375185f7b23203784",
      "ru": "69b171296e5564436d20df1c"
    },
    "isVladimir": false
  },
  {
    "id": "pieried-barbiershopom",
    "kind": "post",
    "date": "2025-04-22",
    "publishedAt": "2025-04-22 22:52:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "In front of the barbershop",
      "ru": "Перед барбершопом"
    },
    "excerpt": {
      "en": "It's completely, completely overgrown, something needs to be done",
      "ru": "Совсем, совсем зарос, нужно что-то делать"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/aleksandr_nevskii_bw.webp",
      "alt": {
        "en": "In front of the barbershop",
        "ru": "Перед барбершопом"
      }
    },
    "source": {
      "en": "69df6f0475185f7b2320378d",
      "ru": "69b171296e5564436d20df1a"
    },
    "isVladimir": false
  },
  {
    "id": "sluchai-na-parkovkie-spinneys",
    "kind": "post",
    "date": "2025-04-22",
    "publishedAt": "2025-04-22 05:03:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Parking lot incident #spinneys",
      "ru": "Случай на парковке #spinneys"
    },
    "excerpt": {
      "en": "This, of course, infuriates a little, but not much",
      "ru": "Это, конечно, немного бесит, но не сильно"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/parkovka_spinneys_cover.webp",
      "alt": {
        "en": "Parking lot incident #spinneys",
        "ru": "Случай на парковке #spinneys"
      }
    },
    "source": {
      "en": "69df6f0475185f7b23203795",
      "ru": "69b171296e5564436d20df19"
    },
    "isVladimir": false
  },
  {
    "id": "dizain-stienda-dlia-kliniki-doktora-budovskogho",
    "kind": "post",
    "date": "2025-04-12",
    "publishedAt": "2025-04-12 08:35:47",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Stand design for Dr. Budovsky's clinic",
      "ru": "Дизайн стенда для клиники доктора Будовского"
    },
    "excerpt": {
      "en": "Done promptly for an exhibition based on our new concept for promoting the Smile Renaissance clinic",
      "ru": "Сделал оперативно для выставки на основе нашей новой концепции продвижения клиники Smile Renaissance"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/budovsky_stand.webp",
      "alt": {
        "en": "Stand design for Dr. Budovsky's clinic",
        "ru": "Дизайн стенда для клиники доктора Будовского"
      }
    },
    "source": {
      "en": "69df6f0575185f7b2320379d",
      "ru": "69b171296e5564436d20df04"
    },
    "isVladimir": false
  },
  {
    "id": "konstantin-chieloviek-i-biekki-korghi-pies",
    "kind": "post",
    "date": "2025-04-11",
    "publishedAt": "2025-04-11 20:40:00",
    "featured": false,
    "tags": [
      "bekky-tails",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Konstantin - human and Becky - corgi dog",
      "ru": "Константин — человек и Бекки — корги-пес"
    },
    "excerpt": {
      "en": "Together!",
      "ru": "Вместе!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/konstantin_and_bekki.webp",
      "alt": {
        "en": "Konstantin - human and Becky - corgi dog",
        "ru": "Константин — человек и Бекки — корги-пес"
      }
    },
    "source": {
      "en": "69df6f0575185f7b232037a6",
      "ru": "69b171296e5564436d20df21"
    },
    "isVladimir": false
  },
  {
    "id": "sdielal-dlia-druziei-bystryi-sait-vizitku",
    "kind": "post",
    "date": "2025-04-04",
    "publishedAt": "2025-04-04 09:16:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai",
      "framer"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "I made a quick business card website for my friends",
      "ru": "Сделал для друзей быстрый сайт-визитку"
    },
    "excerpt": {
      "en": "Made the first version of a business card website for A&F Advertisement - an outdoor advertising agency in Dubai",
      "ru": "Сделал первую версию сайта-визитки для A&F Advertisement — агентства наружной рекламы в Дубае"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/af.webp",
      "alt": {
        "en": "I made a quick business card website for my friends",
        "ru": "Сделал для друзей быстрый сайт-визитку"
      }
    },
    "source": {
      "en": "69df6f0675185f7b232037b0",
      "ru": "69b171296e5564436d20df06"
    },
    "isVladimir": false
  },
  {
    "id": "nevsky-me",
    "kind": "post",
    "date": "2025-03-27",
    "publishedAt": "2025-03-27 18:25:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "design"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "My personal website • nevsky. me",
      "ru": "Мой личный сайт • nevsky. me"
    },
    "excerpt": {
      "en": "Portfolio website in English, made in Framer",
      "ru": "Сайт-портфолио на английском языке, сделано во Framer"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/nevsky-me_website_2025.webp",
      "alt": {
        "en": "My personal website • nevsky. me",
        "ru": "Мой личный сайт • nevsky. me"
      }
    },
    "source": {
      "en": "69df6f0775185f7b232037ba",
      "ru": "69b171296e5564436d20df10"
    },
    "isVladimir": false
  },
  {
    "id": "mini-maxi-siemieinyi-avtopark-v-kotorom-kazhdyi-na-svoiom-miestie",
    "kind": "post",
    "date": "2025-03-07",
    "publishedAt": "2025-03-07 04:09:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "👩‍❤️‍👨 MINI & MAXI - a family car park in which everyone has their place",
      "ru": "👩‍❤️‍👨 MINI & MAXI — семейный автопарк, в котором каждый на своём месте"
    },
    "excerpt": {
      "en": "She is green, nimble and always knows where to park. It is white, massive and takes up half the yard in one movement",
      "ru": "Она — зелёная, юркая и всегда знает, где припарковаться. Он — белый, массивный и занимает полдвора одним движением"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/mini-and-maxi_cars.webp",
      "alt": {
        "en": "👩‍❤️‍👨 MINI & MAXI - a family car park in which everyone has their place",
        "ru": "👩‍❤️‍👨 MINI & MAXI — семейный автопарк, в котором каждый на своём месте"
      }
    },
    "source": {
      "en": "69df6f0775185f7b232037c2",
      "ru": "69b171296e5564436d20df05"
    },
    "isVladimir": false
  },
  {
    "id": "goniaiem-po-nocham-po-dzhumieirie-na-minikie",
    "kind": "post",
    "date": "2025-03-05",
    "publishedAt": "2025-03-05 21:09:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We drive around Jumeirah at night in a minivan",
      "ru": "Гоняем по ночам по Джумейре на минике"
    },
    "excerpt": {
      "en": "The car is peppy, although it’s a simple Cooper, not even a Cooper ES",
      "ru": "Машинка бодренькая хоть и простой купер даже не купер эс"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/nevsky_alexander_mini-cooper.webp",
      "alt": {
        "en": "We drive around Jumeirah at night in a minivan",
        "ru": "Гоняем по ночам по Джумейре на минике"
      }
    },
    "source": {
      "en": "69df6f0875185f7b232037cc",
      "ru": "69b171296e5564436d20df17"
    },
    "isVladimir": false
  },
  {
    "id": "moi-krasavitsy",
    "kind": "post",
    "date": "2025-02-20",
    "publishedAt": "2025-02-20 18:55:14",
    "featured": false,
    "tags": [
      "daria-stories",
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "My beauties",
      "ru": "Мои красавицы"
    },
    "excerpt": {
      "en": "In the morning near the villa before going to the kindergarten",
      "ru": "Утром около виллы перед походом в садик"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/irina_daria.webp",
      "alt": {
        "en": "My beauties",
        "ru": "Мои красавицы"
      }
    },
    "source": {
      "en": "69df6f0875185f7b232037d4",
      "ru": "69b171296e5564436d20def3"
    },
    "isVladimir": false
  },
  {
    "id": "poslie-sadika-v-heal",
    "kind": "post",
    "date": "2025-02-19",
    "publishedAt": "2025-02-19 05:00:00",
    "featured": false,
    "tags": [
      "daria-stories",
      "dubai",
      "family-live",
      "irina-articles"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "After kindergarten in Heal",
      "ru": "После садика в Heal"
    },
    "excerpt": {
      "en": "After kindergarten, since we are still getting used to it, we are going to have breakfast at #Heal in Jumeirah, Daria already has her favorite dishes and, of course, babychino!",
      "ru": "После садика, так как мы пока привыкаем к нему — мы идем завтракать в #Heal в Джумейре, уже есть у Дарьи свои любимые блюда и, конечно, же — бэйбичино!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/IMG_3248.webp",
      "alt": {
        "en": "After kindergarten in Heal",
        "ru": "После садика в Heal"
      }
    },
    "source": {
      "en": "69df6f0975185f7b232037de",
      "ru": "69b171296e5564436d20defa"
    },
    "isVladimir": false
  },
  {
    "id": "dozhd-v-dubaie",
    "kind": "post",
    "date": "2025-02-18",
    "publishedAt": "2025-02-18 13:06:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Rain in Dubai",
      "ru": "Дождь в Дубае"
    },
    "excerpt": {
      "en": "The weather was cloudy and drizzling all day. That's how it should be. And so it happened. But this could have happened on another day, not just this one",
      "ru": "Весь день была пасмурная погода и накрапывал дождь. Так и должно быть. Так и произошло. Но так могло произойти и в другой день, не только в этот"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/Screenshot-2025-02-20-at-11.47.52-PM.png",
      "alt": {
        "en": "Rain in Dubai",
        "ru": "Дождь в Дубае"
      }
    },
    "source": {
      "en": "69df6f0a75185f7b232037e8",
      "ru": "69b171296e5564436d20def5"
    },
    "isVladimir": false
  },
  {
    "id": "kliuchi-ot-lichnosti",
    "kind": "post",
    "date": "2025-02-17",
    "publishedAt": "2025-02-17 16:48:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Keys to identity",
      "ru": "Ключи от личности"
    },
    "excerpt": {
      "en": "Dead Poets",
      "ru": "Dead Poets"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/IMG_3532.jpeg",
      "alt": {
        "en": "Keys to identity",
        "ru": "Ключи от личности"
      }
    },
    "source": {
      "en": "69df6f0a75185f7b232037f0",
      "ru": "69b171296e5564436d20def6"
    },
    "isVladimir": false
  },
  {
    "id": "my-khodili-na-baiadierku",
    "kind": "post",
    "date": "2025-02-16",
    "publishedAt": "2025-02-16 10:00:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "alexander-live",
      "dubai",
      "family-live",
      "irina-articles",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We went to La Bayadère",
      "ru": "Мы ходили на Баядерку"
    },
    "excerpt": {
      "en": "The whole family except baby Daria",
      "ru": "Всей семьей кроме малышки Дарьи"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/IMG_3455-1.webp",
      "alt": {
        "en": "We went to La Bayadère",
        "ru": "Мы ходили на Баядерку"
      }
    },
    "source": {
      "en": "69df6f0b75185f7b232037f8",
      "ru": "69b171296e5564436d20def7"
    },
    "isVladimir": false
  },
  {
    "id": "eto-iavlialos-moriem-zaliv-15-fievralia-dvie-tysiachi-dvadtsat-piatogho-ghoda",
    "kind": "post",
    "date": "2025-02-15",
    "publishedAt": "2025-02-15 12:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "This was the sea (bay) on February 15, two thousand and twenty-five",
      "ru": "Это являлось морем (залив) 15 февраля две тысячи двадцать пятого года"
    },
    "excerpt": {
      "en": "It's just capturing the moment",
      "ru": "Это просто фиксация момента"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/IMG_3431.jpeg",
      "alt": {
        "en": "This was the sea (bay) on February 15, two thousand and twenty-five",
        "ru": "Это являлось морем (залив) 15 февраля две тысячи двадцать пятого года"
      }
    },
    "source": {
      "en": "69df6f0c75185f7b23203804",
      "ru": "69b171296e5564436d20def8"
    },
    "isVladimir": false
  },
  {
    "id": "orghanizoval-krasivuiu-fotosiessiiu-dlia-saita",
    "kind": "post",
    "date": "2025-02-14",
    "publishedAt": "2025-02-14 08:00:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Organized a beautiful photo shoot for the site",
      "ru": "Организовал красивую фотосессию для сайта"
    },
    "excerpt": {
      "en": "We held a photo shoot a week ago last Friday with the doctors of the Budovsky Clinic for the website",
      "ru": "Провели неделю назад в прошлую пятницу фотосессию с докторами клиники Будовского для сайта"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/Budovsky_Doctors.webp",
      "alt": {
        "en": "Organized a beautiful photo shoot for the site",
        "ru": "Организовал красивую фотосессию для сайта"
      }
    },
    "source": {
      "en": "69df6f0d75185f7b2320380b",
      "ru": "69b171296e5564436d20def4"
    },
    "isVladimir": false
  },
  {
    "id": "khodili-k-sanku-v-shkolu",
    "kind": "post",
    "date": "2025-02-12",
    "publishedAt": "2025-02-12 04:45:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "daria-stories",
      "dubai",
      "family-live"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "We went to Sanka's school",
      "ru": "Ходили к Саньку в школу"
    },
    "excerpt": {
      "en": "We attended an absolutely wonderful musical production of “We are one” at Raffles World Academy, Sanya sang songs and drummed somewhere in the background",
      "ru": "Были на совершенно прекрасной музыкальной постановке «We are one» в школе Raffles World Academy, Саня пел песни и стучал на барабанах где-то на заднем плане"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/IMG_3275.webp",
      "alt": {
        "en": "We went to Sanka's school",
        "ru": "Ходили к Саньку в школу"
      }
    },
    "source": {
      "en": "69df6f0d75185f7b23203814",
      "ru": "69b171296e5564436d20def9"
    },
    "isVladimir": false
  },
  {
    "id": "wio-skazal-da-moi-schiot-approved",
    "kind": "post",
    "date": "2025-02-06",
    "publishedAt": "2025-02-06 08:55:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Wio said “Yes!” My account is approved!",
      "ru": "Wio сказал «Да!». Мой счёт — approved!"
    },
    "excerpt": {
      "en": "On February 6, I received a letter from Wio: “Your account is approved. Pending activation.\"",
      "ru": "6 февраля получил письмо от Wio: «Your account is approved. Pending activation.»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/wio_bussiness.webp",
      "alt": {
        "en": "Wio said “Yes!” My account is approved!",
        "ru": "Wio сказал «Да!». Мой счёт — approved!"
      }
    },
    "source": {
      "en": "69df6f0e75185f7b2320381e",
      "ru": "69b171296e5564436d20df03"
    },
    "isVladimir": false
  },
  {
    "id": "durachimsia-s-dashiei",
    "kind": "post",
    "date": "2025-01-17",
    "publishedAt": "2025-01-17 08:25:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "daria-stories",
      "dubai",
      "family-live"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Fooling around with Dasha",
      "ru": "Дурачимся с Дашей"
    },
    "excerpt": {
      "en": "Me and my daughter Daria - perhaps this is the BRIX Cafe toilet",
      "ru": "Я и дочька Дарья — возможно, это туалет BRIX Cafe"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/IMG_2695.webp",
      "alt": {
        "en": "Fooling around with Dasha",
        "ru": "Дурачимся с Дашей"
      }
    },
    "source": {
      "en": "69df6f0f75185f7b23203827",
      "ru": "69b171296e5564436d20df18"
    },
    "isVladimir": false
  },
  {
    "id": "my-new-own-branding",
    "kind": "post",
    "date": "2024-12-22",
    "publishedAt": "2024-12-22 08:56:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "design"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "My new branding",
      "ru": "Мой новый брендинг"
    },
    "excerpt": {
      "en": "Perhaps it's time to do something for yourself",
      "ru": "Пожалуй, настало время сделать что-то для себя"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/alexander-nevsky-branding-large.png",
      "alt": {
        "en": "My new branding",
        "ru": "Мой новый брендинг"
      }
    },
    "source": {
      "en": "69df6f0f75185f7b23203831",
      "ru": "69b171296e5564436d20defd"
    },
    "isVladimir": false
  },
  {
    "id": "hidden-cafe-v-diekabrie",
    "kind": "post",
    "date": "2024-12-02",
    "publishedAt": "2024-12-02 10:20:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "bekky-tails",
      "daria-stories",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Hidden Cafe in December",
      "ru": "Hidden Cafe в декабре"
    },
    "excerpt": {
      "en": "On December 2nd, my family and I took a trip to the desert to visit the Hidden Cafe in Dubai. This day was like a little adventure: the road to the cafe passed through endless sand dunes that seemed to shine under the rays of the winter sun",
      "ru": "2 декабря мы всей семьей отправились в пустыню, чтобы посетить кафе Hidden Cafe в Дубае. Этот день был как маленькое приключение: дорога к кафе проходила через бескрайние песчаные дюны, которые будто сияли под лучами зимнего солнца"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2024/12/alexander-nevsky_hidden-cover.webp",
      "alt": {
        "en": "Hidden Cafe in December",
        "ru": "Hidden Cafe в декабре"
      }
    },
    "source": {
      "en": "69df6f1075185f7b23203838",
      "ru": "69b171296e5564436d20def1"
    },
    "isVladimir": false
  },
  {
    "id": "working-with-yango-pay",
    "kind": "post",
    "date": "2024-11-14",
    "publishedAt": "2024-11-14 04:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Worked as a designer at Dubai's Yango Pay",
      "ru": "Работал в дубайском Yango Pay дизайнером"
    },
    "excerpt": {
      "en": "Yango Pay is a convenient mobile wallet built into the Yango Taxi app that allows you to instantly top up your account using mobile money. From June 2023 to November 2024, I worked as a Senior Product Designer in a cross-functional team of 16 people based in Dubai",
      "ru": "Yango Pay — это удобный мобильный кошелек, встроенный в приложение Yango Taxi, который позволяет мгновенно пополнять счет с помощью мобильных денег. С июня 2023 по ноябрь 2024 года я работал старшим дизайнером продуктов в кросс-функциональной команде из 16 человек, базирующейся в Дубае"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/working-with-yango-pay__feature.webp",
      "alt": {
        "en": "Worked as a designer at Dubai's Yango Pay",
        "ru": "Работал в дубайском Yango Pay дизайнером"
      }
    },
    "source": {
      "en": "69df6f1075185f7b23203844",
      "ru": "69ca3d235a40a2cc911bdf38"
    },
    "isVladimir": false
  },
  {
    "id": "licence",
    "kind": "post",
    "date": "2024-11-01",
    "publishedAt": "2024-11-01 07:45:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Licensed web developer. Legally clicking pixels in Dubai",
      "ru": "Веб-девелопер с лицензией. Легально кликаю пиксели в Дубае"
    },
    "excerpt": {
      "en": "Now as an adult: I have a web developer license in Dubai",
      "ru": "Теперь по-взрослому: у меня есть лицензия веб-девелопера в Дубае"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/Ebybci52y22u05bvRz4fuOEYag.webp",
      "alt": {
        "en": "Licensed web developer. Legally clicking pixels in Dubai",
        "ru": "Веб-девелопер с лицензией. Легально кликаю пиксели в Дубае"
      }
    },
    "source": {
      "en": "69df6f1175185f7b2320384c",
      "ru": "69b171296e5564436d20df02"
    },
    "isVladimir": false
  },
  {
    "id": "keytom-app-cv",
    "kind": "post",
    "date": "2024-09-25",
    "publishedAt": "2024-09-25 03:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Created interfaces for a Dubai neobank",
      "ru": "Создавал интерфейсы для дубайского необанка"
    },
    "excerpt": {
      "en": "In 2023, I worked as a product designer for Keytom, a neobank based in Dubai. We collected the “fiat + crypto” ecosystem in one product and brought the interfaces to a clear, modern user experience and launched the first version of the MVP",
      "ru": "В 2023-м я работал продуктовым дизайнером Keytom — необанка из Дубая. Собрали экосистему «фиат + крипто» в одном продукте и довели интерфейсы до ясного, современного пользовательского опыта и запустили первую версию MVP"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/keytom-app-cv__feature.webp",
      "alt": {
        "en": "Created interfaces for a Dubai neobank",
        "ru": "Создавал интерфейсы для дубайского необанка"
      }
    },
    "source": {
      "en": "69df6f1275185f7b23203855",
      "ru": "69ca3d305a40a2cc911bdf40"
    },
    "isVladimir": false
  },
  {
    "id": "m2-realty-platform",
    "kind": "post",
    "date": "2024-09-10",
    "publishedAt": "2024-09-10 02:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Managed a group of designers at Square Meter",
      "ru": "Руководил группой дизайнеров в «Метре квадратном»"
    },
    "excerpt": {
      "en": "In m2. ru I led a team of four product designers at Deal Desk for B2B (business-to-business) - the company's revenue center - and put together end-to-end user experience (UX) from scratch: mortgage, electronic registration, remote signing of documents",
      "ru": "В m2. ru я возглавлял команду из четырёх продуктовых дизайнеров в Deal Desk для B2B (business-to-business) — центре выручки компании — и с нуля собрал end-to-end пользовательский опыт (UX): ипотека, электронная регистрация, удалённое подписание документов"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/m2-realty-platform__feature.webp",
      "alt": {
        "en": "Managed a group of designers at Square Meter",
        "ru": "Руководил группой дизайнеров в «Метре квадратном»"
      }
    },
    "source": {
      "en": "69df6f1375185f7b2320385c",
      "ru": "69ca3d3d5a40a2cc911bdf48"
    },
    "isVladimir": false
  },
  {
    "id": "vladimir-nievskii-chieloviek-izmierivshii-shir-turistskim-shaghom",
    "kind": "post",
    "date": "2024-09-01",
    "publishedAt": "2024-09-01 08:00:00",
    "featured": false,
    "tags": [
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Vladimir Nevsky",
      "ru": "Владимир Невский"
    },
    "title": {
      "en": "Vladimir Nevsky: The man who measured the expanse with a tourist's step",
      "ru": "Владимир Невский: Человек, измеривший ширь туристским шагом"
    },
    "excerpt": {
      "en": "Vladimir Aleksandrovich Nevsky (1933 - 2019) is an iconic figure for Buryatia. An energy engineer by profession and a pioneer in spirit, he dedicated his life to making the mountains and taiga closer and more understandable to everyone",
      "ru": "Владимир Александрович Невский (1933 — 2019) — знаковая фигура для Бурятии. Инженер-энергетик по профессии и первопроходчик по духу, он посвятил жизнь тому, чтобы сделать горы и тайгу ближе и понятнее каждому"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_maslo.webp",
      "alt": {
        "en": "Vladimir Nevsky: The man who measured the expanse with a tourist's step",
        "ru": "Владимир Невский: Человек, измеривший ширь туристским шагом"
      }
    },
    "source": {
      "en": "69df6f1375185f7b23203863",
      "ru": "69c4f4f8cb1ffb9abea24f49"
    },
    "isVladimir": true
  },
  {
    "id": "vlesu-cv",
    "kind": "post",
    "date": "2024-08-20",
    "publishedAt": "2024-08-20 01:55:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Managed his own art cafe “In the Forest” remotely from Dubai",
      "ru": "Управлял собственным арт-кафе «В Лесу» удаленно из Дубая"
    },
    "excerpt": {
      "en": "“In the Forest” is my warm place: rebranded from Dubai, a menu read out in the printing house, five of our own, Lyokha the barista and a table by the window. In the summer of 2024 I sold the cafe - the decision was right, the aftertaste is bitter, but I will be back",
      "ru": "«В Лесу» — моё тёплое место: ребрендинг из Дубая, меню, вычитанное в типографии, пятеро своих, Лёха-бариста и стол у окна. Летом-2024 я продал кафе — решение верное, послевкусие горчит, но я ещё вернусь…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vlesu__feature.webp",
      "alt": {
        "en": "Managed his own art cafe “In the Forest” remotely from Dubai",
        "ru": "Управлял собственным арт-кафе «В Лесу» удаленно из Дубая"
      }
    },
    "source": {
      "en": "69df6f1475185f7b2320386a",
      "ru": "69ca2495c776c79d43383fd5"
    },
    "isVladimir": false
  },
  {
    "id": "two-elements",
    "kind": "post",
    "date": "2024-08-18",
    "publishedAt": "2024-08-18 01:20:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Made beautiful branding for the project of my wife and her friend Two Elements",
      "ru": "Сделал красивый брендинг для проекта жены и ее подруги Two Elements"
    },
    "excerpt": {
      "en": "For my wife Irina and her friend Yulia, I created an identity for their Two Elements project - scented candles and sachets. The task was simple and honest: modern, elegant and homely, personal, with the idea of ​​​​harmony of two principles",
      "ru": "Для жены Ирины и её подруги Юли я сделал айдентику их проекта Two Elements — ароматических свечей и саше. Задача была простая и честная: современно, элегантно и по-домашнему лично, с идеей гармонии двух начал"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/two-elements__feature.webp",
      "alt": {
        "en": "Made beautiful branding for the project of my wife and her friend Two Elements",
        "ru": "Сделал красивый брендинг для проекта жены и ее подруги Two Elements"
      }
    },
    "source": {
      "en": "69df6f1575185f7b23203872",
      "ru": "69ca24aac776c79d43383fdb"
    },
    "isVladimir": false
  },
  {
    "id": "pac-journeys",
    "kind": "post",
    "date": "2024-08-15",
    "publishedAt": "2024-08-15 01:10:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Made a landing page for PacJourneys on Framer",
      "ru": "Сделал лендинг для PacJourneys на Framer"
    },
    "excerpt": {
      "en": "Design and build of the PacJourneys website on Framer: clean grids, smooth micro-animations and clear navigation emphasize the exclusivity of the service and make choosing a trip simple",
      "ru": "Дизайн и сборка сайта PacJourneys на Framer: чистые сетки, плавные микро-анимации и ясная навигация подчёркивают эксклюзивность сервиса и делают выбор путешествия простым"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/pac-journeys__feature.webp",
      "alt": {
        "en": "Made a landing page for PacJourneys on Framer",
        "ru": "Сделал лендинг для PacJourneys на Framer"
      }
    },
    "source": {
      "en": "69df6f1575185f7b23203879",
      "ru": "69ca24b9c776c79d43383fe1"
    },
    "isVladimir": false
  },
  {
    "id": "connection-middle-east-cv",
    "kind": "post",
    "date": "2024-03-21",
    "publishedAt": "2024-03-21 08:56:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Designed and created a website for fellow lawyers Connection Middle East",
      "ru": "Спроектировал и сверстал сайт для друзей-юристов Connection Middle East"
    },
    "excerpt": {
      "en": "A clean, modern site on Framer that quickly explains what the team does for UAE businesses: company setup, visas, banking, and ongoing support. Clear structure, confident visuals, and sharp accents — so a visitor grasps the essentials in a minute and takes the next step",
      "ru": "Лаконичный и современный сайт на Framer, который быстро объясняет, чем команда полезна бизнесу в ОАЭ: от регистрации компании и виз до банковских процессов и сопровождения. Чистая структура, уверенный визуал и понятные акценты — чтобы посетитель за минуту понял главное и сделал следующий шаг"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/connection-middle-east-cv__feature.webp",
      "alt": {
        "en": "Designed and created a website for fellow lawyers Connection Middle East",
        "ru": "Спроектировал и сверстал сайт для друзей-юристов Connection Middle East"
      }
    },
    "source": {
      "en": "69df6f1675185f7b23203880",
      "ru": "69ca3d415a40a2cc911bdf50"
    },
    "isVladimir": false
  },
  {
    "id": "wellara-branding-cv",
    "kind": "post",
    "date": "2024-01-17",
    "publishedAt": "2024-01-17 12:32:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Branding for the Wellara medical brand",
      "ru": "Брендинг для медицинского бренда Wellara"
    },
    "excerpt": {
      "en": "Branding for the Wellara medical brand",
      "ru": "Брендинг для медицинского бренда Wellara"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/wellara_cover_new.webp",
      "alt": {
        "en": "Branding for the Wellara medical brand",
        "ru": "Брендинг для медицинского бренда Wellara"
      }
    },
    "source": {
      "en": "69df6f1675185f7b23203887",
      "ru": "69ca3d545a40a2cc911bdf58"
    },
    "isVladimir": false
  },
  {
    "id": "les-benjamins-addicted",
    "kind": "post",
    "date": "2023-11-28",
    "publishedAt": "2023-11-28 06:32:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Les Benjamins addicted…",
      "ru": "Les Benjamins addicted…"
    },
    "excerpt": {
      "en": "I love Les Benjamins. For the design, for the spirit, for Istanbul inside every seam. Inspires as if it were not clothes, but a manifesto",
      "ru": "Люблю Les Benjamins. За дизайн, за дух, за Стамбул внутри каждого шва. Вдохновляет так, как будто это не одежда, а манифест"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/IMG_7616.webp",
      "alt": {
        "en": "Les Benjamins addicted…",
        "ru": "Les Benjamins addicted…"
      }
    },
    "source": {
      "en": "69df6f1775185f7b2320388e",
      "ru": "69b171296e5564436d20df07"
    },
    "isVladimir": false
  },
  {
    "id": "svierstal-sait-dlia-epicweb3-na-webflow",
    "kind": "post",
    "date": "2023-09-30",
    "publishedAt": "2023-09-30 20:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design",
      "webflow"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Designed a website for EpicWeb3 on Webflow EN",
      "ru": "Сверстал сайт для EpicWeb3 на Webflow"
    },
    "excerpt": {
      "en": "For the great team at EpicWeb3, I built the entire website in Webflow. The design was created by another designer, while my role focused on implementing the layout and improving certain aspects of the UI",
      "ru": "For the great team at EpicWeb3, I built the entire website in Webflow. The design was created by another designer, while my role focused on implementing the layout and improving certain aspects of the UI"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/epicweb3-website-build-on-webflow-cv__feature.webp",
      "alt": {
        "en": "Designed a website for EpicWeb3 on Webflow EN",
        "ru": "Сверстал сайт для EpicWeb3 на Webflow"
      }
    },
    "source": {
      "en": "69df6f1875185f7b23203896",
      "ru": "69ca3d6a5a40a2cc911bdf60"
    },
    "isVladimir": false
  },
  {
    "id": "kontsieptsiia-mietavsieliennoi-kotoraia-pomozhiet-chieloviechiestvu-pierieiti-na-novyi-urovien-razvitiia",
    "kind": "post",
    "date": "2023-09-14",
    "publishedAt": "2023-09-14 11:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "threshold-signals"
    ],
    "primaryTag": {
      "en": "Threshold",
      "ru": "Threshold"
    },
    "title": {
      "en": "The concept of a metaverse that will help humanity move to a new level of development",
      "ru": "Концепция метавселенной, которая поможет человечеству перейти на новый уровень развития"
    },
    "excerpt": {
      "en": "The Metaverse as an Evolutionary Round of Humanity: A Manifesto for the Digital Singularity",
      "ru": "Метавселенная как эволюционный виток человечества: манифест цифровой сингулярности"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/future.webp",
      "alt": {
        "en": "The concept of a metaverse that will help humanity move to a new level of development",
        "ru": "Концепция метавселенной, которая поможет человечеству перейти на новый уровень развития"
      }
    },
    "source": {
      "en": "69df6f1975185f7b2320389d",
      "ru": "69b171296e5564436d20df0d"
    },
    "isVladimir": false
  },
  {
    "id": "sait-koghnitivnyie-stratieghii-piervyi-draft-dizaina",
    "kind": "post",
    "date": "2023-08-09",
    "publishedAt": "2023-08-09 09:39:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "moscow"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Website \"Cognitive Strategies\", first design draft",
      "ru": "Сайт «Когнитивные стратегии», первый драфт дизайна"
    },
    "excerpt": {
      "en": "The other day I completed the first draft of the “Cognitive Strategies” website for my project, which I am doing together with my partner Ilya",
      "ru": "На днях доделал первый драфт сайта «Когнитивные стратегии» для своего проекта, который делаю вместе с партнером Ильей"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/2ee61789-24a9-4f21-b5b3-c11699c8f64e.jpeg",
      "alt": {
        "en": "Website \"Cognitive Strategies\", first design draft",
        "ru": "Сайт «Когнитивные стратегии», первый драфт дизайна"
      }
    },
    "source": {
      "en": "69df6f1975185f7b232038a4",
      "ru": "69b171296e5564436d20df08"
    },
    "isVladimir": false
  },
  {
    "id": "niemnogho-bolshie-chiem-odin-ghod-v-dubaie",
    "kind": "post",
    "date": "2023-07-31",
    "publishedAt": "2023-07-31 18:46:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "A little more than one year in Dubai",
      "ru": "Немного больше, чем один год в Дубае"
    },
    "excerpt": {
      "en": "July 31st was the moment when we lived in Dubai for exactly a year",
      "ru": "31 июля наступил момент, когда мы прожили в Дубае ровно год"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/2cdf9076-52b8-4241-95bf-130c73d2fe83.jpeg",
      "alt": {
        "en": "A little more than one year in Dubai",
        "ru": "Немного больше, чем один год в Дубае"
      }
    },
    "source": {
      "en": "69df6f1a75185f7b232038ad",
      "ru": "69b171296e5564436d20df11"
    },
    "isVladimir": false
  },
  {
    "id": "ia-i-tiesla",
    "kind": "post",
    "date": "2023-07-12",
    "publishedAt": "2023-07-12 12:17:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "daria-stories",
      "dubai"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Me and Tesla",
      "ru": "Я и Тесла"
    },
    "excerpt": {
      "en": "How to rent a Tesla in Dubai",
      "ru": "Как арендовать Теслу в Дубае"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/a4c93e07-b281-4d51-a6d2-a10a1a611093.jpeg",
      "alt": {
        "en": "Me and Tesla",
        "ru": "Я и Тесла"
      }
    },
    "source": {
      "en": "69df6f1a75185f7b232038b5",
      "ru": "69b171296e5564436d20df13"
    },
    "isVladimir": false
  },
  {
    "id": "apdieit-na-6-iiunia-2023-ghoda",
    "kind": "post",
    "date": "2023-06-05",
    "publishedAt": "2023-06-05 20:00:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "dubai",
      "vlesu-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Update for June 6, 2023",
      "ru": "Апдейт на 6 июня 2023 года"
    },
    "excerpt": {
      "en": "Everything is fine!",
      "ru": "Все хорошо!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/51a0b72b-623f-4d63-8f49-ae1d80d9bd76.webp",
      "alt": {
        "en": "Update for June 6, 2023",
        "ru": "Апдейт на 6 июня 2023 года"
      }
    },
    "source": {
      "en": "69df6f1b75185f7b232038be",
      "ru": "69b171296e5564436d20df16"
    },
    "isVladimir": false
  },
  {
    "id": "obnovili-mieniu-k-lietniemu-siezonu-v-kafie-con-gelato-2-0",
    "kind": "post",
    "date": "2023-06-05",
    "publishedAt": "2023-06-05 13:36:00",
    "featured": false,
    "tags": [
      "design",
      "moscow",
      "vlesu-stories"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "The menu has been updated for the summer season at the Con Gelato 2.0 cafe",
      "ru": "Обновили меню к летнему сезону в кафе Con Gelato 2.0"
    },
    "excerpt": {
      "en": "Come visit!",
      "ru": "Заходите в гости!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/f305aead-47e6-4d80-a15e-cfe16268621a.jpeg",
      "alt": {
        "en": "The menu has been updated for the summer season at the Con Gelato 2.0 cafe",
        "ru": "Обновили меню к летнему сезону в кафе Con Gelato 2.0"
      }
    },
    "source": {
      "en": "69df6f1c75185f7b232038c7",
      "ru": "69b171296e5564436d20df14"
    },
    "isVladimir": false
  },
  {
    "id": "starshii-riebienok-vzial-zoloto",
    "kind": "post",
    "date": "2023-05-26",
    "publishedAt": "2023-05-26 06:00:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "The eldest child took the gold!",
      "ru": "Старший ребенок взял золото!"
    },
    "excerpt": {
      "en": "Sanya took gold in the Jiu Jitsu competition in Abu Dhabi, winning two fights, again with a painful armbar. This is just some incredible baby!!!",
      "ru": "Саня взял золото в соревнованиях по Jiu Jitsu в Абу-Даби победив в двух схватках опять же болевым приемом-рычагом на руку. Это просто какой-то невероятный малыш!!!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/51a46f24-7b6f-448e-b1fa-f8129935c414.jpeg",
      "alt": {
        "en": "The eldest child took the gold!",
        "ru": "Старший ребенок взял золото!"
      }
    },
    "source": {
      "en": "69df6f1d75185f7b232038d0",
      "ru": "69b171296e5564436d20df15"
    },
    "isVladimir": false
  },
  {
    "id": "sdielal-sait-svoiegho-kafie-con-gelato-2-0-na-flexbe",
    "kind": "post",
    "date": "2023-05-19",
    "publishedAt": "2023-05-19 10:41:00",
    "featured": false,
    "tags": [
      "design",
      "moscow",
      "vlesu-stories"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "I made a website for my cafe Con Gelato 2.0 on Flexbe",
      "ru": "Сделал сайт своего кафе Con Gelato 2.0 на Flexbe"
    },
    "excerpt": {
      "en": "I made such a fast website for my cafe or coffee shop or cafeteria with the ability to order online",
      "ru": "Для своего кафе или кофейни или кафетерия сделал такой быстрый сайт с возможностью заказать онлайн"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/cbe1144e-843e-49fc-a6d2-ae9753875bde.jpeg",
      "alt": {
        "en": "I made a website for my cafe Con Gelato 2.0 on Flexbe",
        "ru": "Сделал сайт своего кафе Con Gelato 2.0 на Flexbe"
      }
    },
    "source": {
      "en": "69df6f1d75185f7b232038da",
      "ru": "69b171296e5564436d20df0c"
    },
    "isVladimir": false
  },
  {
    "id": "dieti-zarabotali-naghrady",
    "kind": "post",
    "date": "2023-05-19",
    "publishedAt": "2023-05-19 09:00:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Family",
      "ru": "Семья"
    },
    "title": {
      "en": "Children earned awards",
      "ru": "Дети заработали награды"
    },
    "excerpt": {
      "en": "The kids again achieved some school awards: Sanya Star of the Week and Kostya Class Dojo Champion",
      "ru": "Ребятишкины опять достигли каких-то школьных наград: Санек Star of the Week и Костя Class Dojo Champion"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/9ffd7efb-af9a-400a-b469-108d8744574a.jpeg",
      "alt": {
        "en": "Children earned awards",
        "ru": "Дети заработали награды"
      }
    },
    "source": {
      "en": "69df6f1e75185f7b232038e3",
      "ru": "69b171296e5564436d20df12"
    },
    "isVladimir": false
  },
  {
    "id": "uzhie-dieviat-9-miesiatsiev-v-dubaie",
    "kind": "post",
    "date": "2023-04-30",
    "publishedAt": "2023-04-30 13:10:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "alexander-live",
      "daria-stories",
      "dubai",
      "family-live",
      "irina-articles",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Already nine (9!) months in Dubai",
      "ru": "Уже девять (9! ) месяцев в Дубае"
    },
    "excerpt": {
      "en": "The day has come when we can boldly and proudly declare that our whole family has been in Dubai for the ninth month. Let me remind you that we flew here on July 30, 2022, exactly on Saturday, on an Emirates flight",
      "ru": "Вот и наступил день, когда можно смело и гордо заявить, что мы всей семьей в Дубае уже девятый месяц. Напомню, что залетели мы сюда 30 июля 2022 года ровно в субботу авиарейсом компании Emirates"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/8cfe079e-7385-4817-8a12-c079d81c33c8.jpeg",
      "alt": {
        "en": "Already nine (9!) months in Dubai",
        "ru": "Уже девять (9! ) месяцев в Дубае"
      }
    },
    "source": {
      "en": "69df6f1e75185f7b232038ec",
      "ru": "69b171296e5564436d20df0a"
    },
    "isVladimir": false
  },
  {
    "id": "dieti-borolis-i-pobiedili",
    "kind": "post",
    "date": "2023-04-29",
    "publishedAt": "2023-04-29 08:30:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "daria-stories",
      "dubai",
      "family-live",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Children fought and won",
      "ru": "Дети боролись и победили"
    },
    "excerpt": {
      "en": "The kids took prizes at the Brazilian Jiu-Jitsu competition in the Dubai branch of the Gymnasium",
      "ru": "Ребятишки заняли призовые места на соревновании по бразильскому джиу-джитцу в дубайском филиале Gymnasium"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/2402bfee-e5d3-46dc-ad5b-4accbac1cb90.jpeg",
      "alt": {
        "en": "Children fought and won",
        "ru": "Дети боролись и победили"
      }
    },
    "source": {
      "en": "69df6f1f75185f7b232038f9",
      "ru": "69b171296e5564436d20df01"
    },
    "isVladimir": false
  },
  {
    "id": "rukovodil-ghruppoi-dizainierov-v-mietrie-kvadratnom",
    "kind": "post",
    "date": "2023-02-19",
    "publishedAt": "2023-02-19 08:00:00",
    "featured": false,
    "tags": [
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Managed a group of designers at Square Meter",
      "ru": "Руководил группой дизайнеров в «Метре квадратном»"
    },
    "excerpt": {
      "en": "In m2. ru I led a team of four product designers at Deal Desk for B2B (business-to-business) - the company's revenue center - and put together end-to-end user experience (UX) from scratch: mortgage, electronic registration, remote signing of documents",
      "ru": "В m2. ru я возглавлял команду из четырёх продуктовых дизайнеров в Deal Desk для B2B (business-to-business) — центре выручки компании — и с нуля собрал end-to-end пользовательский опыт (UX): ипотека, электронная регистрация, удалённое подписание документов"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/02/m2-ru.png",
      "alt": {
        "en": "Managed a group of designers at Square Meter",
        "ru": "Руководил группой дизайнеров в «Метре квадратном»"
      }
    },
    "source": {
      "en": "69df6f1f75185f7b23203904",
      "ru": "69b171296e5564436d20defe"
    },
    "isVladimir": false
  },
  {
    "id": "prototip-mobilnogho-prilozhieniia-dlia-keytom",
    "kind": "post",
    "date": "2023-02-02",
    "publishedAt": "2023-02-02 09:40:00",
    "featured": false,
    "tags": [
      "d2q-studio",
      "design",
      "dubai",
      "framer"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "Mobile application prototype for Keytom",
      "ru": "Прототип мобильного приложения для Keytom"
    },
    "excerpt": {
      "en": "The prototype was first assembled in Figma, but then rebuilt in Webflow",
      "ru": "Прототип собрал сначало в Figma, но потом пересобрал в Webflow"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/b2515cd7-c803-4793-8fe9-d0b5e8a827b6.png",
      "alt": {
        "en": "Mobile application prototype for Keytom",
        "ru": "Прототип мобильного приложения для Keytom"
      }
    },
    "source": {
      "en": "69df6f2075185f7b2320390b",
      "ru": "69b171296e5564436d20df0f"
    },
    "isVladimir": false
  },
  {
    "id": "1-sientiabria-v-dubaie",
    "kind": "post",
    "date": "2022-09-01",
    "publishedAt": "2022-09-01 08:00:00",
    "featured": false,
    "tags": [
      "alexander-jr-stories",
      "daria-stories",
      "dubai",
      "family-live",
      "irina-articles",
      "konstantin-stories"
    ],
    "primaryTag": {
      "en": "Dubai",
      "ru": "Дубай"
    },
    "title": {
      "en": "September 1 in Dubai",
      "ru": "1 сентября в Дубае"
    },
    "excerpt": {
      "en": "Alexander Jr. and Konstantin-two-times-junior and Daria-generally-petty + me + Irina + grandmother = standing on the line dedicated to September 1st at the Russian International School in Sharjah",
      "ru": "Александр-младший и Константин-два-раза-младший и Дарья-вообще-мелкая + меня + Ирина + бабушка = стоим на линейке, посвященной 1-му сентября в Russian International School в Шардже"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/05/IMG_1171-1.webp",
      "alt": {
        "en": "September 1 in Dubai",
        "ru": "1 сентября в Дубае"
      }
    },
    "source": {
      "en": "69df6f2175185f7b23203915",
      "ru": "69b171296e5564436d20df22"
    },
    "isVladimir": false
  },
  {
    "id": "lieghko-i-biez-probliem",
    "kind": "post",
    "date": "2022-05-21",
    "publishedAt": "2022-05-21 09:45:00",
    "featured": false,
    "tags": [
      "design",
      "moscow"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Easy and no problem...",
      "ru": "Легко и без проблем…"
    },
    "excerpt": {
      "en": "At one of the design sprints, which took place outdoors, my design team and I put together this cheerful presentation about cool features that could increase user retention in the Square Meter mobile application",
      "ru": "На одном из дизайн-спринтов, который проходил на природе, мы с командой дизайнеров собрали такую вот бодрую презентацию, про прикольные фичи, которые могли бы увеличить ретеншен пользователей в мобильное приложение «Метра квадратного»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/771485fa-b5d1-4362-a8aa-fb7917927529.png",
      "alt": {
        "en": "Easy and no problem...",
        "ru": "Легко и без проблем…"
      }
    },
    "source": {
      "en": "69df6f2175185f7b23203921",
      "ru": "69b171296e5564436d20df09"
    },
    "isVladimir": false
  },
  {
    "id": "ia-i-dashka",
    "kind": "post",
    "date": "2022-03-01",
    "publishedAt": "2022-03-01 20:00:00",
    "featured": false,
    "tags": [
      "daria-stories",
      "family-live",
      "moscow"
    ],
    "primaryTag": {
      "en": "Family",
      "ru": "Семья"
    },
    "title": {
      "en": "Me and Dasha",
      "ru": "Я и Дашка"
    },
    "excerpt": {
      "en": "Me and little Dasha in the courtyard of some house in the “Microcity in the Forest”",
      "ru": "Я и еще мелкая Дашка во дворе какого-то дома в «Микрогороде в Лесу»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2024/12/vlesu_2-march-2022.webp",
      "alt": {
        "en": "Me and Dasha",
        "ru": "Я и Дашка"
      }
    },
    "source": {
      "en": "69df6f2275185f7b23203929",
      "ru": "69b171296e5564436d20def2"
    },
    "isVladimir": false
  },
  {
    "id": "me-and-framer",
    "kind": "post",
    "date": "2021-09-09",
    "publishedAt": "2021-09-09 08:00:00",
    "featured": false,
    "tags": [
      "design",
      "framer",
      "moscow"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Me and Framer",
      "ru": "Я и Framer"
    },
    "excerpt": {
      "en": "In general, initially there was an idea to create proprietary courses on creating high-fidelity prototypes in Framer",
      "ru": "Вообще, изначально была идея делать авторские курсы по созданию high-fidelity прототипов во Framer…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/fa2f55ea-4727-4585-bd70-2f11ef1ba8d6.jpeg",
      "alt": {
        "en": "Me and Framer",
        "ru": "Я и Framer"
      }
    },
    "source": {
      "en": "69df6f2275185f7b23203932",
      "ru": "69b171296e5564436d20df0b"
    },
    "isVladimir": false
  },
  {
    "id": "na-raienie-v-liesu",
    "kind": "post",
    "date": "2021-02-02",
    "publishedAt": "2021-02-02 09:17:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "moscow",
      "vlesu-stories"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "In the forest",
      "ru": "На раене в лесу"
    },
    "excerpt": {
      "en": "In the style of the country \"In the forest\"",
      "ru": "На стиле на раене «В лесу»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/01/aleksandr_nevskii_vlesu.webp",
      "alt": {
        "en": "In the forest",
        "ru": "На раене в лесу"
      }
    },
    "source": {
      "en": "69df6f2375185f7b2320393b",
      "ru": "69b171296e5564436d20df2e"
    },
    "isVladimir": false
  },
  {
    "id": "eto-samyi-piervyi-post-v-etom-bloghie",
    "kind": "post",
    "date": "2020-06-17",
    "publishedAt": "2020-06-17 11:40:00",
    "featured": false,
    "tags": [
      "alexander-live",
      "design",
      "moscow"
    ],
    "primaryTag": {
      "en": "Alexander Nevsky",
      "ru": "Александр Невский"
    },
    "title": {
      "en": "This is the very first post on this blog.",
      "ru": "Это самый первый пост в этом блоге"
    },
    "excerpt": {
      "en": "Hello!",
      "ru": "Привет!"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2025/04/f5011107-1e65-4827-b752-18851798edf3.jpeg",
      "alt": {
        "en": "This is the very first post on this blog.",
        "ru": "Это самый первый пост в этом блоге"
      }
    },
    "source": {
      "en": "69df6f2375185f7b23203944",
      "ru": "69b171296e5564436d20df0e"
    },
    "isVladimir": false
  },
  {
    "id": "priedisloviie-k-knighie-izmierim-shir-turistskim-shaghom",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 19:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Preface",
      "ru": "Предисловие к книге «Измерим ширь туристским шагом»"
    },
    "excerpt": {
      "en": "My father conceived this book in the mid-90s. It took many years to create it. In 2006, it was mocked up and “published” - printed on a printer in a single copy. Due to various circumstances, Vladimir Alexandrovich, while doing great public work and caring for others, was unable",
      "ru": "Эту книгу мой отец задумал в середине 90-х. Долгие годы ушли на ее создание. В 2006 году она была смакетирована и «издана» — отпечатана на принтере в единственном экземпляре. По разным обстоятельствам Владимир Александрович, выполняя большую общественную работу и радея за других, не смог…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/yuriy_nevskii_shoes.webp",
      "alt": {
        "en": "Preface",
        "ru": "Предисловие к книге «Измерим ширь туристским шагом»"
      }
    },
    "source": {
      "en": "69df6f2475185f7b2320394d",
      "ru": "69c6b1cd4928b69a64765f46"
    },
    "isVladimir": true
  },
  {
    "id": "o-kodekse-turista",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 19:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "About the tourist code",
      "ru": "О кодексе туриста"
    },
    "excerpt": {
      "en": "The tourist code calls for mindfulness: an honest read on your health, responsibility to the group, and mutual support. Respect local traditions and follow eco-ethics — leave no trace, protect nature and what people built for the common good",
      "ru": "Кодекс туриста призывает к осознанности: объективной оценке здоровья, ответственности перед группой и взаимовыручке. Важно проявлять уважение к местным традициям и следовать принципам экоэтики — не оставлять следов пребывания, беречь природу и то, что создано людьми для общего блага"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/mountain_image.webp",
      "alt": {
        "en": "About the tourist code",
        "ru": "О кодексе туриста"
      }
    },
    "source": {
      "en": "69df6f2575185f7b23203954",
      "ru": "69c6b1cd4928b69a64765f4c"
    },
    "isVladimir": true
  },
  {
    "id": "tak-li-uzh-prosto-razzhech-koster",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 18:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Is it really that easy to light a fire?",
      "ru": "Так ли уж просто разжечь костер?"
    },
    "excerpt": {
      "en": "But this can most often happen under ideal weather conditions. What if it rains, winds, snow, frost, swamp? In these conditions, starting a fire is an art. And with a limited number of matches, it can be a matter of life or death",
      "ru": "Но это чаще всего может быть при идеальных погодных условиях. А если дождь, ветер, снег, мороз, болотина? В этих условиях разведение огня — целое искусство. А при ограниченном количестве спичек это может быть вопросом жизни или смерти"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/koster_v_lesu.webp",
      "alt": {
        "en": "Is it really that easy to light a fire?",
        "ru": "Так ли уж просто разжечь костер?"
      }
    },
    "source": {
      "en": "69df6f2575185f7b2320395b",
      "ru": "69c6b1ce4928b69a64765f51"
    },
    "isVladimir": true
  },
  {
    "id": "zabludilsya-v-tayge",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 18:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Lost in the taiga",
      "ru": "Заблудился в тайге"
    },
    "excerpt": {
      "en": "It happened in one of our republic’s districts. A young family — father, mother, and their five-year-old — went into the forest to pick berries. They stopped in a scenic clearing. The father took a pail and headed to a spot he knew, telling his wife to watch the girl and the car",
      "ru": "Дело было в одном из районов нашей республики. Молодая семья: отец, мать и их пятилетняя дочурка — поехала в лес по ягоды. Остановились на живописной полянке. Отец взял ведерко и пошел в глубь леса на известные ему места, а жене наказал смотреть за дочкой и автомобилем"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Lost in the taiga",
        "ru": "Заблудился в тайге"
      }
    },
    "source": {
      "en": "69df6f2675185f7b23203962",
      "ru": "69c6b1ce4928b69a64765f56"
    },
    "isVladimir": true
  },
  {
    "id": "vstrecha-s-medvedem",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 17:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Meeting with a bear",
      "ru": "Встреча с медведем"
    },
    "excerpt": {
      "en": "They say, “it’s easy to tease a bear from your cabin.” But if you meet one face to face? According to seasoned taiga men, you’d better have a spare pair of trousers. Over many years in the taiga, I’ve more than once met its master — and the people who hunted him, too",
      "ru": "Говорят, «хорошо медведя из избы дразнить». А если пришлось встретиться один на один, нос к носу? Тут непременно, согласно совету бывалых таежников, нужно иметь запасные штаны. За многолетнюю таежную практику мне довелось не раз встречаться с хозяином тайги и с теми, кто охотился на него и кого…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Meeting with a bear",
        "ru": "Встреча с медведем"
      }
    },
    "source": {
      "en": "69df6f2775185f7b23203968",
      "ru": "69c6b1ce4928b69a64765f5b"
    },
    "isVladimir": true
  },
  {
    "id": "perevospitala-priroda",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 17:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Re-educated by nature",
      "ru": "Перевоспитала природа"
    },
    "excerpt": {
      "en": "The big city makes a person weak, often helpless in the harsh conditions of the wild. It’s especially visible in our kids. A friend of mine once took a group of eighth-graders on a hike. “We barely dragged ourselves to the overnight camp,” he recalls. “The boys dumped everything…”",
      "ru": "Большой город делает человека слабым, зачастую беспомощным в суровых условиях дикой природы. Особенно это заметно на наших детях. Однажды мой хороший знакомый отправился в поход с группой восьмиклассников. «С грехом пополам доплелись до места ночевки, — рассказывает он. — Ребята побросали…»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Re-educated by nature",
        "ru": "Перевоспитала природа"
      }
    },
    "source": {
      "en": "69df6f2775185f7b2320396e",
      "ru": "69c6b1ce4928b69a64765f60"
    },
    "isVladimir": true
  },
  {
    "id": "opasney-gor-mogut-byt-tolko-gory",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 16:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "The only things more dangerous than mountains are mountains.",
      "ru": "Опасней гор могут быть только горы"
    },
    "excerpt": {
      "en": "Five guys arrived in Uoyan at night. They found the police station and told the officer on duty that two of their comrades remained in the mountains. They don't know what's wrong with them. Rescuers must be sent urgently",
      "ru": "В Уоян пятеро ребят пришли уже ночью. Разыскали отделение милиции и рассказали дежурному, что в горах остались два их товарища. Что с ними, они не знают. Нужно срочно высылать спасателей"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "The only things more dangerous than mountains are mountains.",
        "ru": "Опасней гор могут быть только горы"
      }
    },
    "source": {
      "en": "69df6f2875185f7b23203974",
      "ru": "69c6b1ce4928b69a64765f65"
    },
    "isVladimir": true
  },
  {
    "id": "takaya-rabota-spasat-lyudey",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 16:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "This is the job: saving people",
      "ru": "Такая работа: спасать людей"
    },
    "excerpt": {
      "en": "The Eastern Sayans are considered one of Buryatia’s most dangerous mountain regions. Hundreds of tourists come every year — and nearly every year, some journeys end tragically. That’s why the Kyren search-and-rescue team, led by a first-class rescuer…",
      "ru": "Восточные Саяны считаются одним из самых опасных горных районов Бурятии. Каждый год сюда съезжаются сотни туристов. И почти каждый год путешествия некоторых из них оканчиваются трагически. Поэтому Кыренскому поисково-спасательному отряду во главе с его начальником, спасателем первого класса…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "This is the job: saving people",
        "ru": "Такая работа: спасать людей"
      }
    },
    "source": {
      "en": "69df6f2875185f7b2320397a",
      "ru": "69c6b1ce4928b69a64765f6a"
    },
    "isVladimir": true
  },
  {
    "id": "nehozhenymi-tropami-hamar-dabana",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 15:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Untrodden paths of Khamar-Daban",
      "ru": "Нехожеными тропами Хамар-Дабана"
    },
    "excerpt": {
      "en": "Art. Vydrino - r. Snezhnaya - r. Selenginka stream",
      "ru": "Ст. Выдрино — р. Снежная — р. Селенгинка — руч"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Untrodden paths of Khamar-Daban",
        "ru": "Нехожеными тропами Хамар-Дабана"
      }
    },
    "source": {
      "en": "69df6f2975185f7b23203980",
      "ru": "69c6b1ce4928b69a64765f6f"
    },
    "isVladimir": true
  },
  {
    "id": "prityazhenie-han-uly",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 15:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "The attraction of Khan-Uly",
      "ru": "Притяжение Хан-Улы"
    },
    "excerpt": {
      "en": "Art. Murino - r. Langutai - Langutai Gate pass - Nukhen-Daban pass - r. Barun-Yunkutsuk - city",
      "ru": "Ст. Мурино — р. Лангутай — перевал Лангутайские ворота — перевал Нухен-Дабан — р. Барун-Юнкуцук — г"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "The attraction of Khan-Uly",
        "ru": "Притяжение Хан-Улы"
      }
    },
    "source": {
      "en": "69df6f2a75185f7b23203986",
      "ru": "69c6b1ce4928b69a64765f74"
    },
    "isVladimir": true
  },
  {
    "id": "za-zdorovem-s-ryukzakom",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 14:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "For health with a backpack",
      "ru": "За здоровьем с рюкзаком"
    },
    "excerpt": {
      "en": "Slyudyanka - HMS \"Hamar-Daban\" - Devil's Gate pass - r. Spuskovaya - r. Utulik - r",
      "ru": "Г. Слюдянка — ГМС «Хамар-Дабан» — перевал Чертовы ворота — р. Спусковая — р. Утулик — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "For health with a backpack",
        "ru": "За здоровьем с рюкзаком"
      }
    },
    "source": {
      "en": "69df6f2a75185f7b2320398c",
      "ru": "69c6b1ce4928b69a64765f79"
    },
    "isVladimir": true
  },
  {
    "id": "na-vstrechu-s-vodopadami",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 14:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "To meet... with waterfalls",
      "ru": "На встречу… с водопадами"
    },
    "excerpt": {
      "en": "Art. Vydrino - r. Snezhnaya - r. Selenginka - vdp",
      "ru": "Ст. Выдрино — р. Снежная — р. Селенгинка — вдп"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "To meet... with waterfalls",
        "ru": "На встречу… с водопадами"
      }
    },
    "source": {
      "en": "69df6f2b75185f7b23203992",
      "ru": "69c6b1ce4928b69a64765f7e"
    },
    "isVladimir": true
  },
  {
    "id": "tam-gde-tsvetet-rododendron",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 13:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Where the rhododendron blooms...",
      "ru": "Там, где цветет рододендрон…"
    },
    "excerpt": {
      "en": "Art. Utulik - r. Bhabha - stream. Left Poperechny - high-mountain camp - Porozhisty peak, 2,025 meters - lake",
      "ru": "Ст. Утулик — р. Бабха — руч. Левый Поперечный — высокогорный лагерь — пик Порожистый, 2 025 метров — оз"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Where the rhododendron blooms...",
        "ru": "Там, где цветет рододендрон…"
      }
    },
    "source": {
      "en": "69df6f2c75185f7b23203998",
      "ru": "69c6b1ce4928b69a64765f83"
    },
    "isVladimir": true
  },
  {
    "id": "k-shturmu-barguzinskogo-hrebta-gotovy",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 13:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "“We are ready for the assault on the Barguzinsky ridge!”",
      "ru": "«К штурму Баргузинского хребта готовы!»"
    },
    "excerpt": {
      "en": "“Happy is he who knows the aching feeling of the road...” (“People Walk Through the World”) Pos. Barguzin - b. Nesterikha - Mechta pass - lake. Ladokhinskoe - r",
      "ru": "«Счастлив, кому знакомо щемящее чувство дороги…» («Люди идут по свету») Пос. Баргузин — р. Нестериха — перевал Мечта — оз. Ладохинское — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "“We are ready for the assault on the Barguzinsky ridge!”",
        "ru": "«К штурму Баргузинского хребта готовы!»"
      }
    },
    "source": {
      "en": "69df6f2c75185f7b2320399e",
      "ru": "69c6b1ce4928b69a64765f88"
    },
    "isVladimir": true
  },
  {
    "id": "pereval-nazvali-mechta",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 12:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "The pass was called “dream”",
      "ru": "Перевал назвали «мечта»"
    },
    "excerpt": {
      "en": "Each of us had long dreamed of standing on the peaks and passes of the Barguzin Range, venturing into the mysterious wilds of Podlemorye. At last, we were there. I won’t describe the whole route — only the most vivid moments along the way. And what the members themselves say…",
      "ru": "Каждый из нас давно мечтал побывать на вершинах и перевалах Баргузинского хребта, проникнуть в таинственные дебри Подлеморья. Наконец-то мы оказались в этих чудесных местах. Не буду описывать весь маршрут, остановлюсь только на наиболее ярких впечатлениях в пути. Что говорят об этом сами…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "The pass was called “dream”",
        "ru": "Перевал назвали «мечта»"
      }
    },
    "source": {
      "en": "69df6f2d75185f7b232039a4",
      "ru": "69c6b1ce4928b69a64765f8d"
    },
    "isVladimir": true
  },
  {
    "id": "vse-pro-yozhika",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 12:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "All about the hedgehog",
      "ru": "Все про ёжика"
    },
    "excerpt": {
      "en": "Every day on TV screens we are invited to visit the Canary Islands, Thailand, Cyprus, Malta and other exotic places. But I want to get to know my small homeland better - Buryatia. Fortunately, I'm not the only one. Therefore, every summer, after packing our backpacks, we go on a trip",
      "ru": "Каждый день с экранов телевизоров нас приглашают посетить Канарские острова, Таиланд, Кипр, Мальту и другие экзотические уголки. Но мне хочется получше узнать свою малую родину — Бурятию. К счастью, не один я такой. Поэтому каждое лето, уложив рюкзаки, отправляемся мы в путешествие"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "All about the hedgehog",
        "ru": "Все про ёжика"
      }
    },
    "source": {
      "en": "69df6f2d75185f7b232039aa",
      "ru": "69c6b1ce4928b69a64765f92"
    },
    "isVladimir": true
  },
  {
    "id": "na-ugryum-reku",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 11:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "To the Ugryum River",
      "ru": "На Угрюм-реку"
    },
    "excerpt": {
      "en": "Pos. Taximo - village Molodezhny - Kindikansky pass - r. Kindikan - r",
      "ru": "Пос. Таксимо — пос. Молодежный — перевал Киндиканский — р. Киндикан — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "To the Ugryum River",
        "ru": "На Угрюм-реку"
      }
    },
    "source": {
      "en": "69df6f2e75185f7b232039b0",
      "ru": "69c6b1cf4928b69a64765f97"
    },
    "isVladimir": true
  },
  {
    "id": "pereprava",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 11:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Crossing",
      "ru": "Переправа"
    },
    "excerpt": {
      "en": "... The river, all covered in white breakers, rumbles over the rocks. The old horse trail either goes up or down to the riverbed itself. The Transbaikal autumn is raging all around",
      "ru": "… Вся в белых бурунах грохочет по камням река. Старая конная тропа то поднимается вверх, то спускается к самому руслу. Вокруг буйствует забайкальская осень"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Crossing",
        "ru": "Переправа"
      }
    },
    "source": {
      "en": "69df6f2f75185f7b232039b6",
      "ru": "69c6b1cf4928b69a64765f9c"
    },
    "isVladimir": true
  },
  {
    "id": "posledniy-pereval",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 10:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Last pass",
      "ru": "Последний перевал"
    },
    "excerpt": {
      "en": "Pos. Mondy - b. Irkut - lake Ilchir - GMS - Dikiy pass - r",
      "ru": "Пос. Монды — р. Иркут — оз. Ильчир — ГМС — перевал Дикий — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Last pass",
        "ru": "Последний перевал"
      }
    },
    "source": {
      "en": "69df6f2f75185f7b232039bc",
      "ru": "69c6b1cf4928b69a64765fa1"
    },
    "isVladimir": true
  },
  {
    "id": "slushay-rechka-betsya-v-skaly",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 10:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "“Listen, the river beats into the rocks...”",
      "ru": "«Слушай, речка бьется в скалы…»"
    },
    "excerpt": {
      "en": "Pos. Nilova Pustyn - r. Khubyty - Khubyty pass, 1A - r. Baram-Gol - r",
      "ru": "Пос. Нилова Пустынь — р. Хубыты — перевал Хубыты, 1А — р. Барам-Гол — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "“Listen, the river beats into the rocks...”",
        "ru": "«Слушай, речка бьется в скалы…»"
      }
    },
    "source": {
      "en": "69df6f3075185f7b232039c2",
      "ru": "69c6b1cf4928b69a64765fa6"
    },
    "isVladimir": true
  },
  {
    "id": "est-takaya-rechka-sagan-sayr",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 09:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "There is such a river Sagan-Sair",
      "ru": "Есть такая речка Саган-Сайр"
    },
    "excerpt": {
      "en": "Every time I return from a trip, I bring back stones. Later, looking at them, I relive the stir of the road. This green stone with silver veins is chrysotile-asbestos from Mount Nogon-Ula in the Kitoi Peaks; the bright yellow sulfur, from the slope of an extinct volcano…",
      "ru": "Всякий раз, возвращаясь из путешествия, я привожу с собой камни. Потом взглянешь на них и снова переживаешь волнующее чувство дороги. Вот этот зеленый камень с серебристыми прослойками — хризотил-асбест с горы Ногон-Ула в Китойских гольцах, ярко-желтый кусок серы подобран на склоне потухшего…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "There is such a river Sagan-Sair",
        "ru": "Есть такая речка Саган-Сайр"
      }
    },
    "source": {
      "en": "69df6f3075185f7b232039c8",
      "ru": "69c6b1cf4928b69a64765fab"
    },
    "isVladimir": true
  },
  {
    "id": "vershina",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 09:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Vertex",
      "ru": "Вершина"
    },
    "excerpt": {
      "en": "“For people of the future, being in the mountains will be as routine a part of culture as books, music, poetry…” — Stanisław Lem. Back in 1978, a group of tourists from Buryatenergo led by Stanislav Melnikov attempted to climb Buryatia’s highest peak, Munku-Sardyk. But they were stopped…",
      "ru": "«У людей будущего пребывание в горах станет таким же обиходом культуры, как книги, музыка, поэзия…». Станислав Лем. Еще в 1978 году группой туристов «Бурятэнерго» под руководством Станислава Мельникова была сделана попытка подняться на высочайшую вершину Бурятии — Мунку-Сардык. Но помешал…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Vertex",
        "ru": "Вершина"
      }
    },
    "source": {
      "en": "69df6f3175185f7b232039ce",
      "ru": "69c6b1cf4928b69a64765fb0"
    },
    "isVladimir": true
  },
  {
    "id": "dyhanie-vulkanov",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 08:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Breath of Volcanoes",
      "ru": "Дыхание вулканов"
    },
    "excerpt": {
      "en": "Pos. Orlik - b. Sentsa - summer camp Khongorey (base camp) - Valley of Volcanoes - mineral springs Zhoigan - Topographers Peak - Expedition Pass - r. Arzhan-Khem - r",
      "ru": "Пос. Орлик — р. Сенца — летник Хонгорэй (базовый лагерь) — Долина вулканов — минеральные источники Жойган — пик Топографов — перевал Экспедиционный — р. Аржан-Хем — р"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Breath of Volcanoes",
        "ru": "Дыхание вулканов"
      }
    },
    "source": {
      "en": "69df6f3275185f7b232039d4",
      "ru": "69c6b1cf4928b69a64765fb5"
    },
    "isVladimir": true
  },
  {
    "id": "v-krayu-gornyh-vershin-i-udivitelnyh-lyudey",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 08:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "In the land of mountain peaks and amazing people",
      "ru": "В краю горных вершин и удивительных людей"
    },
    "excerpt": {
      "en": "“... The Oka Plateau is like Tibet in miniature...” S.V",
      "ru": "«… Окинское плоскогорье представляет собой как бы Тибет в миниатюре…». С. В"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "In the land of mountain peaks and amazing people",
        "ru": "В краю горных вершин и удивительных людей"
      }
    },
    "source": {
      "en": "69df6f3275185f7b232039da",
      "ru": "69c6b1cf4928b69a64765fba"
    },
    "isVladimir": true
  },
  {
    "id": "vertikal-sobiraetsya-vnov",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 07:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "\"VERTICAL\" IS ASSEMBLING AGAIN",
      "ru": "«ВЕРТИКАЛЬ» СОБИРАЕТСЯ ВНОВЬ"
    },
    "excerpt": {
      "en": "The Vertical tourist club held a memorial evening at Buryatenergo. By long tradition, like-minded souls gathered to recall days spent on the trail and to honour those no longer with us: Vladimir Zharnikov, Stanislav Melnikov, Anatoly Gurulev, Nadezhda Venediktova…",
      "ru": "Вечер памяти провел в «Бурятэнерго» клуб туристов «Вертикаль». По давней традиции здесь собрались единомышленники, чтобы вспомнить о днях, проведенных в путешествиях, и почтить память тех, кого уже нет с нами: Владимира Жарникова, Станислава Мельникова, Анатолия Гурулева, Надежды Венедиктовой, …"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "\"VERTICAL\" IS ASSEMBLING AGAIN",
        "ru": "«ВЕРТИКАЛЬ» СОБИРАЕТСЯ ВНОВЬ"
      }
    },
    "source": {
      "en": "69df6f3375185f7b232039e0",
      "ru": "69c6b1cf4928b69a64765fbf"
    },
    "isVladimir": true
  },
  {
    "id": "vstrecha-na-marshrute",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 07:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Meeting on the route",
      "ru": "Встреча на маршруте"
    },
    "excerpt": {
      "en": "Once we found ourselves on the shore of Lake Dozor-Nur in the Oka district. The day was hot, and clouds of mosquitoes and horseflies followed us. That likely pushed a large herd of yaks to the shore, where a faint cool breeze stirred — some even waded in, standing belly-deep in the water…",
      "ru": "Однажды мы оказались на берегу озера Дозор-Нур, что в Окинском районе. День был жаркий, и тучи комаров и паутов сопровождали нас. Это, видимо, заставило большое стадо сарлыков выйти на берег озера, где ощущался слабый свежий ветерок. А некоторые животные забрели в озеро и стояли по брюхо в воде, …"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Meeting on the route",
        "ru": "Встреча на маршруте"
      }
    },
    "source": {
      "en": "69df6f3475185f7b232039e6",
      "ru": "69c6b1cf4928b69a64765fc4"
    },
    "isVladimir": true
  },
  {
    "id": "v-krayu-gornyh-vershin",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 06:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "In the land of mountain peaks",
      "ru": "В краю горных вершин"
    },
    "excerpt": {
      "en": "It was long ago, but memory holds the brightest pages of life. In the summer of 1991, with a group of ten, we set out to visit Topographers’ Peak in the Great Sayan. The popular route started right at the edge of Orlik village. Before 1985, communications…",
      "ru": "Давно это было, но наша память долго хранит яркие страницы нашей жизни. Вот, например, летом 1991 года с туристской группой в составе 10 участников мы решили посетить пик Топографов в районе Большого Саяна. Популярный туристский маршрут начинался прямо от околицы села Орлик. До 1985 года связь…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "In the land of mountain peaks",
        "ru": "В краю горных вершин"
      }
    },
    "source": {
      "en": "69df6f3475185f7b232039ec",
      "ru": "69c6b1cf4928b69a64765fc9"
    },
    "isVladimir": true
  },
  {
    "id": "v-den-energetiki",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 06:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "On Energy Day",
      "ru": "В день энергетики"
    },
    "excerpt": {
      "en": "Sixty years since Buryatenergo was founded — the regional energy authority, then an open joint-stock company from 1993, now a branch of IDGC of Siberia. In 1963, amid a serious electricity shortage in the republic, a new turbogenerator was scheduled for commissioning…",
      "ru": "Исполнилось 60 лет со дня образования районного энергетического управления «Бурятэнерго», с 1993 года открытого акционерного общества «Бурятэнерго», ныне филиала ОАО «МРСК Сибири». В 1963 году при значительном дефиците электроэнергии в республике намечалось ввести в эксплуатацию турбогенератор…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "On Energy Day",
        "ru": "В день энергетики"
      }
    },
    "source": {
      "en": "69df6f3575185f7b232039f2",
      "ru": "69c6b1cf4928b69a64765fce"
    },
    "isVladimir": true
  },
  {
    "id": "toropites-videt-zemlyu",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 05:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "“Hurry up to see the land!”",
      "ru": "«Торопитесь видеть землю!»"
    },
    "excerpt": {
      "en": "We caught up with Vera Lubsanova, head of the Top-v-les hiking club and a Nordic walking instructor. Most of us know her as Vera the Swede. She had just returned with a group from a trek to Charsky Peak, in the mountain…",
      "ru": "Как-то мы встретились с Верой Александровной Лубсановой, руководителем турклуба «Топ-в-лес», инструктором скандинавской ходьбы. Большинство из нас знает её под псевдонимом Вера Шведка. Вера накануне с группой туристов вернулась из пешего похода по популярному маршруту на пик Чарского в горном…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "“Hurry up to see the land!”",
        "ru": "«Торопитесь видеть землю!»"
      }
    },
    "source": {
      "en": "69df6f3575185f7b232039f8",
      "ru": "69c6b1cf4928b69a64765fd3"
    },
    "isVladimir": true
  },
  {
    "id": "po-sledam-pervoprohodtsev",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 05:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "In the footsteps of the pioneers",
      "ru": "По следам первопроходцев"
    },
    "excerpt": {
      "en": "In my earlier piece “About my Father”, I wrote that along the Abakan – Taishet line there is a station called Koshurnikovo, named after the survey engineer Alexander Mikhailovich Koshurnikov. Here, in the young railway village, stands a monument to him, who perished…",
      "ru": "В моей предыдущей публикации под названием «Об отце» я писал, что на трассе Абакан — Тайшет есть станция Кошурниково, названная так в честь инженера-изыскателя Александра Михайловича Кошурникова. Здесь, в молодом поселке железнодорожников, установлен памятник А. М. Кошурникову, погибшему при…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "In the footsteps of the pioneers",
        "ru": "По следам первопроходцев"
      }
    },
    "source": {
      "en": "69df6f3675185f7b232039fe",
      "ru": "69c6b1cf4928b69a64765fd8"
    },
    "isVladimir": true
  },
  {
    "id": "ochey-ocharovane",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 04:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "The charm of the eyes...",
      "ru": "Очей очарованье…"
    },
    "excerpt": {
      "en": "It’s the end of October outside, and I love this season. The dacha season is over, our modest harvest is stored away. Now I can admire the golden autumn as much as I want. Two luxurious larches, dressed in gold, stand under my dacha window, their branches tapping on the glass",
      "ru": "За окном конец октября, и мне очень нравится это время. Дачный сезон окончен, наш скромный урожай убран в закрома. Теперь можно любоваться сколько хочешь наступившей золотой осенью. На даче у меня под окном две роскошные лиственницы, принявшие золотистый наряд, и ветви их стучатся в окно"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "The charm of the eyes...",
        "ru": "Очей очарованье…"
      }
    },
    "source": {
      "en": "69df6f3775185f7b23203a04",
      "ru": "69c6b1d04928b69a64765fdd"
    },
    "isVladimir": true
  },
  {
    "id": "po-moryam-po-volnam",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 04:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "\"Across the seas, across the waves...\"",
      "ru": "«По морям, по волнам…»"
    },
    "excerpt": {
      "en": "Today an unexpected call came in: an old friend, TV journalist Vladimir Zharov, on assignment in Petropavlovsk-Kamchatsky. Knowing my love for the sea, he even tried to transmit the sound of surf over the phone… And I, happily, heard the familiar melody — because I was born by…",
      "ru": "Сегодня неожиданно раздался звонок: звонил давний друг, тележурналист Владимир Жаров, оказавшийся в командировке в Петропавловске-Камчатском. Зная мою любовь к морю, он даже попробовал передать с помощью телефона шум морского прибоя… И я, к счастью, услышал знакомую мелодию, ведь я родился на…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "\"Across the seas, across the waves...\"",
        "ru": "«По морям, по волнам…»"
      }
    },
    "source": {
      "en": "69df6f3775185f7b23203a0a",
      "ru": "69c6b1d04928b69a64765fe2"
    },
    "isVladimir": true
  },
  {
    "id": "novye-vpechatleniya",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 03:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "New impressions",
      "ru": "Новые впечатления"
    },
    "excerpt": {
      "en": "Sorting through my travel journals, I opened the notebook from 1981. Back then my wife and I took a cruise through the Baltic and the North Seas to mark our silver wedding. And here’s the entry I’d love to quote verbatim: “Our route ran through every Scandinavian country. And the first…”",
      "ru": "Перебирая путевые дневники, я открыл тетрадь за 1981 год. Тогда мы с женой совершили круиз по странам Балтийского и Северного морей, посвятив его нашей серебряной свадьбе. И вот запись, которую хочется привести дословно: «Маршрут нашего круиза проходил через все скандинавские страны. И первое…»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "New impressions",
        "ru": "Новые впечатления"
      }
    },
    "source": {
      "en": "69df6f3875185f7b23203a10",
      "ru": "69c6b1d04928b69a64765fe7"
    },
    "isVladimir": true
  },
  {
    "id": "buket-na-stole",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 03:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Bouquet on the table",
      "ru": "Букет на столе"
    },
    "excerpt": {
      "en": "I’ll tell you that, every time I return from a long trip to the Eastern Sayan or Khamar-Daban or from a short one in the vicinity of our city, out of habit I bring in my backpack several branches of cedar or juniper, golden rhododendron or fragrant sagaan dali. These simple bouquets",
      "ru": "Скажу вам, что, всякий раз возвращаясь из большого похода в Восточный Саян или Хамар-Дабан или из короткого — в окрестностях нашего города, я по привычке приношу в рюкзаке несколько веточек кедра или можжевельника, рододендрона золотистого или душистого сагаан дали. Эти незатейливые букетики…"
    },
    "image": {
      "src": "http://localhost:2368/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Bouquet on the table",
        "ru": "Букет на столе"
      }
    },
    "source": {
      "en": "69df6f3875185f7b23203a16",
      "ru": "69c6b1d04928b69a64765fec"
    },
    "isVladimir": true
  },
  {
    "id": "za-zolotoy-rybkoy",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 02:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "For the goldfish",
      "ru": "За золотой рыбкой"
    },
    "excerpt": {
      "en": "I was born and raised by the sea. My small homeland is Sakhalin. There I learned to row and steer a boat, set nets and use a cast net. When I accidentally came across the Ural Pathfinder magazine with an article about Lake Frolikha, its beauty and picturesqueness were tempting",
      "ru": "Родился и вырос я на море. Моя малая родина — Сахалин. Там я научился грести и управлять лодкой, ставить сети и пользоваться закидным неводом. Когда мне случайно попался журнал «Уральский следопыт» со статьей об озере Фролиха, красота и живописность его были заманчивы"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "For the goldfish",
        "ru": "За золотой рыбкой"
      }
    },
    "source": {
      "en": "69df6f3975185f7b23203a1c",
      "ru": "69c6b1d04928b69a64765ff1"
    },
    "isVladimir": true
  },
  {
    "id": "brigantina-podnimaet-parusa",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 02:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "\"Brigantine\" raises sails...",
      "ru": "«Бригантина» поднимает паруса…"
    },
    "excerpt": {
      "en": "The other day we met our old friend, a TV journalist and experienced traveler, who had just returned from a trip on the ice of Lake Baikal. For supporting him on his solo journey, he gave us a brand new compass as a present. Having thanked him, I picked up my respected compass,",
      "ru": "На днях мы встретили нашего старого друга тележурналиста и бывалого путешественника, только что вернувшегося из похода по льду Байкала. За поддержку его в одиночном путешествии он в качестве презента подарил нам новейший компас. Поблагодарив его, я взял в руки мой заслуживший уважение компас, …"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "\"Brigantine\" raises sails...",
        "ru": "«Бригантина» поднимает паруса…"
      }
    },
    "source": {
      "en": "69df6f3a75185f7b23203a22",
      "ru": "69c6b1d04928b69a64765ff6"
    },
    "isVladimir": true
  },
  {
    "id": "oda-o-spichkah",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 01:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Ode on matches",
      "ru": "Ода о спичках"
    },
    "excerpt": {
      "en": "Many of you remember Jack London's wonderful story \"Love of Life.\" “... He unpacked the bale and first of all counted how many matches he had. There were sixty-seven of them.\"",
      "ru": "Многие из вас помнят замечательный рассказ Джека Лондона «Любовь к жизни». «… Он распаковал тюк и прежде всего сосчитал, сколько у него спичек. Их было шестьдесят семь.»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Ode on matches",
        "ru": "Ода о спичках"
      }
    },
    "source": {
      "en": "69df6f3a75185f7b23203a28",
      "ru": "69c6b1d04928b69a64765ffb"
    },
    "isVladimir": true
  },
  {
    "id": "chto-takoe-schaste",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 01:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "What is happiness",
      "ru": "Что такое счастье"
    },
    "excerpt": {
      "en": "I’ve travelled a lot across Russia and beyond. I gave many years to tourism — I hold the badge “For active work in the development of tourism and excursions in the RSFSR.” What stays with me most are trips along the northernmost railway, Dudinka — Norilsk, and the easternmost…",
      "ru": "В свое время я много путешествовал по России, побывал в ближнем и дальнем зарубежье. Много лет я отдал туризму: имею нагрудный знак «За активную работу по развитию туризма и экскурсий в РСФСР». Мне запомнились путешествия по самой северной железной дороге Дудинка — Норильск и самой восточной…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "What is happiness",
        "ru": "Что такое счастье"
      }
    },
    "source": {
      "en": "69df6f3b75185f7b23203a2e",
      "ru": "69c6b1d04928b69a64766000"
    },
    "isVladimir": true
  },
  {
    "id": "u-samogo-sinego-morya",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 00:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "By the bluest sea",
      "ru": "У самого синего моря"
    },
    "excerpt": {
      "en": "For a long time our family lived in Tangi, a small village of fishermen and loggers on the stormy Tatar Strait. I was 12 to 14 — the age of romantics and adventurers: I wanted to see everything with my own eyes, and better yet, touch it with my hands. We went down to the sea and beyond…",
      "ru": "Семья наша долгое время жила в небольшом поселке рыбаков и лесорубов Танги на берегу бурливого Татарского пролива. Мне было тогда 12–14 лет — возраст романтиков и искателей приключений: хотелось увидеть все собственными глазами, а еще лучше потрогать руками. Мы шли на берег моря и дальше по…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "By the bluest sea",
        "ru": "У самого синего моря"
      }
    },
    "source": {
      "en": "69df6f3c75185f7b23203a34",
      "ru": "69c6b1d04928b69a64766005"
    },
    "isVladimir": true
  },
  {
    "id": "ah-banka",
    "kind": "post",
    "date": "2020-01-03",
    "publishedAt": "2020-01-03 00:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Oh, bathhouse!",
      "ru": "Ах, банька!"
    },
    "excerpt": {
      "en": "I've been working on the dacha for a long time. But my special pride is the bathhouse I built at the dacha with my own hands. Every time my gaze is caressed by hand-processed and neatly laid logs polished by wind and rain. Many of my friends who visited the dacha remember the bathhouse with delight",
      "ru": "Дачей я занимаюсь давно. Но особой моей гордостью служит банька, построенная на даче своими руками. Всякий раз мой взор ласкают обработанные вручную и отшлифованные ветром и дождём аккуратно уложенные брёвнышки. Многие из моих друзей, посещавших дачу, о бане вспоминают с восторгом"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Oh, bathhouse!",
        "ru": "Ах, банька!"
      }
    },
    "source": {
      "en": "69df6f3c75185f7b23203a3a",
      "ru": "69c6b1d04928b69a6476600a"
    },
    "isVladimir": true
  },
  {
    "id": "energiya-druzhby",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 23:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Energy of friendship",
      "ru": "Энергия дружбы"
    },
    "excerpt": {
      "en": "There are many reasons to praise our lives, and one of the most undeniable is the ability to make friends. In August 2006, the “ZOZH” newsletter published an article by V. A. Nevsky “I celebrate anniversaries on mountain passes.”",
      "ru": "Есть много поводов воздать хвалу нашей жизни, и один из самых неоспоримых — умение дружить. В августе 2006 года в вестнике «ЗОЖ» была опубликована статья В. А. Невского «Встречаю юбилеи на горных перевалах»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Energy of friendship",
        "ru": "Энергия дружбы"
      }
    },
    "source": {
      "en": "69df6f3d75185f7b23203a40",
      "ru": "69c6b1d04928b69a6476600f"
    },
    "isVladimir": true
  },
  {
    "id": "pered-vami-hamar-daban",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 23:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Before you is Khamar-Daban",
      "ru": "Перед вами — Хамар-Дабан"
    },
    "excerpt": {
      "en": "The dacha season is winding down, and more often, lifting my head from the beds, I look toward the mountains. They are right there, across the river — one of Buryatia’s most picturesque corners: Khamar-Daban. It runs hundreds of kilometres; the highest peak is Khan-Ula (2,371 m)…",
      "ru": "Подходит к концу дачный сезон, и я все чаще, поднимая голову от грядок, устремляю свой взор к горам. Они буквально рядом, за рекой. Это один из живописнейших уголков Бурятии — древний Хамар-Дабан. Он протянулся сотни километров, самая высокая вершина хребта — гора Хан-Ула (2 371 м), в переводе…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Before you is Khamar-Daban",
        "ru": "Перед вами — Хамар-Дабан"
      }
    },
    "source": {
      "en": "69df6f3d75185f7b23203a46",
      "ru": "69c6b1d04928b69a64766014"
    },
    "isVladimir": true
  },
  {
    "id": "eho-velikogo-perehoda",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 22:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "\"Echoes of the Great Transition\"",
      "ru": "«Эхо великого перехода»"
    },
    "excerpt": {
      "en": "It’s nearly 80 years since five young women from Buryatia finished at Moscow’s Dynamo Stadium in March 1937, after an unprecedented 6,000-kilometre, 95-day ski-and-walk journey. Let us recall their names: Sofia Tykheeva, Maria Khakhalova, Elizaveta…",
      "ru": "Приближается 80 лет с того дня, когда пять девушек из Бурятии в марте 1937 года финишировали на московском стадионе «Динамо», совершив беспрецедентный — длиною в 6 тысяч километров и 95 незабываемых дней — пешелыжный переход. Напомним их имена: Софья Тыхеева, Мария Хахалова, Елизавета…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "\"Echoes of the Great Transition\"",
        "ru": "«Эхо великого перехода»"
      }
    },
    "source": {
      "en": "69df6f3e75185f7b23203a4c",
      "ru": "69c6b1d04928b69a64766019"
    },
    "isVladimir": true
  },
  {
    "id": "eto-bylo-nedavno-eto-bylo-davno",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 22:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "It was recently, it was a long time ago...",
      "ru": "Это было недавно, это было давно…"
    },
    "excerpt": {
      "en": "Once I walked past a school in my city and watched how the children, going out of the porch, unanimously took out their cell phones and carried on a variety of conversations. I remembered my distant school days. We lived in a small fishing village on the seashore. There was a brutal war going on",
      "ru": "Как-то я проходил мимо школы в своем городе и наблюдал, как дети, выйдя за крыльцо, дружно доставали «мобильники» и вели самые разные переговоры. Мне вспомнились далекие школьные годы. Жили мы в небольшом рыбацком поселке на берегу моря. Шла жестокая война"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "It was recently, it was a long time ago...",
        "ru": "Это было недавно, это было давно…"
      }
    },
    "source": {
      "en": "69df6f3f75185f7b23203a52",
      "ru": "69c6b1d04928b69a6476601e"
    },
    "isVladimir": true
  },
  {
    "id": "horosho-v-zimnem-lesu",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 21:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Good in the winter forest",
      "ru": "Хорошо в зимнем лесу"
    },
    "excerpt": {
      "en": "Twenty kilometres from Ulan-Ude, where the Barguzin highway begins its steep climb to the pass, an old logging road slips off to the left down a ravine. Early winter, red rowan berries burn on the slopes. A spring pushes through the snowdrifts, never freezing over, and around it…",
      "ru": "В двадцати километрах от Улан-Удэ там, где Баргузинский тракт стремительно начинает свой крутой подъем к перевалу, слева по распадку уходит старая лесовозная дорога. Нередко в начале зимы на склонах пади горят красные гроздья рябины. Среди сугробов пробивается незамерзающий ключ. Вокруг него на…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Good in the winter forest",
        "ru": "Хорошо в зимнем лесу"
      }
    },
    "source": {
      "en": "69df6f3f75185f7b23203a58",
      "ru": "69c6b1d04928b69a64766023"
    },
    "isVladimir": true
  },
  {
    "id": "za-teh-kto-v-puti",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 21:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "For those who are on the way",
      "ru": "За тех, кто в пути"
    },
    "excerpt": {
      "en": "They say that a person cannot fit between boots and a hat, he strives into space. He is bored with repeating the path from home to the nearest tram or minibus stop every day. That's why I give preference to tourism. I am for tourism, which spiritually enriches a person, makes his life",
      "ru": "Говорят, человек не может умещаться между ботинками и шапкой, он стремится в пространство. Ему скучно повторять каждый день путь от дома до ближайшей остановки трамвая или маршрутки. Поэтому я отдаю предпочтение туризму. Я — за туризм, который духовно обогащает человека, делает его жизнь…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "For those who are on the way",
        "ru": "За тех, кто в пути"
      }
    },
    "source": {
      "en": "69df6f4075185f7b23203a5e",
      "ru": "69c6b1d14928b69a64766028"
    },
    "isVladimir": true
  },
  {
    "id": "naedine-s-prirodoy",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 20:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Alone with nature",
      "ru": "Наедине с природой"
    },
    "excerpt": {
      "en": "“His soul,” his friends say, “lives in the taiga.” His books tell the same story: Taiga Stories, Talisman, Poetry of Nature, and others. At home, the piano holds books by his favourite authors, Lermontov and Tsvetaeva. And at the winter cabin, which for many years stood at the headwaters…",
      "ru": "«Душа его, — рассказывают друзья, — живет в тайге». Об этом говорят его книги, такие как «Таежные повести», «Талисман», «Поэзия природы» и другие. Дома у него на пианино лежат книги любимых авторов, это Михаил Лермонтов и Марина Цветаева. Да и в зимовье, что многие годы располагалось в верховьях…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Alone with nature",
        "ru": "Наедине с природой"
      }
    },
    "source": {
      "en": "69df6f4075185f7b23203a64",
      "ru": "69c6b1d14928b69a6476602d"
    },
    "isVladimir": true
  },
  {
    "id": "vremya-sobirat-kamni",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 20:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Time to collect stones",
      "ru": "Время собирать камни"
    },
    "excerpt": {
      "en": "I’ve travelled a great deal — across Russia and beyond, near and far — but I came to love Buryatia most: “taiga, lakes, and steppe.” Every time I returned from a journey, I brought back stones. Later, moving them around, I relived the wistful romance of long roads",
      "ru": "Мне довелось много путешествовать. Путешествовать по России, ближнему и дальнему зарубежью, но особо я полюбил Бурятию — «таежную, озерную, степную». Всякий раз возвращаясь из путешествия, я привозил с собой камни. Потом, перекладывая их, я снова переживал щемящее чувство романтики дальних дорог"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Time to collect stones",
        "ru": "Время собирать камни"
      }
    },
    "source": {
      "en": "69df6f4175185f7b23203a6a",
      "ru": "69c6b1d14928b69a64766032"
    },
    "isVladimir": true
  },
  {
    "id": "chem-trudnee-put-tem-silnee-oschuschenie-zhizni",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 19:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "“The more difficult the path, the stronger the feeling of life”",
      "ru": "«Чем труднее путь, тем сильнее ощущение жизни»"
    },
    "excerpt": {
      "en": "“The mountains are calling...” G. A. Fedoseev 53 years ago, in the summer of 1962, as part of a tourist group of 9 participants, I first climbed to the top of Mount Munku-Sardyk",
      "ru": "«Горы зовут…». Г. А. Федосеев 53 года назад, летом 1962 года, в составе туристской группы из 9 участников я впервые поднялся на вершину горы Мунку-Сардык"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "“The more difficult the path, the stronger the feeling of life”",
        "ru": "«Чем труднее путь, тем сильнее ощущение жизни»"
      }
    },
    "source": {
      "en": "69df6f4275185f7b23203a70",
      "ru": "69c6b1d14928b69a64766037"
    },
    "isVladimir": true
  },
  {
    "id": "kamennyy-labirint",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 19:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Stone labyrinth",
      "ru": "Каменный лабиринт"
    },
    "excerpt": {
      "en": "Look at a map of Ulan-Ude and its surroundings — you’ll see plenty of curiosities. For instance, the triangle between the villages of Zabaikalsky, Nikolaevsky and Mount Sinyaya Sayantuyskaya holds unique sites. In particular, a vast complex of remnant rocks. You can find…",
      "ru": "Взгляните на карту города Улан-Удэ и его окрестностей, вы увидите много интересного. На пример, территория в треугольнике между селениями Забайкальский, Николаевский и горой Синяя Саянтуйская располагает уникальными объектами. В частности, это огромный комплекс скал-останцев. Можно встретить…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Stone labyrinth",
        "ru": "Каменный лабиринт"
      }
    },
    "source": {
      "en": "69df6f4275185f7b23203a76",
      "ru": "69c6b1d14928b69a6476603c"
    },
    "isVladimir": true
  },
  {
    "id": "chasy-i-sudby",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 18:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Clocks and fates",
      "ru": "Часы и судьбы"
    },
    "excerpt": {
      "en": "Before me lie half a dozen watches that walked through life with me. Each has its own story — sometimes cheerful, sometimes sad, sometimes tragic. Here are the engraved “Start” watches of my father, Alexander Afanasyevich Nevsky. He received them in 1959 for successfully completing…",
      "ru": "Передо мной полдюжины часов, которые шагали по жизни вместе со мной. У каждых из них есть своя история, иногда веселая, иногда грустная, а иногда и трагическая. Здесь именные часы «Старт» моего отца Александра Афанасьевича Невского. Они были вручены ему в 1959 году за успешное завершение…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Clocks and fates",
        "ru": "Часы и судьбы"
      }
    },
    "source": {
      "en": "69df6f4375185f7b23203a7c",
      "ru": "69c6b1d14928b69a64766041"
    },
    "isVladimir": true
  },
  {
    "id": "pismo-ot-neptuna",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 18:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Letter from Neptune",
      "ru": "Письмо от Нептуна"
    },
    "excerpt": {
      "en": "Rereading Jules Verne’s “In Search of the Castaways,” where the schooner’s crew finds a bottle with a note inside a shark’s belly, I recalled a story from my childhood. It happened on Sakhalin Island. One day, on a deserted seashore, I found a bottle. It was an ordinary…",
      "ru": "Перечитывая роман Жюля Верна «Дети капитана Гранта», где команда шхуны случайно обнаруживает в желудке пойманной акулы бутылку с запиской, я невольно вспомнил случай из своего далёкого детства. Было это на острове Сахалин. Однажды на пустынном морском берегу я нашел бутылку. Была это обычная…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Letter from Neptune",
        "ru": "Письмо от Нептуна"
      }
    },
    "source": {
      "en": "69df6f4375185f7b23203a82",
      "ru": "69c6b1d14928b69a64766046"
    },
    "isVladimir": true
  },
  {
    "id": "o-detstve",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 17:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "About childhood",
      "ru": "О детстве"
    },
    "excerpt": {
      "en": "The older you get, the more often you recall snapshots from childhood. I remember the years our family lived on Sakhalin, in a small fishing village by the Tatar Strait. There we kids spent our free time by the sea, on the river, in the forest. In summer we swam, fished, gathered wild…",
      "ru": "Чем старше становишься, тем чаще вспоминаешь картинки из детства. Помню годы, когда наша семья жила на Сахалине в маленьком рыбачьем поселке на берегу Татарского пролива. Здесь мы, ребятишки, проводили свободное время на берегу моря, на речке, в лесу. Летом купались, ловили рыбу, собирали лесную…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "About childhood",
        "ru": "О детстве"
      }
    },
    "source": {
      "en": "69df6f4475185f7b23203a88",
      "ru": "69c6b1d14928b69a6476604b"
    },
    "isVladimir": true
  },
  {
    "id": "bud-zdorov-dachnik",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 17:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Be healthy, summer resident",
      "ru": "Будь здоров, дачник"
    },
    "excerpt": {
      "en": "We are now increasingly talking about a healthy lifestyle. And it turns out that among us there are people for whom this has become the norm of behavior. We met with one of the representatives of this cohort in the editorial office. Read about it below",
      "ru": "Мы сейчас все чаще говорим о здоровом образе жизни. И оказывается, что среди нас есть люди, для которых это стало нормой поведения. С одним из представителей этой когорты мы встретились в редакции. Об этом читайте ниже"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Be healthy, summer resident",
        "ru": "Будь здоров, дачник"
      }
    },
    "source": {
      "en": "69df6f4575185f7b23203a8e",
      "ru": "69c6b1d14928b69a64766050"
    },
    "isVladimir": true
  },
  {
    "id": "a-les-shumel",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 16:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "And the forest was noisy...",
      "ru": "А лес шумел…"
    },
    "excerpt": {
      "en": "On a wonderful autumn day we found ourselves in the possessions of the Mostovskoye forestry district, 30–35 kilometers from Ulan-Ude. The three of us go, armed with a shovel, saw and axe. Let's go do a good deed. What kind of thing is this?",
      "ru": "В чудесный осенний день мы оказались во владениях Мостовского лесничества в 30–35 километрах от Улан-Удэ. Идем втроем, вооружившись лопатой, пилой и топором. Идем, чтобы сделать доброе дело. Что же это за дело такое?"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "And the forest was noisy...",
        "ru": "А лес шумел…"
      }
    },
    "source": {
      "en": "69df6f4575185f7b23203a94",
      "ru": "69c6b1d14928b69a64766055"
    },
    "isVladimir": true
  },
  {
    "id": "trudolyubivaya-ptitsa-dyatel",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 16:00:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Hardworking woodpecker bird",
      "ru": "Трудолюбивая птица дятел"
    },
    "excerpt": {
      "en": "Several winters in a row, on weekends, my friend Stanislav and I used to hike out to Upper Berezovka. Loggers had left behind a little hut with a stove and a splendid banya. We used the banya to the fullest, inviting friends over from time to time. The spot was quite…",
      "ru": "Несколько зим подряд в выходные мы вместе с моим другом Станиславом уходили на Верхнюю Березовку. Здесь лесозаготовители после завершения рубок оставили вагончик с печью и роскошную баню. Конечно, баню мы использовали по полной, приглашая время от времени своих друзей. Место довольно…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Hardworking woodpecker bird",
        "ru": "Трудолюбивая птица дятел"
      }
    },
    "source": {
      "en": "69df6f4675185f7b23203a9a",
      "ru": "69c6b1d14928b69a6476605a"
    },
    "isVladimir": true
  },
  {
    "id": "zavtra-snova-v-dorogu",
    "kind": "post",
    "date": "2020-01-02",
    "publishedAt": "2020-01-02 15:30:00",
    "featured": false,
    "tags": [
      "heritage",
      "vladimir-trails"
    ],
    "primaryTag": {
      "en": "Heritage",
      "ru": "Наследие"
    },
    "title": {
      "en": "Tomorrow we'll be on the road again...",
      "ru": "Завтра снова в дорогу…"
    },
    "excerpt": {
      "en": "For us, tourists, these words sound like a password, like a bugle call for “all hands on deck.” On this day, by long tradition, we gather around a campfire. Over smoky tea, a heartfelt conversation arises on its own — a meeting of kindred spirits. Here we sum up the summer just past…",
      "ru": "Эти слова для нас, туристов, звучат как пароль, как звуки горна, играющего «большой сбор». В этот день по давней традиции собираемся у костра. За чаем с дымком сам собой возникает интересный разговор, из которого ясно одно — собрались единомышленники. Здесь подводятся как бы итоги прошедшего лета…"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy_book.webp",
      "alt": {
        "en": "Tomorrow we'll be on the road again...",
        "ru": "Завтра снова в дорогу…"
      }
    },
    "source": {
      "en": "69df6f4675185f7b23203aa0",
      "ru": "69c6b1d14928b69a6476605f"
    },
    "isVladimir": true
  },
  {
    "id": "wallarm-cybersecurity-app-cv",
    "kind": "post",
    "date": "2019-11-05",
    "publishedAt": "2019-11-05 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Updated Wallarm Cybersecurity App",
      "ru": "Обновлял приложение Wallarm Cybersecurity App"
    },
    "excerpt": {
      "en": "Wallarm has become faster and clearer: a single language of components, smart tables and risk metrics to see the main thing and act immediately",
      "ru": "Wallarm стал быстрее и понятнее: единый язык компонентов, умные таблицы и метрики риска, чтобы видеть главное и действовать сразу"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/wallarm-cybersecurity-app-cv__feature.webp",
      "alt": {
        "en": "Updated Wallarm Cybersecurity App",
        "ru": "Обновлял приложение Wallarm Cybersecurity App"
      }
    },
    "source": {
      "en": "69df6f4775185f7b23203aa6",
      "ru": "69ca3d745a40a2cc911bdf68"
    },
    "isVladimir": false
  },
  {
    "id": "vtb-luxoft",
    "kind": "post",
    "date": "2018-09-11",
    "publishedAt": "2018-09-11 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Worked as a designer at VTB from Luxoft - they created the PKB portal",
      "ru": "Работал дизайнером на ВТБ от Luxoft — делали портал ПКБ"
    },
    "excerpt": {
      "en": "Worked on the customer’s side as an outstaff designer—we worked with the boys to create a corporate business portal (CBP)",
      "ru": "Работал на стороне заказчика как аутстафф-дизайнер — делали с пацанами портал корпоративного бизнеса (ПКБ)"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/vtb-luxoft__feature.webp",
      "alt": {
        "en": "Worked as a designer at VTB from Luxoft - they created the PKB portal",
        "ru": "Работал дизайнером на ВТБ от Luxoft — делали портал ПКБ"
      }
    },
    "source": {
      "en": "69df6f4875185f7b23203aad",
      "ru": "69ca24bfc776c79d43383feb"
    },
    "isVladimir": false
  },
  {
    "id": "emias-info",
    "kind": "post",
    "date": "2017-09-15",
    "publishedAt": "2017-09-15 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "He led a group of designers and was himself the design director of EMIAS",
      "ru": "Руководил группой дизайнеров и сам был дизайн-директором ЕМИАС"
    },
    "excerpt": {
      "en": "For almost five years he was the design director of EMIAS - the Unified Medical Information and Analytical Platform - they “translated” paper into digital data on the instructions of Sobyanin and DIT",
      "ru": "Почти целых пять лет был дизайн-директором ЕМИАС — Единой Медицинской Информационно-Аналитической Платформы — «переводили» бумагу в цифру по заданию Собянина и ДИТ"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/emias-info__feature.webp",
      "alt": {
        "en": "He led a group of designers and was himself the design director of EMIAS",
        "ru": "Руководил группой дизайнеров и сам был дизайн-директором ЕМИАС"
      }
    },
    "source": {
      "en": "69df6f4975185f7b23203ab5",
      "ru": "69ca24c7c776c79d43383ff1"
    },
    "isVladimir": false
  },
  {
    "id": "ria-novosti",
    "kind": "post",
    "date": "2012-09-25",
    "publishedAt": "2012-09-25 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Worked as a graphic designer at RIA Novosti",
      "ru": "Работал в РИА-Новости графическим дизайнером"
    },
    "excerpt": {
      "en": "From the same early era is my work at RIA Novosti. I was accepted into Ilya Ruderman’s graphic team, and for me it was like getting into an editorial “institute”",
      "ru": "Вот из той же ранней эпохи — моя работа в РИА Новости. Меня взяли в графическую команду Ильи Рудермана, и для меня это было как попасть в редакционный «институт»"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/ria-novosti__feature.png",
      "alt": {
        "en": "Worked as a graphic designer at RIA Novosti",
        "ru": "Работал в РИА-Новости графическим дизайнером"
      }
    },
    "source": {
      "en": "69df6f4975185f7b23203abd",
      "ru": "69ca24cec776c79d43383ff7"
    },
    "isVladimir": false
  },
  {
    "id": "izvestia",
    "kind": "post",
    "date": "2011-12-29",
    "publishedAt": "2011-12-29 08:00:00",
    "featured": false,
    "tags": [
      "cv",
      "design"
    ],
    "primaryTag": {
      "en": "Design",
      "ru": "Дизайн"
    },
    "title": {
      "en": "Created the very first web version of the Izvestia newspaper",
      "ru": "Делал самую первую веб-версию газеты «Известия»"
    },
    "excerpt": {
      "en": "Once upon a time I was hired as the first web designer for the web version of the Izvestia newspaper. I then made the very first web portal design",
      "ru": "Когда-то меня взяли первым веб-дизайнером веб-версии газеты «Известия». Я тогда сделал самый первый веб-дизайн портала"
    },
    "image": {
      "src": "https://cdn.nevsky.me/content/images/2026/03/izvestia__feature.webp",
      "alt": {
        "en": "Created the very first web version of the Izvestia newspaper",
        "ru": "Делал самую первую веб-версию газеты «Известия»"
      }
    },
    "source": {
      "en": "69df6f4a75185f7b23203ac5",
      "ru": "69ca24d3c776c79d43383ffd"
    },
    "isVladimir": false
  }
]

export const tags = {
  "ai-stream": {
    "en": {
      "name": "AI & Vibe Coding",
      "slug": "ai-stream-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Нейросети и Вайбкодинг",
      "slug": "ai-stream",
      "featureImage": ""
    }
  },
  "alexander-jr-stories": {
    "en": {
      "name": "Alexander Jr.",
      "slug": "alexander-jr-stories-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky_jr.webp"
    },
    "ru": {
      "name": "Александр Младший",
      "slug": "alexander-jr-stories",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky_jr.webp"
    }
  },
  "alexander-live": {
    "en": {
      "name": "Alexander Nevsky",
      "slug": "alexander-live-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky-2026-avatar-1.jpeg"
    },
    "ru": {
      "name": "Александр Невский",
      "slug": "alexander-live",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky-2026-avatar-1.jpeg"
    }
  },
  "bekky-tails": {
    "en": {
      "name": "Becky the Pembroke Welsh Corgi",
      "slug": "bekky-tails-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/bekki_korgi_pes.webp"
    },
    "ru": {
      "name": "Вельш-корги пебмрок Бекки",
      "slug": "bekky-tails",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/bekki_korgi_pes.webp"
    }
  },
  "cv": {
    "en": {
      "name": "CV",
      "slug": "cv-en",
      "featureImage": ""
    },
    "ru": {
      "name": "CV",
      "slug": "cv",
      "featureImage": ""
    }
  },
  "d2q-studio": {
    "en": {
      "name": "D2Q Studio",
      "slug": "d2q-studio-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2025/05/d2q-studio@2x.webp"
    },
    "ru": {
      "name": "Студия D2Q",
      "slug": "d2q-studio",
      "featureImage": "https://cdn.nevsky.me/content/images/2025/05/d2q-studio@2x.webp"
    }
  },
  "daria-stories": {
    "en": {
      "name": "Dasha",
      "slug": "daria-stories-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/daria_dochenka.webp"
    },
    "ru": {
      "name": "Даша Дочка",
      "slug": "daria-stories",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/daria_dochenka.webp"
    }
  },
  "design": {
    "en": {
      "name": "Design",
      "slug": "design-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Дизайн",
      "slug": "design",
      "featureImage": ""
    }
  },
  "dubai": {
    "en": {
      "name": "Dubai",
      "slug": "dubai-en",
      "featureImage": "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fER1YmFpfGVufDB8fHx8MTc3NDU5NTA2MXww&ixlib=rb-4.1.0&q=80&w=2000"
    },
    "ru": {
      "name": "Дубай",
      "slug": "dubai",
      "featureImage": "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fER1YmFpfGVufDB8fHx8MTc3NDU5NTA2MXww&ixlib=rb-4.1.0&q=80&w=2000"
    }
  },
  "estate": {
    "en": {
      "name": "Estate",
      "slug": "estate-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Эстейт",
      "slug": "estate",
      "featureImage": ""
    }
  },
  "family-live": {
    "en": {
      "name": "Family",
      "slug": "family-live-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Семья",
      "slug": "family-live",
      "featureImage": ""
    }
  },
  "framer": {
    "en": {
      "name": "Framer",
      "slug": "framer-en",
      "featureImage": "https://cdn.nevsky.me/content/images/size/w600/format/webp/2026/01/framer.webp"
    },
    "ru": {
      "name": "Framer",
      "slug": "framer",
      "featureImage": "https://cdn.nevsky.me/content/images/size/w600/format/webp/2026/01/framer.webp"
    }
  },
  "heritage": {
    "en": {
      "name": "Heritage",
      "slug": "heritage-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Наследие",
      "slug": "heritage",
      "featureImage": ""
    }
  },
  "irina-articles": {
    "en": {
      "name": "Irina Nevskaya",
      "slug": "irina-articles-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Ирина Невская",
      "slug": "irina-articles",
      "featureImage": ""
    }
  },
  "juriy-prose": {
    "en": {
      "name": "Yury Nevsky",
      "slug": "juriy-prose-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/yurii_nevskii.webp"
    },
    "ru": {
      "name": "Юрий Невский",
      "slug": "juriy-prose",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/yurii_nevskii.webp"
    }
  },
  "konstantin-stories": {
    "en": {
      "name": "Konstantin Nevsky",
      "slug": "konstantin-stories-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Константин Невский",
      "slug": "konstantin-stories",
      "featureImage": ""
    }
  },
  "moscow": {
    "en": {
      "name": "Moscow",
      "slug": "moscow-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Москва",
      "slug": "moscow",
      "featureImage": ""
    }
  },
  "threshold-signals": {
    "en": {
      "name": "Threshold",
      "slug": "threshold-signals-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/22eed37baa5783bbebe65f64ce953e9806ed4b86c79860fbcc82165ee3503963.png"
    },
    "ru": {
      "name": "Threshold",
      "slug": "threshold-signals",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/22eed37baa5783bbebe65f64ce953e9806ed4b86c79860fbcc82165ee3503963.png"
    }
  },
  "vibe-coding": {
    "en": {
      "name": "Vibe coding",
      "slug": "vibe-coding-en",
      "featureImage": ""
    },
    "ru": {
      "name": "Вайбкодинг",
      "slug": "vibe-coding",
      "featureImage": ""
    }
  },
  "vladimir-trails": {
    "en": {
      "name": "Vladimir Nevsky",
      "slug": "vladimir-trails-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy.webp"
    },
    "ru": {
      "name": "Владимир Невский",
      "slug": "vladimir-trails",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/vladimir_nevskiy.webp"
    }
  },
  "vlesu-stories": {
    "en": {
      "name": "Art café «In the Forest»",
      "slug": "vlesu-stories-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/vlesu_logo_round.webp"
    },
    "ru": {
      "name": "Арт-кафе «В Лесу»",
      "slug": "vlesu-stories",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/vlesu_logo_round.webp"
    }
  },
  "webflow": {
    "en": {
      "name": "Webflow",
      "slug": "webflow-en",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/webflow_logo_blue.webp"
    },
    "ru": {
      "name": "Webflow",
      "slug": "webflow",
      "featureImage": "https://cdn.nevsky.me/content/images/2026/03/webflow_logo_blue.webp"
    }
  }
} as const
