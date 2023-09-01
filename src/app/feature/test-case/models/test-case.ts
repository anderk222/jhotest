import { FormControl } from "@angular/forms";

export type TestCase = {

    id:         number;
    name:       string;
    detail?:     string;
    parameters?: string;
    passed:     boolean;   
}

export type TestCaseGroup ={

    id:         FormControl<number>;
    name:       FormControl<string>;
    detail:     FormControl<string | null>;
    parameters: FormControl<string|null>;
    passed:     FormControl<boolean>;   
}