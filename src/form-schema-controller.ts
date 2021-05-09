import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { FormSchemaService } from './form-schema.service';

@Controller()
export class FormSchemaController {
  constructor(
    private readonly formSchemaService: FormSchemaService,
  ) {}

  @Get('schemas')
  async getSchemas(): Promise<any> {
    await 1;
  }

  @Get('schemas/:id')
  async getSchemaById(@Param('id') id: string): Promise<any> {
    await 1;
  }


  @Post('schemas')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<any> {
    await 1;
  }

  @Put('schemas/:id')
  async updateFormSchema(
    @Param('id') id: string,
    @Body() schemaData: { name?: string },
  ): Promise<any> {
    await 1;
  }

  @Delete('schemas/:id')
  async deletePost(@Param('id') id: string): Promise<any> {
    await 1;
  }
}