import {Injectable} from "@angular/core";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Mail} from "../data/Mail";
import {Observable} from "rxjs";
import {User} from "../data/User";

@Injectable({
  providedIn:'root'
})
export class MailService{
  private baseUrl = environment.sellEndpoint;
  constructor(private httpClient : HttpClient){}

  sendMail(mail:Mail):Observable<object>{
    console.log('user ne --------',mail);
    return this.httpClient.post(`${this.baseUrl}/mail/sendMail`,mail);
  }
}
