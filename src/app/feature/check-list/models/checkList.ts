import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { ChecklistItem } from './ChecklistItem';
import { TestCaseGroup } from "@jhotest/feature/test-case/models";

export type CheckListProjection = {

    id: number
    name: string
    status: StatusCheckList
    edited: string | null
}

export type CheckList = {
    id: number
    name: string
    status: StatusCheckList | string
    edited: string | null, 
    created : string,
    items :  ChecklistItem[]
}

export type SaveChecklist = {
    id: number
    name: string
    status: StatusCheckList | string
    edited: string | null, 
    created : string,
    items :  Partial<SaveChecklist>[]

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
    id: FormControl<number>,
    question : FormControl<string>,
    passed : FormControl<boolean>,
    comment : FormControl<string | null>,
    testCases : FormArray<TestCaseGroup>
}>;