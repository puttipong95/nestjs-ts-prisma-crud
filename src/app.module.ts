import { Module } from '@nestjs/common';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
