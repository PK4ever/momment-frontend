import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AddChildRequest, Child} from "../store/childrenState";

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = '/api/children/';
  }

  public getChildrenList(id: number): Observable<Child[]> {
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(id);
    return this.http.post<Child[]>(this.baseUrl+'fetch',body, {"headers": headers});
  }

  addChild(addChildRequest: AddChildRequest): Observable<Child[]>  {
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(addChildRequest);
    return this.http.post<Child[]>(this.baseUrl+'add',body, {"headers": headers});
  }

  // editChild(addChildRequest: AddChildRequest): Observable<Child[]>  {
  //   const headers = { 'content-type': 'application/json'}
  //   const body= JSON.stringify(addChildRequest);
  //   return this.http.post<Child[]>(this.baseUrl+'edit',body, {"headers": headers});
  // }

  deleteChild(id: string): Observable<any>  {
    // const headers = { 'content-type': 'application/json'}
    // const body= JSON.stringify(id);
    // return this.http.post<any>(this.baseUrl+'delete',body, {"headers": headers});
    return this.http.delete<any>(this.baseUrl+'delete/'+id);
  }
}
