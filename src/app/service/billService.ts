import {Injectable} from "@angular/core";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../data/Bill";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseUrl = environment.sellEndpoint;

  constructor(private httpClient: HttpClient) {
  }

  createBill(bill: Bill): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/api/bill/create`, bill)
  }
}
