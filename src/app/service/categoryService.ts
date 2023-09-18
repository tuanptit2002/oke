import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Category} from "../data/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {
  private baseUrl = environment.sellEndpoint;

  constructor(private httpClient: HttpClient) {
  }

  findCategories(): Observable<object> {
    // console.log('user ne --------',user);
    return this.httpClient.get(`${this.baseUrl}/api/category/find/all`);
  }
  deleteCategory(id:number):Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/api/category/delete?id=${id}`);
  }
  createCategory(category: Category): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/api/category/create`,category)
  }
  editCategory(category: Category): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/api/category/update`,category)
  }
}
