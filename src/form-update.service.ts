import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FormUpdateCommand } from './form-update.command';

@Injectable()
export class FormUpdateService {
  constructor(private commandBus: CommandBus) {}

  // async killDragon(formId: string) {
  //   return this.commandBus.execute(
  //     new FormUpdateCommand(formId)
  //   );
  // }
}