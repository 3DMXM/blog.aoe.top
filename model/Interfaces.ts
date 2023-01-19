import { RouteLocationRaw } from "vue-router";

export interface IMenu {
    label: string;
    key: string;
    path: RouteLocationRaw;
    children?: IMenu[];
    open?: boolean;
    icon?: string
}

export interface IUser {
    name: string;
    admin: boolean;
    avatar: string;
}

export interface IArticleList {
    id: number,
    title: string,
    sort: string,
    commentNum: number,
    clickNum: number,
    likeNum: number,
    author: string
    describe?: string,
    cover?: string,
    time: string,
}

export interface IArticleData {
    id: number,
    title: string,
    sort: string,
    time: string,
    content: string,
    author: string,
    describe?: string,
    tags?: string[],
    commentNum: number,
    clickNum: number,
    likeNum: number,
}