import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCaseGroup } from '@jhotest/feature/test-case/models';
import { InputSharedModule } from '@jhotest/shared/input/input-shared.module';
import { TableSharedModule } from '@jhotest/shared/table/table-shared.module';

@Component({
  selector: 'jhotest-test-case-check-item',
  templateUrl: './test-case-check-item.component.html',
  styleUrls: ['./test-case-check-item.component.css'],
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    InputSharedModule,
  TableSharedModule,
  CommonModule
  ]
})
export class TestCaseCheckItemComponent {

  @Input() testCase: TestCaseGroup = {} as any;
  @Input() idx = 0;

  open = false
  

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