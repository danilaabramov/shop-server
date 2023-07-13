import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  boilerManufacturer: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  partsManufacturer: string;

  @Column
  vendorCode: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  inStock: number;

  @Column({ defaultValue: false })
  bestseller: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  compatibility: string;
}
