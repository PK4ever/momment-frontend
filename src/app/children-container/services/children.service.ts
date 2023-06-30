import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Child} from "../store/childrenState";


@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = '/api/children/';
  }

  public getChildrenList(): Observable<Child[]> {
    return this.http.get<Child[]>(this.baseUrl+'fetch')
  }
}
