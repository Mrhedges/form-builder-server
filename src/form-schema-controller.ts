import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FormSchemaService } from './form-schema.service';
import { FormSchema as FormSchemaModel } from '@prisma/client';

@Controller()
export class FormSchemaController {
  constructor(
    private readonly userService: UserService,
    private readonly formSchemaService: FormSchemaService,
  ) {}

  @Get('schemas')
  async getSchemas(): Promise<FormSchemaModel[]> {
    return this.formSchemaService.formSchemas({});
  }

  @Get('schemas/:id')
  async getSchemaById(@Param('id') id: string): Promise<FormSchemaModel> {
    return this.formSchemaService.formSchema({ id });
  }


  @Post('schemas')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<FormSchemaModel> {
    const { title, content, authorEmail } = postData;
    return this.formSchemaService.createFormSchema({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Put('schemas/:id')
  async updateFormSchema(
    @Param('id') id: string,
    @Body() schemaData: { name?: string },
  ): Promise<FormSchemaModel> {
    return this.formSchemaService.updateFormSchema({ where: { id }, data: schemaData });
  }

  @Delete('schemas/:id')
  async deletePost(@Param('id') id: string): Promise<FormSchemaModel> {
    return this.formSchemaService.deleteFormSchema({ id });
  }
}