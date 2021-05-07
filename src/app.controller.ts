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
import { User as UserModel, FormSchema as FormSchemaModel } from '@prisma/client';

@Controller()
export class AppController {
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

  @Get('feed')
  async getPublishedPosts(): Promise<FormSchemaModel[]> {
    return this.formSchemaService.formSchemas({
      where: { published: true },
    });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<FormSchemaModel[]> {
    return this.formSchemaService.formSchemas({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
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

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  // @Put('publish/:id')
  // async publishPost(@Param('id') id: string): Promise<FormSchemaModel> {
  //   return this.formSchema.updateFormSchema({
  //     where: { id },
  //     data: { published: true },
  //   });
  // }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<FormSchemaModel> {
    return this.formSchemaService.deleteFormSchema({ id });
  }
}