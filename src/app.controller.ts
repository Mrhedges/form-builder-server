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
import { User as UserModel, FormSchema as any } from '@prisma/client';

@Controller()
export class AppController {
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

  @Get('feed')
  async getPublishedPosts(): Promise<any> {
    await 1;
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<any> {
    await 1;
  }

  @Post('schemas')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<any> {
    await 1;
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<any> {
    await 1;
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<any> {
    await 1;
  }
}