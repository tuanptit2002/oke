import {Injectable} from "@angular/core";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../data/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = environment.sellEndpoint;

  constructor(private httpClient: HttpClient) {
  }

  findItem(): Observable<object> {
    // console.log('user ne --------',user);
    return this.httpClient.get(`${this.baseUrl}/api/item/find/all`);
  }

  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/api/item/delete?id=${id}`);
  }

  createItem(item: Item): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/api/item/create`, item)
  }

  editItem(item: Item): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/api/item/update`, item)
  }
  getItem(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/api/item/get/${id}`)
  }
}
