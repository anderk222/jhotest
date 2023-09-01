import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCaseGroup } from '@jhotest/feature/test-case/models';

@Component({
  selector: 'jhotest-test-case-check-item',
  templateUrl: './test-case-check-item.component.html',
  styleUrls: ['./test-case-check-item.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule]
})
export class TestCaseCheckItemComponent {

  @Input() testCase: FormGroup<TestCaseGroup> = {} as any;


  get id(): any { return this.testCase.get('id') };
  get name(): any { return this.testCase.get('name') };
  get detail(): any { return this.testCase.get('detail') };
  get parameters(): any { return this.testCase.get('parameters') };
  get passed(): any { return this.testCase.get('passed') };


  set id(value: any) { this.testCase.patchValue({ id: value }) };
  set name(value: any) { this.testCase.patchValue({ name: value }) };
  set detail(value: any) { this.testCase.patchValue({ detail: value }) };
  set parameters(value: any) { this.testCase.patchValue({ parameters: value }) };
  set passed(value: any) { this.testCase.patchValue({ passed: value }) };

}