import { Component, Input } from '@angular/core';
import { TestCaseCheckItemComponent } from '../test-case-check-item/test-case-check-item.component';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TestCaseGroup } from '@jhotest/feature/test-case/models';

@Component({
  selector: 'jhotest-test-cases-check-item',
  templateUrl: './test-cases-check-item.component.html',
  styleUrls: ['./test-cases-check-item.component.css'],
  standalone : true,
  imports : [TestCaseCheckItemComponent, CommonModule]
})
export class TestCasesCheckItemComponent {

  @Input() testCases : FormArray<TestCaseGroup> = {} as any ;

  constructor( private fb : FormBuilder ){}

  open = false;

  public toggle(){this.open=!this.open};

  public handleAddCase(){ this.addEmptyCase() };

  private addEmptyCase(){

    this.testCases.push(this.fb.group({
      id : this.fb.control(0, { nonNullable : true }),
      name : this.fb.control('New test case', { nonNullable : true }),
      detail : this.fb.control(''),
      parameters :  this.fb.control(''),
      passed : this.fb.control(false, {  nonNullable :true})
    }))

  }

}