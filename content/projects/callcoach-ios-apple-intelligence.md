---
id: callcoach
date: '2026-03-15'
feature_image: '/assets/placeholders/callcoach.svg'
tags:
  - ai
  - ios
  - personal
en:
  slug: callcoach-ios-apple-intelligence
  title: CallCoach — iOS live call assistant
  excerpt: "A native Swift app that uses Apple Intelligence for real-time transcription, suggested replies, and structured memory of every call. Built for people who spend most of their day on the phone — sales, interviews, support, advisory."
ru:
  slug: callcoach-ios-apple-intelligence
  title: CallCoach — iOS-ассистент для звонков
  excerpt: "Нативное Swift-приложение на Apple Intelligence: транскрипция в реальном времени, подсказки ответов и структурированная память каждого разговора. Для тех, у кого большая часть дня проходит в созвонах — продажи, интервью, саппорт, консалтинг."
body_en: |-
  # CallCoach — iOS live call assistant

  _In progress · 2026_
  Solo build · product, design, Swift

  ![](/assets/placeholders/callcoach.svg)CallCoach on iPhone — live transcript and suggested reply

  ### What it is

  CallCoach is a native iOS app that listens to your calls, transcribes them on-device, and suggests what to say next. It runs on Apple Intelligence, so the audio never leaves the phone. The goal is simple: if you take a lot of calls, you should end the day with structured notes, a search index across every conversation, and fewer "I forgot to ask" moments.

  ### Core loop

  - **Live transcript.** Speech-to-text runs in real time while the call is happening. Speaker turns are separated and time-stamped.
  - **Suggested replies.** A small local model watches the transcript and proposes the next line — framed as a question, a close, a clarification, or a polite exit.
  - **Post-call summary.** When the call ends, CallCoach produces a structured recap: key points, open questions, next actions, commitments made.
  - **Searchable memory.** Every call becomes a searchable, tagged record. You can ask "what did Amir say about the Marina listing last Tuesday" and get the relevant fragment.

  ### Why native

  I considered shipping this as a web app or a cross-platform wrapper. Neither works. Real-time transcription with low latency, background audio capture, and on-device models need first-class OS access. Swift + Apple Intelligence gives me that without a server bill and without sending customer calls to a third-party API.

  ### Design direction

  The interface is almost silent. During a live call, one sentence of suggested reply is visible; a waveform pulses underneath. Everything else — transcript, memory, settings — sits one tap away. The app should feel like a calm coach, not a co-pilot shouting instructions.

  ### Status

  Private beta. Used daily on my own calls. The next unlocks are multi-language transcription (EN + RU + AR), a Shortcuts integration for Siri, and a compact Mac companion that mirrors the live transcript to a second screen.
body_ru: |-
  # CallCoach — iOS-ассистент для звонков

  _В работе · 2026_
  Соло-билд · продукт, дизайн, Swift

  ![](/assets/placeholders/callcoach.svg)CallCoach на iPhone — живой транскрипт и подсказка ответа

  ### Что это

  CallCoach — нативное iOS-приложение, которое слушает ваши звонки, расшифровывает их прямо на устройстве и подсказывает, что сказать дальше. Работает на Apple Intelligence, поэтому аудио не покидает телефон. Идея простая: если у вас много созвонов, к концу дня у вас должны быть структурированные заметки, поиск по всем разговорам и меньше моментов «забыл спросить».

  ### Основной сценарий

  - **Живой транскрипт.** Speech-to-text идёт в реальном времени во время звонка. Реплики разделены по спикерам и таймкодам.
  - **Подсказки ответа.** Небольшая локальная модель наблюдает за транскриптом и предлагает следующую фразу — вопрос, клоуз, уточнение или вежливый выход.
  - **Пост-саммари.** После звонка CallCoach собирает структурированный отчёт: ключевые пункты, открытые вопросы, следующие шаги, договорённости.
  - **Поисковая память.** Каждый звонок превращается в размеченную запись с поиском. Можно спросить «что Амир говорил про листинг в Марине во вторник» и получить нужный фрагмент.

  ### Почему нативка

  Я рассматривал веб-приложение и кросс-платформенную обёртку — не подходит. Транскрипция в реальном времени с низкой задержкой, фоновый захват звука и on-device-модели требуют доступа на уровне ОС. Swift + Apple Intelligence даёт это без серверного счёта и без отправки клиентских звонков в сторонний API.

  ### Дизайн-направление

  Интерфейс почти молчит. Во время звонка видна одна строка подсказки, снизу пульсирует волна. Всё остальное — транскрипт, память, настройки — в одном тапе. Приложение должно ощущаться как спокойный коуч, а не как второй пилот, кричащий инструкции.

  ### Статус

  Закрытая бета. Ежедневно использую на своих звонках. Следующие шаги — мультиязычная транскрипция (EN + RU + AR), интеграция с Shortcuts для Siri и компактный Mac-компаньон, который показывает живой транскрипт на втором экране.
---
