// ==UserScript==
// @name         Yandex Lyceum - Addon
// @version      1.3
// @description  Аддон для Яндекс LMS, который добавляет доп. функционал и кастомные тексты
// @author       Ilsur Gilmutdinov - ilsur_dev
// @match        *://lyceum.yandex.ru/*
// @match        *://lms.yandex.ru/*
// @downloadUrl  https://github.com/ilsur-dev/yandex-lms-updater/raw/master/lms_script.user.js
// @updateUrl    https://github.com/ilsur-dev/yandex-lms-updater/raw/master/lms_script.meta.js
// @run-at       document-start
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Начало конфигурации
        var page_title_modify = false;

        var header_course_nav = 'Курс просветления';
        var header_help_button = 'Обкашлять вопросики';
        var header_bug_button = 'Баг/Злом';
        var header_notify_title = 'Повестки';
        var header_notify_placeholder = 'Сударь, у Вас пока нет Повесток!';

        var menu_email = 'Срёт говном';
        var menu_profile = 'Досье';
        var menu_edit = 'Управление ГУЛАГОМ';
        var menu_exit = 'Эмигрировать';

        var course_name = 'Основы программирования на удаве';
        var course_info_button = 'Посрать говном';

        var teacher_name = 'Мастер Йода';
        var teacher_info = 'Великий магистр ордена джедаев';

        var task_deadline_passed = ' — Дедлайн просран';
        var task_test_failed = 'БАН!!!11!!1';
        var task_id = 'Талон #';
        var task_comments_failed = 'Говно, переделывай'
        var task_comments_success1 = 'Найс';
        var task_comments_success2 = 'Вердикт: Чикибамбони';
        var task_comments_title = 'История расстрелов';
        var task_comments_send = 'Отправить телеграмму';
        var task_comments_code_send = 'Отправлено на расстрел'
        var task_comments_button_send = 'Отправить код в ГУЛАГ';
        var task_comments_button_resend = 'Опять работа';

        var footer_chat = 'Бла-Бла';
        var footer_help_button = 'Обкашлять вопросики';
        var footer_copyright = '© 1970 — 2019 «Тындекс»';

        var error_401_title = 'Вы исключены';
        var error_401_info = 'Не расстраивайтесь! С такими успехами вы легко сможете устроиться в Mail Ru Group';
        var error_403_title = 'Съемка видео запрещена';
        var error_403_info = 'Камеру вырубай, мудила!';
        var error_help_button = 'Сисадмин';
        var error_help_info = 'Если у вас возникли проблемы с сайтом, призовите сисадмина';
    // Конец конфигурации

    var $ = window.jQuery;
    var i = 0;

    function updatePage() {
        if (page_title_modify) {
            document.title = 'Python лучше Java на '+i+'%';
        }

        $('a.course-nav__link:first-child').text(header_course_nav);
        $('a.header__link:first-child').text(header_help_button);
        $('a.header__link:last-child').text(header_bug_button);
        $('h1.notification-center__title.notification-center__title_theme_light').text(header_notify_title);
        $('p.notification-center__message').text(header_notify_placeholder);

        $('span.user-account__subname').text(menu_email);
        $('a.control.menu__item.user2__menu-item.user2__menu-item_type_link.menu__item.menu__item_type_link:contains("Профиль")').text(menu_profile);
        $('a.control.menu__item.user2__menu-item.user2__menu-item_type_link.user2__menu-item_action_passport.menu__item.menu__item_type_link:contains("Управление аккаунтом")').text(menu_edit);
        $('a.control.menu__item.user2__menu-item.user2__menu-item_type_link.user2__menu-item_action_exit.menu__item.menu__item_type_link:contains("Выйти")').text(menu_exit);

        $('span.main-nav__course-name, main.layout__main > h1.heading.heading_level_1, h4.course-card__title:contains("Python"), h1.heading.heading_level_1:contains("Python"), a.student-profile-course-card__course-link').text(course_name);
        $('p > strong > a:contains("Принять участие")').text(course_info_button);

        $('span.user__name:contains("Павлов Сергей")').text(teacher_name);
        $('a.user-info__email').text(teacher_info);

        $('span.lesson-card__deadline-message:contains("прошёл")').text(task_deadline_passed);

        $('h4.heading.heading_level_4.solution-status-viewer__status-text:contains("Доработать")').text(task_test_failed);

        $('div.comments__comment-text:contains("Статус изменен: Доработать")').text(task_comments_failed);
        $('div.comments__comment-text:contains("Статус изменен: Зачтено")').text(task_comments_success1);
        $('button.comments__show-log:contains("Вердикт: ok")').text(task_comments_success2);
        $('h2.y1b87d--comments__title').text(task_comments_title);
        $('.comments__controls > span > input').attr('placeholder', task_comments_send);
        $('div.comments__comment-text:contains("Отправлено на проверку")').text(task_comments_code_send);
        $('span.Button2-Text:contains("Сдать задачу")').text(task_comments_button_send);
        $('span.Button2-Text:contains("Пересдать задачу")').text(task_comments_button_resend);

        $('.ya-chat-button__text-container').text(footer_chat);
        $('a.footer__help-link').text(footer_help_button + " (Матвей Волков - HTML программист)");
        $('.footer__copyright').text(footer_copyright);

        $('h1.heading.heading_level_1.error-page__title:contains("не зарегистрированы")').text(error_401_title);
        $('p.error-page__description:contains("ввести логин и пароль")').text(error_401_info);
        $('h1.heading.heading_level_1.error-page__title:contains("нет прав доступа")').text(error_403_title);
        $('p.error-page__description:contains("Если это не так")').text(error_403_info);

        $('span.Button2-Text:contains("Обратная связь")').text(error_help_button);
        $('p.error-page__feedback-text:contains("возникли проблемы")').text(error_help_info);

        try {
            $('a.comments__file-link.comments__file-link_active').html($('a.comments__file-link.comments__file-link_active').html().replace('ID&nbsp;', task_id));
            $('h4.heading.heading_level_4.submission-header-viewer__id').html($('h4.heading.heading_level_4.submission-header-viewer__id').html().replace('ID&nbsp;', task_id));
        } catch(e) {};

        i++;
    };

    console.log("[LMS Addon]: Интервал обновления страницы: каждую миллисекунду");

    var fastUpdater = setInterval(updatePage, 1);
    var slowUpdater;

    var lms = window.lms = {};
    lms.help = function() {
        console.log("========== Справка по LMS Addon ==========");
        console.log("Разработчик: https://vk.com/ilsur_dev");
        console.log("\nКоманды:");
        console.log("lms.help() - Показать справку по скрипту");
        console.log("lms.disableOptimization() - Отключить оптимизированное обновление страницы. Это увеличит скорость обновления текста на сайте")
        console.log("lms.titleEdit() - Меняет заголовок вкладки на текст-пасхалку)")
        console.log("lms.createNotify() - Инициирует новое уведомление [Функция в разработке]")
        console.log("==========================================");
    };
    lms.disableOptimization = function() {
        clearInterval(slowUpdater);
        clearInterval(fastUpdater);
        var fastUpdater = setInterval(updatePage, 1);
        console.log("[LMS Addon]: Готово. Теперь элементы обновляются каждую миллисекунду")
    };
    lms.titleEdit = function() {
        page_title_modify = !page_title_modify;
        console.log("[LMS Addon]: Пасхалка включена. Введите lms.titleEdit() для отключения")
    };
    lms.createNotify = function() {
        $('div.notifications').append('<div class="notifications"><div class="notifications__item notifications__item_type_error notifications__item-enter-done"><div class="notifications__icon-wrapper"><span data-lego="react" class="icon icon_type_cross-red icon_size_m"></span></div>Проблемы с соединением<button type="button" class="Button2 Button2_size_m Button2_theme_clear Button2_view_lyceum notifications__remove-button" autocomplete="off"><span data-lego="react" class="icon icon_type_close-thin icon_size_m Button2-Icon"></span></button></div></div>');
    };

    var eggLms = window.eggLms = {};
    eggLms.jaba = function () {
        var javaEgg = setInterval(() => {console.log("[LMS Easter Egg]: Python лучше чем Java на "+i+"%")}, 50);
    };

    var timerOptimize = setInterval(function() {
        if (i > 300) {
            console.log("[LMS Addon]: Интервал обновления страницы переключён в оптимальный режим");
            clearInterval(fastUpdater);
            var slowUpdater = setInterval(updatePage, 200);
            clearInterval(timerOptimize);
        };
    }, 1000);
})();
