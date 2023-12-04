import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Comment } from "./comment";

@Table({
  timestamps: true,
  tableName: "articles",
})
export class Article extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nickName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @HasMany(() => Comment)
  comments!: Comment[];
}
