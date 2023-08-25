import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(private prismaService: PrismaService) { }

  async create(createRouteDto: CreateRouteDto) {
    const { name, source, destination } = createRouteDto;

    const route = await this.prismaService.route.create({
      data: {
        name,
        source: {
          create: source,
        },
        destination: {
          create: destination,
        },
      },
    });
    return route
  }

  async findAll() {
    const routes = await this.prismaService.route.findMany({
      include: {
        source: true,
        destination: true,
      },
    });
    return routes
  }
}
