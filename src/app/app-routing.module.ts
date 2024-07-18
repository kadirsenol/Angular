import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserReadComponent } from './components/user-read/user-read.component';

const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"a",component:AComponent},
    {path:"b", component:BComponent},
    {path:"c", component:CComponent},
    {path:"usercreate", component:UserCreateComponent},
    {path:"userread", component:UserReadComponent},
    {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
