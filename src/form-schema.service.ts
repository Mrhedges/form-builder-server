import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  FormSchema,
  Prisma,
} from '@prisma/client';

@Injectable()
export class FormSchemaService {
  constructor(private prisma: PrismaService) {}

  async formSchema(schemaWhereUniqueInput: Prisma.FormSchemaWhereUniqueInput): Promise<FormSchema | null> {
    return this.prisma.formSchema.findUnique({
      where: schemaWhereUniqueInput,
    });
  }

  async formSchemas(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FormSchemaWhereUniqueInput;
    where?: Prisma.FormSchemaWhereInput;
    orderBy?: Prisma.FormSchemaOrderByInput;
  }): Promise<FormSchema[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.formSchema.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFormSchema(data: Prisma.FormSchemaCreateInput): Promise<FormSchema> {
    return this.prisma.formSchema.create({
      data,
    });
  }

  async updateFormSchema(params: {
    where: Prisma.FormSchemaWhereUniqueInput;
    data: Prisma.FormSchemaUpdateInput;
  }): Promise<FormSchema> {
    const { data, where } = params;
    return this.prisma.formSchema.update({
      data,
      where,
    });
  }

  async deleteFormSchema(where: Prisma.FormSchemaWhereUniqueInput): Promise<FormSchema> {
    return this.prisma.formSchema.delete({
      where,
    });
  }
}