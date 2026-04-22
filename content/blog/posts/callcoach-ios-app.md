---
{
  "kind": "post",
  "id": "callcoach-ios-app",
  "date": "2026-03-22",
  "source": {
    "kind": "ghost-export",
    "ru": "69e2d27e9e829e8410d5773d",
    "en": "69e2d27e9e829e8410d57744"
  },
  "published_at": {
    "ru": "2026-03-22 07:00:00",
    "en": "2026-03-22 07:00:00"
  },
  "created_at": {
    "ru": "2026-04-18 00:38:22",
    "en": "2026-04-18 00:38:22"
  },
  "updated_at": {
    "ru": "2026-04-21 06:51:56",
    "en": "2026-04-21 06:51:47"
  },
  "featured": false,
  "tags": [
    "ai-stream",
    "threshold-signals",
    "vibe-coding"
  ],
  "feature_image": "https://cdn.nevsky.me/content/images/2026/04/callcoach_cover.webp",
  "feature_image_alt": {
    "ru": "",
    "en": ""
  },
  "feature_image_caption": {
    "ru": "<span style=\"white-space: pre-wrap;\">Интерфейс приложения CallCoach и пример работы</span>",
    "en": "<span style=\"white-space: pre-wrap;\">CallCoach app interface and example of operation</span>"
  },
  "ru": {
    "slug": "callcoach-ios-app",
    "title": "CallCoach — приложение, которое я построил, потому что сам не понимал что мне говорят",
    "excerpt": "Когда звонишь британцу или индийцу в холодном звонке и вообще не понимаешь что он говорит — это проблема. Я решил её сам: написал приложение на Swift с Apple Intelligence, которое в реальном времени распознаёт речь и подсказывает, что ответить",
    "body": "<blockquote>Есть такой момент в холодном звонке — трубка уже поднята, человек говорит, ты киваешь. Но внутри тишина. Ни слова не понял.</blockquote><p>Особенно если на том конце британец с каким-то специфическим акцентом или индиец, который говорит очень быстро и очень уверенно. Оба варианта — моя реальность в первые недели работы брокером в Дубае.</p><p>Я дизайнер. Умею проектировать сложные системы. Понимаю продукт. Но телефонный разговор с незнакомым акцентом — это отдельный навык, и он не появляется от одного желания.</p><p>Можно было просто тренироваться и ждать. Я решил построить инструмент.</p><h3 id=\"%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-callcoach\">Что такое CallCoach</h3><p>Нативное iOS-приложение на Swift с Apple Intelligence и Live Translation.</p><p>Во время звонка оно в реальном времени распознаёт речь собеседника и показывает текст прямо на экране. Анализирует что он сказал. Предлагает подсказки — что ответить, как продолжить, какой вопрос задать.</p><figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp\" class=\"kg-image\" alt=\"\" loading=\"lazy\" width=\"2000\" height=\"1255\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_xcode.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_xcode.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_xcode.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp 2294w\" sizes=\"(min-width: 1200px) 1200px\"><figcaption><span style=\"white-space: pre-wrap;\">Приложение CallCoach внутри XCode для запуска эмулятора и тестов</span></figcaption></figure><p>Это не транскрипция ради транскрипции. Это скрипт-ассистент, который всплывает именно тогда, когда нужен — в живом разговоре, без задержки.</p><h3 id=\"%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-swift-%D0%B8-apple-intelligence\">Почему Swift и Apple Intelligence</h3><p>Мог взять любой веб-стек. Но веб не даёт нужной скорости и нативной интеграции с микрофоном и системными API.</p><p>Apple Intelligence — локальный языковой движок прямо на устройстве. Никаких запросов в облако, никакой задержки, никакой утечки данных разговора. Всё на телефоне.</p><p>Live Translation справляется с акцентированным английским с нужной точностью. Именно то, что нужно для мультинационального Дубая.</p><figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp\" class=\"kg-image\" alt=\"\" loading=\"lazy\" width=\"2000\" height=\"1255\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_codex.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_codex.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_codex.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp 2294w\" sizes=\"(min-width: 1200px) 1200px\"><figcaption><span style=\"white-space: pre-wrap;\">Работа с приложением внутри Codex – 5-ти часовое окно токенов закончилось, теперь ждем следующего</span></figcaption></figure><h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%83\">Как это изменило работу</h3><p>Когда видишь текст того, что говорит собеседник — тревога уходит. Перестаёшь тратить энергию на «что он сказал» и начинаешь думать про «что ответить».</p><p>Из режима выживания — в режим диалога. Принципиальный сдвиг.</p><p>Продолжаю развивать. Следующий шаг — база скриптов под разные сценарии: первый звонок, возражение, уточнение бюджета, договорённость о встрече. Подсказки, которые появляются не просто как транскрипция, а как умный контекстный ответ на конкретную фразу.</p><h3 id=\"%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%8F-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E\">Почему я это рассказываю</h3><p>CallCoach — пример того, как я думаю о продуктах.</p><p>Не «какую технологию попробовать», а «какую проблему решить». Проблема была конкретная и личная. Решение — нативное, быстрое, без лишних зависимостей.</p><p>Дизайнер, который умеет писать код — не разработчик. Но иногда именно это позволяет идее не умереть в очереди на реализацию.</p><h2 id=\"%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F\">Техническая реализация</h2><blockquote>С технической точки зрения CallCoach я собирал как реальный рабочий инструмент, а не как концепт.</blockquote><p>Сначала я проработал саму идею и архитектуру вместе с ChatGPT: сформулировал продуктовую задачу, пользовательский сценарий и подготовил большой стартовый промт для Codex, чтобы он создал базовый Swift-проект, поднял зависимости и собрал первый рабочий каркас приложения.</p><p>Когда окно токенов у Codex закончилось, я передал проект в Claude Code. Дальше основная «мясная» часть разработки шла уже там — с моделью Opus 4.7.</p><p>Она оказалась очень сильной именно на длинной инженерной дистанции: много думает, тратит много токенов, но зато хорошо держит архитектуру, аккуратно пишет связанный код и помогает доводить приложение до рабочего состояния.</p><p>После этого я уже регулярно переходил в Xcode: собирал билд, запускал тесты, ловил падения, возвращал ошибки обратно в Claude Code и вместе с ним фиксировал проблемные места. Часть правок вносил уже прямо внутри Xcode, где тоже подключал Codex и Claude как помощников по месту.</p><h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B0-%D0%BB%D0%BE%D0%B3%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F\">Как устроена логика приложения</h3><blockquote>Само приложение построено вокруг локальной обработки речи на устройстве.</blockquote><p>В обычном режиме CallCoach может слушать поток через микрофон и показывать живую транскрипцию. Но ключевым техническим решением стало разделение голосов.</p><p>Главная проблема была в том, что при звонке через динамики микрофон слышит и тебя, и собеседника одновременно. В результате транскрипция загрязняется обеими сторонами диалога и перестаёт быть полезной для коучинга.</p><p>Чтобы это решить, я сделал два режима работы.</p><h3 id=\"%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-1-%E2%80%94-system-audio\">Режим 1 — System Audio</h3><p>Это основной и рекомендуемый режим.</p><p>Через ScreenCaptureKit приложение захватывает системный аудиовыход, то есть только то, что уходит в динамики. Это позволяет транскрибировать именно голос собеседника, не захватывая мой собственный голос из микрофона.</p><p>Дополнительно используется флаг <code>excludesCurrentProcessAudio = true</code>, чтобы исключить звуки самого приложения.</p><p>При первом запуске macOS запрашивает разрешение на запись экрана — без этого системный захват аудио невозможен.</p><h3 id=\"%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-2-%E2%80%94-microphone-push-to-mute\">Режим 2 — Microphone + Push-to-Mute</h3><p>Это запасной сценарий.</p><p>В нём используется обычный захват с микрофона, но пока я говорю сам, можно зажать кнопку и временно не отправлять аудиобуферы в транскрибер.</p><p>То есть логика очень простая: говорю сам — удерживаю кнопку, закончил — отпустил, приложение снова слушает собеседника.</p><h3 id=\"%D1%87%D1%82%D0%BE-%D0%B1%D1%8B%D0%BB%D0%BE-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%BE-%D0%B2-%D0%BA%D0%BE%D0%B4%D0%B5\">Что было написано в коде</h3><p>Архитектурно приложение собрано из нескольких отдельных менеджеров, каждый из которых отвечает за свою часть пайплайна.</p><h4 id=\"audiocapturemanager\"><code>AudioCaptureManager</code></h4><p>Отвечает за захват звука через <code>AVAudioEngine</code>.</p><ul><li>использует <code>installTap</code> на <code>inputNode</code></li><li><code>startRecording()</code> возвращает <code>AsyncStream&lt;AVAudioPCMBuffer&gt;</code></li><li>поток буферов передаётся дальше без проблем с <code>actor crossing</code></li><li>параллельно считается уровень сигнала через RMS и dB metering</li><li>обновления UI отправляются на <code>@MainActor</code> через <code>Task</code></li></ul><h4 id=\"systemaudiocapturemanager\"><code>SystemAudioCaptureManager</code></h4><p>Это отдельный класс, который я добавил для захвата системного аудио через <code>SCStream</code>.</p><p>Именно он сделал возможным сценарий, где в транскрипцию попадает только голос собеседника из динамиков, а не весь акустический шум вокруг.</p><h4 id=\"transcriptionmanager\"><code>TranscriptionManager</code></h4><p>Этот слой принимает поток аудиобуферов и передаёт его в <code>SpeechAnalyzer</code> из Speech framework.</p><p>Дальше он итерирует <code>AsyncThrowingStream&lt;SpeechTranscriptionResult&gt;</code>, разделяет partial и final transcription и явно управляет переходами на <code>@MainActor</code>.</p><p>То есть это уже не просто «распознать звук», а аккуратно встроить потоковую транскрипцию в живой интерфейс.</p><h4 id=\"coachingengine\"><code>CoachingEngine</code></h4><p>Это отдельный слой логики, который превращает обычную транскрипцию в полезный разговорный инструмент.</p><ul><li><code>processNewTranscript(_:)</code> использует debounce на 1.5 секунды</li><li>предыдущий <code>Task</code> отменяется, если приходит новый кусок речи</li><li><code>LanguageModelSession</code> создаётся один раз на сессию и потом переиспользуется</li><li>история контекста сохраняется</li><li>парсер разбирает ответы в формате <code>[ТИП]: текст</code> с fallback на <code>.phrase</code></li><li>определяется этап разговора по ключевым словам</li><li>в модель отправляются последние примерно 300 слов, а не весь транскрипт целиком</li></ul><p>Отдельно я подмешивал контекст под рынок Дубая: <code>Emaar</code>, <code>DAMAC</code>, <code>Binghatti</code>, <code>ROI</code>, бронь, встреча, Zoom и другие характерные для разговора сигналы.</p><h4 id=\"contentview\"><code>ContentView</code></h4><p>Здесь всё связывается в пользовательский интерфейс.</p><ul><li><code>.task</code> запрашивает разрешение на микрофон при запуске</li><li><code>.onChange(segments.count)</code> триггерит <code>coach.processNewTranscript</code></li><li><code>toggleSession()</code> передаёт поток и формат в <code>startTranscription</code></li><li>ошибки менеджеров выводятся через отдельные <code>.onChange</code></li></ul><p>Именно этот слой делает всё ощущение приложения живым: переключение источника звука, запуск и остановка сессии, mute-логика, обработка ошибок и обновление подсказок в реальном времени.</p><h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8F-%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D0%BB-%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8\">Как я обучал подсказки</h3><p>Отдельно я подкармливал систему прикладным контекстом.</p><p>Для сценария холодных звонков использовал реальные sales scripts: приветствие, удержание разговора, базовая квалификация клиента, прояснение бюджета, работа с сомнениями и закрытие либо на встречу, либо на подробный Zoom.</p><p>Причём это были не абстрактные шаблоны из интернета, а логика, которой нас учили в агентстве SPI Dubai.</p><p>За счёт этого подсказки стали более прикладными. Не просто «ответь что-нибудь вежливое», а именно продолжение разговора в нужной структуре и на нужном этапе.</p><h3 id=\"%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B9-%E2%80%94-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B0\">Второй сценарий — собеседования на продуктового дизайнера</h3><p>Параллельно я сделал второе направление использования этого же подхода: прохождение собеседований на продуктового дизайнера.</p><p>Там я уже обучал систему на своих проектах, кейсах и портфолио, чтобы она помогала не в cold calling, а в другом типе разговора — когда тебе важно быстро, уверенно и структурно отвечать на вопросы о собственном опыте.</p><p>То есть по сути CallCoach стал не просто speech-to-text приложением, а универсальным conversational assistant, который можно адаптировать под конкретный сценарий общения.</p><h3 id=\"%D0%BA%D0%B0%D0%BA-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D0%B5%D0%BB-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8\">Как выглядел реальный процесс разработки</h3><p>И если совсем честно, для меня это ещё и важный пример того, как сегодня выглядит реальная продуктовая разработка.</p><p>Идея рождается из собственной боли.</p><p>Архитектура быстро собирается с помощью языковых моделей.</p><p>Тяжёлый код пишется в связке с агентами.</p><p>Финальная доводка происходит уже руками в Xcode — через сборки, падения, отладку и повторные итерации.</p><p>Не «магия нейросети», а нормальный инженерный процесс, просто ускоренный новыми инструментами.</p><hr><h2 id=\"changelog-%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D0%BB%D1%81%D1%8F-callcoach\">Changelog / как собирался CallCoach</h2><h3 id=\"1-%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8%D0%B4%D0%B5%D0%B8\">1. Формулировка идеи</h3><ul><li>Зафиксировал конкретную проблему: в холодных звонках с британскими и индийскими акцентами часть речи просто не успевает распознаваться на слух.</li><li>Определил задачу продукта: не просто транскрибировать разговор, а помогать вести его дальше.</li><li>Вместе с ChatGPT проработал концепцию, user flow и структуру будущего приложения.</li><li>Сгенерировал большой стартовый промт для Codex, чтобы быстро поднять каркас проекта на Swift.</li></ul><h3 id=\"2-%D0%BF%D0%B5%D1%80%D0%B2%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0\">2. Первичная сборка проекта</h3><ul><li>Codex создал базовый Swift-проект.</li><li>Были подняты основные зависимости.</li><li>Подготовлена базовая архитектура.</li><li>Собран первый runnable prototype.</li></ul><h3 id=\"3-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F\">3. Основная инженерная реализация</h3><ul><li>После исчерпания окна токенов Codex проект был передан в Claude Code.</li><li>Основная разработка продолжилась с использованием Opus 4.7.</li><li>Через Claude Code была собрана «мясная» часть приложения: захват аудио, транскрипция, коучинговая логика, связка с интерфейсом.</li></ul><h3 id=\"4-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%E2%80%94-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%B2\">4. Решение главной продуктовой проблемы — разделение голосов</h3><ul><li>Выявлена ключевая проблема: микрофон слышит и пользователя, и собеседника.</li><li>Реализованы два режима:<ul><li><strong>System Audio</strong> — захват только системного аудиовыхода через <code>ScreenCaptureKit</code></li><li><strong>Microphone + Push-to-Mute</strong> — fallback-режим с ручным отключением передачи буферов в транскрибер</li></ul></li><li>Добавлен <code>excludesCurrentProcessAudio = true</code>, чтобы исключить звуки самого приложения.</li></ul><h3 id=\"5-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B\">5. Реализованные компоненты</h3><ul><li><code><strong>SystemAudioCaptureManager.swift</strong></code> — новый класс для захвата системного аудио через <code>SCStream</code></li><li><code><strong>AudioCaptureManager.swift</strong></code> — захват звука через <code>AVAudioEngine</code>, добавлен <code>isMuted</code></li><li><code><strong>TranscriptionManager</strong></code> — потоковая транскрипция через <code>SpeechAnalyzer</code></li><li><strong><code>CoachingEngine</code></strong> — debounce, переиспользование сессии модели, разбор фраз, логика этапов звонка</li><li><strong><code>ContentView.swift</code></strong> — управление сессией, выбор источника аудио, ошибки, кнопки и интерфейс</li><li><strong><code>Info.plist</code></strong> — разрешения для системного захвата</li><li><code><strong>project.pbxproj</strong></code> — подключение <code>ScreenCaptureKit.framework</code></li></ul><h3 id=\"6-%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0-%D0%B8-%D1%82%D0%B5%D1%81%D1%82%D1%8B\">6. Отладка и тесты</h3><ul><li>Сборка и запуск шли через Xcode.</li><li>При каждом падении приложения ошибка возвращалась в Claude Code.</li><li>Исправления вносились итеративно: Xcode → crash/error → Claude Code → фикс → новая сборка.</li><li>Часть быстрых правок делалась уже прямо внутри Xcode с подключёнными Codex и Claude.</li></ul><h3 id=\"7-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B4-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8\">7. Обучение под реальные сценарии</h3><ul><li>Для cold calling в систему были добавлены реальные sales scripts:<ul><li>приветствие</li><li>обычный small talk</li><li>квалификация клиента</li><li>выявление интереса</li><li>закрытие на встречу или Zoom</li></ul></li><li>Скрипты опирались на реальную практику и обучение в SPI Dubai.</li><li>Параллельно создан второй сценарий использования: помощь при собеседованиях на роль продуктового дизайнера.</li><li>Для этого модель обучалась на моих проектах, кейсах и портфолио.</li></ul><h3 id=\"8-%D1%87%D1%82%D0%BE-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D0%BB%D0%BE%D1%81%D1%8C-%D0%B2-%D0%B8%D1%82%D0%BE%D0%B3%D0%B5\">8. Что получилось в итоге</h3><ul><li>локальная транскрипция без отправки данных в облако</li><li>realtime-подсказки по ходу разговора</li><li>отдельная логика для продаж и интервью</li><li>нативный стек без веб-костылей</li><li>рабочий продукт, собранный в связке ChatGPT + Codex + Claude Code + Xcode</li></ul>"
  },
  "en": {
    "slug": "callcoach-ios-app-en",
    "title": "CallCoach — the app I built because I couldn't understand what people were saying",
    "excerpt": "When you're making cold calls to British or Indian clients and can't understand a word they're saying — that's a real problem. I solved it myself: built a Swift app with Apple Intelligence that transcribes speech in real time and suggests what to say next.",
    "body": "<blockquote>There's a moment in a cold call when the other person is already talking and you're nodding along. But inside — silence. You didn't catch a word.</blockquote><p>Especially when it's a British accent you've never heard before, or an Indian client speaking fast and with absolute confidence. Both were my daily reality during my first weeks as a broker in Dubai.</p><p>I'm a designer. I can architect complex systems. I understand products. But a phone call with an unfamiliar accent is its own separate skill — and it doesn't appear just because you want it to.</p><p>I could have just practiced and waited. I decided to build a tool instead.</p><h3 id=\"what-callcoach-is\">What CallCoach is</h3><p>A native iOS app built in Swift with Apple Intelligence and Live Translation.</p><p>During a call, it works in real time: transcribes the other person's speech and shows the text directly on screen, analyses what they said, and suggests responses — what to say next, how to continue, which question to ask.</p><figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp\" class=\"kg-image\" alt=\"\" loading=\"lazy\" width=\"2000\" height=\"1255\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_xcode.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_xcode.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_xcode.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp 2294w\" sizes=\"(min-width: 1200px) 1200px\"><figcaption><span style=\"white-space: pre-wrap;\">CallCoach app inside Xcode to run emulator and tests</span></figcaption></figure><p>This isn't transcription for its own sake. It's a script assistant that appears exactly when you need it — in a live conversation, with no delay.</p><h3 id=\"why-swift-and-apple-intelligence\">Why Swift and Apple Intelligence</h3><p>I could have used any web stack. But web doesn't give the speed or the native integration with the microphone and system APIs that I needed.</p><p>Apple Intelligence is a powerful language engine running locally on the device. No cloud requests, no latency, no conversation data leaking anywhere. Everything happens on the phone.</p><p>Live Translation handles accented English with the accuracy I needed. Exactly right for multinational Dubai.</p><figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp\" class=\"kg-image\" alt=\"\" loading=\"lazy\" width=\"2000\" height=\"1255\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_codex.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_codex.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_codex.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp 2294w\" sizes=\"(min-width: 1200px) 1200px\"><figcaption><span style=\"white-space: pre-wrap;\">Working with the app inside Codex – the 5-hour token window has ended, now we wait for the next one</span></figcaption></figure><h3 id=\"how-it-changed-the-work\">How it changed the work</h3><p>When you can see the text of what the other person is saying — the anxiety disappears. You stop burning energy on \"what did he say\" and start thinking about \"what do I say next.\"</p><p>From survival mode to dialogue mode. That's a fundamental shift.</p><p>I'm still developing it. Next step: a script library for different scenarios — first call, objection handling, budget clarification, scheduling a meeting. Suggestions that appear not just as transcription, but as a smart contextual response to a specific phrase.</p><h3 id=\"why-im-sharing-this\">Why I'm sharing this</h3><p>CallCoach is an example of how I think about products.</p><p>Not \"what technology should I try\" but \"what problem needs solving.\" The problem was specific and personal. The solution — native, fast, no unnecessary dependencies.</p><p>A designer who can write code isn't a developer. But sometimes that's exactly what keeps an idea from dying in the implementation queue.</p><h2 id=\"technical-implementation\">Technical Implementation</h2><p>From a technical point of view, I built CallCoach as a real working tool, not as a concept.</p><p>I started by shaping the idea and the architecture together with ChatGPT: defining the product problem, mapping the user flow, and writing a long starter prompt for Codex so it could generate the base Swift project, set up dependencies, and assemble the first working skeleton of the app.</p><p>When my Codex token window ran out, I handed the project over to Claude Code. From that point on, most of the “heavy lifting” happened there, using Opus 4.7.</p><p>That model turned out to be especially strong over a long engineering distance: it thinks for a long time, consumes a lot of tokens, but it holds architecture well, writes connected code carefully, and helps move a project toward a real working state.</p><p>After that, I kept moving back into Xcode: building the app, running tests, catching crashes, sending error states back into Claude Code, and fixing issues together. Some changes I made directly inside Xcode as well, where I also connected both Codex and Claude as local assistants.</p><h3 id=\"how-the-app-works\">How the app works</h3><p>The app itself is built around on-device speech processing.</p><p>In the basic mode, CallCoach can listen through the microphone and display live transcription. But the key technical breakthrough was speaker separation.</p><p>The main problem was simple: when a call is on speaker, the microphone hears both voices — yours and the other person’s. That makes the transcript noisy and much less useful for coaching.</p><p>To solve that, I implemented two operating modes.</p><h3 id=\"mode-1-%E2%80%94-system-audio\">Mode 1 — System Audio</h3><p>This is the main and recommended mode.</p><p>Using ScreenCaptureKit, the app captures system audio output — in other words, only what is playing through the speakers. That makes it possible to transcribe the other person’s voice without capturing my own voice from the microphone.</p><p>It also uses the flag <code>excludesCurrentProcessAudio = true</code> to exclude sounds generated by CallCoach itself.</p><p>On first launch, macOS asks for Screen Recording permission, because system audio capture is not possible without it.</p><h3 id=\"mode-2-%E2%80%94-microphone-push-to-mute\">Mode 2 — Microphone + Push-to-Mute</h3><p>This is the fallback mode.</p><p>Here, the app uses ordinary microphone capture, but while I am speaking, I can hold a button that temporarily stops audio buffers from being sent into the transcriber.</p><p>The logic is very simple: when I speak, I hold the button; when I finish, I release it, and the app goes back to listening to the other side.</p><h3 id=\"what-was-implemented-in-code\">What was implemented in code</h3><p>Architecturally, the app is split into several managers, each responsible for a specific part of the pipeline.</p><h4 id=\"audiocapturemanager\"><code>AudioCaptureManager</code></h4><p>This component handles audio capture through <code>AVAudioEngine</code>.</p><ul><li>it uses <code>installTap</code> on <code>inputNode</code></li><li><code>startRecording()</code> returns <code>AsyncStream&lt;AVAudioPCMBuffer&gt;</code></li><li>audio buffers are passed downstream without actor-crossing issues</li><li>it also calculates signal level through RMS and dB metering</li><li>UI updates are posted onto <code>@MainActor</code> through <code>Task</code></li></ul><h4 id=\"systemaudiocapturemanager\"><code>SystemAudioCaptureManager</code></h4><p>This is a separate class I added for capturing system audio through <code>SCStream</code>.</p><p>This is the part that made it possible to build a mode where only the other person’s voice from the speakers enters the transcript, instead of all surrounding acoustic input.</p><h4 id=\"transcriptionmanager\"><code>TranscriptionManager</code></h4><p>This layer takes the audio buffer stream and passes it into <code>SpeechAnalyzer</code> from the Speech framework.</p><p>From there, it iterates over <code>AsyncThrowingStream&lt;SpeechTranscriptionResult&gt;</code>, separates partial and final transcription, and explicitly manages transitions onto <code>@MainActor</code>.</p><p>So this is no longer just “convert sound into text,” but a proper streaming transcription layer integrated into a live interface.</p><h4 id=\"coachingengine\"><code>CoachingEngine</code></h4><p>This is the logic layer that turns plain transcription into an actual conversational tool.</p><ul><li><code>processNewTranscript(_:)</code> uses a 1.5 second debounce</li><li>the previous <code>Task</code> is cancelled when a new piece of speech arrives</li><li><code>LanguageModelSession</code> is created once per session and then reused</li><li>conversational history is preserved</li><li>the parser reads outputs in the format <code>[TYPE]: text</code> with fallback to <code>.phrase</code></li><li>the current call stage is detected through keywords</li><li>only the last roughly 300 words are sent into the model instead of the full transcript</li></ul><p>I also injected domain context for the Dubai market: <code>Emaar</code>, <code>DAMAC</code>, <code>Binghatti</code>, <code>ROI</code>, reservation, meeting, Zoom, and other signals typical for that kind of conversation.</p><h4 id=\"contentview\"><code>ContentView</code></h4><p>This is where everything is wired into the user interface.</p><ul><li><code>.task</code> requests microphone permission on launch</li><li><code>.onChange(segments.count)</code> triggers <code>coach.processNewTranscript</code></li><li><code>toggleSession()</code> passes the stream and format into <code>startTranscription</code></li><li>manager errors are surfaced through separate <code>.onChange</code> handlers</li></ul><p>This is the layer that makes the app feel alive: switching audio sources, starting and stopping sessions, mute logic, error handling, and live updating suggestions.</p><h3 id=\"how-i-trained-the-suggestions\">How I trained the suggestions</h3><p>I also fed the system with applied context.</p><p>For the cold-calling scenario, I used real sales scripts: greeting, keeping the conversation going, basic qualification, budget clarification, handling hesitation, and closing either toward a meeting or a more detailed Zoom call.</p><p>These were not abstract internet templates. They were based on the logic we were taught at SPI Dubai.</p><p>That made the suggestions much more practical. Not just “say something polite,” but actual continuation of the conversation in the right structure and at the right stage.</p><h3 id=\"second-scenario-%E2%80%94-product-design-interviews\">Second scenario — product design interviews</h3><p>At the same time, I built a second use case on top of the same system: support during product designer interviews.</p><p>There, I trained the model on my own projects, case studies, and portfolio, so it could help not with cold calling, but with a different type of conversation — one where you need to answer quickly, confidently, and structurally about your own experience.</p><p>So in practice, CallCoach became not just a speech-to-text app, but a more universal conversational assistant that can be adapted to a specific communication scenario.</p><h3 id=\"what-the-actual-development-process-looked-like\">What the actual development process looked like</h3><p>And honestly, for me this is also a useful example of what real product development looks like today.</p><p>The idea starts from a personal pain point.</p><p>The architecture is assembled quickly with the help of language models.</p><p>The heavy code is written in collaboration with agentic tools.</p><p>The final polish happens by hand in Xcode — through builds, crashes, debugging, and repeated iterations.</p><p>Not “AI magic,” but a normal engineering process, just accelerated by new tools.</p><hr><h2 id=\"changelog-how-callcoach-was-built\">Changelog / how CallCoach was built</h2><h3 id=\"1-defining-the-idea\">1. Defining the idea</h3><ul><li>I identified a concrete problem: during cold calls with British and Indian accents, part of the speech was simply too hard to catch in real time.</li><li>I defined the product task: not just transcribe the conversation, but help carry it forward.</li><li>Together with ChatGPT, I worked through the concept, user flow, and future structure of the app.</li><li>I generated a long starter prompt for Codex so it could quickly scaffold the Swift project.</li></ul><h3 id=\"2-first-project-assembly\">2. First project assembly</h3><ul><li>Codex created the base Swift project.</li><li>Core dependencies were set up.</li><li>The base architecture was prepared.</li><li>The first runnable prototype was assembled.</li></ul><h3 id=\"3-main-engineering-implementation\">3. Main engineering implementation</h3><ul><li>After the Codex token window expired, the project was handed over to Claude Code.</li><li>Most of the implementation continued with Opus 4.7.</li><li>Claude Code built the main body of the app: audio capture, transcription, coaching logic, and interface wiring.</li></ul><h3 id=\"4-solving-the-main-product-problem-%E2%80%94-speaker-separation\">4. Solving the main product problem — speaker separation</h3><ul><li>The key issue was identified: the microphone hears both the user and the other person.</li><li>Two modes were implemented:<ul><li><strong>System Audio</strong> — capture only system audio output through <code>ScreenCaptureKit</code></li><li><strong>Microphone + Push-to-Mute</strong> — fallback mode with manual buffer suppression</li></ul></li><li><code>excludesCurrentProcessAudio = true</code> was added to exclude the app’s own sounds.</li></ul><h3 id=\"5-implemented-components\">5. Implemented components</h3><ul><li><code><strong>SystemAudioCaptureManager.swift</strong></code> — new class for system audio capture through <code>SCStream</code></li><li><code><strong>AudioCaptureManager.swift</strong></code> — audio capture through <code>AVAudioEngine</code>, with added <code>isMuted</code></li><li><code><strong>TranscriptionManager</strong></code> — streaming transcription via <code>SpeechAnalyzer</code></li><li><strong><code>CoachingEngine</code></strong> — debounce, reusable model session, phrase parsing, call-stage logic</li><li><strong><code>ContentView.swift</code></strong> — session control, audio source switching, error handling, buttons, and UI</li><li><strong><code>Info.plist</code></strong> — permissions for system capture</li><li><code><strong>project.pbxproj</strong></code> — <code>ScreenCaptureKit.framework</code> integration</li></ul><h3 id=\"6-debugging-and-testing\">6. Debugging and testing</h3><ul><li>Builds and runs were handled through Xcode.</li><li>Every time the app crashed, the error was sent back into Claude Code.</li><li>Fixes were done iteratively: Xcode → crash/error → Claude Code → fix → new build.</li><li>Some smaller changes were made directly inside Xcode with Codex and Claude connected there as well.</li></ul><h3 id=\"7-training-for-real-scenarios\">7. Training for real scenarios</h3><ul><li>For cold calling, the system was fed with real sales scripts:<ul><li>greeting</li><li>regular small talk</li><li>lead qualification</li><li>interest detection</li><li>closing toward a meeting or Zoom</li></ul></li><li>These scripts were based on actual training and practice at SPI Dubai.</li><li>In parallel, a second use case was added: support for product design interviews.</li><li>For that mode, the model was trained on my own projects, case studies, and portfolio.</li></ul><h3 id=\"8-what-came-out-in-the-end\">8. What came out in the end</h3><ul><li>on-device transcription without sending data to the cloud</li><li>real-time suggestions during live conversation</li><li>separate logic for sales calls and interviews</li><li>native stack without web-layer compromises</li><li>a working product built through a chain of ChatGPT + Codex + Claude Code + Xcode</li></ul>"
  },
  "segments": [
    {
      "kind": "text",
      "ru": "<blockquote>Есть такой момент в холодном звонке — трубка уже поднята, человек говорит, ты киваешь. Но внутри тишина. Ни слова не понял.</blockquote>",
      "en": "<blockquote>There's a moment in a cold call when the other person is already talking and you're nodding along. But inside — silence. You didn't catch a word.</blockquote>"
    },
    {
      "kind": "text",
      "ru": "<p>Особенно если на том конце британец с каким-то специфическим акцентом или индиец, который говорит очень быстро и очень уверенно. Оба варианта — моя реальность в первые недели работы брокером в Дубае.</p>",
      "en": "<p>Especially when it's a British accent you've never heard before, or an Indian client speaking fast and with absolute confidence. Both were my daily reality during my first weeks as a broker in Dubai.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Я дизайнер. Умею проектировать сложные системы. Понимаю продукт. Но телефонный разговор с незнакомым акцентом — это отдельный навык, и он не появляется от одного желания.</p>",
      "en": "<p>I'm a designer. I can architect complex systems. I understand products. But a phone call with an unfamiliar accent is its own separate skill — and it doesn't appear just because you want it to.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Можно было просто тренироваться и ждать. Я решил построить инструмент.</p>",
      "en": "<p>I could have just practiced and waited. I decided to build a tool instead.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-callcoach\">Что такое CallCoach</h3>",
      "en": "<h3 id=\"what-callcoach-is\">What CallCoach is</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Нативное iOS-приложение на Swift с Apple Intelligence и Live Translation.</p>",
      "en": "<p>A native iOS app built in Swift with Apple Intelligence and Live Translation.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Во время звонка оно в реальном времени распознаёт речь собеседника и показывает текст прямо на экране. Анализирует что он сказал. Предлагает подсказки — что ответить, как продолжить, какой вопрос задать.</p>",
      "en": "<p>During a call, it works in real time: transcribes the other person's speech and shows the text directly on screen, analyses what they said, and suggests responses — what to say next, how to continue, which question to ask.</p>"
    },
    {
      "kind": "image",
      "ru": "<figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1255\" loading=\"lazy\" sizes=\"(min-width: 1200px) 1200px\" src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_xcode.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_xcode.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_xcode.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp 2294w\" width=\"2000\"/><figcaption><span style=\"white-space: pre-wrap;\">Приложение CallCoach внутри XCode для запуска эмулятора и тестов</span></figcaption></figure>",
      "en": "<figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1255\" loading=\"lazy\" sizes=\"(min-width: 1200px) 1200px\" src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_xcode.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_xcode.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_xcode.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp 2294w\" width=\"2000\"/><figcaption><span style=\"white-space: pre-wrap;\">CallCoach app inside Xcode to run emulator and tests</span></figcaption></figure>",
      "src": "https://cdn.nevsky.me/content/images/2026/04/callcoach_xcode.webp",
      "caption": {
        "ru": "<span style=\"white-space: pre-wrap;\">Приложение CallCoach внутри XCode для запуска эмулятора и тестов</span>",
        "en": "<span style=\"white-space: pre-wrap;\">CallCoach app inside Xcode to run emulator and tests</span>"
      }
    },
    {
      "kind": "text",
      "ru": "<p>Это не транскрипция ради транскрипции. Это скрипт-ассистент, который всплывает именно тогда, когда нужен — в живом разговоре, без задержки.</p>",
      "en": "<p>This isn't transcription for its own sake. It's a script assistant that appears exactly when you need it — in a live conversation, with no delay.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-swift-%D0%B8-apple-intelligence\">Почему Swift и Apple Intelligence</h3>",
      "en": "<h3 id=\"why-swift-and-apple-intelligence\">Why Swift and Apple Intelligence</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Мог взять любой веб-стек. Но веб не даёт нужной скорости и нативной интеграции с микрофоном и системными API.</p>",
      "en": "<p>I could have used any web stack. But web doesn't give the speed or the native integration with the microphone and system APIs that I needed.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Apple Intelligence — локальный языковой движок прямо на устройстве. Никаких запросов в облако, никакой задержки, никакой утечки данных разговора. Всё на телефоне.</p>",
      "en": "<p>Apple Intelligence is a powerful language engine running locally on the device. No cloud requests, no latency, no conversation data leaking anywhere. Everything happens on the phone.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Live Translation справляется с акцентированным английским с нужной точностью. Именно то, что нужно для мультинационального Дубая.</p>",
      "en": "<p>Live Translation handles accented English with the accuracy I needed. Exactly right for multinational Dubai.</p>"
    },
    {
      "kind": "image",
      "ru": "<figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1255\" loading=\"lazy\" sizes=\"(min-width: 1200px) 1200px\" src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_codex.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_codex.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_codex.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp 2294w\" width=\"2000\"/><figcaption><span style=\"white-space: pre-wrap;\">Работа с приложением внутри Codex – 5-ти часовое окно токенов закончилось, теперь ждем следующего</span></figcaption></figure>",
      "en": "<figure class=\"kg-card kg-image-card kg-width-wide kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1255\" loading=\"lazy\" sizes=\"(min-width: 1200px) 1200px\" src=\"https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2026/04/callcoach_codex.webp 600w, https://cdn.nevsky.me/content/images/size/w1000/2026/04/callcoach_codex.webp 1000w, https://cdn.nevsky.me/content/images/size/w1600/2026/04/callcoach_codex.webp 1600w, https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp 2294w\" width=\"2000\"/><figcaption><span style=\"white-space: pre-wrap;\">Working with the app inside Codex – the 5-hour token window has ended, now we wait for the next one</span></figcaption></figure>",
      "src": "https://cdn.nevsky.me/content/images/2026/04/callcoach_codex.webp",
      "caption": {
        "ru": "<span style=\"white-space: pre-wrap;\">Работа с приложением внутри Codex – 5-ти часовое окно токенов закончилось, теперь ждем следующего</span>",
        "en": "<span style=\"white-space: pre-wrap;\">Working with the app inside Codex – the 5-hour token window has ended, now we wait for the next one</span>"
      }
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%83\">Как это изменило работу</h3>",
      "en": "<h3 id=\"how-it-changed-the-work\">How it changed the work</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Когда видишь текст того, что говорит собеседник — тревога уходит. Перестаёшь тратить энергию на «что он сказал» и начинаешь думать про «что ответить».</p>",
      "en": "<p>When you can see the text of what the other person is saying — the anxiety disappears. You stop burning energy on \"what did he say\" and start thinking about \"what do I say next.\"</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Из режима выживания — в режим диалога. Принципиальный сдвиг.</p>",
      "en": "<p>From survival mode to dialogue mode. That's a fundamental shift.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Продолжаю развивать. Следующий шаг — база скриптов под разные сценарии: первый звонок, возражение, уточнение бюджета, договорённость о встрече. Подсказки, которые появляются не просто как транскрипция, а как умный контекстный ответ на конкретную фразу.</p>",
      "en": "<p>I'm still developing it. Next step: a script library for different scenarios — first call, objection handling, budget clarification, scheduling a meeting. Suggestions that appear not just as transcription, but as a smart contextual response to a specific phrase.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%8F-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E\">Почему я это рассказываю</h3>",
      "en": "<h3 id=\"why-im-sharing-this\">Why I'm sharing this</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>CallCoach — пример того, как я думаю о продуктах.</p>",
      "en": "<p>CallCoach is an example of how I think about products.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Не «какую технологию попробовать», а «какую проблему решить». Проблема была конкретная и личная. Решение — нативное, быстрое, без лишних зависимостей.</p>",
      "en": "<p>Not \"what technology should I try\" but \"what problem needs solving.\" The problem was specific and personal. The solution — native, fast, no unnecessary dependencies.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Дизайнер, который умеет писать код — не разработчик. Но иногда именно это позволяет идее не умереть в очереди на реализацию.</p>",
      "en": "<p>A designer who can write code isn't a developer. But sometimes that's exactly what keeps an idea from dying in the implementation queue.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h2 id=\"%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F\">Техническая реализация</h2>",
      "en": "<h2 id=\"technical-implementation\">Technical Implementation</h2>"
    },
    {
      "kind": "text",
      "ru": "<blockquote>С технической точки зрения CallCoach я собирал как реальный рабочий инструмент, а не как концепт.</blockquote>",
      "en": "<p>From a technical point of view, I built CallCoach as a real working tool, not as a concept.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Сначала я проработал саму идею и архитектуру вместе с ChatGPT: сформулировал продуктовую задачу, пользовательский сценарий и подготовил большой стартовый промт для Codex, чтобы он создал базовый Swift-проект, поднял зависимости и собрал первый рабочий каркас приложения.</p>",
      "en": "<p>I started by shaping the idea and the architecture together with ChatGPT: defining the product problem, mapping the user flow, and writing a long starter prompt for Codex so it could generate the base Swift project, set up dependencies, and assemble the first working skeleton of the app.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Когда окно токенов у Codex закончилось, я передал проект в Claude Code. Дальше основная «мясная» часть разработки шла уже там — с моделью Opus 4.7.</p>",
      "en": "<p>When my Codex token window ran out, I handed the project over to Claude Code. From that point on, most of the “heavy lifting” happened there, using Opus 4.7.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Она оказалась очень сильной именно на длинной инженерной дистанции: много думает, тратит много токенов, но зато хорошо держит архитектуру, аккуратно пишет связанный код и помогает доводить приложение до рабочего состояния.</p>",
      "en": "<p>That model turned out to be especially strong over a long engineering distance: it thinks for a long time, consumes a lot of tokens, but it holds architecture well, writes connected code carefully, and helps move a project toward a real working state.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>После этого я уже регулярно переходил в Xcode: собирал билд, запускал тесты, ловил падения, возвращал ошибки обратно в Claude Code и вместе с ним фиксировал проблемные места. Часть правок вносил уже прямо внутри Xcode, где тоже подключал Codex и Claude как помощников по месту.</p>",
      "en": "<p>After that, I kept moving back into Xcode: building the app, running tests, catching crashes, sending error states back into Claude Code, and fixing issues together. Some changes I made directly inside Xcode as well, where I also connected both Codex and Claude as local assistants.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B0-%D0%BB%D0%BE%D0%B3%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F\">Как устроена логика приложения</h3>",
      "en": "<h3 id=\"how-the-app-works\">How the app works</h3>"
    },
    {
      "kind": "text",
      "ru": "<blockquote>Само приложение построено вокруг локальной обработки речи на устройстве.</blockquote>",
      "en": "<p>The app itself is built around on-device speech processing.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>В обычном режиме CallCoach может слушать поток через микрофон и показывать живую транскрипцию. Но ключевым техническим решением стало разделение голосов.</p>",
      "en": "<p>In the basic mode, CallCoach can listen through the microphone and display live transcription. But the key technical breakthrough was speaker separation.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Главная проблема была в том, что при звонке через динамики микрофон слышит и тебя, и собеседника одновременно. В результате транскрипция загрязняется обеими сторонами диалога и перестаёт быть полезной для коучинга.</p>",
      "en": "<p>The main problem was simple: when a call is on speaker, the microphone hears both voices — yours and the other person’s. That makes the transcript noisy and much less useful for coaching.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Чтобы это решить, я сделал два режима работы.</p>",
      "en": "<p>To solve that, I implemented two operating modes.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-1-%E2%80%94-system-audio\">Режим 1 — System Audio</h3>",
      "en": "<h3 id=\"mode-1-%E2%80%94-system-audio\">Mode 1 — System Audio</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Это основной и рекомендуемый режим.</p>",
      "en": "<p>This is the main and recommended mode.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Через ScreenCaptureKit приложение захватывает системный аудиовыход, то есть только то, что уходит в динамики. Это позволяет транскрибировать именно голос собеседника, не захватывая мой собственный голос из микрофона.</p>",
      "en": "<p>Using ScreenCaptureKit, the app captures system audio output — in other words, only what is playing through the speakers. That makes it possible to transcribe the other person’s voice without capturing my own voice from the microphone.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Дополнительно используется флаг <code>excludesCurrentProcessAudio = true</code>, чтобы исключить звуки самого приложения.</p>",
      "en": "<p>It also uses the flag <code>excludesCurrentProcessAudio = true</code> to exclude sounds generated by CallCoach itself.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>При первом запуске macOS запрашивает разрешение на запись экрана — без этого системный захват аудио невозможен.</p>",
      "en": "<p>On first launch, macOS asks for Screen Recording permission, because system audio capture is not possible without it.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-2-%E2%80%94-microphone-push-to-mute\">Режим 2 — Microphone + Push-to-Mute</h3>",
      "en": "<h3 id=\"mode-2-%E2%80%94-microphone-push-to-mute\">Mode 2 — Microphone + Push-to-Mute</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Это запасной сценарий.</p>",
      "en": "<p>This is the fallback mode.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>В нём используется обычный захват с микрофона, но пока я говорю сам, можно зажать кнопку и временно не отправлять аудиобуферы в транскрибер.</p>",
      "en": "<p>Here, the app uses ordinary microphone capture, but while I am speaking, I can hold a button that temporarily stops audio buffers from being sent into the transcriber.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>То есть логика очень простая: говорю сам — удерживаю кнопку, закончил — отпустил, приложение снова слушает собеседника.</p>",
      "en": "<p>The logic is very simple: when I speak, I hold the button; when I finish, I release it, and the app goes back to listening to the other side.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%87%D1%82%D0%BE-%D0%B1%D1%8B%D0%BB%D0%BE-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%BE-%D0%B2-%D0%BA%D0%BE%D0%B4%D0%B5\">Что было написано в коде</h3>",
      "en": "<h3 id=\"what-was-implemented-in-code\">What was implemented in code</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Архитектурно приложение собрано из нескольких отдельных менеджеров, каждый из которых отвечает за свою часть пайплайна.</p>",
      "en": "<p>Architecturally, the app is split into several managers, each responsible for a specific part of the pipeline.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h4 id=\"audiocapturemanager\"><code>AudioCaptureManager</code></h4>",
      "en": "<h4 id=\"audiocapturemanager\"><code>AudioCaptureManager</code></h4>"
    },
    {
      "kind": "text",
      "ru": "<p>Отвечает за захват звука через <code>AVAudioEngine</code>.</p>",
      "en": "<p>This component handles audio capture through <code>AVAudioEngine</code>.</p>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>использует <code>installTap</code> на <code>inputNode</code></li><li><code>startRecording()</code> возвращает <code>AsyncStream&lt;AVAudioPCMBuffer&gt;</code></li><li>поток буферов передаётся дальше без проблем с <code>actor crossing</code></li><li>параллельно считается уровень сигнала через RMS и dB metering</li><li>обновления UI отправляются на <code>@MainActor</code> через <code>Task</code></li></ul>",
      "en": "<ul><li>it uses <code>installTap</code> on <code>inputNode</code></li><li><code>startRecording()</code> returns <code>AsyncStream&lt;AVAudioPCMBuffer&gt;</code></li><li>audio buffers are passed downstream without actor-crossing issues</li><li>it also calculates signal level through RMS and dB metering</li><li>UI updates are posted onto <code>@MainActor</code> through <code>Task</code></li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h4 id=\"systemaudiocapturemanager\"><code>SystemAudioCaptureManager</code></h4>",
      "en": "<h4 id=\"systemaudiocapturemanager\"><code>SystemAudioCaptureManager</code></h4>"
    },
    {
      "kind": "text",
      "ru": "<p>Это отдельный класс, который я добавил для захвата системного аудио через <code>SCStream</code>.</p>",
      "en": "<p>This is a separate class I added for capturing system audio through <code>SCStream</code>.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Именно он сделал возможным сценарий, где в транскрипцию попадает только голос собеседника из динамиков, а не весь акустический шум вокруг.</p>",
      "en": "<p>This is the part that made it possible to build a mode where only the other person’s voice from the speakers enters the transcript, instead of all surrounding acoustic input.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h4 id=\"transcriptionmanager\"><code>TranscriptionManager</code></h4>",
      "en": "<h4 id=\"transcriptionmanager\"><code>TranscriptionManager</code></h4>"
    },
    {
      "kind": "text",
      "ru": "<p>Этот слой принимает поток аудиобуферов и передаёт его в <code>SpeechAnalyzer</code> из Speech framework.</p>",
      "en": "<p>This layer takes the audio buffer stream and passes it into <code>SpeechAnalyzer</code> from the Speech framework.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Дальше он итерирует <code>AsyncThrowingStream&lt;SpeechTranscriptionResult&gt;</code>, разделяет partial и final transcription и явно управляет переходами на <code>@MainActor</code>.</p>",
      "en": "<p>From there, it iterates over <code>AsyncThrowingStream&lt;SpeechTranscriptionResult&gt;</code>, separates partial and final transcription, and explicitly manages transitions onto <code>@MainActor</code>.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>То есть это уже не просто «распознать звук», а аккуратно встроить потоковую транскрипцию в живой интерфейс.</p>",
      "en": "<p>So this is no longer just “convert sound into text,” but a proper streaming transcription layer integrated into a live interface.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h4 id=\"coachingengine\"><code>CoachingEngine</code></h4>",
      "en": "<h4 id=\"coachingengine\"><code>CoachingEngine</code></h4>"
    },
    {
      "kind": "text",
      "ru": "<p>Это отдельный слой логики, который превращает обычную транскрипцию в полезный разговорный инструмент.</p>",
      "en": "<p>This is the logic layer that turns plain transcription into an actual conversational tool.</p>"
    },
    {
      "kind": "list",
      "ru": "<ul><li><code>processNewTranscript(_:)</code> использует debounce на 1.5 секунды</li><li>предыдущий <code>Task</code> отменяется, если приходит новый кусок речи</li><li><code>LanguageModelSession</code> создаётся один раз на сессию и потом переиспользуется</li><li>история контекста сохраняется</li><li>парсер разбирает ответы в формате <code>[ТИП]: текст</code> с fallback на <code>.phrase</code></li><li>определяется этап разговора по ключевым словам</li><li>в модель отправляются последние примерно 300 слов, а не весь транскрипт целиком</li></ul>",
      "en": "<ul><li><code>processNewTranscript(_:)</code> uses a 1.5 second debounce</li><li>the previous <code>Task</code> is cancelled when a new piece of speech arrives</li><li><code>LanguageModelSession</code> is created once per session and then reused</li><li>conversational history is preserved</li><li>the parser reads outputs in the format <code>[TYPE]: text</code> with fallback to <code>.phrase</code></li><li>the current call stage is detected through keywords</li><li>only the last roughly 300 words are sent into the model instead of the full transcript</li></ul>"
    },
    {
      "kind": "text",
      "ru": "<p>Отдельно я подмешивал контекст под рынок Дубая: <code>Emaar</code>, <code>DAMAC</code>, <code>Binghatti</code>, <code>ROI</code>, бронь, встреча, Zoom и другие характерные для разговора сигналы.</p>",
      "en": "<p>I also injected domain context for the Dubai market: <code>Emaar</code>, <code>DAMAC</code>, <code>Binghatti</code>, <code>ROI</code>, reservation, meeting, Zoom, and other signals typical for that kind of conversation.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h4 id=\"contentview\"><code>ContentView</code></h4>",
      "en": "<h4 id=\"contentview\"><code>ContentView</code></h4>"
    },
    {
      "kind": "text",
      "ru": "<p>Здесь всё связывается в пользовательский интерфейс.</p>",
      "en": "<p>This is where everything is wired into the user interface.</p>"
    },
    {
      "kind": "list",
      "ru": "<ul><li><code>.task</code> запрашивает разрешение на микрофон при запуске</li><li><code>.onChange(segments.count)</code> триггерит <code>coach.processNewTranscript</code></li><li><code>toggleSession()</code> передаёт поток и формат в <code>startTranscription</code></li><li>ошибки менеджеров выводятся через отдельные <code>.onChange</code></li></ul>",
      "en": "<ul><li><code>.task</code> requests microphone permission on launch</li><li><code>.onChange(segments.count)</code> triggers <code>coach.processNewTranscript</code></li><li><code>toggleSession()</code> passes the stream and format into <code>startTranscription</code></li><li>manager errors are surfaced through separate <code>.onChange</code> handlers</li></ul>"
    },
    {
      "kind": "text",
      "ru": "<p>Именно этот слой делает всё ощущение приложения живым: переключение источника звука, запуск и остановка сессии, mute-логика, обработка ошибок и обновление подсказок в реальном времени.</p>",
      "en": "<p>This is the layer that makes the app feel alive: switching audio sources, starting and stopping sessions, mute logic, error handling, and live updating suggestions.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8F-%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D0%BB-%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8\">Как я обучал подсказки</h3>",
      "en": "<h3 id=\"how-i-trained-the-suggestions\">How I trained the suggestions</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Отдельно я подкармливал систему прикладным контекстом.</p>",
      "en": "<p>I also fed the system with applied context.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Для сценария холодных звонков использовал реальные sales scripts: приветствие, удержание разговора, базовая квалификация клиента, прояснение бюджета, работа с сомнениями и закрытие либо на встречу, либо на подробный Zoom.</p>",
      "en": "<p>For the cold-calling scenario, I used real sales scripts: greeting, keeping the conversation going, basic qualification, budget clarification, handling hesitation, and closing either toward a meeting or a more detailed Zoom call.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Причём это были не абстрактные шаблоны из интернета, а логика, которой нас учили в агентстве SPI Dubai.</p>",
      "en": "<p>These were not abstract internet templates. They were based on the logic we were taught at SPI Dubai.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>За счёт этого подсказки стали более прикладными. Не просто «ответь что-нибудь вежливое», а именно продолжение разговора в нужной структуре и на нужном этапе.</p>",
      "en": "<p>That made the suggestions much more practical. Not just “say something polite,” but actual continuation of the conversation in the right structure and at the right stage.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B9-%E2%80%94-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B0\">Второй сценарий — собеседования на продуктового дизайнера</h3>",
      "en": "<h3 id=\"second-scenario-%E2%80%94-product-design-interviews\">Second scenario — product design interviews</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Параллельно я сделал второе направление использования этого же подхода: прохождение собеседований на продуктового дизайнера.</p>",
      "en": "<p>At the same time, I built a second use case on top of the same system: support during product designer interviews.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Там я уже обучал систему на своих проектах, кейсах и портфолио, чтобы она помогала не в cold calling, а в другом типе разговора — когда тебе важно быстро, уверенно и структурно отвечать на вопросы о собственном опыте.</p>",
      "en": "<p>There, I trained the model on my own projects, case studies, and portfolio, so it could help not with cold calling, but with a different type of conversation — one where you need to answer quickly, confidently, and structurally about your own experience.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>То есть по сути CallCoach стал не просто speech-to-text приложением, а универсальным conversational assistant, который можно адаптировать под конкретный сценарий общения.</p>",
      "en": "<p>So in practice, CallCoach became not just a speech-to-text app, but a more universal conversational assistant that can be adapted to a specific communication scenario.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BA%D0%B0%D0%BA-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D0%B5%D0%BB-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8\">Как выглядел реальный процесс разработки</h3>",
      "en": "<h3 id=\"what-the-actual-development-process-looked-like\">What the actual development process looked like</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>И если совсем честно, для меня это ещё и важный пример того, как сегодня выглядит реальная продуктовая разработка.</p>",
      "en": "<p>And honestly, for me this is also a useful example of what real product development looks like today.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Идея рождается из собственной боли.</p>",
      "en": "<p>The idea starts from a personal pain point.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Архитектура быстро собирается с помощью языковых моделей.</p>",
      "en": "<p>The architecture is assembled quickly with the help of language models.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Тяжёлый код пишется в связке с агентами.</p>",
      "en": "<p>The heavy code is written in collaboration with agentic tools.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Финальная доводка происходит уже руками в Xcode — через сборки, падения, отладку и повторные итерации.</p>",
      "en": "<p>The final polish happens by hand in Xcode — through builds, crashes, debugging, and repeated iterations.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Не «магия нейросети», а нормальный инженерный процесс, просто ускоренный новыми инструментами.</p>",
      "en": "<p>Not “AI magic,” but a normal engineering process, just accelerated by new tools.</p>"
    },
    {
      "kind": "separator",
      "ru": "<hr/>",
      "en": "<hr/>"
    },
    {
      "kind": "heading",
      "ru": "<h2 id=\"changelog-%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D0%BB%D1%81%D1%8F-callcoach\">Changelog / как собирался CallCoach</h2>",
      "en": "<h2 id=\"changelog-how-callcoach-was-built\">Changelog / how CallCoach was built</h2>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"1-%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8%D0%B4%D0%B5%D0%B8\">1. Формулировка идеи</h3>",
      "en": "<h3 id=\"1-defining-the-idea\">1. Defining the idea</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>Зафиксировал конкретную проблему: в холодных звонках с британскими и индийскими акцентами часть речи просто не успевает распознаваться на слух.</li><li>Определил задачу продукта: не просто транскрибировать разговор, а помогать вести его дальше.</li><li>Вместе с ChatGPT проработал концепцию, user flow и структуру будущего приложения.</li><li>Сгенерировал большой стартовый промт для Codex, чтобы быстро поднять каркас проекта на Swift.</li></ul>",
      "en": "<ul><li>I identified a concrete problem: during cold calls with British and Indian accents, part of the speech was simply too hard to catch in real time.</li><li>I defined the product task: not just transcribe the conversation, but help carry it forward.</li><li>Together with ChatGPT, I worked through the concept, user flow, and future structure of the app.</li><li>I generated a long starter prompt for Codex so it could quickly scaffold the Swift project.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"2-%D0%BF%D0%B5%D1%80%D0%B2%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0\">2. Первичная сборка проекта</h3>",
      "en": "<h3 id=\"2-first-project-assembly\">2. First project assembly</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>Codex создал базовый Swift-проект.</li><li>Были подняты основные зависимости.</li><li>Подготовлена базовая архитектура.</li><li>Собран первый runnable prototype.</li></ul>",
      "en": "<ul><li>Codex created the base Swift project.</li><li>Core dependencies were set up.</li><li>The base architecture was prepared.</li><li>The first runnable prototype was assembled.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"3-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F\">3. Основная инженерная реализация</h3>",
      "en": "<h3 id=\"3-main-engineering-implementation\">3. Main engineering implementation</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>После исчерпания окна токенов Codex проект был передан в Claude Code.</li><li>Основная разработка продолжилась с использованием Opus 4.7.</li><li>Через Claude Code была собрана «мясная» часть приложения: захват аудио, транскрипция, коучинговая логика, связка с интерфейсом.</li></ul>",
      "en": "<ul><li>After the Codex token window expired, the project was handed over to Claude Code.</li><li>Most of the implementation continued with Opus 4.7.</li><li>Claude Code built the main body of the app: audio capture, transcription, coaching logic, and interface wiring.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"4-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%E2%80%94-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%B2\">4. Решение главной продуктовой проблемы — разделение голосов</h3>",
      "en": "<h3 id=\"4-solving-the-main-product-problem-%E2%80%94-speaker-separation\">4. Solving the main product problem — speaker separation</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>Выявлена ключевая проблема: микрофон слышит и пользователя, и собеседника.</li><li>Реализованы два режима:<ul><li><strong>System Audio</strong> — захват только системного аудиовыхода через <code>ScreenCaptureKit</code></li><li><strong>Microphone + Push-to-Mute</strong> — fallback-режим с ручным отключением передачи буферов в транскрибер</li></ul></li><li>Добавлен <code>excludesCurrentProcessAudio = true</code>, чтобы исключить звуки самого приложения.</li></ul>",
      "en": "<ul><li>The key issue was identified: the microphone hears both the user and the other person.</li><li>Two modes were implemented:<ul><li><strong>System Audio</strong> — capture only system audio output through <code>ScreenCaptureKit</code></li><li><strong>Microphone + Push-to-Mute</strong> — fallback mode with manual buffer suppression</li></ul></li><li><code>excludesCurrentProcessAudio = true</code> was added to exclude the app’s own sounds.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"5-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B\">5. Реализованные компоненты</h3>",
      "en": "<h3 id=\"5-implemented-components\">5. Implemented components</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li><code><strong>SystemAudioCaptureManager.swift</strong></code> — новый класс для захвата системного аудио через <code>SCStream</code></li><li><code><strong>AudioCaptureManager.swift</strong></code> — захват звука через <code>AVAudioEngine</code>, добавлен <code>isMuted</code></li><li><code><strong>TranscriptionManager</strong></code> — потоковая транскрипция через <code>SpeechAnalyzer</code></li><li><strong><code>CoachingEngine</code></strong> — debounce, переиспользование сессии модели, разбор фраз, логика этапов звонка</li><li><strong><code>ContentView.swift</code></strong> — управление сессией, выбор источника аудио, ошибки, кнопки и интерфейс</li><li><strong><code>Info.plist</code></strong> — разрешения для системного захвата</li><li><code><strong>project.pbxproj</strong></code> — подключение <code>ScreenCaptureKit.framework</code></li></ul>",
      "en": "<ul><li><code><strong>SystemAudioCaptureManager.swift</strong></code> — new class for system audio capture through <code>SCStream</code></li><li><code><strong>AudioCaptureManager.swift</strong></code> — audio capture through <code>AVAudioEngine</code>, with added <code>isMuted</code></li><li><code><strong>TranscriptionManager</strong></code> — streaming transcription via <code>SpeechAnalyzer</code></li><li><strong><code>CoachingEngine</code></strong> — debounce, reusable model session, phrase parsing, call-stage logic</li><li><strong><code>ContentView.swift</code></strong> — session control, audio source switching, error handling, buttons, and UI</li><li><strong><code>Info.plist</code></strong> — permissions for system capture</li><li><code><strong>project.pbxproj</strong></code> — <code>ScreenCaptureKit.framework</code> integration</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"6-%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0-%D0%B8-%D1%82%D0%B5%D1%81%D1%82%D1%8B\">6. Отладка и тесты</h3>",
      "en": "<h3 id=\"6-debugging-and-testing\">6. Debugging and testing</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>Сборка и запуск шли через Xcode.</li><li>При каждом падении приложения ошибка возвращалась в Claude Code.</li><li>Исправления вносились итеративно: Xcode → crash/error → Claude Code → фикс → новая сборка.</li><li>Часть быстрых правок делалась уже прямо внутри Xcode с подключёнными Codex и Claude.</li></ul>",
      "en": "<ul><li>Builds and runs were handled through Xcode.</li><li>Every time the app crashed, the error was sent back into Claude Code.</li><li>Fixes were done iteratively: Xcode → crash/error → Claude Code → fix → new build.</li><li>Some smaller changes were made directly inside Xcode with Codex and Claude connected there as well.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"7-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B4-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8\">7. Обучение под реальные сценарии</h3>",
      "en": "<h3 id=\"7-training-for-real-scenarios\">7. Training for real scenarios</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>Для cold calling в систему были добавлены реальные sales scripts:<ul><li>приветствие</li><li>обычный small talk</li><li>квалификация клиента</li><li>выявление интереса</li><li>закрытие на встречу или Zoom</li></ul></li><li>Скрипты опирались на реальную практику и обучение в SPI Dubai.</li><li>Параллельно создан второй сценарий использования: помощь при собеседованиях на роль продуктового дизайнера.</li><li>Для этого модель обучалась на моих проектах, кейсах и портфолио.</li></ul>",
      "en": "<ul><li>For cold calling, the system was fed with real sales scripts:<ul><li>greeting</li><li>regular small talk</li><li>lead qualification</li><li>interest detection</li><li>closing toward a meeting or Zoom</li></ul></li><li>These scripts were based on actual training and practice at SPI Dubai.</li><li>In parallel, a second use case was added: support for product design interviews.</li><li>For that mode, the model was trained on my own projects, case studies, and portfolio.</li></ul>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"8-%D1%87%D1%82%D0%BE-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D0%BB%D0%BE%D1%81%D1%8C-%D0%B2-%D0%B8%D1%82%D0%BE%D0%B3%D0%B5\">8. Что получилось в итоге</h3>",
      "en": "<h3 id=\"8-what-came-out-in-the-end\">8. What came out in the end</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>локальная транскрипция без отправки данных в облако</li><li>realtime-подсказки по ходу разговора</li><li>отдельная логика для продаж и интервью</li><li>нативный стек без веб-костылей</li><li>рабочий продукт, собранный в связке ChatGPT + Codex + Claude Code + Xcode</li></ul>",
      "en": "<ul><li>on-device transcription without sending data to the cloud</li><li>real-time suggestions during live conversation</li><li>separate logic for sales calls and interviews</li><li>native stack without web-layer compromises</li><li>a working product built through a chain of ChatGPT + Codex + Claude Code + Xcode</li></ul>"
    }
  ]
}
---
