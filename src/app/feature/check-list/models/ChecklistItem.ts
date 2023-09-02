import { TestCase } from "@jhotest/feature/test-case/models"

export type ChecklistItem ={

        id: number,
        question : string,
        passed: boolean ,
        comment: string | null,
        testCases : TestCase[]
}

export type SaveChecklistItem ={

        id: number,
        question : string,
        passed: boolean ,
        comment: string | null,
        testCases : Partial<TestCase>[]
}