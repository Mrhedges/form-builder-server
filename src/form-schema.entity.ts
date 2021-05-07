import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FormPage } from './form-page.entity';

@Entity()
export class FormSchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public name: string;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt: Date;

  @OneToMany(() => FormPage, (page: FormPage) => page.schema)
  public pages: FormPage[];
}