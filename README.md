## Задачи

### Главная страница

[x] В таблице на главной странице отображается список типов продукции, отсортированный по дате "От нового к старому"
[x] При клике на кнопку "Создать тип продукции" происходит переход на соответствующую страницу
[x] При клике на иконку "Инфо" появляется тултип с описанием продукции
[x] При клике на иконку "Карандаш" открывается страница редактирования типа продукции
[x] При клике на иконку "Корзина" пользователь должен подтвердить желание удалить тип продукции в модальном окне, после чего происходит запрос на удаление
[x] После обновления данных (создание/редактирование/удаление) список на главной должен обновляться

### Страница создания/редактирования

[x] Должна быть проверка на пустоту полей, помеченных звездочкой
[x] При клике на кнопку "Удалить" тип продукции удаляется, предварительно запросив подтверждение пользователя
[x] При клике на кнопку "Отмена" пользователь возвращается на главную страницу
[x] При клике на кнопку "Создать" создается новая запись
[x] При клике на кнопку "Сохранить" данные обновляются
[x] После нажатия на любую из кнопок происходит редирект на главный экран

---

## Реализовано

- Проект реализован на базе фреймворка React с использованием TypeScript
- Загрузка продукции на главную страницу "http://localhost:3000/main"
- Loader при загрузке продукции
- Обработка ошибок сервера при получении данных
- Сортировка продукции
- Туллтип с инфо о продукции
- Удаление продукции
- Обновление списка продукции после изменений (TODO)

---

- Разработана страница добавления продукта с помощью React Hook Form и React Select "http://localhost:3000/create-product"
- Реализованы поля для обязательного заполнения, сообщение о том, что поле нужно заполнить
- Реализовано состояние отправки запроса (блокировка кнопки отправки)

---

- Реализована страница изменения данных о продукте "http://localhost:3000/product/{:id}"
- Для хранения выбранного продукта использован стейт-менеджер Redux Toolkit
- с помощью React Hook Form и React Select выполнены поля, установлены default-значения
