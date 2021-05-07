import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { FormInput } from './form-input.entity';
import { FormPage } from './form-page.entity';

@Entity()
export class FormSection {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public name: string;

  @Column({ type: 'integer' })
  public order: string;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt: Date;

  @OneToMany(() => FormInput, (input: FormInput) => input.schema)
  public inputs: FormInput[];

  @ManyToOne(() => FormPage, (page: FormPage) => page.sections)
  public page: FormPage;
}