---
{
  "kind": "post",
  "id": "prototip-mobilnogho-prilozhieniia-dlia-keytom",
  "date": "2023-02-02",
  "source": {
    "kind": "ghost-export",
    "ru": "69b171296e5564436d20df0f",
    "en": "69df6f2075185f7b2320390b"
  },
  "published_at": {
    "ru": "2023-02-02 09:40:00",
    "en": "2023-02-02 09:40:00"
  },
  "created_at": {
    "ru": "2025-04-12 11:43:26",
    "en": "2026-04-15 10:57:36"
  },
  "updated_at": {
    "ru": "2026-04-01 11:31:06",
    "en": "2026-04-16 04:45:58"
  },
  "featured": false,
  "tags": [
    "d2q-studio",
    "design",
    "dubai",
    "framer"
  ],
  "feature_image": "https://cdn.nevsky.me/content/images/2025/04/b2515cd7-c803-4793-8fe9-d0b5e8a827b6.png",
  "feature_image_alt": {
    "ru": "",
    "en": ""
  },
  "feature_image_caption": {
    "ru": "<span style=\"white-space: pre-wrap;\">Дашборд приложения</span>",
    "en": "<span style=\"white-space: pre-wrap;\">Application dashboard</span>"
  },
  "author": {
    "id": "69b16d756e5564436d20dbd9",
    "slug": "alexander-nevsky",
    "name": "Александр Невский",
    "bio": "Проектирую вашу жизнь в Дубае. Real Estate Broker с бэкграундом дизайнера Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры",
    "profile_image": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky-2026-avatar.jpeg",
    "website": "https://nevsky.me",
    "location": "Дубай, ОАЭ",
    "socials": {
      "facebook": "nevskiy.alexander",
      "twitter": "@_nevskii_",
      "threads": "@nevsky_alexander",
      "bluesky": "nevskii.bsky.social",
      "mastodon": "mastodon.social/@d2q",
      "tiktok": "@nevsky.me",
      "youtube": "@alexander-nevsky",
      "instagram": "nevsky_alexander",
      "linkedin": ""
    }
  },
  "ru": {
    "slug": "prototip-mobilnogho-prilozhieniia-dlia-keytom",
    "title": "Прототип мобильного приложения для Keytom",
    "excerpt": "Прототип собрал сначало в Figma, но потом пересобрал в Webflow",
    "body": "<div class=\"kg-card kg-button-card kg-align-left\"><a class=\"kg-btn kg-btn-accent\" href=\"https://keytom-mobile-prototype-1.netlify.app/\">Ссылка на прототип в Webflow</a></div><h3 id=\"%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF%D0%B0\">Скринкаст прохождения с десктопа:</h3><figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"150\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/PZTIhoucdvc?feature=oembed\" title=\"Keytom Mobile App Prototype in Browser\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с десктопа</span></p></figcaption></figure><h3 id=\"%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0\">Скринкаст прохождения с телефона:</h3><figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"113\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/3v1IlHJc65E?feature=oembed\" title=\"Mobile App Prototype Screencast\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с телефона</span></p></figcaption></figure><h3 id=\"%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%B2-webflow\">Особенности сборки прототипа в Webflow</h3><ul><li>На каждый экран или шаг в прототипе сделана отдельная страница. Сначало хотел делать с помощью анимации и разделить прототип на крупные блоки и делать все мелкие стейты внутри одной страницы, например, менять слайды или с помощью анимации, но попробывал и очень запарился с этими анимациями.</li><li>По сути это мини-сайт, хотя страниц получилось достаточно много.</li><li>Все ссылки и переходы по ссылкам делал с помощью <strong>&lt; link rel=»prerender» href=»url»&gt; </strong>, чтобы браузер заранее закачивал эти страницы и переход получался бесшовный.</li><li>Для десктопа сделал просто типа экран мобилы по центру страницы и не стал заморачиваться с правильной пропорцией телефона. Но почти на всех разрешениях смотрится хорошо.</li><li>На телефоне прототип смотрится очень нативно, где мог сделал живые инпуты, сделал имитацию селектов, получилось прям огонь!</li></ul><figure class=\"kg-card kg-image-card kg-width-full kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1964\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/image-25.png\" width=\"3024\"/><figcaption><span style=\"white-space: pre-wrap;\">Прототип в оболочке Webflow</span></figcaption></figure><div class=\"kg-card kg-header-card kg-v2 kg-layout-split kg-width-full\" data-background-color=\"#000000\" style=\"background-color: #000000;\"><div class=\"kg-header-card-content\"><picture><img alt=\"\" class=\"kg-header-card-image\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/nevsky_hand.webp\"/></picture><div class=\"kg-header-card-text\"><h2 class=\"kg-header-card-heading\" data-text-color=\"#FFFFFF\" id=\"-\" style=\"color: #FFFFFF;\"><span style=\"white-space: pre-wrap;\">Нужен прототип? </span></h2><p class=\"kg-header-card-subheading\" data-text-color=\"#FFFFFF\" id=\"-highfidelity-nbsphinevskyme-nbsp-alexander_nevsky\" style=\"color: #FFFFFF;\"><span style=\"white-space: pre-wrap;\">Если вам для вашего бизнеса нужно запустить</span><b><strong style=\"white-space: pre-wrap;\">high-fidelity прототип</strong></b><span style=\"white-space: pre-wrap;\">мобильного или веб-приложения напишите мне на</span><a href=\"mailto:hi@nevsky.me\" target=\"_blank\"><span style=\"white-space: pre-wrap;\">hi@nevsky. me</span></a><span style=\"white-space: pre-wrap;\">или постучитесь в телеграмм</span><a href=\"https://t.me/alexander_nevsky\" target=\"_blank\"><span style=\"white-space: pre-wrap;\">@alexander_nevsky</span></a></p><a class=\"kg-header-card-button\" data-button-color=\"#ffffff\" data-button-text-color=\"#000000\" href=\"https://nevsky.me/connect\" style=\"background-color: #ffffff;color: #000000;\">Connect</a></div></div></div>"
  },
  "en": {
    "slug": "mobile-application-prototype-for-keytom",
    "title": "Mobile application prototype for Keytom",
    "excerpt": "The prototype was first assembled in Figma, but then rebuilt in Webflow",
    "body": "<div class=\"kg-card kg-button-card kg-align-left\"><a href=\"https://keytom-mobile-prototype-1.netlify.app/\" class=\"kg-btn kg-btn-accent\">Link to prototype in Webflow</a></div><h3 id=\"screencast-of-the-walkthrough-from-the-desktop\">Screencast of the walkthrough from the desktop:</h3><figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"150\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/PZTIhoucdvc?feature=oembed\" title=\"Keytom Mobile App Prototype in Browser\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from the desktop</span></p></figcaption></figure><h3 id=\"screencast-of-the-walkthrough-from-the-phone\">Screencast of the walkthrough from the phone:</h3><figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"113\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/3v1IlHJc65E?feature=oembed\" title=\"Mobile App Prototype Screencast\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from a phone</span></p></figcaption></figure><h3 id=\"features-of-building-a-prototype-in-webflow\">Features of building a prototype in Webflow</h3><ul><li>There is a separate page for each screen or step in the prototype. At first I wanted to do it using animation and divide the prototype into large blocks and do all the small states inside one page, for example, changing slides or using animation, but I tried it and got very tired of these animations.</li><li>In essence, this is a mini-site, although there are quite a lot of pages.</li><li>All links and links were made using <strong>&lt; link rel=»prerender» href=»url»&gt; </strong>so that the browser downloads these pages in advance and the transition is seamless.</li><li>For the desktop, I just made a mobile screen in the center of the page and didn’t bother with the correct proportion of the phone. But it looks good at almost all resolutions.</li><li>On the phone the prototype looks very native, where it could have made live inputs, made imitation of selects, the result was pure fire!</li></ul><figure class=\"kg-card kg-image-card kg-width-full kg-card-hascaption\"><img src=\"https://cdn.nevsky.me/content/images/2025/04/image-25.png\" class=\"kg-image\" alt=\"\" loading=\"lazy\" width=\"2000\" height=\"1299\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2025/04/image-25.png 600w, https://cdn.nevsky.me/content/images/size/w1000/2025/04/image-25.png 1000w, https://cdn.nevsky.me/content/images/size/w1600/2025/04/image-25.png 1600w, https://cdn.nevsky.me/content/images/2025/04/image-25.png 2000w\"><figcaption><span style=\"white-space: pre-wrap;\">Prototype in Webflow shell</span></figcaption></figure><div class=\"kg-card kg-header-card kg-v2 kg-layout-split kg-width-full \" style=\"background-color: #000000;\" data-background-color=\"#000000\">\n            \n            <div class=\"kg-header-card-content\">\n                \n            <picture><img class=\"kg-header-card-image\" src=\"https://cdn.nevsky.me/content/images/2025/04/nevsky_hand.webp\" loading=\"lazy\" alt=\"\"></picture>\n        \n                <div class=\"kg-header-card-text kg-align-center\">\n                    <h2 id=\"need-a-prototype-\" class=\"kg-header-card-heading\" style=\"color: #FFFFFF;\" data-text-color=\"#FFFFFF\">Need a prototype? </h2>\n                    <p id=\"if-you-need-to-launch-a-highfidelity-prototype-of-a-mobile-or-web-application-for-your-business-write-to-me-at-hinevsky-me-or-knock-on-telegram-alexander_nevsky\" class=\"kg-header-card-subheading\" style=\"color: #FFFFFF;\" data-text-color=\"#FFFFFF\">If you need to launch a high-fidelity prototype of a mobile or web application for your business, write to me at hi@nevsky. me or knock on telegram @alexander_nevsky</p>\n                    <a href=\"https://nevsky.me/connect\" class=\"kg-header-card-button \" style=\"background-color: #ffffff;color: #000000;\" data-button-color=\"#ffffff\" data-button-text-color=\"#000000\">Connect</a>\n                </div>\n            </div>\n        </div>"
  },
  "segments": [
    {
      "kind": "raw",
      "ru": "<div class=\"kg-card kg-button-card kg-align-left\"><a class=\"kg-btn kg-btn-accent\" href=\"https://keytom-mobile-prototype-1.netlify.app/\">Ссылка на прототип в Webflow</a></div>",
      "en": "<div class=\"kg-card kg-button-card kg-align-left\"><a class=\"kg-btn kg-btn-accent\" href=\"https://keytom-mobile-prototype-1.netlify.app/\">Link to prototype in Webflow</a></div>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF%D0%B0\">Скринкаст прохождения с десктопа:</h3>",
      "en": "<h3 id=\"screencast-of-the-walkthrough-from-the-desktop\">Screencast of the walkthrough from the desktop:</h3>"
    },
    {
      "kind": "embed",
      "ru": "<figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"150\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/PZTIhoucdvc?feature=oembed\" title=\"Keytom Mobile App Prototype in Browser\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с десктопа</span></p></figcaption></figure>",
      "en": "<figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"150\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/PZTIhoucdvc?feature=oembed\" title=\"Keytom Mobile App Prototype in Browser\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from the desktop</span></p></figcaption></figure>",
      "src": "https://www.youtube.com/embed/PZTIhoucdvc?feature=oembed",
      "caption": {
        "ru": "<p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с десктопа</span></p>",
        "en": "<p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from the desktop</span></p>"
      }
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D0%BA%D0%B0%D1%81%D1%82-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0\">Скринкаст прохождения с телефона:</h3>",
      "en": "<h3 id=\"screencast-of-the-walkthrough-from-the-phone\">Screencast of the walkthrough from the phone:</h3>"
    },
    {
      "kind": "embed",
      "ru": "<figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"113\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/3v1IlHJc65E?feature=oembed\" title=\"Mobile App Prototype Screencast\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с телефона</span></p></figcaption></figure>",
      "en": "<figure class=\"kg-card kg-embed-card kg-card-hascaption\"><iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" frameborder=\"0\" height=\"113\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/3v1IlHJc65E?feature=oembed\" title=\"Mobile App Prototype Screencast\" width=\"200\"></iframe><figcaption><p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from a phone</span></p></figcaption></figure>",
      "src": "https://www.youtube.com/embed/3v1IlHJc65E?feature=oembed",
      "caption": {
        "ru": "<p><span style=\"white-space: pre-wrap;\">Скринкаст прохождения прототипа с телефона</span></p>",
        "en": "<p><span style=\"white-space: pre-wrap;\">Screencast of the prototype walkthrough from a phone</span></p>"
      }
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%B2-webflow\">Особенности сборки прототипа в Webflow</h3>",
      "en": "<h3 id=\"features-of-building-a-prototype-in-webflow\">Features of building a prototype in Webflow</h3>"
    },
    {
      "kind": "list",
      "ru": "<ul><li>На каждый экран или шаг в прототипе сделана отдельная страница. Сначало хотел делать с помощью анимации и разделить прототип на крупные блоки и делать все мелкие стейты внутри одной страницы, например, менять слайды или с помощью анимации, но попробывал и очень запарился с этими анимациями.</li><li>По сути это мини-сайт, хотя страниц получилось достаточно много.</li><li>Все ссылки и переходы по ссылкам делал с помощью <strong>&lt; link rel=»prerender» href=»url»&gt; </strong>, чтобы браузер заранее закачивал эти страницы и переход получался бесшовный.</li><li>Для десктопа сделал просто типа экран мобилы по центру страницы и не стал заморачиваться с правильной пропорцией телефона. Но почти на всех разрешениях смотрится хорошо.</li><li>На телефоне прототип смотрится очень нативно, где мог сделал живые инпуты, сделал имитацию селектов, получилось прям огонь!</li></ul>",
      "en": "<ul><li>There is a separate page for each screen or step in the prototype. At first I wanted to do it using animation and divide the prototype into large blocks and do all the small states inside one page, for example, changing slides or using animation, but I tried it and got very tired of these animations.</li><li>In essence, this is a mini-site, although there are quite a lot of pages.</li><li>All links and links were made using <strong>&lt; link rel=»prerender» href=»url»&gt; </strong>so that the browser downloads these pages in advance and the transition is seamless.</li><li>For the desktop, I just made a mobile screen in the center of the page and didn’t bother with the correct proportion of the phone. But it looks good at almost all resolutions.</li><li>On the phone the prototype looks very native, where it could have made live inputs, made imitation of selects, the result was pure fire!</li></ul>"
    },
    {
      "kind": "image",
      "ru": "<figure class=\"kg-card kg-image-card kg-width-full kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1964\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/image-25.png\" width=\"3024\"/><figcaption><span style=\"white-space: pre-wrap;\">Прототип в оболочке Webflow</span></figcaption></figure>",
      "en": "<figure class=\"kg-card kg-image-card kg-width-full kg-card-hascaption\"><img alt=\"\" class=\"kg-image\" height=\"1299\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/image-25.png\" srcset=\"https://cdn.nevsky.me/content/images/size/w600/2025/04/image-25.png 600w, https://cdn.nevsky.me/content/images/size/w1000/2025/04/image-25.png 1000w, https://cdn.nevsky.me/content/images/size/w1600/2025/04/image-25.png 1600w, https://cdn.nevsky.me/content/images/2025/04/image-25.png 2000w\" width=\"2000\"/><figcaption><span style=\"white-space: pre-wrap;\">Prototype in Webflow shell</span></figcaption></figure>",
      "src": "https://cdn.nevsky.me/content/images/2025/04/image-25.png",
      "caption": {
        "ru": "<span style=\"white-space: pre-wrap;\">Прототип в оболочке Webflow</span>",
        "en": "<span style=\"white-space: pre-wrap;\">Prototype in Webflow shell</span>"
      }
    },
    {
      "kind": "raw",
      "ru": "<div class=\"kg-card kg-header-card kg-v2 kg-layout-split kg-width-full\" data-background-color=\"#000000\" style=\"background-color: #000000;\"><div class=\"kg-header-card-content\"><picture><img alt=\"\" class=\"kg-header-card-image\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/nevsky_hand.webp\"/></picture><div class=\"kg-header-card-text\"><h2 class=\"kg-header-card-heading\" data-text-color=\"#FFFFFF\" id=\"-\" style=\"color: #FFFFFF;\"><span style=\"white-space: pre-wrap;\">Нужен прототип? </span></h2><p class=\"kg-header-card-subheading\" data-text-color=\"#FFFFFF\" id=\"-highfidelity-nbsphinevskyme-nbsp-alexander_nevsky\" style=\"color: #FFFFFF;\"><span style=\"white-space: pre-wrap;\">Если вам для вашего бизнеса нужно запустить</span><b><strong style=\"white-space: pre-wrap;\">high-fidelity прототип</strong></b><span style=\"white-space: pre-wrap;\">мобильного или веб-приложения напишите мне на</span><a href=\"mailto:hi@nevsky.me\" target=\"_blank\"><span style=\"white-space: pre-wrap;\">hi@nevsky. me</span></a><span style=\"white-space: pre-wrap;\">или постучитесь в телеграмм</span><a href=\"https://t.me/alexander_nevsky\" target=\"_blank\"><span style=\"white-space: pre-wrap;\">@alexander_nevsky</span></a></p><a class=\"kg-header-card-button\" data-button-color=\"#ffffff\" data-button-text-color=\"#000000\" href=\"https://nevsky.me/connect\" style=\"background-color: #ffffff;color: #000000;\">Connect</a></div></div></div>",
      "en": "<div class=\"kg-card kg-header-card kg-v2 kg-layout-split kg-width-full\" data-background-color=\"#000000\" style=\"background-color: #000000;\">\n<div class=\"kg-header-card-content\">\n<picture><img alt=\"\" class=\"kg-header-card-image\" loading=\"lazy\" src=\"https://cdn.nevsky.me/content/images/2025/04/nevsky_hand.webp\"/></picture>\n<div class=\"kg-header-card-text kg-align-center\">\n<h2 class=\"kg-header-card-heading\" data-text-color=\"#FFFFFF\" id=\"need-a-prototype-\" style=\"color: #FFFFFF;\">Need a prototype? </h2>\n<p class=\"kg-header-card-subheading\" data-text-color=\"#FFFFFF\" id=\"if-you-need-to-launch-a-highfidelity-prototype-of-a-mobile-or-web-application-for-your-business-write-to-me-at-hinevsky-me-or-knock-on-telegram-alexander_nevsky\" style=\"color: #FFFFFF;\">If you need to launch a high-fidelity prototype of a mobile or web application for your business, write to me at hi@nevsky. me or knock on telegram @alexander_nevsky</p>\n<a class=\"kg-header-card-button\" data-button-color=\"#ffffff\" data-button-text-color=\"#000000\" href=\"https://nevsky.me/connect\" style=\"background-color: #ffffff;color: #000000;\">Connect</a>\n</div>\n</div>\n</div>"
    }
  ]
}
---
