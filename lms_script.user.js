// ==UserScript==
// @name         Yandex Luceym - Text Updater
// @version      1.0
// @description  Скрипт, который моментально меняет содержимое Яндекс LMS на кастомный текст
// @author       Ilsur Gilmutdinov - ilsur_dev
// @match        *://lyceum.yandex.ru/*
// @match        *://lms.yandex.ru/*
// @downloadUrl  https://github.com/ilsur-dev/yandex-lms-updater/raw/master/lms_script.user.js
// @updateUrl    https://github.com/ilsur-dev/yandex-lms-updater/raw/master/lms_script.meta.js
// @run-at       document-start
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    // Начало конфигурации
        var header_help_button = 'Обкашлять вопросы';
        var header_bug_button = 'Баг/Злом';

        var course_name = 'Основы программирования на удаве'

        var teacher_name = 'Мастер Йода';
        var teacher_info = 'Великий магистр ордена джедаев';

        var footer_chat = 'Бла-Бла';
        var footer_copyright = '© 1970 — 2019 «Тындекс»'
    // Конец конфигурации

    var $ = window.jQuery;

    var autoUpdater = setInterval(function() {
        $('a.header__link:first-child').text(header_help_button);
        $('a.header__link:last-child').text(header_bug_button);

        $('span.main-nav__course-name, main.layout__main > h1.heading.heading_level_1, h4.course-card__title, main.course-details__top-main > h1.heading.heading_level_1').text(course_name);

        $('div.teacher-info__content.user-info.user.user_size_l > div.user__info > a.user__name-link > span.user__name').text(teacher_name);
        $('a.user-info__email').text(teacher_info);

        $('.ya-chat-button__text-container').text(footer_chat);
        $('.footer__copyright').text(footer_copyright);
    }, 1)
})();
