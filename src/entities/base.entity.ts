import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Базовый класс для всех сущностей.
 */
export class BaseEntity {
  /**
   * Идентификатор сущности.
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Дата создания сущности.
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * Дата последнего обновления сущности.
   */
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Дата удаления сущности.
   */
  @DeleteDateColumn()
  deletedAt: Date;
}
