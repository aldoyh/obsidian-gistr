<div align="center" dir="rtl">
<h6>إضافة Obsidian.md</h6>
<h1>♾️ Gistr ♾️</h1>

<br />

<p>إضافة لـ Obsidian.md تتيح لك إنشاء وتحويل وتحديث الملاحظات من Obsidian إلى Github أو Opengist. بالإضافة إلى دمج مواقع الويب الكاملة الوظائف في ملاحظاتك.</p>

<br />

<img src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/106bcb32-6c6f-423c-a8c6-c6aee3d31c65" width="630">

<br />
<br />

</div>

<div align="center">

<!-- prettier-ignore-start -->
[![Version][github-version-img]][github-version-uri]
[![Build Status][github-build-img]][github-build-uri]
[![Downloads][github-downloads-img]][github-downloads-uri]
[![Size][github-size-img]][github-size-img]
[![Last Commit][github-commit-img]][github-commit-img]
[![Contributors][contribs-all-img]](#contributors-)
<!-- prettier-ignore-end -->

</div>

<br />

---

<br />

<div dir="rtl">

- [حول](#حول)
- [الميزات](#الميزات)
  - [الطرق:](#الطرق)
    - [الطريقة 1: كتلة التعليمات البرمجية](#الطريقة-1-كتلة-التعليمات-البرمجية)
    - [الطريقة 2: المتصفح المدمج](#الطريقة-2-المتصفح-المدمج)
  - [تحويل الملاحظة إلى Gist:](#تحويل-الملاحظة-إلى-gist)
- [الاستخدام](#الاستخدام)
  - [Github Gist](#github-gist)
  - [OpenGist](#opengist)
- [التثبيت](#التثبيت)
  - [يدوي](#يدوي)
  - [مدير إضافات BRAT](#مدير-إضافات-brat)
- [البناء](#البناء)
  - [Gistr](#gistr)
  - [التوثيق](#التوثيق)
- [OpenGist - كيف يعمل](#opengist---كيف-يعمل)
- [شكر وتقدير](#شكر-وتقدير)
  - [المساهمون ✨](#المساهمون-)

</div>

<br />

---

<br />

<div dir="rtl">

# حول
فيما يلي مخطط لما يمكن أن يقوم به Gistr من أجلك:

<br />

**الخدمات المدعومة**:
- [Github Gists](https://gist.github.com)
- [خادم OpenGist](https://github.com/thomiceli/opengist)
- _اعتبارًا من الإصدار v1.6.x_: أي موقع ويب

<br />

**الوظائف**:
- وضعان للتضمين: **وضع كتلة التعليمات البرمجية** و **وضع الموقع الإلكتروني**.
- (**وضع الموقع الإلكتروني**): قم بتضمين أي موقع ويب في ملاحظات Obsidian الخاصة بك. متصفح يعمل بكامل وظائفه مع القدرة على تسجيل الدخول إلى الحسابات والتنقل.
  - يمكن استخدامه لرسوم بيانية mermaid على Github / Gist
  - يتم تنشيطه بخاصية [raw](https://aetherinox.github.io/obsidian-gistr/usage/properties/#raw)
  - تدعم خاصية [raw](https://aetherinox.github.io/obsidian-gistr/usage/properties/#raw) القدرة على تحديد خصائص إضافية:
    - [zoom](https://aetherinox.github.io/obsidian-gistr/usage/properties/#property-zoom): تغيير حجم الموقع
    - [height](https://aetherinox.github.io/obsidian-gistr/usage/properties/#property-height): تغيير ارتفاع إطار الموقع
    - [css](https://aetherinox.github.io/obsidian-gistr/usage/properties/#property-css): تجاوز CSS الموجود على الموقع المضمن
- حفظ الملاحظات من Obsidian كـ gists عامة أو سرية
  - إعدادات الحفظ اليدوي والتلقائي متاحة
  - يتطلب [رمز الوصول الشخصي](https://github.com/settings/tokens?type=beta) من Github (مجاني).
    - [انقر هنا لقراءة تعليمات الإعداد](https://aetherinox.github.io/obsidian-gistr/settings/github/)
- ترقيم الأسطر وتمييز بناء الجملة
- فتح مقتطفات Github Gist أو Opengist المضمنة من ملاحظاتك في متصفح جهازك
- تصفية gists التي تحتوي على أكثر من ملف واحد
- تمكين / تعطيل التفاف النص وشريط التمرير الأفقي
- أداء سريع والتخزين المؤقت
- تخصيص كامل لكل جانب تقريبًا من الإضافة والمواقع التي تقوم بتضمينها

<br />

**المظاهر**:
- يتضمن مظاهر **فاتحة** و **داكنة** لـ Github و Opengist
- تخصيص الألوان الفردية من خلال إعدادات Gistr، أو استخدام تجاوز ورقة أنماط CSS
- شريط تمرير رفيع وقابل للتخصيص
- فرض أي مظهر على كل لصق gist فردي

<br />

---

<br />

# الميزات
يقدم هذا القسم شرحًا موجزًا لما يمكن أن يفعله Gistr. يرجى ملاحظة أن القائمة أدناه صغيرة جدًا ولا تغطي كل ما يمكن للإضافة القيام به. لعرض قائمة ميزات كاملة؛ اقرأ الوثائق:

- [المستندات: الاستخدام الأساسي](https://aetherinox.github.io/obsidian-gistr/usage/basic/)
- [المستندات: قائمة الخصائص](https://aetherinox.github.io/obsidian-gistr/usage/properties/)

<br />

## الطرق:
اعتبارًا من الإصدار `1.6.0`، يتضمن Gistr الآن **طريقتين** لدمج gists في ملاحظات obsidian.md الخاصة بك.

- الطريقة 1: [كتل التعليمات البرمجية](#الطريقة-1-كتلة-التعليمات-البرمجية)
- الطريقة 2: [المتصفح المدمج](#الطريقة-2-المتصفح-المدمج)

<br />

### الطريقة 1: كتلة التعليمات البرمجية
يعرض هذا الخيار gists في كتلة تعليمات برمجية مع أرقام الأسطر، ونص gist.

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/0670cb0c-56d7-4495-8ee2-9776ec9befca"></p>

<br /><br />

### الطريقة 2: المتصفح المدمج
يعرض هذا الخيار gists في بيئة شبيهة بالمتصفح. يتيح لك تسجيل الدخول إلى Github أو موقع Opengist الخاص بك وعرض / تحرير gists الخاصة بك.

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/a1104ae2-00b5-4835-97f5-9edd51f39f6e"></p>

<br />
<br />

## تحويل الملاحظة إلى Gist:
تتيح لك هذه الميزة أخذ الملاحظات في Obsidian vault الخاص بك وتحميلها كـ gists إلى Github أو Opengist.

<br />

بعد كتابة ملاحظتك في Obsidian، انقر بزر الماوس الأيمن في أي مكان في ملاحظتك واختر **حفظ Gist**، ثم اختر النوع: `عام` أو `سري`.

<br />

إذا كنت قد قمت بالفعل بتحميل ملاحظة Obsidian كـ gist، فيمكنك تحديث gist مباشرة من Obsidian. إما الحفظ يدويًا، أو السماح للإضافة بتحديث gist الخاص بك تلقائيًا كل x دقائق (يمكن تغييره في إعدادات الإضافة).

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/d787bb1c-1179-4293-bf67-d2bc3dbf0e5b"></p>

<br />

> [!NOTE]
>
> لتحويل ملاحظاتك إلى gists، يجب عليك التسجيل للحصول على [رمز وصول شخصي](https://github.com/settings/tokens?type=beta) على Github.

<br />

---

<br />

# الاستخدام
لتضمين مقتطف من Github أو OpenGist، أضف كتلة تعليمات برمجية جديدة:

<br />

## Github Gist

````shell
```gistr
url:    https://gist.github.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
````

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/062f2dc0-c14a-4d4f-a3e0-5358458a528a"></p>

<br />

يمكن لهذه الإضافة أيضًا جلب Gist يحتوي على ملاحظات متعددة في مجموعة واحدة. إذا كان gist الخاص بك يحتوي على ملفات متعددة، يمكنك استهداف ملاحظة معينة لعرضها باستخدام خاصية `file`:

````shell
```gistr
url:    https://gist.github.com/Aetherinox/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
file:   file1
```
````

<br />

إذا لم تستهدف ملفًا معينًا على gist يحتوي على ملفات متعددة، فسيتم عرض جميع الملفات التي لها نفس URL فوق بعضها البعض.

<br />

يمكنك إجبار gist فردي على استخدام مظهر معين. يمكنك اختيار المظهر `dark` أو `light`:

````shell
```gistr
url:    https://gist.github.com/Aetherinox/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
theme:  dark
```
````

<br />

<br />

## OpenGist
يعمل عرض gists من خادم OpenGist الخاص بك بطريقة مشابهة لـ Github. لعرض gists من OpenGist، أنشئ كتلة تعليمات برمجية جديدة وأضف رابط gist الخاص بك:

<br />

````shell
```gistr
url:    https://gist.yourdomain.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
````

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/3e396b9f-7b31-4e9c-8557-2d6276c9afaa"></p>

<br />

يمكنك إجبار gist فردي على استخدام مظهر معين. يمكنك اختيار المظهر `dark` أو `light`:

<br />

```shell
url:    https://gist.yourdomain.com/Username/Gist_ID
theme:  light
```

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/89283b6f-474c-40c5-b008-2966f506e9e1"></p>

<br />

لاستخدام Opengist، يجب عليك تثبيت البرنامج على نظامك كخدمة، أو يمكنك استئجار خادم ويب. لعرض عرض توضيحي لـ Opengist، بالإضافة إلى الوثائق الكاملة؛ قم بزيارة الروابط أدناه:

<br />

<div align="center">

[![OG-Demo](https://img.shields.io/badge/%20-%20جرب%20%20عرض%20OpenGist%20التوضيحي-%20%236c2368?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://demo.opengist.io/all)
[![OG-Download](https://img.shields.io/badge/%20-%20تنزيل%20OpenGist-%20%23de2343?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://github.com/thomiceli/opengist/releases)
[![OG-Docs](https://img.shields.io/badge/%20-%20عرض%20%20مستندات%20OpenGist-%20%23296ca7?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://github.com/thomiceli/opengist/blob/master/docs/index.md)

</div>

<br />

---

<br />

# التثبيت
توضح التعليمات التالية كيفية تثبيت هذه الإضافة لـ Obsidian.

<br />

## يدوي

- قم بتثبيت [Obsidian.md](obsidian.md/)
- انتقل إلى علامة تبويب [الإصدارات](https://github.com/Aetherinox/obsidian-gistr/releases) في هذا المستودع على Github، وقم بتنزيل الملفات المرتبطة:
  - `main.js`
  - `manifest.json`
  - `styles.css`
  - <small>تتضمن جميع الإصدارات أيضًا ملف `.zip` مع الملفات أعلاه.</small>

- حدد موقع مجلد إضافات Obsidian الخاص بك `X:\.obsidian\plugins`
- قم بإنشاء مجلد جديد في مجلد **الإضافات** يسمى `gistr`
- داخل المجلد الجديد، الصق الملفات التي قمت بتنزيلها من هذا المستودع على Github.

```
📂 .obsidian
   📂 plugins
      📂 gistr
         📄 main.js
         📄 manifest.json
         📄 styles.css
```
- قم بتشغيل Obsidian وانقر على أيقونة إعدادات الترس `⚙️`
- على اليسار، حدد **إضافات المجتمع**
- حدد موقع `Gistr` وقم بتمكينه. <img src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/3e512f8a-5c7d-4bff-a3e8-3ef88e673e72" data-canonical-src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/3e512f8a-5c7d-4bff-a3e8-3ef88e673e72" height=20px />

<br />
<br />

## مدير إضافات BRAT

يمكن أيضًا تثبيت الإضافة باستخدام إضافة [BRAT](https://github.com/TfTHacker/obsidian42-brat).
- قم بتثبيت [BRAT](https://github.com/TfTHacker/obsidian42-brat) باستخدام مدير إضافات Obsidian
- في إعدادات Obsidian الخاصة بك على اليسار، حدد **BRAT** في القائمة.
- في إعدادات BRAT، انقر على الزر **إضافة إضافة تجريبية**
- في مربع النص، قدم الرابط لهذا المستودع
  - `https://github.com/Aetherinox/obsidian-gistr`
- بمجرد تثبيت Gistr، قم بتنشيطه في إعدادات Obsidian الخاصة بك. <img src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/3e512f8a-5c7d-4bff-a3e8-3ef88e673e72" data-canonical-src="https://github.com/Aetherinox/obsidian-gistr/assets/118329232/3e512f8a-5c7d-4bff-a3e8-3ef88e673e72" height=20px />

<br />

---

<br />

# البناء
تعليمات لبناء جوانب مختلفة من Gistr:

<br />

## Gistr
للحصول على مجموعة مفصلة من التعليمات حول كيفية تنزيل الملفات المصدر لهذه الإضافة وتجميع نسختك الخاصة، راجع رابط الويكي أدناه:
- [كيفية بناء Gistr](https://aetherinox.github.io/obsidian-gistr/advanced/build/)

<br />

## التوثيق
يستخدم هذا المشروع [mkdocs]() للوثائق الخاصة به.

<br />

لتثبيت mkdocs والإضافات المطلوبة:
```shell ignore
pip install mkdocs
pip install mkdocs-material
pip install mike
pip install mkdocs-encryptcontent-plugin
pip install mkdocs-git-committers-plugin-2
pip install mkdocs-glightbox
pip install mkdocs-material
pip install mkdocs-redirects
pip install pymdown-extensions
pip install mkdocs-git-revision-date-localized-plugin
pip install mkdocs-git-authors-plugin
pip install mkdocs-exclude-search
pip install mkdocs-minify-plugin
```

<br />

انتقل إلى دليل `docs/`. 

```shell ignore
cd docs/
```

<br />

لبناء وثائق mkdocs الخاصة بك، اكتب:
```shell ignore
mkdocs build
```

<br />

لبدء mkdocs وخدمة الوثائق محليًا (إذا كنت لا تستخدم إضافة Mike)، قم بتشغيل
```shell ignore
mkdocs serve
```

<br />

أو يمكنك بدء mkdocs مع وسيطة `--clean`:
```shell ignore
mkdocs serve --clean
```

<br />

ستتمكن بعد ذلك من الوصول إلى وثائقك عن طريق فتح متصفحك والذهاب إلى:
```shell ignore
http://127.0.0.1:8000/
```

<br />

إذا كنت تستخدم إضافة **[Mike](https://github.com/jimporter/mike)**. تتيح لك إضافة Mike إدارة إصدارات متعددة من وثائق MkDocs الخاصة بك عبر Git  

```shell ignore
mike serve
```

<br />

للنشر مع Mike:
```shell ignore
mike deploy [version]
mike deploy [version] [alias]...
```

<br />

لعرض الإصدارات مع Mike:
```shell ignore
mike list
mike list [identifier]
```

<br />

لتعيين الإصدار الافتراضي لـ Mike:
```shell ignore
mike set-default [identifier]
```

<br />

تغيير عنوان الإصدار لـ Mike:
```shell ignore
mike retitle [identifier] [title]
```

<br />

---

<br />

# OpenGist - كيف يعمل
يشرح ما يلي الإجراء الكامن وراء هذه الإضافة و OpenGist.

اعتبارًا من الإصدار v1.6.0، يتضمن [OpenGist](https://github.com/thomiceli/opengist) ميزة تعمل بشكل كبير مثل Github. في كل مرة تقوم فيها بتحميل gist جديد إلى موقع OpenGist الخاص بك، يمكنك عرض هذا gist بشكل طبيعي عن طريق الانتقال إلى الرابط المرتبط:

```
https://gist.yourdomain.com/username/000abcdef1234567abcdef1234567abc
```

<br />

مع OpenGist، يمكنك الآن جلب معلومات `JSON` حول gist، وتضمين gist الخاص بك في برامج خارجية مثل Obsidian.md.

<br />

لعرض موجزات JSON و HTML و Javascript و CSS يدويًا لكل من OpenGists الخاصة بك، قم بإلحاق `.json` بنهاية الرابط الخاص بك:

```
https://gist.yourdomain.com/username/000abcdef1234567abcdef1234567abc.json
```

<br />

سيتم تقديمك بـ JSON الذي يحدد القيم المرتبطة بـ gist الذي تم إنشاؤه:

```json
{
  "created_at": "2023-09-24T00:00:000",
  "description": "Opengist Demo Paste",
  "embed": {
    "css": "https://gist.domain.com/assets/embed-abcde123.css",
    "html": "<div class=\"opengist-embed\" id=\"000abcdef1234567abcdef1234567abc\">\n    <div class=\"html \">\n    \n        <div class=\"rounded-md border-1 border-gray-100 dark:border-gray-800 overflow-auto mb-4\">\n            <div class=\"border-b-1 border-gray-100 dark:border-gray-700 text-xs p-2 pl-4 bg-gray-50 dark:bg-gray-800 text-gray-400\">\n                <a target=\"_blank\" href=\"https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc#file-demo\"><span class=\"font-bold text-gray-700 dark:text-gray-200\">Opengist Demo Paste</span> · 145 B · Text</a>\n                <span class=\"float-right\"><a target=\"_blank\" href=\"https://gist.domain.com\">Hosted via Opengist</a> · <span class=\"text-gray-700 dark:text-gray-200 font-bold\"><a target=\"_blank\" href=\"https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc/raw/HEAD/demo_file.md\">view raw</a></span></span>\n            </div>\n            \n            \n            \n            <div class=\"code dark:bg-gray-900\">\n            \n            \n                <table class=\"chroma table-code w-full whitespace-pre\" data-filename-slug=\"demo\" data-filename=\"demo\" style=\"font-size: 0.8em; border-spacing: 0; border-collapse: collapse;\">\n                    <tbody>\n                        \n                        \n                        <tr><td id=\"file-demo-1\" class=\"select-none line-num px-4\">1</td><td class=\"line-code\">Opengist Demo Paste\n</td></tr>\n                    </tbody>\n                </table>\n            \n            </div>\n            \n\n        </div>\n    \n    </div>\n</div>\n",
    "js": "https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc.js",
    "js_dark": "https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc.js?dark"
  },
  "files": [
    {
      "filename": "demo",
      "size": 743,
      "human_size": "145 B",
      "content": "Opengist Demo Paste",
      "truncated": false,
      "type": "Text"
    }
  ],
  "id": "000abcdef1234567abcdef1234567abc",
  "owner": "Username",
  "title": "Opengist Demo Paste",
  "uuid": "000abcdef1234567abcdef1234567abc",
  "visibility": "unlisted"
}
```

<br />

---

<br />

# شكر وتقدير
- [thomiceli](https://github.com/thomiceli) في [OpenGist](https://github.com/thomiceli/opengist) لتنفيذ طلب وظيفة JSON.
- [linjunpop](https://github.com/linjunpop) لتطوير أول إضافة Obsidian [Gist](https://github.com/linjunpop/obsidian-gist). كانت خيارًا أول في قائمة الإضافات المستخدمة لدي.

<br />

---

<br />

## المساهمون ✨
نحن دائمًا نبحث عن مساهمين. إذا شعرت أن بإمكانك تقديم شيء مفيد لـ Gistr، فنحن نحب مراجعة اقتراحك. قبل تقديم مساهمتك، يرجى مراجعة الموارد التالية:

- [إجراء طلب السحب](.github/PULL_REQUEST_TEMPLATE.md)
- [سياسة المساهم](CONTRIBUTING.md)

<br />

تريد المساعدة لكن لا تستطيع كتابة التعليمات البرمجية؟
- راجع [الأسئلة النشطة من مجتمعنا](https://github.com/Aetherinox/obsidian-gistr/labels/help%20wanted) وأجب على الأسئلة التي تعرفها.

<br />

![Alt](https://repobeats.axiom.co/api/embed/16df5621104abcb2d138159999114de4e95e0dfa.svg "Repobeats analytics image")

<br />

الأشخاص التاليون ساعدوا في تطوير هذا المشروع:

<br />

<div align="center">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Contributors][contribs-all-img]](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top"><a href="https://gitlab.com/Aetherinox"><img src="https://avatars.githubusercontent.com/u/118329232?v=4?s=40" width="80px;" alt="Aetherinox"/><br /><sub><b>Aetherinox</b></sub></a><br /><a href="https://github.com/Aetherinox/obsidian-gistr/commits?author=Aetherinox" title="Code">💻</a> <a href="#projectManagement-Aetherinox" title="Project Management">📆</a> <a href="#fundingFinding-Aetherinox" title="Funding Finding">🔍</a></td>
    </tr>
  </tbody>
</table>
</div>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<br />
<br />

</div>

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- BADGE > GENERAL -->
  [general-npmjs-uri]: https://npmjs.com
  [general-nodejs-uri]: https://nodejs.org
  [general-npmtrends-uri]: http://npmtrends.com/obsidian-gistr

<!-- BADGE > VERSION > GITHUB -->
  [github-version-img]: https://img.shields.io/github/v/tag/Aetherinox/obsidian-gistr?logo=GitHub&label=Version&color=ba5225
  [github-version-uri]: https://github.com/Aetherinox/obsidian-gistr/releases

<!-- BADGE > VERSION > NPMJS -->
  [npm-version-img]: https://img.shields.io/npm/v/obsidian-gistr?logo=npm&label=Version&color=ba5225
  [npm-version-uri]: https://npmjs.com/package/obsidian-gistr

<!-- BADGE > VERSION > PYPI -->
  [pypi-version-img]: https://img.shields.io/pypi/v/obsidian-gistr-plugin
  [pypi-version-uri]: https://pypi.org/project/obsidian-gistr-plugin/

<!-- BADGE > LICENSE > MIT -->
  [license-mit-img]: https://img.shields.io/badge/MIT-FFF?logo=creativecommons&logoColor=FFFFFF&label=License&color=9d29a0
  [license-mit-uri]: https://github.com/Aetherinox/obsidian-gistr/blob/main/LICENSE

<!-- BADGE > GITHUB > DOWNLOAD COUNT -->
  [github-downloads-img]: https://img.shields.io/github/downloads/Aetherinox/obsidian-gistr/total?logo=github&logoColor=FFFFFF&label=Downloads&color=376892
  [github-downloads-uri]: https://github.com/Aetherinox/obsidian-gistr/releases

<!-- BADGE > NPMJS > DOWNLOAD COUNT -->
  [npmjs-downloads-img]: https://img.shields.io/npm/dw/%40aetherinox%2Fmkdocs-link-embeds?logo=npm&&label=Downloads&color=376892
  [npmjs-downloads-uri]: https://npmjs.com/package/obsidian-gistr

<!-- BADGE > GITHUB > DOWNLOAD SIZE -->
  [github-size-img]: https://img.shields.io/github/repo-size/Aetherinox/obsidian-gistr?logo=github&label=Size&color=59702a
  [github-size-uri]: https://github.com/Aetherinox/obsidian-gistr/releases

<!-- BADGE > NPMJS > DOWNLOAD SIZE -->
  [npmjs-size-img]: https://img.shields.io/npm/unpacked-size/obsidian-gistr/latest?logo=npm&label=Size&color=59702a
  [npmjs-size-uri]: https://npmjs.com/package/obsidian-gistr

<!-- BADGE > CODECOV > COVERAGE -->
  [codecov-coverage-img]: https://img.shields.io/codecov/c/github/Aetherinox/obsidian-gistr?token=MPAVASGIOG&logo=codecov&logoColor=FFFFFF&label=Coverage&color=354b9e
  [codecov-coverage-uri]: https://codecov.io/github/Aetherinox/obsidian-gistr

<!-- BADGE > ALL CONTRIBUTORS -->
  [contribs-all-img]: https://img.shields.io/github/all-contributors/Aetherinox/obsidian-gistr?logo=contributorcovenant&color=de1f6f&label=contributors
  [contribs-all-uri]: https://github.com/all-contributors/all-contributors

<!-- BADGE > GITHUB > BUILD > NPM -->
  [github-build-img]: https://img.shields.io/github/actions/workflow/status/Aetherinox/obsidian-gistr/npm-release.yml?logo=github&logoColor=FFFFFF&label=Build&color=%23278b30
  [github-build-uri]: https://github.com/Aetherinox/obsidian-gistr/actions/workflows/npm-release.yml

<!-- BADGE > GITHUB > BUILD > Pypi -->
  [github-build-pypi-img]: https://img.shields.io/github/actions/workflow/status/Aetherinox/obsidian-gistr/release-pypi.yml?logo=github&logoColor=FFFFFF&label=Build&color=%23278b30
  [github-build-pypi-uri]: https://github.com/Aetherinox/obsidian-gistr/actions/workflows/pypi-release.yml

<!-- BADGE > GITHUB > TESTS -->
  [github-tests-img]: https://img.shields.io/github/actions/workflow/status/Aetherinox/obsidian-gistr/npm-tests.yml?logo=github&label=Tests&color=2c6488
  [github-tests-uri]: https://github.com/Aetherinox/obsidian-gistr/actions/workflows/npm-tests.yml

<!-- BADGE > GITHUB > COMMIT -->
  [github-commit-img]: https://img.shields.io/github/last-commit/Aetherinox/obsidian-gistr?logo=conventionalcommits&logoColor=FFFFFF&label=Last%20Commit&color=313131
  [github-commit-uri]: https://github.com/Aetherinox/obsidian-gistr/commits/main/

<!-- prettier-ignore-end -->
<!-- markdownlint-restore -->
