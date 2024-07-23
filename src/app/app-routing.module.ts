import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { AdminComponent } from './components/admin/admin.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { ChildComponent } from './components/child/child.component';
import { CustomComponent } from './components/custom/custom.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PhotosWithResolveGuardComponent } from './components/photos-with-resolve-guard/photos-with-resolve-guard.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserComponent } from './components/user/user.component';
import { canActivateGuardChildExample, canActivateGuardParentExample, canDeActivateGuardBExample, resolveGuardExample, isAdminCheck, isUserCheck } from './guards/guards';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'a/:id', component: AComponent },
  { path: "a", component: AComponent },
  { path: "b", component: BComponent, canDeactivate:[canDeActivateGuardBExample] },
  { path: "c", component: CComponent },
  { path: "usercreate", component: UserCreateComponent },
  { path: "userread", component: UserReadComponent },
  { path: "child", component: ChildComponent },
  { path: "parent", component: ParentComponent, canActivate:[canActivateGuardParentExample], canActivateChild:[canActivateGuardChildExample], children: [{ path: "child", component: ChildComponent }] },
  { path: "Photos", component : PhotosWithResolveGuardComponent, resolve:{photos : resolveGuardExample}},
  { path: "dashboard", component: AdminComponent, canMatch:[isAdminCheck]},
  { path: "dashboard", component: UserComponent, canMatch:[isUserCheck]},
  { path: "custom", component: CustomComponent},
  { path: "order", loadChildren : ()=> import("../app/modules/order/order.module").then(m=>m.OrderModule) },
  { path: "customer", loadChildren : ()=> import("../app/modules/customer/customer.module").then(m=>m.CustomerModule)},
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
