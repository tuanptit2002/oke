import {Injectable} from "@angular/core";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../data/User";
import {Data} from "../data/Data";


@Injectable({
  providedIn:'root'
})
export class ReportService{
  private baseUrl = environment.sellEndpoint;
  constructor(private httpClient : HttpClient){}

  report(it: undefined = undefined):Observable<any>{

    return this.httpClient.post(`${this.baseUrl}/api/bill/report`,it).pipe();
  }
  refresh(it: undefined = undefined):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/api/bill/refresh/data`,it).pipe();
  }

}
