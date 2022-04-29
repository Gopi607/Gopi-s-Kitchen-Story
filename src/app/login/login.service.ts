import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"gopikalyan@gmail.com",
            password:"gopi1234"
        },
        {
            email:"gopikalyan@gmail.com",
            password:"gopi1234"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}