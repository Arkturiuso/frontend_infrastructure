# frontend_infrastructure

Репозиторий с конфигурациями и настройками части фронтенда.
Реализован базовый функционал настроек конфигураций проекта.

## Инструкции по работе с проектом:
 - После клонирования репозитория, следует перейти на ветку master.
 - Необходимо установить зависимости командой yarn install
 - После установки зависимостей автоматически будут активированы хуки
 - При пуше на ветку master запускается Github Actions, который собирает проект
 - После успешной сборки происходит автоматический деплой на Github Pages
 - После этого можно перейти на сайт по ссылке в на Github pages

#### Ссылка на развернутый сайт Github Pages:  https://arkturiuso.github.io/frontend_infrastructure

## Описание команд для работы локально внутри проекта:
 - yarn lint:all - проверяет и исправляет все файлы в папке src
 - yarn lint *filename** - проверяет файлы, переданные в качестве аргумента
 - yarn format:all - форматирует все файлы с расширениями, указанными в команде
 - yarn format *filename** - форматирует файлы, переданные в качестве аргумента
 - yarn build - собирает проект в папку /dist (продакшн)
 - yarn predeploy - автоматически запускается перед yarn build
 - yarn deploy - деплоит /dist на GitHub Pages
 - yarn prepare - запускается автоматически с yarn install, устанавливает husky хуки
 - yarn dev - запуск сервер локально с автообновлением
 - yarn typecheck - проверяет типы без компиляции

## При выполнении данной работы были дополнительно использованы следующие ресурсы:

 - https://habr.com/ru/companies/ruvds/articles/428173/
 - https://eslint.org/docs/latest/rules
 - https://ru.hexlet.io/blog/posts/kak-ispolzovat-annotatsii-tipov-v-faylah-javascript
 - https://www.dev-notes.ru/articles/git/husky-how-to-automatically-format-lint-and-test-before-you-commit-or-push/
 - https://habr.com/ru/articles/754128/
 - https://stackoverflow.com/questions/11334045/how-to-set-the-default-branch-in-github-com#:~:text=December%202024%20update
 - https://habr.com/ru/articles/878638/

