// ==UserScript==
// @name         Yandex Lyceum - Text Updater
// @version      1.1
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
    'use strict';

    // Начало конфигурации
        var page_title_modify = false;

        var header_course_nav = 'Курс просветления';
        var header_help_button = 'Обкашлять вопросики';
        var header_bug_button = 'Баг/Злом';
        var header_notify_title = 'Повестки';
        var header_notify_placeholder = 'Сударь, у Вас пока нет Повесток!';

        var course_name = 'Основы программирования на удаве';

        var teacher_name = 'Мастер Йода';
        var teacher_info = 'Великий магистр ордена джедаев';

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
    // Конец конфигурации

    var $ = window.jQuery;
    var i = 0

    var autoUpdater = setInterval(function() {
        if (page_title_modify) {
            i++;
            document.title = 'Python лучше Java на '+i+'%';
        }

        $('a.course-nav__link:first-child').text(header_course_nav);
        $('a.header__link:first-child').text(header_help_button);
        $('a.header__link:last-child').text(header_bug_button);
        $('h1.notification-center__title.notification-center__title_theme_light').text(header_notify_title);
        $('p.notification-center__message').text(header_notify_placeholder);

        $('span.main-nav__course-name, main.layout__main > h1.heading.heading_level_1, h4.course-card__title, h1.heading.heading_level_1:contains("Python"), a.student-profile-course-card__course-link').text(course_name);

        $('div.teacher-info__content.user-info.user.user_size_l > div.user__info > a.user__name-link > span.user__name, div.student-profile-course-card__teacher.user.user_size_m > div.user__info > a.user__name-link > span.user__name').text(teacher_name);
        $('a.user-info__email').text(teacher_info);

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
        $('a.footer__help-link').text(footer_help_button);
        $('.footer__copyright').text(footer_copyright);

        try {
            $('a.comments__file-link.comments__file-link_active').html($('a.comments__file-link.comments__file-link_active').html().replace('ID&nbsp;', task_id));
            $('h4.heading.heading_level_4.submission-header-viewer__id').html($('h4.heading.heading_level_4.submission-header-viewer__id').html().replace('ID&nbsp;', task_id));
        } catch(e) {};
    }, 1)
})();
