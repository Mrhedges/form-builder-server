import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { FormInput } from './form-input.entity';
import { User } from './user.entity';

@Entity()
export class FileRecord {
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

  @JoinColumn()
  public user: User;

  @ManyToOne(() => FormInput, (input: FormInput) => input.files)
  public input: FormInput[];
}

