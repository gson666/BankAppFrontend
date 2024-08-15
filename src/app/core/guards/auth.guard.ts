import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guard invoked');
  console.log('Route data:', route.data);

  if (authService.isLoggedIn()) {
    const expectedRoles = route.data['roles'] as Array<string> | undefined;
    console.log('Expected roles:', expectedRoles);
    const userRole = authService.getRole();
    console.log('User role:', userRole);

    if (!expectedRoles) {
      return true;
    }

    if (expectedRoles.includes(userRole!)) {
      return true;
    } else {
      console.log('User role does not match expected roles');
      router.navigate(['/login']);
      return false;
    }
  } else {
    console.log('User is not logged in');
    router.navigate(['/login']);
    return false;
  }
};
// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   console.log('Guard invoked');
//   console.log('Route data:', route.data);

//   if (authService.isLoggedIn()) {
//     const expectedRoles = route.data['roles'] as Array<string>;
//     const userRole = authService.getRole();
//     console.log('Expected roles:', expectedRoles);
//     console.log('User role:', userRole);

//     if (expectedRoles.includes(userRole!)) {
//       return true;
//     } else {
//       console.log('User role does not match expected roles');
//       router.navigate(['/login']);
//       return false;
//     }
//   } else {
//     console.log('User is not logged in');
//     router.navigate(['/login']);
//     return false;
//   }
// };
