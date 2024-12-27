import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostModel } from "./models/post.model";


@Controller('api/v1/post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get('all')
    async getAllPost(): Promise<PostModel[]>{
        return this.postService.getAll()
    }

    @Get(':id')
    async getSinglePost(@Param('id') id: number): Promise<PostModel | null>{
        return this.postService.getSinglePost(+id)
    }

    @Post('create')
    async createPost(@Param('id') id: number, @Body() postData: PostModel): Promise<PostModel>{
        return this.postService.createPost(postData)
    }

    @Put('edit/:id')
    async editPost(@Param('id') id: number, @Body() postData: PostModel): Promise<any>{
        return this.postService.editPost(+id, postData)
    }

    @Delete('delete/:id')
    async deletePost(@Param('id') id: number): Promise<any>{
        return this.postService.deletePost(+id)
    }
}