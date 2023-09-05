import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'jhotest-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements AfterViewChecked {

  constructor() { }

  @Input() control: FormControl<any> = {} as any;
  @Input() class = '';
  @ViewChild('ipt') input: ElementRef<HTMLInputElement> = undefined as any;

  edit = false;


  ngAfterViewChecked(): void {
    
    if(this.input && this.edit){
      this.input.nativeElement.focus();
      
    }

  }

  handleDbClik() {

    this.edit = !this.edit;
    
    this.input.nativeElement.focus();

  }


}