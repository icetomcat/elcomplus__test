import { Model } from '@vuex-orm/core'
import { AttrField, OrmModel, StringField, PrimaryKey, HasManyField } from 'vuex-orm-decorators'
import Refill from './Refill'

@OrmModel('cars')
class Car extends Model {
  @PrimaryKey()
  @AttrField()
  public id!: string;

  @StringField()
  public brand!: string;

  @StringField()
  public number!: string;

  @HasManyField(Refill, 'carId')
  public refills: Refill[] = []

  public get totalFill () {
    return this.refills.reduce((sum, fill) => sum + fill.quantity, 0)
  }

  public get countFills () {
    return this.refills.length
  }
}

export default Car
