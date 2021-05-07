import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FormUpdate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt: Date;

  @Column({ type: 'jsonb' })
  public value: Record<string, any>;

  @ManyToOne(() => User, (user: User) => user.forms)
  public user: User;
}