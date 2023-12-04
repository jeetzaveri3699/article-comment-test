import { Model, ModelCtor } from "sequelize-typescript";

export default abstract class BaseRepository {
  protected model: ModelCtor;

  constructor(model: ModelCtor) {
    this.model = model;
  }

  public async all(attributes: object = {}) {
    return this.model.findAll(attributes);
  }

  public async findByPk(id: number) {
    return this.model.findByPk(id);
  }

  public async findOne(attributes: object = {}) {
    return this.model.findOne(attributes);
  }

  public async create(payload: any) {
    return this.model.create(payload);
  }

  public async findAndCountAll(attributes: object = {}) {
    return this.model.findAndCountAll(attributes);
  }
}
