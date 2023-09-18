import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../data/User";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn:'root'
})
export class RegisterService{
  private baseUrl = environment.sellEndpoint;
  constructor(private httpClient : HttpClient){}

  singup(user:User):Observable<object>{
    console.log('user ne --------',user);
    return this.httpClient.post(`${this.baseUrl}/api/v1/auth/singup`,user);
  }
}
