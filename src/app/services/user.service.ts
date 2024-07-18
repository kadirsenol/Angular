import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    public users : string[] = [];

    addUser(name : string){
          this.users.push(name);
    }
    

   getUser() : string[] {
       return this.users;
    }
}
