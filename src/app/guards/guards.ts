import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";



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


export const resolveGuardExample : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const httpClient = inject(HttpClient);
    return httpClient.get("https://jsonplaceholder.typicode.com/photos");
};


export const isAdminCheck : CanMatchFn = (route: Route, segments: UrlSegment[]) => {

    return !!localStorage.getItem("admin");

}

export const isUserCheck : CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return !!localStorage.getItem("user");
}