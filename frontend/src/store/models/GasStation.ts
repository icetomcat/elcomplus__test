import { Model } from '@vuex-orm/core'
import { AttrField, OrmModel, StringField, PrimaryKey, HasManyField } from 'vuex-orm-decorators'
import Refill from './Refill'

@OrmModel('gasStations')
class GasStation extends Model {
  @PrimaryKey()
  @AttrField()
  public id!: string;

  @StringField()
  public name!: string;

  @StringField()
  public address!: string;

  @HasManyField(Refill, 'stationId')
  public refills: Refill[] = []

  public get totalFill () {
    return this.refills.reduce((sum, fill) => sum + fill.quantity, 0)
  }
}

export default GasStation
