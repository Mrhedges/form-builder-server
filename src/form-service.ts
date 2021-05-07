import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Form,
  Prisma,
} from '@prisma/client';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async form(WhereUniqueInput: Prisma.FormWhereUniqueInput): Promise<Form | null> {
    return this.prisma.form.findUnique({
      where: WhereUniqueInput,
    });
  }

  async forms(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FormWhereUniqueInput;
    where?: Prisma.FormWhereInput;
    orderBy?: Prisma.FormOrderByInput;
  }): Promise<Form[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.form.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createForm(data: Prisma.FormCreateInput): Promise<Form> {
    return this.prisma.form.create({
      data,
    });
  }

  async updateForm(params: {
    where: Prisma.FormWhereUniqueInput;
    data: Prisma.FormUpdateInput;
  }): Promise<Form> {
    const { data, where } = params;
    return this.prisma.form.update({
      data,
      where,
    });
  }

  async deleteForm(where: Prisma.FormWhereUniqueInput): Promise<Form> {
    return this.prisma.form.delete({
      where,
    });
  }
}