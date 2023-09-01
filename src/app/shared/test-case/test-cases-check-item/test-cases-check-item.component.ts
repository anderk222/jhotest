import { Component, Input } from '@angular/core';
import { TestCaseCheckItemComponent } from '../test-case-check-item/test-case-check-item.component';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup } from '@angular/forms';
import { TestCaseGroup } from '@jhotest/feature/test-case/models';

@Component({
  selector: 'jhotest-test-cases-check-item',
  templateUrl: './test-cases-check-item.component.html',
  styleUrls: ['./test-cases-check-item.component.css'],
  standalone : true,
  imports : [TestCaseCheckItemComponent, CommonModule]
})
export class TestCasesCheckItemComponent {

  @Input() testCases : FormArray<FormGroup<TestCaseGroup>> = {} as any ;

  open = false;

  public toggle(){this.open=!this.open}

}