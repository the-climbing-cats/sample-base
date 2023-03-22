import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

import { PrismaService } from '@/shared/modules/prisma/prisma.service'

import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  private async getUniqueOrNotFound(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    })
    if (!post) {
      throw new HttpException('Post not found.', HttpStatus.NOT_FOUND)
    }
    return post
  }

  async create(createPostDto: CreatePostDto) {
    return this.prismaService.post.create({
      data: createPostDto,
    })
  }

  async findAll() {
    return await this.prismaService.post.findMany()
  }

  async findOne(id: string) {
    return await this.getUniqueOrNotFound(id)
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.getUniqueOrNotFound(id)
    return await this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    })
  }

  async remove(id: string) {
    await this.getUniqueOrNotFound(id)
    return this.prismaService.post.delete({ where: { id } })
  }
}
