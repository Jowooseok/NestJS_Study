import { AppController } from './movies/app.controller';
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';


@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
