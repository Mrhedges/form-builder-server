import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { FileRecord } from './file-record.entity';
import { FormInputType } from './form-input-type';
import { FormSection } from './form-section.entity';

export enum DataType {
  NUMBER = 'number',
  STRING = 'string',
  NULL = 'null',
  ARRAY = 'array',
}

export enum ArrayItemDataType {
  NUMBER = 'number',
  STRING = 'string',
  NULL = 'null',
}

export enum KeyboardType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PHONE = 'phone'
}

@Entity()
export class FormInput {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public label: string;

  @Column({ type: 'integer' })
  public order: string;

  @Column({ length: 500 })
  public required: boolean;

  @Column({ length: 500 })
  public requiredExpression: string;

  @Column({ length: 500 })
  public visible: boolean;

  @Column({ length: 500 })
  public visibleExpression: string;

  @Column({ length: 500 })
  public valueExpression: string;

  @Column({ type: 'text' })
  public default: string;

  @Column({ length: 500 })
  public defaultExpression: string;

  @Column({ type: 'integer' })
  public maxLength: number;

  @Column({ length: 500 })
  public maxLengthExpression: string;

  @Column({ type: 'integer' })
  public minLength: number;

  @Column({ length: 500 })
  public minLengthExpression: string;

  @Column({ type: 'numeric' })
  public min: number;

  @Column({ length: 500 })
  public minExpression: string;

  @Column({ type: 'numeric' })
  public max: number;

  @Column({ length: 500 })
  public maxExpression: string;

  @Column({ length: 500 })
  public pattern: string;

  @Column({ type: 'enum', enum: KeyboardType })
  public keyboardType: KeyboardType;

  @Column({ type: 'boolean' })
  public readOnly: boolean;

  @Column({ type: 'enum', enum: DataType })
  public dataType: DataType;

  @Column({ type: 'enum', enum: ArrayItemDataType })
  public itemDataType: ArrayItemDataType;

  @Column({ type: 'integer' })
  public sinceMajor: number;

  @Column({ type: 'integer' })
  public sinceMinor: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @JoinColumn()
  public formInputType: FormInputType;

  @ManyToOne(() => FormSection, (section: FormSection) => section.inputs)
  public schema: FormSection[];

  @OneToMany(() => FileRecord, (file: FileRecord) => file.input)
  public files: FileRecord[];
}

