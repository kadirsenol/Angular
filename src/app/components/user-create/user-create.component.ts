import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  // templateUrl: './user-create.component.html',
  template: `
     <form [formGroup]="frmuser" (ngSubmit)="setUser(frmuser.value)">
        <input type="text" formControlName="username" placeholder="Kullanıcı Adı"><br>
        <button>Send</button>
    </form>  
  `,
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  frmuser : FormGroup;

  constructor(private formBuilder : FormBuilder, private userService: UserService){

    this.frmuser = this.formBuilder.group({
      username : [""]
    });
  }


  setUser(data){
    this.userService.addUser(data.username);
    this.frmuser.reset();
    }
}
