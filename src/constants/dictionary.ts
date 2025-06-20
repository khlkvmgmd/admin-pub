export interface Dictionary {
	[key: string]: string
}

export interface LanguageDictionary {
	[language: string]: Dictionary
}

export const dictionary: LanguageDictionary = {
	en: {
		Настройки: 'Settings',
		'Cкрыть на сайте': 'Cкрыть на сайте',
		'Язык страницы': 'Язык страницы',
		Удалить: 'Удалить',
		Контент: 'Контент',
		и: 'и',
		'Добавление Статьи': 'Добавление Статьи',
		'Рейтинг статей': 'Рейтинг статей',
		Статус: 'Статус',
		'Добавить статью': 'Добавить статью',
		'Не активный': 'Не активный',
		Активный: 'Активный',
		Все: 'Все',
		'Вставить JSON': 'Вставить JSON',
		'Создать новый обзор': 'Создать новый обзор',
		Применить: 'Применить',
		Сохранить: 'Сохранить',
		'Код JSON': 'Код JSON',
		'Нажмите сюда или перетащите контент в блок':
			'Нажмите сюда или перетащите контент в блок',
		'Вставить сюда': 'Вставить сюда',
		'Контент блока': 'Контент блока',
		'Добавить абзац': 'Добавить абзац',
		Цитата: 'Цитата',
		Описание: 'Описание',
		Текст: 'Текст',
		Заголовок: 'Заголовок',
		'Добавить строку': 'Добавить строку',
		Текcт: 'Текcт',
		Название: 'Название',
		Преимущества: 'Преимущества',
		Недостатки: 'Недостатки',
		Cтатьи: 'Cтатьи',
		'Добавить секцию': 'Добавить секцию',
		Добавить: 'Добавить',
		Редактировать: 'Редактировать',
		'Изображение слева': 'Изображение слева',
		Теги: 'Tags',
	},
}
