import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { FormInput } from './form-input.entity';
import { FormSchema } from './form-schema.entity';
import { FormSection } from './form-section.entity';

@Entity()
export class FormPage {
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

  @OneToMany(() => FormSection, (section: FormSection) => section.page)
  public sections: FormSection[];

  @ManyToOne(() => FormSchema, (schema: FormSchema) => schema.pages)
  public schema: FormSchema;
}