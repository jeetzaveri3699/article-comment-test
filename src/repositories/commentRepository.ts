import BaseRepository from "./baseRepository";

import { Comment } from '../models/comment';

export default class CommentRepository extends BaseRepository {
  constructor() {
    super(Comment);
  }
}
