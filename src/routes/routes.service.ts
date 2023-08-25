import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(private prismaService: PrismaService) { }

  async create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: createRouteDto.source,
        destination: createRouteDto.destination,
      },
    })
  }

  async findAll() {
    const routes = await this.prismaService.route.findMany();
    return routes
  }
}
