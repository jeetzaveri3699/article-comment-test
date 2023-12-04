import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Article } from "./article";

@Table({
  timestamps: true,
  tableName: "comments",
})
export class Comment extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nickName!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @ForeignKey(() => Article)
  articleId!: number;

  @ForeignKey(() => Comment)
  commentId!: number;

  @HasOne(() => Comment)
  commentContent!: Comment;

  @BelongsTo(() => Comment)
  comment!: Comment;

  @BelongsTo(() => Article)
  article!: Article;
}
