import { FormControl, FormGroup } from "@angular/forms";

export type TestCase = {

    id:         number;
    name:       string;
    detail:     string | null;
    parameters: string | null;
    passed:     boolean;   
}

export type TestCaseGroup = FormGroup<{

    id:         FormControl<number>;
    name:       FormControl<string>;
    detail:     FormControl<string | null>;
    parameters: FormControl<string|null>;
    passed:     FormControl<boolean>;   
}>

