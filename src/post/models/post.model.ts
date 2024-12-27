import { Prisma } from "@prisma/client";

export class PostModel {
    id: number;
    title: string;
    decreiption: string;
    tags: string;
}