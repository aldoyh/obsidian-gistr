/*
    @locale     : العربية (ar)
*/

export default
{

    /*
        Base entries - الإدخالات الأساسية
    */

    base_underdev_title:                        'ميزة قيد التطوير',
    base_underdev_msg:                          'أعمل حاليًا مع مطور OpenGist لإجراء تغييرات طفيفة على كيفية ظهور لصق OpenGist، بما في ذلك نقل زر "عرض الخام" إلى الأسفل حتى لا يتداخل مع زر التحرير في Obsidian.',
    base_opt_enabled:                           'مُفعَّل',
    base_opt_disabled:                          'مُعطَّل',
    base_theme_light:                           'فاتح',
    base_theme_dark:                            'داكن',
    base_time_am:                               'ص',
    base_time_pm:                               'م',
    base_component_reset:                       'إعادة تعيين إلى الافتراضي',
    base_debug_loading:                         'جاري تحميل {0} v{1} [ {2} ]',
    base_debug_updater_1:                       '{0} فحص التحديث',
    base_debug_updater_2:                       '{0} {1}',
    base_context_nofocus:                       'Obsidian لا يحتوي على التركيز، يرجى فتح ملف',
    base_reload_notice:                         'تم إعادة تحميل Gistr بنجاح',
    base_saturyn_define:                        'حاولت الإضافة تعريف البيانات أكثر من مرة',
    base_saturyn_obsidianver_notinitialized:    'لم يتم تعيين إصدار Obsidian. لم يتم تشغيل ()Env._Initialize.',
    base_saturyn_pluginmanifest_notinitialized: 'لم يتم تعيين بيان الإضافة. تأكد من تشغيل ()Env._Initialize.',
    base_promise_rejected:                      'تم رفض الوعد: {0}',
    base_ver_nofind:                            'تعذر جلب معلومات الإصدار: {0}',
    base_ver_nofetch:                           'فشل في جلب الإصدار ({0}): {1}',

    /*
        Context menu options - خيارات قائمة السياق
    */

    cfg_context_gist_public:                    'حفظ Gist (Github عام)',
    cfg_context_gist_secret:                    'حفظ Gist (Github سري)',
    cfg_context_gist_copy:                      'نسخ رابط Gist',
    cfg_context_gist_reload:                    'إعادة تحميل Gistr',

    /*
        Tab > Settings > Header - علامة التبويب > الإعدادات > الرأس
    */

    cfg_modal_desc:                             'يتيح لك Gistr تضمين gists مباشرة من Github و Opengist. يمكنك أيضًا تحويل ملاحظاتك إلى gists يمكن تحديثها يدويًا، أو مراقبتها بالحفظ التلقائي. للحصول على مجموعة مفصلة من الأمثلة، اعرض vault التجريبي في قسم الدعم أدناه.',
    cfg_modal_expand:                           'توسيع',

    /*
        Tab > Settings > General - علامة التبويب > الإعدادات > عام
    */

    cfg_tab_ge_title:                           'عام',
    cfg_tab_ge_header:                          'تؤثر هذه الإعدادات على جميع جوانب هذه الإضافة، بما في ذلك كل من Opengist و Github. إذا قمت بتغيير الكلمة المفتاحية المشغلة، تأكد من العودة عبر مقتطفات gist الموجودة لديك وتغيير الكلمة المفتاحية في الجزء العلوي من كل كتلة تعليمات برمجية؛ وإلا فلن تظهر gists المضمنة.',
    cfg_tab_sy_title:                           'حفظ ومزامنة Gist',
    cfg_tab_sy_header:                          'تسمح لك هذه الإعدادات بإنشاء gists من ملاحظاتك. سيتم تحميل محتويات ملاحظاتك مباشرة إلى Github تحت حساب موجود. يمكنك أيضًا اختيار إنشاء ملاحظات جديدة فقط، أو إدارة الجديدة والموجودة.',
    cfg_tab_og_title:                           'OpenGist',
    cfg_tab_og_header:                          'Opengist هو pastebin مستضاف ذاتيًا مدعوم بواسطة Git. يتم تخزين جميع المقتطفات في مستودع Git ويمكن قراءتها و/أو تعديلها باستخدام أوامر Git القياسية، أو من خلال واجهة الويب. إنه مشابه لـ GitHub Gist، ولكنه مفتوح المصدر ومستضاف ذاتيًا. يدعم OpenGist Windows و Linux و MacOS.',
    cfg_tab_gh_title:                           'Github',
    cfg_tab_gh_header:                          'تتيح لك Github Gists تخزين وتوزيع مقتطفات التعليمات البرمجية دون إعداد مستودع كامل. قم بتخزين مقتطفات مثل السلاسل النصية، وbash scripts، و markdown، والملفات النصية، وأجزاء البيانات الصغيرة الأخرى.',
    cfg_tab_po_title:                           'البوابة (المطور)',
    cfg_tab_po_header:                          'تعرض هذه الإعدادات البوابات المسجلة حاليًا لـ Gistr.',
    cfg_tab_sp_title:                           'الدعم',
    cfg_tab_ge_keyword_name:                    'الكلمة المفتاحية المشغلة',
    cfg_tab_ge_keyword_desc:                    'الكلمة التي سيتم استخدامها داخل كتل التعليمات البرمجية للتعيين كبوابة لعرض gists',
    cfg_tab_ge_theme_name:                      'المظهر',
    cfg_tab_ge_theme_desc:                      'يحدد هذا نظام الألوان الذي سيتم استخدامه لـ gists. ومع ذلك، يمكنك تخصيص الألوان في فئات Github و OpenGist أدناه.<br><br><b>ملاحظة:</b> عند تغيير هذا، ضع المؤشر في كتلة التعليمات البرمجية ثم اترك كتلة التعليمات البرمجية لتحديثها. يعمل التحديث التلقائي فقط في <span class="gistr-settings-elm-note">وضع القراءة</span>',
    cfg_tab_ge_wrap_name:                       'التفاف النص',
    cfg_tab_ge_wrap_desc:                       'إذا تم تمكينه، سيلتف النص إلى السطر التالي. إذا تم تعطيله، سترى شريط تمرير أفقي. هذا لا يشمل gists التي لا تحتوي على مسافات في أي مكان في النص.',
    cfg_tab_ge_noti_dur_name:                   'مدة الإشعار',
    cfg_tab_ge_noti_dur_desc:                   'المدة التي سيعرض فيها الإشعار (بالثواني). اضبط على <span class="gistr-settings-elm-important">0</span> للاحتفاظ بالإشعار حتى يرفضه المستخدم.',
    cfg_tab_ge_noti_update_name:                'تمكين إشعارات تحديث Gistr',
    cfg_tab_ge_noti_update_desc:                '<span class="gistr-settings-elm-note">مُفعَّل</span>: عند إطلاق Obsidian، ستحصل على إشعار إذا كان هناك إصدار جديد من Gistr متاح. يتضمن ذلك الإصدارات التجريبية غير المتاحة للجمهور بعد.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: لن تحصل على أي إشعارات تنبهك إلى تحديثات Gistr الجديدة. يجب عليك التحقق يدويًا أو استخدام مدقق الإضافات في Obsidian.<br><br><b>ملاحظة</b>: يتضمن هذا الإشعار بالتحديث الإصدارات التجريبية من Gistr. لا يتتبع محدث إضافات Obsidian التجريبية.',
    cfg_tab_ge_tog_enable_ribbon_debug_name:    'تمكين أيقونة التحديث',
    cfg_tab_ge_tog_enable_ribbon_debug_desc:    '<span class="gistr-settings-elm-note">مُفعَّل</span>: يضيف أيقونة خاصة إلى شريط الرأس العلوي الخاص بك والتي تتيح لك إجبار جميع gists المضمنة على التحديث.<br>هذا مفيد عند تعديل الألوان / الإعدادات لـ Gistr، حيث يتم تخزين جميع كتل التعليمات البرمجية مؤقتًا ولا تظهر التغييرات على الفور. سيقوم الزر المضاف إلى الشريط الخاص بك بإجبار تحديث جميع كتل التعليمات البرمجية وإظهار التغييرات الجديدة على الفور.',
    cfg_tab_ge_tog_enable_ribbon_debug_tip:     '',

    /*
        Tab > Settings > OpenGist - علامة التبويب > الإعدادات > OpenGist
    */

    cfg_tab_og_cb_light_name:                   'خلفية كتلة التعليمات البرمجية (فاتح)',
    cfg_tab_og_cb_light_desc:                   'اللون لخلفية كتلة التعليمات البرمجية في Opengist <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_og_cb_dark_name:                    'خلفية كتلة التعليمات البرمجية (داكن)',
    cfg_tab_og_cb_dark_desc:                    'اللون لخلفية كتلة التعليمات البرمجية في Opengist <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_og_sb_light_name:                   'مسار شريط التمرير (فاتح)',
    cfg_tab_og_sb_light_desc:                   'اللون لمسار شريط التمرير في Opengist <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_og_sb_dark_name:                    'مسار شريط التمرير (داكن)',
    cfg_tab_og_sb_dark_desc:                    'اللون لمسار شريط التمرير في Opengist <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_og_tx_light_name:                   'نص كتلة التعليمات البرمجية (فاتح)',
    cfg_tab_og_tx_light_desc:                   'اللون لنص كتلة التعليمات البرمجية <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_og_tx_dark_name:                    'نص كتلة التعليمات البرمجية (داكن)',
    cfg_tab_og_tx_dark_desc:                    'اللون لنص كتلة التعليمات البرمجية <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_og_opacity_name:                    'شفافية كتلة التعليمات البرمجية',
    cfg_tab_og_opacity_desc:                    'الشفافية الإجمالية لكتلة التعليمات البرمجية. لا تضبط هذا منخفضًا جدًا، وإلا ستكون كتل التعليمات البرمجية غير مرئية',
    cfg_tab_og_pad_top_name:                    'الحشو: أعلى',
    cfg_tab_og_pad_top_desc:                    'الحشو بين رأس كتلة التعليمات البرمجية gist والتعليمات البرمجية.',
    cfg_tab_og_pad_btm_name:                    'الحشو: أسفل',
    cfg_tab_og_pad_btm_desc:                    'الحشو بين كتلة التعليمات البرمجية gist وشريط التمرير السفلي.',
    cfg_tab_og_css_name:                        'CSS مخصص',
    cfg_tab_og_css_desc:                        'يتيح لك مربع النص هذا إدخال خصائص CSS مخصصة لتجاوز الألوان الموجودة.',
    cfg_tab_og_css_pholder:                     'الصق CSS هنا',

    /*
        Tab > Settings > Github - علامة التبويب > الإعدادات > Github
    */

    cfg_tab_gh_cb_light_name:                   'خلفية كتلة التعليمات البرمجية (فاتح)',
    cfg_tab_gh_cb_light_desc:                   'اللون لخلفية كتلة التعليمات البرمجية في Github <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_gh_cb_dark_name:                    'خلفية كتلة التعليمات البرمجية (داكن)',
    cfg_tab_gh_cb_dark_desc:                    'اللون لخلفية كتلة التعليمات البرمجية في Github <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_gh_sb_light_name:                   'مسار شريط التمرير (فاتح)',
    cfg_tab_gh_sb_light_desc:                   'اللون لمسار شريط التمرير في Github <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_gh_sb_dark_name:                    'مسار شريط التمرير (داكن)',
    cfg_tab_gh_sb_dark_desc:                    'اللون لمسار شريط التمرير في Github <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_gh_tx_light_name:                   'نص كتلة التعليمات البرمجية (فاتح)',
    cfg_tab_gh_tx_light_desc:                   'اللون لنص كتلة التعليمات البرمجية <span class="gistr-settings-lbl-theme-light">(المظهر الفاتح)</span>',
    cfg_tab_gh_tx_dark_name:                    'نص كتلة التعليمات البرمجية (داكن)',
    cfg_tab_gh_tx_dark_desc:                    'اللون لنص كتلة التعليمات البرمجية <span class="gistr-settings-lbl-theme-dark">(المظهر الداكن)</span>',
    cfg_tab_gh_opacity_name:                    'شفافية كتلة التعليمات البرمجية',
    cfg_tab_gh_opacity_desc:                    'الشفافية الإجمالية لكتلة التعليمات البرمجية. لا تضبط هذا منخفضًا جدًا، وإلا ستكون كتل التعليمات البرمجية غير مرئية',
    cfg_tab_gh_css_name:                        'CSS مخصص',
    cfg_tab_gh_css_desc:                        'يتيح لك مربع النص هذا إدخال خصائص CSS مخصصة لتجاوز الألوان الموجودة.',
    cfg_tab_gh_css_pholder:                     'الصق CSS هنا',
    cfg_tab_gh_pat_name:                        'رمز الوصول الشخصي',
    cfg_tab_gh_pat_desc:                        'رمز الوصول الشخصي (PAT) الذي تم إنشاؤه على Github.com والذي يسمح لك بكتابة gists من Obsidian vault الخاص بك إلى Github gist.',
    cfg_tab_gh_pat_pholder:                     'githubpat_XXXXXX',
    cfg_tab_gh_pat_btn_tip_state_show:          'إظهار الرمز',
    cfg_tab_gh_pat_btn_tip_state_hide:          'إخفاء الرمز',
    cfg_tab_gh_pat_desc_l1:                     'يسمح لك هذا الرمز بالمصادقة مع GitHub API.<br>إنشاء الرمز: <a href="https://github.com/settings/tokens?type=beta">هنا</a>',
    cfg_tab_gh_pat_desc_l2:                     'لكي يعمل هذا مع gists السرية، حدد <span class="gistr-settings-lbl-important">"جميع المستودعات"</span> أو <span class="gistr-settings-lbl-important">"تحديد المستودعات فقط"</span> من القائمة المنسدلة في صفحة رمز Github. يجب أن يكون للرمز الأذونات التالية على الأقل:',
    cfg_tab_gh_pat_perm_1:                      '<span class="gistr-settings-elm-li-title">أذونات الحساب ► Gists</span> <span class="gistr-settings-elm-li-perm">                                                                          قراءة وكتابة</span>',
    cfg_tab_gh_pat_perm_2:                      '<span class="gistr-settings-elm-li-title">أذونات المستودع ► Pull Requests</span> <span class="gistr-settings-elm-li-perm">                                      قراءة فقط</span>',
    cfg_tab_gh_pat_perm_3:                      '<span class="gistr-settings-elm-li-title">أذونات المستودع ► المحتويات</span> <span class="gistr-settings-elm-li-perm">                                                    قراءة فقط</span>',
    cfg_tab_gh_pat_perm_4:                      '<span class="gistr-settings-elm-li-title">أذونات المستودع ► المشكلات</span> <span class="gistr-settings-elm-li-perm">                                                              قراءة فقط</span>',
    cfg_tab_gh_pat_footer:                      'ستتحول أيقونة Github على اليمين إلى علامة اختيار عندما تقوم بإدخال رمز صالح.',
    cfg_tab_gh_pat_help:                        '<b>ما الغرض من هذا؟</b> <a href="https://aetherinox.github.io/obsidian-gistr/settings/github/">اقرأ المستندات</a>',
    cfg_tab_gh_pat_url_btn:                     'https://github.com/settings/tokens?type=beta',
    cfg_tab_gh_pat_ok_btn_tip:                  'رمز Github API صالح',
    cfg_tab_gh_pat_bad_btn_tip:                 'تم إدخال رمز Github API غير صالح\n\nانقر هنا لإنشاء واحد',
    cfg_tab_gh_pat_invalid_btn_tip:             'رمز Github API غير صالح، تأكد من كتابته بشكل صحيح\n\nانقر هنا لإنشاء واحد',
    cfg_tag_gh_pat_notice_msg_success:          'اكتشف Gistr رمز وصول شخصي صالح لـ Github تم حفظه',
    cfg_tag_gh_pat_notice_msg_cleared:          'تم مسح رمز الوصول الشخصي',
    cfg_tab_gh_pat_notice_type_fine:            'تم اكتشاف رمز Github دقيق الحبيبات',
    cfg_tab_gh_pat_notice_type_classic:         'تم اكتشاف رمز Github الكلاسيكي',

    /*
        Tab > Settings > Support - علامة التبويب > الإعدادات > الدعم
    */

    cfg_tab_su_desc:                            'الأزرار التالية مرتبطة بموارد مفيدة لهذه الإضافة.',
    cfg_tab_su_gs_name:                         'مقدمة',
    cfg_tab_su_gs_desc:                         'عرض مقدمة موجزة للبدء باستخدام هذه الإضافة',
    cfg_tab_su_gs_btn:                          'فتح',
    cfg_tab_su_repo_label:                      'مستودع Gistr',
    cfg_tab_su_repo_btn:                        'عرض',
    cfg_tab_su_doc_name:                        'وثائق Gistr',
    cfg_tab_su_doc_desc:                        'عرض الوثائق الرسمية لـ Gistr',
    cfg_tab_su_doc_btn:                         'عرض',
    cfg_tab_su_vault_label:                     'Gistr demo vault',
    cfg_tab_su_vault_btn:                       'عرض',
    cfg_tab_su_ogrepo_label:                    'OpenGist: تنزيل',
    cfg_tab_su_ogrepo_url:                      'https://github.com/thomiceli/opengist/releases',
    cfg_tab_su_ogrepo_btn:                      'عرض',
    cfg_tab_su_ogdocs_label:                    'OpenGist: المستندات',
    cfg_tab_su_ogdocs_url:                      'https://github.com/thomiceli/opengist/blob/master/docs/index.md',
    cfg_tab_su_ogdocs_btn:                      'عرض',
    cfg_tab_su_ogdemo_label:                    'OpenGist: التجريبي',
    cfg_tab_su_ogdemo_url:                      'https://demo.opengist.io',
    cfg_tab_su_ogdemo_btn:                      'عرض',
    cfg_tab_su_gist_label:                      'Github gist',
    cfg_tab_su_gist_url:                        'https://gist.github.com/',
    cfg_tab_su_gist_btn:                        'عرض',
    cfg_tab_su_ver_cur_name:                    'الإصدار الحالي',
    cfg_tab_su_ver_cur_desc:                    'الإصدار الحالي قيد التشغيل من Gistr',
    cfg_tab_su_guid_cur_name:                   'GUID',
    cfg_tab_su_guid_cur_desc:                   'إصدار إضافة Gistr',
    cfg_tab_su_guid_btn_tip:                    'نسخ إلى الحافظة',
    cfg_tab_su_guid_notice:                     'تم نسخ GUID لـ Gistr إلى الحافظة\n\n{0}',
    cfg_tab_su_uuid_cur_name:                   'UUID',
    cfg_tab_su_uuid_cur_desc:                   'معرف فريد لإصدار Gistr الحالي قيد التشغيل',
    cfg_tab_su_uuid_btn_tip:                    'نسخ إلى الحافظة',
    cfg_tab_su_uuid_notice:                     'تم نسخ UUID لإصدار Gistr إلى الحافظة\n\n{0}',
    cfg_tab_su_ver_stable:                      'أحدث إصدار مستقر ',
    cfg_tab_su_ver_beta:                        'أحدث إصدار تجريبي ',
    cfg_tab_su_ver_connection_issues:           'فشل الاتصال بالخادم',
    cfg_tab_su_ver_status_checking:             'التحقق من إصدار أحدث من Gistr',
    cfg_tab_su_ver_status_checking_btn_tip:     'التحقق من إصدار أحدث من Gistr',
    cfg_tab_su_ver_status_updated_btn_tip:      'أنت تستخدم أحدث إصدار من Gistr',
    cfg_tab_su_ver_status_new_stable_btn_tip:   'يتوفر إصدار مستقر أحدث من Gistr',
    cfg_tab_su_ver_status_new_beta_btn_tip:     'يتوفر إصدار تجريبي أحدث من Gistr',
    cfg_tab_su_ver_status_error_btn_tip:        'تعذر الاتصال بخادم gistr، إعادة المحاولة لاحقًا',

    /*
        Portal - البوابة
    */

    cfg_tab_po_create_name:                     'إنشاء بوابة',
    cfg_tab_po_create_desc:                     'إنشاء بوابة مسجلة جديدة',
    cfg_tab_po_create_btn:                      'إنشاء',
    cfg_tab_po_list_desc:                       'قائمة البوابات المسجلة:',
    cfg_tab_po_list_none_title:                 'لم يتم العثور على بوابات',
    cfg_tab_po_list_none_msg:                   'لا يمكن العثور على بوابات تم إنشاؤها. انقر فوق زر **إنشاء بوابة** في أعلى واجهة الإعدادات هذه لإنشاء أول بوابة لك',

    cfg_po_edit_url_name:                       'URL',
    cfg_po_edit_url_desc:                       'مسار URL المباشر الذي يؤدي إلى بوابة موقع الويب المخصص لك',
    cfg_po_edit_url_hold:                       'https://gist.github.com/username/XXXXXXXXX',

    cfg_po_edit_name_name:                      'الاسم',
    cfg_po_edit_name_desc:                      'الاسم المخصص لنافذة البوابة. يمكن استخدام هذا في كتلة تعليمات برمجية لاستدعاء اسم البوابة باستخدام بنية YAML.',
    cfg_po_edit_name_hold:                      'اسم البوابة',

    cfg_po_edit_icon_name:                      'الأيقونة',
    cfg_po_edit_icon_desc:                      'الأيقونة المعروضة في البوابة',
    cfg_po_edit_icon_hold:                      'اتركها فارغة للكشف التلقائي',

    cfg_po_edit_agent_name:                     'وكيل المستخدم',
    cfg_po_edit_agent_desc:                     'اتركها وشأنها إذا كنت غير متأكد مما تفعله',
    cfg_po_edit_agent_hold:                     'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0/HBpt3US8-18',

    cfg_po_edit_dock_name:                      'الإرساء / الموضع',
    cfg_po_edit_dock_desc:                      'تعيين الموضع للصفحة',

    cfg_po_edit_pin_name:                       'تثبيت في القائمة',
    cfg_po_edit_pin_desc:                       'إذا تم التمكين: سيتم تثبيت البوابة في الشريط الأيسر',

    cfg_po_edit_pkey_name:                      'مفتاح الملف الشخصي',
    cfg_po_edit_pkey_desc:                      'ستشارك البوابات التي لها نفس مفتاح الملف الشخصي ملفات تعريف الارتباط والتخزين',
    cfg_po_edit_pkey_hold:                      '',

    cfg_po_edit_zoom_name:                      'التكبير',
    cfg_po_edit_zoom_desc:                      'يسمح بتكبير أو تصغير صفحة الويب عند التحميل',

    cfg_po_edit_css_name:                       'CSS',
    cfg_po_edit_css_desc:                       'تجاوز CSS / ورقة الأنماط للنافذة',
    cfg_po_edit_css_hold:                       'لم يتم توفير CSS مخصص',

    cfg_po_edit_js_name:                        'JS',
    cfg_po_edit_js_desc:                        'تجاوز JS / javascript للنافذة',
    cfg_po_edit_js_hold:                        'لم يتم توفير Javascript مخصص',

    cfg_po_edit_advtoggle_name:                 'الإعدادات المتقدمة',
    cfg_po_edit_advtoggle_desc:                 'جعل خيارات القائمة المتقدمة تظهر',

    cfg_po_button_name:                         'إجراءات البوابة',
    cfg_po_button_desc:                         'حفظ أو تحديث الإعدادات للبوابات المكوّنة',
    cfg_po_button_opt_create:                   'إنشاء بوابة',
    cfg_po_button_opt_update:                   'تحديث البوابة',

    po_url_missing:                             'معامل url مفقود',
    po_notice_restart_obsidian:                 'سيدخل التغيير (التغييرات) حيز التنفيذ بعد إعادة تشغيل Obsidian',
    po_notice_portal_not_found:                 'لم يتم العثور على البوابة',

    /*
        Tab > Sync - علامة التبويب > المزامنة
    */

    cfg_tab_sy_list_save_showall_name:          'قائمة الحفظ: إظهار جميع عمليات الحفظ',
    cfg_tab_sy_list_save_showall_desc:          'يؤثر هذا الإعداد على كيفية عرض قائمة حفظ gist لـ gists المحفوظة.<br><br><span class="gistr-settings-elm-note">مُفعَّل</span>: عند حفظ gist موجود، سيعرض مربع الاقتراحات جميع عمليات الحفظ لتلك الملاحظة في نفس القائمة؛ كل من العامة والسرية.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: سيتم فصل عمليات حفظ gist العامة والسرية عند عرضها في قائمة حفظ gist الموجودة.',

    cfg_tab_sy_list_icon_name:                  'قائمة الحفظ: لون الأيقونة',
    cfg_tab_sy_list_icon_desc:                  'اللون للأيقونة في قائمة حفظ gist',

    cfg_tab_sy_list_datetime_name:              'قائمة الحفظ: تنسيق التاريخ والوقت',
    cfg_tab_sy_list_datetime_desc:              'يحدد التنسيق الذي سيظهر به التاريخ والوقت.<br>خيارات تنسيق التاريخ والوقت: <a href="https://aetherinox.github.io/obsidian-gistr/cheatsheets/datetime/">عرض هنا</a>',

    cfg_tab_sy_tog_enable_ribbon_name:          'تمكين أيقونات الشريط',
    cfg_tab_sy_tog_enable_ribbon_desc:          '<span class="gistr-settings-elm-note">مُفعَّل</span>: يضيف أيقونات <span class="gistr-settings-elm-note">حفظ Gist عام / سري</span> إلى الشريط الجانبي الأيسر في Obsidian.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: ستتمكن فقط من الوصول إلى خيارات قائمة الحفظ من <span class="gistr-settings-elm-note">قائمة النقر بزر الماوس الأيمن</span>، أو لوحة أوامر Obsidian',
    cfg_tab_sy_tog_enable_ribbon_tip:           '',

    cfg_tab_sy_tog_allow_gist_updates_name:     'السماح بتحديث gists',
    cfg_tab_sy_tog_allow_gist_updates_desc:     '<span class="gistr-settings-elm-note">مُفعَّل</span>: بعد إنشاء gist جديد في البداية، يمكن تحديث الملاحظة بمراجعات أحدث.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: يمكن فقط إنشاء Gists؛ لا يُسمح بالتحديثات.<br><br>لتحديث gist بعد تمكين هذا الإعداد، انقر بزر الماوس الأيمن على الملاحظة، أو افتح لوحة أوامر Obsidian وحدد <span class="gistr-settings-elm-note"><b>حفظ Gist</b></span>',
    cfg_tab_sy_tog_allow_gist_updates_tip:      '',

    cfg_tab_sy_tog_autosave_enable_name:        'تمكين الحفظ التلقائي',
    cfg_tab_sy_tog_autosave_enable_desc:        '<span class="gistr-settings-elm-note">مُفعَّل</span>: سيسمح هذا بتحديث gists بمجرد إنشائها. سيؤدي أيضًا إلى تمكين الحفظ التلقائي الذي سيكتشف التغييرات الجديدة ويدفعها.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: ستتمكن فقط من إنشاء gists يدويًا؛ لن يكون هناك طريقة لتحديثها.<br><br>إذا كنت ترغب في الاحتفاظ بهذا معطلاً، يمكنك إنشاء gists عن طريق النقر بزر الماوس الأيمن في الملاحظة واختيار <span class="gistr-settings-elm-note">حفظ Gist</span>. أو فتح لوحة الأوامر الخاصة بك واختيار خيار الحفظ من هناك.',
    cfg_tab_sy_tog_autosave_enable_tip:         '',

    cfg_tab_sy_tog_autosave_strict_name:        'تمكين الحفظ الصارم للحفظ التلقائي',
    cfg_tab_sy_tog_autosave_strict_desc:        '<span class="gistr-settings-elm-note">مُفعَّل</span>: سيتم حفظ ملاحظاتك في خدمة gist بدقة في الوقت المحدد كل <span class="gistr-settings-elm-note">{0} ثانية</span>، سواء كنت لا تزال تكتب أم لا.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: لن يبدأ الوقت حتى الحفظ حتى تنتهي من الكتابة في تلك الملاحظة. إذا استمررت في الكتابة، فلن يبدأ العد التنازلي للحفظ حتى يتم الضغط على المفتاح النهائي.<br><br>يمكن تعديل مدة الحفظ التلقائي أكثر في هذه الإعدادات.',
    cfg_tab_sy_tog_autosave_strict_tip:         '',

    cfg_tab_sy_tog_autosave_noti_name:          'تمكين إشعارات الحفظ التلقائي',
    cfg_tab_sy_tog_autosave_noti_desc:          'في كل مرة يتم فيها حفظ ملاحظتك تلقائيًا، سيظهر إشعار على الشاشة يُعلمك بالإجراء. يعمل هذا فقط إذا تم تمكين <span class="gistr-settings-elm-note">الحفظ التلقائي</span>.',
    cfg_tab_sy_tog_autosave_noti_tip:           '',

    cfg_tab_sy_num_save_dur_name:               'مدة الحفظ التلقائي',
    cfg_tab_sy_num_save_dur_desc:               'عدد المرات التي سينفذ فيها الحفظ التلقائي <span class="gistr-settings-elm-note">بالثواني</span>. اضبط هذا على مقدار عادل بحيث لا يتم تشغيل المكالمات بشكل مفرط إلى خادم gist API (Github أو OpenGist).<br><br>سيبدأ مؤقت العد التنازلي للحفظ بعد فترة وجيزة من توقفك عن الكتابة.<br><br>إذا كنت ترغب في تغيير هذا للحفظ بدقة كل <span class="gistr-settings-elm-note">{0} ثانية</span>، فقم بتمكين الإعداد <span class="gistr-settings-elm-note">الحفظ الصارم للحفظ التلقائي</span> الموجود أعلاه.',

    cfg_tab_sy_tog_inc_fm_name:                 'تضمين الواجهة الأمامية',
    cfg_tab_sy_tog_inc_fm_desc:                 'عند حفظ ملاحظة كـ gist جديد، ستتم إضافة الواجهة الأمامية إلى أعلى ملاحظتك مع معلومات حول gist.<br><br><span class="gistr-settings-elm-note">مُفعَّل</span>: ستُدرج الواجهة الأمامية المضافة إلى ملاحظاتك عندما يتم دفع ملاحظتك إلى خدمة gist.<br><br><span class="gistr-settings-elm-important">مُعطَّل</span>: سيتم تنظيف الملاحظة قبل دفعها إلى خدمة gist ولن تكون حقول الواجهة الأمامية موجودة في النسخة عبر الإنترنت.<br><br>يمكن العثور على الواجهة الأمامية في الجزء العلوي جدًا من كل ملاحظة، بين <span class="gistr-settings-elm-note"> `---` </span>',
    cfg_tab_sy_tog_inc_fm_tip:                  'تبدأ الواجهة الأمامية بثلاث شرطات `---`',

    /*
        Gists
    */

    gist_upload_req_allowupload:                'يجب تمكين "السماح برفع Gists" في إعدادات Gistr قبل أن تتمكن من استخدام هذا الأمر.',
    gist_upload_no_active_file:                 'لا يوجد ملف نشط. افتح ملاحظة في Obsidian قبل المتابعة.',
    gist_copy_fail_notagist:                    'لا يوجد URL للنسخ. يجب عليك تحويل ملاحظتك إلى gist أولاً.',
    gist_copy_success_file:                     `تم نسخ رابط {0} إلى حافظتك`,
    gist_copy_success:                          'تم نسخ رابط gist إلى الحافظة.',
    gist_upload_fail_api:                       'خطأ في GitHub API: {0}',
    gist_upload_success:                        'تم تحديث الملف {0} بنجاح إلى خدمة gist الخاصة بك.',
    gist_status_operational_raw:                'تشغيلي',
    gist_status_connecting:                     'جاري الاتصال ...',
    gist_status_connected:                      'متصل بـ API ...',
    gist_status_no_api:                         'رمز Github مفقود، لا يوجد اتصال',
    gist_status_no_api_btn_tip:                 'يجب عليك إنشاء وتحديد رمز Github API.\n\nإلغاء الاتصال',
    gist_status_noconnection:                   'فشل الاتصال بـ Github',
    gist_status_degraded_performance:           'أداء متدهور',
    gist_status_partial_outage:                 'انقطاع جزئي',
    gist_status_major_outage:                   'انقطاع كبير',
    gist_status_issues:                         'مشاكل الخدمة',
    gist_status_connecting_btn_tip:             'الاتصال بـ Github ...',
    gist_status_success_btn_tip:                'متصل بـ Github API',
    gist_status_issues_btn_tip:                 'يواجه Github API حاليًا مشاكل\n\nانقر لعرض التفاصيل.',
    gist_btn_create_new:                        'إنشاء Gist جديد',
    gist_not_found:                             `تعذر تحديد موقع Gist المحدد. هل ربما قمت بحذفه من Github؟\n\nلتحديث هذه الملاحظة كـ gist جديد، قم بإزالة نص الواجهة الأمامية في أعلى الملاحظة.`,

    /*
        Getting Started - البدء
    */

    gs_base_header:                             'تتيح لك هذه الإضافة دمج كل من OpenGist و Github Gist pastes داخل ملاحظات Obsidian الخاصة بك. لاستخدام هذه الإضافة، يمكنك إما إنشاء Github gist جديد، أو إعداد خادم OpenGist الخاص بك. OpenGist مجاني، ويستغرق دقائق فقط للتكوين.',
    gs_og_btn_repo:                             'تنزيل OpenGist',
    gs_og_btn_docs:                             'مستندات OpenGist',
    gs_og_sub_1:                                'بمجرد تثبيت وإعداد OpenGist، يمكنك تسجيل الدخول إلى موقع OpenGist الخاص بك وإنشاء أول Gist الخاص بك. بعد إنشاء Gist الخاص بك، ارجع إلى عقدة Obsidian الخاصة بك، وقم بدمج Gist الخاص بك في ملاحظتك باستخدام تعليمات برمجية مشابهة لما يلي:',
    gs_og_name:                                 'تكامل OpenGist',
    gs_og_desc:                                 'يدعم OpenGist Windows و Linux و MacOS و Docker. لتنزيل وإعداد OpenGist، انقر أدناه.',
    gs_gh_name:                                 'تكامل Github',
    gs_gh_desc:                                 'للصق Github Gist في ملاحظتك، استخدم أمرًا مشابهًا للأمثلة التالية:',
    gs_btn_settings_open:                       'فتح الإعدادات',
    gs_btn_close:                               'إغلاق',

    /*
        Github
    */

    gh_status_error_api:                        'خطأ في Github API: {0}',

    /*
        Version Updates - تحديثات الإصدار
    */

    ver_update_stable:                          'يتوفر تحديث لإضافة Gistr. قم بالتحديث لتجربة أحدث الميزات!',
    ver_update_stable_dn_title:                 '{0} تحديث متاح ► مستقر',
    ver_update_stable_dn_msg:                   'إصدار مستقر جديد متاح لإضافة Gistr.\n\n{0} ► {1}',
    ver_update_beta:                            'يتوفر إصدار تجريبي جديد لإضافة Gistr. قم بالتحديث لتجربة أحدث الميزات القادمة إلى المستقر!',
    ver_update_beta_dn_title:                   '{0} تحديث متاح ► تجريبي',
    ver_update_beta_dn_msg:                     'إصدار تجريبي جديد متاح لإضافة Gistr.\n\n{0} ► {1}',
    ver_url:                                    'https://raw.githubusercontent.com/Aetherinox/obsidian-gistr/{0}/package.json',

    /*
        Element > Color Picker - العنصر > منتقي الألوان
    */

    pickr_dialog:                               'منتقي الألوان',
    pickr_swatch:                               'عينة الألوان',
    pickr_toggle:                               'اختر اللون',
    pickr_last:                                 'استخدم اللون الأخير',
    pickr_save:                                 'حفظ',
    pickr_cancel:                               'إلغاء',
    pickr_clear:                                'مسح',
    pickr_restore_default_btn_tip:              'استعادة اللون الافتراضي',
    pickr_dev_unknown:                          'Gistr: تنسيق لون غير معروف: {0}',

    /*
        Gist Load Error - خطأ تحميل Gist
    */

    err_gist_token_missing:                     'رمز Github API مفقود. افتح إعدادات إضافة Gistr، وانقر على علامة تبويب Github، وأدخل الرمز الخاص بك. يمكن العثور على التعليمات في صفحة الإعدادات.',
    err_gist_loading_fail_name:                 '⚠️ Gistr: فشل تحميل gist المحدد:',
    err_gist_loading_fail_resp:                 '{0}',
    err_gist_loading_fail_detail:               'تعذر تحميل Javascript صالح من رابط gist: {0}',
    err_gist_loading_fail_url:                  'تعذر العثور على معرف gist -- تأكد من تحديد URL الصحيح. {0}',

    /*
        Gist List - قائمة Gist
    */

    lst_repotype_pub:                           'عام',
    lst_repotype_pri:                           'سري'

}
