import { Params } from "@angular/router"

export type DropdownOpt ={
    text : string,
    value : any
}

export type DropdownNavOpt ={
    text : string,
    path : string,
    params? : Params
}