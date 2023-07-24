import { inject } from "@angular/core";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode';

export const loginGuard = () => {
    const router = inject(Router);

    if (localStorage.getItem('admin_token')) {
        return true;
    } else {

        router.navigate(['/login']);
        return false;
    }

}

export const loginGuardUser = () => {
    const router = inject(Router);

    if (localStorage.getItem('user_token')) {
        return true;
    } else {

        router.navigate(['usuarios', '/usuario._id'])

        return false;
    }

}












