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
