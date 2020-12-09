import { Model } from '@vuex-orm/core'
import { AttrField, OrmModel, PrimaryKey, NumberField, StringField } from 'vuex-orm-decorators'

@OrmModel('refills')
class Refill extends Model {
  @PrimaryKey()
  @AttrField()
  public id!: string;

  @NumberField()
  public quantity!: number;

  @StringField()
  public carId!: string;

  @StringField()
  public stationId!: string;

  @StringField()
  public createdAt!: string;
}

export default Refill
