import { AbstractControl, FormControl, FormGroup } from "@angular/forms"
import { ChecklistItem } from './ChecklistItem';

export type CheckListProjection = {

    id: number
    name: string
    status: StatusCheckList
    edited: string | null
}

export type CheckList = {
    id: number
    name: string
    status: StatusCheckList
    edited: string | null, 
    created : string,
    items : ChecklistItem[]
}

export type SortScheckListSave = {
    name: string,
    proyect: Partial<{
        id: number
    }>
}

export enum StatusCheckList {

    process = 'process',
    terminated = 'terminated',
    error = 'error'
}



export type ItemGroup =  FormGroup<{
    id: FormControl<number | null>,
    question : FormControl<string | null>,
    answer : FormControl<boolean | null>,
    comment : FormControl<string | null>
}>;