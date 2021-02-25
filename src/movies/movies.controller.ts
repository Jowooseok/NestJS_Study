import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update.-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}


    @Get()
    getAll(@Req() req, @Res() res):Movie[] { //다음과 같이 express에 접근할 수 있다 하지만 추천하지 않는다. Fastify처럼 Express와는 다른 방법을 쓰고 싶을 수 있으니까
        return this.moviesService.getAll();
    }


    @Get(":id")
    getOne(@Param("id") movieId:number ) : Movie  {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData : CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param("id") movieId: number, @Body() updateData : UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }

}
