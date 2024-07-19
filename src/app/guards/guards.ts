import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";



export const canActivateGuardParentExample: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    if (1 === 1) {
        return true;
    }
    return false;
}


export const canActivateGuardChildExample: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    if (1 !== 1) {
        return true;
    }
    return false;

}


export const canDeActivateGuardBExample: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) =>{
    if(1!==1){
        return true;
    }
    return false;
}