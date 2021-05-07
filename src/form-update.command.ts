export class FormUpdateCommand {
  constructor(
    public readonly formId: string,
    public readonly changes: { [key: string]: any },
  ) {}
}