import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { ChildComponent } from './components/child/child.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { canActivateGuardChildExample, canActivateGuardParentExample, canDeActivateGuardBExample } from './guards/guards';

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
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
