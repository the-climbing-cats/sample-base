import { Module } from '@nestjs/common'
import { PostsModule } from '@/modules/posts/posts.module'
import { PrismaModule } from '@/shared/modules/prisma/prisma.module'

@Module({
  imports: [PrismaModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
