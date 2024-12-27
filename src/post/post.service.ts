import { Injectable } from "@nestjs/common";
import { PrismaClientService } from "src/prisma-client/prisma-client.service";
import { PostModel } from "./models/post.model";
import { resolve } from "path";
import { rejects } from "assert";


@Injectable()
export class PostService {
    constructor(private prismaService: PrismaClientService){}

    async getAll(): Promise<PostModel[]>{
        return this.prismaService.post.findMany()
    }

    async getSinglePost(postId: number): Promise<PostModel>{
        return this.prismaService.post.findUnique({
            where: {id: +postId}
        })
    }

    async createPost(postData: PostModel): Promise<PostModel>{
        return this.prismaService.post.create({data: postData})
    }

    async editPost(postId: number, postData: PostModel): Promise<any>{
        // fist find if the post is exist in the database
        const found_post = await this.getSinglePost(+postId)
        if(!found_post){
            return new Promise((resolve, rejects) => {
                resolve({message: 'Not Found'})
            })
        }

        // if the record exits against that id then update the record
        return this.prismaService.post.update({
            where: {id: +postId},
            data: postData
        })
    }

    async deletePost(postId: number): Promise<any> {
        // fist find if the post is exist in the database
        const found_post = await this.getSinglePost(+postId)
        if(!found_post){
            return new Promise((resolve, rejects) => {
                resolve({message: 'Not Found'})
            })
        }

        // now if the record is found then delete that record
        return this.prismaService.post.delete({where: {id: +postId}})
    }
}