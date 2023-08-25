import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  open = false;

  public toggle(){ this.open = !this.open }

}
