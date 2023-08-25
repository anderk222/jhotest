export type Pagination<T> = {

    page:       number;
    limit:      number;
    data:       T[];
    totalPages: number;
    totalItems: number;

}

export type Pageable = {

    page : number | string;
    limit : number | string

}

export type optsearch = Pageable & {

    value : string

};