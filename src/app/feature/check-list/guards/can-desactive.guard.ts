import { CanActivateFn } from '@angular/router';

export const canDesactiveGuard: CanActivateFn = (route, state) => {

  let saved_check = localStorage.getItem('saved-check');

  console.log(saved_check);
  

  if(saved_check == "true" || !saved_check) return true;

  let message = "Existen cambios en las lista deseas guardar?"

  if(confirm(message)) return false
  else return true;

};