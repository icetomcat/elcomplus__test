import locales from '../locales'
import dialogs from './dialogs'

export default {
  ...dialogs,
  'dialogs.confirm.delete.title': 'Подтверждение удаления элемента',
  'dialogs.confirm.delete.message': 'Вы уверены что хотите удалить элемент? Изменения необратимы!',

  'dialogs.edit-refill.title': 'Дозаправка',
  'dialogs.edit-refill.button.cancel': 'Отменить',
  'dialogs.edit-refill.button.save': 'Сохранить',

  'dialogs.edit-car.title': 'Автомобиль',
  'dialogs.edit-car.button.cancel': 'Отменить',
  'dialogs.edit-car.button.save': 'Сохранить',

  'dialogs.edit-station.title': 'Заправочная станция',
  'dialogs.edit-station.button.cancel': 'Отменить',
  'dialogs.edit-station.button.save': 'Сохранить',

  'notify.model.refill.deleted.message': 'Дозаправка удалена',
  'notify.model.refill.deleted.message.error': 'При удалении дозаправки произошла ошибка',

  'notify.model.car.deleted.message': 'Автомобиль удален',
  'notify.model.car.deleted.message.error': 'При удалении автомобиля произошла ошибка',

  'notify.model.station.deleted.message': 'Заправочная станция удалена',
  'notify.model.station.deleted.message.error': 'При удалении станции произошла ошибка',

  'notify.model.refill.saved.message': 'Дозаправка схранена',
  'notify.model.refill.saved.message.error': 'При сохранении дозаправки произошла ошибка',

  'notify.model.car.saved.message': 'Автомобиль схранен',
  'notify.model.car.saved.message.error': 'При сохранении автомобиля произошла ошибка',

  'notify.model.station.saved.message': 'Заправочная станция схранена',
  'notify.model.station.saved.message.error': 'При сохранении станции произошла ошибка',

  'page.overview': 'Сводка',
  'page.overview.title': 'Раздел',
  'page.overview.total': 'Количество',
  'page.overview.fill': 'Всего заправлено топлива',
  'page.overview.cars': 'Автомобили',
  'page.overview.gas-stations': 'Заправочные станции',

  'page.car.refill': 'Сводка по заправкам',
  'page.station.refill': 'Сводка по заправкам',

  'page.cars': 'Автомобили',
  'page.gas-stations': 'Заправочные станции',

  'page.edit-refill.car-select.label': 'Автомобиль',
  'page.edit-refill.station-select.label': 'Заправочная станция',
  'page.edit-refill.quantity.label': 'Объем топлива',

  'page.edit-car.brand-select.label': 'Марка автомобиля',
  'page.edit-car.number.label': 'Номер',

  'page.edit-station.name.label': 'Название станции',
  'page.edit-station.address.label': 'Адрес',

  'model.car.id': 'ID',
  'model.car.brand': 'Марка',
  'model.car.number': 'Номер',
  'model.car.totalFill': 'Всего заправлено топлива',
  'model.car.countFills': 'Количество заправок',

  'model.gas-station.id': 'ID',
  'model.gas-station.name': 'Название',
  'model.gas-station.address': 'Адрес',
  'model.gas-station.totalFill': 'Всего заправлено топлива',

  'model.refill.id': 'ID',
  'model.refill.date': 'Дата заправки',
  'model.refill.quantity': 'Объем',

  'page.settings': 'Настройки',

  'settings.language': 'Язык',
  'settings.view': 'Вид',
  'settings.dark-mode': 'Ночной режим',

  ...locales
}
