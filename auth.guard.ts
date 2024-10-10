// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
 
//   const router = inject(Router);
//   debugger;
//   const localData=  localStorage.getItem("angularLogin");
//   if(localData != null){
//     return true;
//   }
//   else{
//     router.navigateByUrl("login");
//     return false;
    
//   }
// };
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localData = localStorage.getItem("angularLogin");

  if (localData != null) {
    return true; // Allow access if the user is logged in
  } else {
    router.navigateByUrl("login"); // Redirect to the login page
    return false; // Block access if not logged in
  }
};
