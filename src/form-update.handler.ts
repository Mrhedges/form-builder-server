import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { FormUpdateCommand } from './form-update.command';

@CommandHandler(FormUpdateCommand)
export class KillDragonHandler implements ICommandHandler<FormUpdateCommand> {
  constructor(
    private repository: HeroRepository,
    private publisher: EventPublisher,
  ) {}

  async execute(command: FormUpdateCommand) {
    const { formId, dragonId } = command;
    const form = this.publisher.mergeObjectContext(
      await this.repository.findOneById(formId),
    );
    form.killEnemy(dragonId);
    form.commit();
  }
}