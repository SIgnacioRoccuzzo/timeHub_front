import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const LoginAdminGuard = () => {
    const router = inject(Router);

    if (localStorage.getItem('admin_token')) {
        router.navigate(['/usuarios']);
        return false;
    } else {
        return true;
    }




}



