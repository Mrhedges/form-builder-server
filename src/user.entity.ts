import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { FileRecord } from './file-record.entity';
import { FormInput } from './form-input.entity';
import { Form } from './form.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public filename: string;

  @Column({ length: 500 })
  public originalFilename: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @OneToMany(() => Form, (form: Form) => form.user)
  public input: Form[];

  @OneToMany(() => FileRecord, (file: FileRecord) => file.user)
  public files: FileRecord[];

  @OneToMany(() => Form, (form: Form) => form.user)
  public forms: Form[];
}

