export type Pagination<T> = {

    page:       number;
    limit:      number;
    data:       T[];
    totalPages: number;
    totalItems: number;

}

export const initializePagination = <T>(): Pagination<T>=>{
    return {
        data : [],
        limit : 10,
        page : 1,
        totalItems : 0,
        totalPages : 0
    }

}

export type Pageable = {

    page : number | string;
    limit : number | string

}

export type optsearch = Pageable & {

    value : string

};