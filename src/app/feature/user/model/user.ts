import { UserDetail } from "@jhotest/feature/profile/model/userdetail";

export type User = {

    id: number;
    alias: string;
    correo: string;
    detail: UserDetail;
}